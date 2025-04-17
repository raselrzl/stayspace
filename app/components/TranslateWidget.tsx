"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const TranslateWidget = () => {
  useEffect(() => {
    // Load the Google Translate script
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // Default language of your page
          includedLanguages: "en,sv", // Only English and Swedish languages
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false, // Do not auto-display the widget
        },
        "google_translate_element"
      );
    };

    // Function to hide unwanted Google UI elements like the banner and tooltip
    const hideGoogleElements = () => {
      const banner = document.querySelector("iframe.goog-te-banner-frame") as HTMLIFrameElement | null;
      if (banner) banner.style.display = "none"; // Hide the Google Translate banner

      const tooltip = document.getElementById("goog-gt-tt") as HTMLDivElement | null;
      if (tooltip) tooltip.style.display = "none"; // Hide the tooltip

      const body = document.body;
      const html = document.documentElement;

      if (body) {
        body.style.top = "0px"; // Prevent layout shift
        body.style.position = "static";
      }

      if (html) {
        html.style.marginTop = "0px"; // Prevent page jump
      }
    };

    // Observe DOM changes to keep the Google Translate elements hidden
    const observer = new MutationObserver(hideGoogleElements);
    observer.observe(document.body, { childList: true, subtree: true });

    // Set up an interval to periodically check and hide the Google elements
    const interval = setInterval(hideGoogleElements, 300);

    // Cleanup listeners when the component unmounts
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }} >
      {/* Translate button */}
      <span style={{ fontSize: "12px", fontWeight: "bold",}} className="text-amber-300">
        Translate
      </span>

      {/* Google Translate element */}
      <div style={{ position: "relative", display: "inline-block" }}>
        <div id="google_translate_element"></div>
      </div>

      <style jsx global>{`
        /* Hide everything from Google branding and banner */
        iframe.goog-te-banner-frame,
        .goog-te-banner-frame,
        #goog-gt-tt,
        .goog-tooltip,
        .goog-tooltip:hover,
        .goog-logo-link,
        .goog-te-gadget span {
          display: none !important;
        }

        body {
          top: 0px !important;
          position: static !important;
        }

        html {
          margin-top: 0px !important;
        }

        /* Hide the Google Translate button and adjust dropdown styles */
        .goog-te-gadget {
          font-size: 0 !important;
        }

        #google_translate_element {
          line-height: 0 !important;
        }

        .goog-te-combo {
          margin: 0 !important;
          height: 30px !important;
          font-size: 12px !important;
          width: 120px !important;
          padding: 2px 24px 2px 8px !important;
          background-image: none !important;
          border-radius: 4px;
          border: 1px solid #ccc;
          appearance: none;
        }
      `}</style>
    </div>
  );
};

export default TranslateWidget;
