import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getTrafficSource, initAnalytics, isAnalyticsEnabled, trackEvent, trackPageView } from "../lib/analytics.js";

function getScrollPercent() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (documentHeight <= 0) return 100;

  return Math.round((scrollTop / documentHeight) * 100);
}

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();

    if (!isAnalyticsEnabled()) return;

    trackEvent("client_session_start", getTrafficSource());
  }, []);

  useEffect(() => {
    if (!isAnalyticsEnabled()) return undefined;

    const pagePath = `${location.pathname}${location.search}`;
    const startedAt = Date.now();
    const sentMilestones = new Set();

    trackPageView(pagePath);

    const handleScroll = () => {
      const percent = getScrollPercent();

      [25, 50, 75, 100].forEach((milestone) => {
        if (percent >= milestone && !sentMilestones.has(milestone)) {
          sentMilestones.add(milestone);
          trackEvent("scroll_depth", {
            page_path: pagePath,
            scroll_percent: milestone,
          });
        }
      });
    };

    const trackDuration = () => {
      const durationMs = Date.now() - startedAt;

      trackEvent("page_duration", {
        page_path: pagePath,
        duration_seconds: Math.round(durationMs / 1000),
        engagement_time_msec: durationMs,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pagehide", trackDuration);
    handleScroll();

    return () => {
      trackDuration();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pagehide", trackDuration);
    };
  }, [location.pathname, location.search]);

  return null;
}
