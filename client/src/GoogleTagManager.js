import { useEffect } from "react";

const GoogleTagManager = ({ gtmId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [gtmId]);

  return null;
};

export default GoogleTagManager;
