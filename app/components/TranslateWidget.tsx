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
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,sv,nl,es,pl", // Updated list of supported languages
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const hideGoogleElements = () => {
      const banner = document.querySelector("iframe.goog-te-banner-frame") as HTMLIFrameElement | null;
      if (banner) banner.style.display = "none";

      const tooltip = document.getElementById("goog-gt-tt") as HTMLDivElement | null;
      if (tooltip) tooltip.style.display = "none";

      document.body.style.top = "0px";
      document.body.style.position = "static";
      document.documentElement.style.marginTop = "0px";
    };

    const observer = new MutationObserver(hideGoogleElements);
    observer.observe(document.body, { childList: true, subtree: true });

    const interval = setInterval(hideGoogleElements, 300);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
      <span style={{ fontSize: "12px", fontWeight: "bold" }} className="text-amber-300">
        Translate
      </span>
      <div style={{ position: "relative", display: "inline-block" }}>
        <div id="google_translate_element"></div>
      </div>

      <style jsx global>{`
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
