const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const enableInDev = import.meta.env.VITE_ENABLE_ANALYTICS_IN_DEV === "true";
const canUseAnalytics = Boolean(measurementId) && (import.meta.env.PROD || enableInDev);

let initialized = false;

export function isAnalyticsEnabled() {
  return canUseAnalytics;
}

export function initAnalytics() {
  if (!canUseAnalytics || initialized || typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
  });

  initialized = true;
}

export function trackPageView(path, title = document.title) {
  if (!canUseAnalytics || typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

export function trackEvent(name, parameters = {}) {
  if (!canUseAnalytics || typeof window.gtag !== "function") return;

  window.gtag("event", name, parameters);
}

export function getTrafficSource() {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);

  return {
    page_referrer: document.referrer || "direct",
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_content: params.get("utm_content") || undefined,
    utm_term: params.get("utm_term") || undefined,
  };
}
