type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

const GA_ID = import.meta.env.VITE_PUBLIC_GA4_ID?.trim();
const CLARITY_ID = import.meta.env.VITE_PUBLIC_CLARITY_ID?.trim();
const DEBUG = import.meta.env.DEV || import.meta.env.VITE_ANALYTICS_DEBUG === 'true';

const debug = (message: string, payload?: unknown) => {
  if (DEBUG) console.info(`[ArtSkin analytics] ${message}`, payload ?? '');
};

const loadScript = (src: string, id: string) => {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

const initGA4 = () => {
  if (!GA_ID) {
    debug('GA4 disabled: VITE_PUBLIC_GA4_ID is not set');
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer.push(args);
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    anonymize_ip: true,
    debug_mode: DEBUG,
    send_page_view: true,
  });
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`, 'artskin-ga4');
  debug('GA4 initialized', GA_ID);
};

const initClarity = () => {
  if (!CLARITY_ID) {
    debug('Clarity disabled: VITE_PUBLIC_CLARITY_ID is not set');
    return;
  }

  const clarity = ((...args: unknown[]) => {
    (clarity.q = clarity.q || []).push(args);
  }) as Window['clarity'];
  window.clarity = window.clarity || clarity;
  loadScript(`https://www.clarity.ms/tag/${encodeURIComponent(CLARITY_ID)}`, 'artskin-clarity');
  debug('Clarity initialized', CLARITY_ID);
};

export const trackEvent = (name: string, params: AnalyticsParams = {}) => {
  const payload = { ...params, page_path: window.location.pathname };
  window.gtag?.('event', name, payload);
  window.clarity?.('event', name);
  debug(`event: ${name}`, payload);
};

const cleanLabel = (element: HTMLAnchorElement) =>
  (element.dataset.analyticsLabel || element.getAttribute('aria-label') || element.textContent || 'unlabeled')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80);

const classifyLink = (link: HTMLAnchorElement) => {
  const href = link.getAttribute('href') || '';
  const label = cleanLabel(link);
  const location = link.closest('nav') ? 'navbar' : link.closest('footer') ? 'footer' : 'content';

  if (href.startsWith('mailto:')) {
    const subject = new URL(href).searchParams.get('subject') || 'none';
    return { name: 'contact_click', params: { method: 'email', label, location, subject } };
  }

  if (href.includes('linkedin.com')) {
    return { name: 'linkedin_click', params: { label, location } };
  }

  if (href.startsWith('#')) {
    return { name: 'navigation_click', params: { label, location, destination: href.slice(1) || 'top' } };
  }

  if (link.target === '_blank' || /^https?:\/\//.test(href)) {
    try {
      return {
        name: 'outbound_click',
        params: { label, location, destination_domain: new URL(href, window.location.href).hostname },
      };
    } catch {
      return null;
    }
  }

  return null;
};

const bindClickTracking = () => {
  document.addEventListener('click', event => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
    if (!link) return;
    const tracked = classifyLink(link);
    if (tracked) trackEvent(tracked.name, tracked.params);
  });
};

export const initAnalytics = () => {
  initGA4();
  initClarity();
  bindClickTracking();
};

