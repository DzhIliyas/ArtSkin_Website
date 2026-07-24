import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const currentUrl = new URL(window.location.href);
if (currentUrl.searchParams.has('deploy')) {
  currentUrl.searchParams.delete('deploy');
  window.history.replaceState({}, '', `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`);
}

if (import.meta.env.VITE_PUBLIC_POSTHOG_TOKEN) {
  const loadAnalytics = () => {
    import('posthog-js').then(({ default: posthog }) => {
      posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_TOKEN, {
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
        defaults: '2026-01-30',
      });
    });
  };
  if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(loadAnalytics);
  else globalThis.setTimeout(loadAnalytics, 1000);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
