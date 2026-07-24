# ArtSkin website analytics

## Configuration

Set these values during the Vite build:

```env
VITE_PUBLIC_GA4_ID=G-XXXXXXXXXX
VITE_PUBLIC_CLARITY_ID=xxxxxxxxxx
```

The production values are configured in `.github/workflows/deploy.yml` because
both identifiers are public website tag IDs, not authentication secrets.

No personally identifying data is sent by the custom event layer. Email links record
the action, CTA label, placement, and subject category, but not the recipient address.

## Events

| Event | Trigger |
| --- | --- |
| `contact_click` | Any email/partnership/media CTA |
| `linkedin_click` | LinkedIn profile link |
| `outbound_click` | Press, recognition, and other external links |
| `navigation_click` | In-page navigation links |

GA4 also records its standard `page_view` event. Clarity provides anonymized session
recordings, scroll depth, and heatmaps according to the project's privacy settings.

## Local verification

Run with test identifiers and debug logging:

```bash
VITE_PUBLIC_GA4_ID=G-TEST123456 \
VITE_PUBLIC_CLARITY_ID=claritytest \
VITE_ANALYTICS_DEBUG=true \
npm run dev
```

The browser console logs each initialized provider and tracked event. The production
build can be checked with `npm run build && npm run preview`.
