import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "БизЛевел — прокачай бизнес-навыки за 15 минут в день",
  description:
    "Мобильное приложение для предпринимателей Казахстана. Новый формат обучения: короткие видео, персонализированный AI и готовые артефакты для бизнеса.",
  keywords: [
    "бизнес обучение",
    "предприниматель Казахстан",
    "бизнес навыки",
    "микролёрнинг",
    "AI тренер",
  ],
  openGraph: {
    title: "БизЛевел — прокачай бизнес-навыки",
    description:
      "15 минут в день. Персональный AI-тренер. Готовые артефакты для бизнеса.",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "БизЛевел — мобильное приложение для предпринимателей",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "БизЛевел — прокачай бизнес-навыки",
    description:
      "15 минут в день. Персональный AI-тренер. Готовые артефакты для бизнеса.",
      images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      {
        url: "/logo_light-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
