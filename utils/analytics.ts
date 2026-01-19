
/**
 * Utility for handling IP tracking and Google Analytics / Ads events
 */

export const trackPageView = (url: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: url,
    });
  }
  console.debug(`[Analytics] Page viewed: ${url}`);
};

export const trackEvent = (action: string, category: string, label?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
  console.debug(`[Analytics] Event: ${action} | Category: ${category} | Label: ${label}`);
};

export const fetchAndTrackIP = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const userIP = data.ip;
    
    // Log IP conceptually. In a production app, you'd send this to your CRM or backend.
    console.debug(`[Security] Visitor IP Captured: ${userIP}`);
    
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'user_ip_tracking', {
        ip_address: userIP,
        timestamp: new Date().toISOString()
      });
    }
    
    return userIP;
  } catch (error) {
    console.error('[Security] Failed to capture IP', error);
    return null;
  }
};

// Extend global window for gtag
declare global {
  interface Window {
    gtag: (type: string, name: string, data?: any) => void;
    dataLayer: any[];
  }
}
