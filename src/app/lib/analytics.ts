declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// L'identifiant GA4 peut venir d'une variable d'environnement.
// On garde aussi une valeur par defaut pour que le suivi fonctionne
// directement sur le portfolio sans configuration supplementaire.
const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || 'G-DFE2HMW0T9';

let gaInitialized = false;

export function hasAnalyticsEnabled() {
  return Boolean(GA_MEASUREMENT_ID);
}

export function initializeAnalytics() {
  if (!GA_MEASUREMENT_ID || gaInitialized || typeof document === 'undefined') {
    return;
  }

  const existingScript = document.querySelector(
    `script[data-ga-id="${GA_MEASUREMENT_ID}"]`,
  );

  if (!existingScript) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.dataset.gaId = GA_MEASUREMENT_ID;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  });

  gaInitialized = true;
}

export function trackPageView(pagePath = window.location.pathname) {
  if (!GA_MEASUREMENT_ID || !window.gtag) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {},
) {
  if (!GA_MEASUREMENT_ID || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, params);
}
