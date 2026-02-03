"use client";

import { useEffect } from "react";

const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.ep.xportbrokerps";
const IOS_URL = "https://apps.apple.com/app/id6745525045";
const FALLBACK_URL = "https://xport.kz";

export default function StoreRedirectPage() {
  useEffect(() => {
    try {
      const ua = navigator.userAgent || navigator.vendor || "";

      if (/android/i.test(ua)) {
        window.location.href = ANDROID_URL;
        return;
      }

      if (/iPad|iPhone|iPod/.test(ua)) {
        window.location.href = IOS_URL;
        return;
      }

      window.location.href = FALLBACK_URL;
    } catch {
      window.location.href = FALLBACK_URL;
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-4 text-center">
      <p>Перенаправление в магазин приложений...</p>
    </main>
  );
}

