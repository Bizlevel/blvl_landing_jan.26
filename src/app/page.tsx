"use client";

import { motion, useInView, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import {
  Clock,
  BookOpen,
  RefreshCw,
  Zap,
  Wrench,
  TrendingUp,
  Play,
  MessageCircle,
  ClipboardList,
  Brain,
  Wallet,
  Target,
  Activity,
  LineChart,
  Bot,
  GraduationCap,
  Smartphone,
  Download,
  Info,
  CheckCircle2,
  Lock,
  User,
  Pause,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
  type ReactNode,
  type MouseEvent,
  type CSSProperties,
} from "react";
import iphoneFrame from "./assets/apple-iphone-17-pro-max-2025-medium.png";
import logoLight from "./assets/logo_light.png";
import qrTemplate from "./assets/qr_template.png";

// Placeholder imports for mentor avatars - replace with actual images
// import leoAvatar from "./assets/leo-avatar.png";
// import maxAvatar from "./assets/max-avatar.png";
// import rayAvatar from "./assets/ray-avatar.png";

type HlsConstructor = typeof import("hls.js").default;
type HlsInstance = InstanceType<HlsConstructor>;

// ========================================
// PHASE 1: WOW Effects Components
// ========================================

// Cursor Glow Effect
function CursorGlow() {
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const opacity = useMotionValue(0);
  const opacitySpring = useSpring(opacity, { stiffness: 200, damping: 20 });
  const rafRef = useRef<number | null>(null);
  const latestPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      latestPosRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        const { x: latestX, y: latestY } = latestPosRef.current;
        x.set(latestX - 200);
        y.set(latestY - 200);
        opacity.set(1);
        rafRef.current = null;
      });
    };

    const handleMouseLeave = () => {
      opacity.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [x, y, opacity]);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 h-[400px] w-[400px] rounded-full cursor-glow"
      style={{
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
        x,
        y,
        opacity: opacitySpring,
      }}
    />
  );
}

// Aurora Background
function AuroraBackground() {
  return (
    <div className="aurora-bg">
      <motion.div
        className="aurora-blob absolute -left-40 top-20 h-[600px] w-[600px] bg-blue-600/20"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-blob absolute -right-40 top-40 h-[500px] w-[500px] bg-purple-600/15"
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, 40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="aurora-blob absolute bottom-20 left-1/4 h-[450px] w-[450px] bg-amber-500/10"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="aurora-blob absolute right-1/4 top-1/3 h-[350px] w-[350px] bg-cyan-500/10"
        animate={{
          x: [0, -50, 25, 0],
          y: [0, 70, -35, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
    </div>
  );
}

// Magnetic Button
function MagneticButton({ 
  children, 
  className = "", 
  href,
  onClick,
}: { 
  children: ReactNode; 
  className?: string; 
  href?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const latestPosRef = useRef({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    latestPosRef.current = { x: e.clientX, y: e.clientY };
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      if (!rectRef.current) {
        rectRef.current = ref.current.getBoundingClientRect();
      }
      const rect = rectRef.current;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = (latestPosRef.current.x - centerX) * 0.3;
      const distanceY = (latestPosRef.current.y - centerY) * 0.3;
      x.set(distanceX);
      y.set(distanceY);
      rafRef.current = null;
    });
  };

  const handleMouseEnter = () => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rectRef.current = null;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref as React.RefObject<HTMLAnchorElement & HTMLButtonElement>}
      href={href}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </Component>
  );
}

// Floating Particles around iPhone - fixed values to avoid hydration mismatch
function FloatingParticles() {
  // Fixed seed-like values to ensure server/client consistency
  const particles = useMemo(() => [
    { id: 0, left: "15%", delay: 0, duration: 3.5, size: 4, xOffset: -15 },
    { id: 1, left: "25%", delay: 0.8, duration: 4, size: 5, xOffset: 10 },
    { id: 2, left: "35%", delay: 1.6, duration: 3.2, size: 3, xOffset: -8 },
    { id: 3, left: "45%", delay: 2.4, duration: 4.5, size: 6, xOffset: 12 },
    { id: 4, left: "55%", delay: 0.4, duration: 3.8, size: 4, xOffset: -18 },
    { id: 5, left: "65%", delay: 1.2, duration: 4.2, size: 5, xOffset: 15 },
    { id: 6, left: "75%", delay: 2, duration: 3.6, size: 3, xOffset: -12 },
    { id: 7, left: "85%", delay: 2.8, duration: 4.8, size: 6, xOffset: 8 },
    { id: 8, left: "20%", delay: 3.2, duration: 3.4, size: 4, xOffset: -10 },
    { id: 9, left: "50%", delay: 3.6, duration: 4.1, size: 5, xOffset: 14 },
    { id: 10, left: "70%", delay: 1.8, duration: 3.9, size: 4, xOffset: -16 },
    { id: 11, left: "40%", delay: 2.6, duration: 4.4, size: 5, xOffset: 11 },
  ], []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={
            {
              left: particle.left,
              bottom: "10%",
              "--particle-x": `${particle.xOffset}px`,
              "--particle-duration": `${particle.duration}s`,
              "--particle-delay": `${particle.delay}s`,
              "--particle-size": `${particle.size}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

// ========================================
// PHASE 2: Polish Components
// ========================================

// 3D Tilt Card
function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const latestPosRef = useRef({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Increased tilt angle from 8 to 15 degrees for more visible effect
  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);
  
  // Smooth spring for rotation
  const springConfig = { stiffness: 150, damping: 15 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    latestPosRef.current = { x: e.clientX, y: e.clientY };
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      if (!rectRef.current) {
        rectRef.current = ref.current.getBoundingClientRect();
      }
      const rect = rectRef.current;
      const xPos = (latestPosRef.current.x - rect.left) / rect.width - 0.5;
      const yPos = (latestPosRef.current.y - rect.top) / rect.height - 0.5;
      x.set(xPos);
      y.set(yPos);
      rafRef.current = null;
    });
  };

  const handleMouseEnter = () => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rectRef.current = null;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

// Typing Text Animation
function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          if (intervalId) {
            clearInterval(intervalId);
          }
        }
      }, 50);
    }, delay);
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      clearTimeout(timeoutId);
    };
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="typing-cursor" />}
    </span>
  );
}

const appStoreUrl =
  "https://apps.apple.com/us/app/id675386549";
const googlePlayUrl =
  "https://play.google.com/apps/testing/kz.bizlevel.bizlevel";
const promoVideoUrl =
  "https://vz-1d42f250-27d.b-cdn.net/d15b6d05-01c6-4eed-ad06-10e0b2df67fe/playlist.m3u8";
const promoVideoPoster =
  "https://vz-1d42f250-27d.b-cdn.net/dd827f44-82ef-4fc3-b0b0-3abee72dc7e6/thumbnail.jpg";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "БизЛевел",
  operatingSystem: "iOS, Android",
  applicationCategory: "BusinessApplication",
  description:
    "Мобильное приложение для предпринимателей: короткие видео, AI-тренер и артефакты для бизнеса.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "KZT",
  },
};

const painPoints = [
  {
    Icon: Clock,
    title: "Нет времени",
    description:
      "Курсы по 40 часов. Когда смотреть, если бизнес требует внимания?",
  },
  {
    Icon: BookOpen,
    title: "Теория без практики",
    description:
      "Красивые слова есть, а что конкретно делать завтра — непонятно.",
  },
  {
    Icon: RefreshCw,
    title: "Знания забываются",
    description:
      "Прошёл курс — через месяц всё выветрилось. Деньги на ветер.",
  },
];

const solutionPoints = [
  {
    Icon: Zap,
    title: "15 минут — и ты в деле",
    description:
      "Короткие видео без перегруза. Учишься между делами, а не «когда-нибудь».",
  },
  {
    Icon: Wrench,
    title: "Артефакт сразу",
    description:
      "После каждого уровня — чек-лист, шаблон или калькулятор для бизнеса.",
  },
  {
    Icon: TrendingUp,
    title: "Персональный AI-ментор",
    description:
      "Тренер учитывает твой бизнес и помогает применять знания на практике.",
  },
];

const steps = [
  {
    title: "Смотришь короткое видео",
    description: "2–3 минуты, только суть. Ни воды, ни длинных лекций.",
    accent: "Видео",
    Icon: Play,
  },
  {
    title: "Обсуждаешь с AI-тренером",
    description: "Живой диалог: уточнение, разбор твоей ситуации, рекомендации.",
    accent: "Диалог",
    Icon: MessageCircle,
  },
  {
    title: "Берёшь готовый артефакт",
    description: "Чек-лист, шаблон или калькулятор — сразу внедряешь в бизнес.",
    accent: "Артефакт",
    Icon: ClipboardList,
  },
];

const skills = [
  {
    Icon: Brain,
    name: "Фокус лидера",
    value: 6,
    color: "from-purple-400 to-purple-600",
  },
  {
    Icon: Wallet,
    name: "Денежный контроль",
    value: 5,
    color: "from-amber-400 to-amber-600",
  },
  {
    Icon: Target,
    name: "Магнит клиентов",
    value: 7,
    color: "from-pink-400 to-pink-600",
  },
  {
    Icon: Activity,
    name: "Система действий",
    value: 4,
    color: "from-sky-400 to-sky-600",
  },
  {
    Icon: LineChart,
    name: "Скорость роста",
    value: 6,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    Icon: Bot,
    name: "AI-предприниматель",
    value: 5,
    color: "from-cyan-400 to-cyan-600",
  },
];

// Levels data for the tower (Floor 1)
const levels = [
  {
    num: 1,
    name: "Стартовый рывок — осознание целей",
    status: "free",
    desc: "Артефакт: «ЯДРО ЦЕЛЕЙ»",
  },
  {
    num: 2,
    name: "Экспресс-стресс-менеджмент",
    status: "free",
    desc: "Артефакт: «5-МИНУТНЫЙ СТРЕСС-БРЕЙК»",
  },
  {
    num: 3,
    name: "Управление приоритетами (Эйзенхауэр)",
    status: "free",
    desc: "Артефакт: «МАТРИЦА ПРИОРИТЕТОВ»",
  },
  {
    num: 4,
    name: "Базовый учёт доходов/расходов",
    status: "locked",
    desc: "Артефакт: «БАЗОВЫЙ УЧЕТ»",
  },
  {
    num: 5,
    name: "Создание УТП",
    status: "locked",
    desc: "Артефакт: «ФОРМУЛА УТП»",
  },
  {
    num: 6,
    name: "Elevator Pitch (1-минутное представление)",
    status: "locked",
    desc: "Артефакт: «ELEVATOR PITCH»",
  },
  {
    num: 7,
    name: "Мини-планирование на неделю (SMART)",
    status: "locked",
    desc: "Артефакт: «ЧЕК-ЛИСТ НЕДЕЛЬНЫХ ЦЕЛЕЙ»",
  },
  {
    num: 8,
    name: "Блиц-опрос клиентов",
    status: "locked",
    desc: "Артефакт: «5 ВОПРОСОВ ПО БОЛИ КЛИЕНТА»",
  },
  {
    num: 9,
    name: "Административный иммунитет бизнеса",
    status: "locked",
    desc: "Артефакт: «АДМИНИСТРАТИВНЫЙ ОРГАНАЙЗЕР»",
  },
  {
    num: 10,
    name: "Моя карта ближайших действий",
    status: "locked",
    desc: "Артефакт: «КАРТА БЛИЖАЙШИХ ДЕЙСТВИЙ»",
  },
];

const mentors = [
  {
    name: "Лео",
    role: "Бизнес-ментор",
    description: "Помогает понять, что улучшить в бизнесе, и вести тебя к результату.",
    color: "amber",
    emoji: "🦁",
    exampleQuestion: "«Как увеличить продажи на 20%?»",
  },
  {
    name: "Макс",
    role: "Ментор по целям",
    description: "Фокусирует на главном и помогает доводить цели до результата.",
    color: "blue",
    emoji: "🎯",
    exampleQuestion: "«Как не терять фокус на задачах?»",
  },
  {
    name: "Рэй",
    role: "Проверка идей",
    description: "Оценивает идею нового продукта или стартапа и подсвечивает риски.",
    color: "purple",
    emoji: "💡",
    exampleQuestion: "«Стоит ли запускать новый продукт?»",
  },
];

const pillars = [
  {
    Icon: GraduationCap,
    title: "Методики бизнес-школ",
    description: "Контент на основе кейсов Harvard, Stanford, INSEAD — адаптирован для малого бизнеса.",
  },
  {
    Icon: Smartphone,
    title: "Микролёрнинг",
    description: "Короткие уроки, которые реально встроить в график предпринимателя.",
  },
  {
    Icon: Bot,
    title: "AI-персонализация",
    description: "Контент и подсказки подстраиваются под твою ситуацию.",
  },
];

// Feature cards with different colors
const featureCards = [
  { 
    Icon: Clock, 
    title: "15 минут в день", 
    description: "Коротко, по делу, встроится в график предпринимателя.",
    iconBg: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
  },
  { 
    Icon: Bot, 
    title: "AI‑тренер", 
    description: "Персональные подсказки и фокус на твою ситуацию.",
    iconBg: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-400",
  },
  { 
    Icon: TrendingUp, 
    title: "Рост уровня", 
    description: "Видишь прогресс и двигаешься шаг за шагом без хаоса.",
    iconBg: "from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-400",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Animated section wrapper
function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
  parallax = false,
  parallaxOffset = 50,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  parallax?: boolean;
  parallaxOffset?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset]);

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      style={parallax ? { y } : undefined}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Animated card with hover
function GlassCard({
  children,
  className = "",
  delay = 0,
  hoverGlow = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverGlow?: boolean;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.02,
        boxShadow: hoverGlow
          ? "0 25px 80px rgba(59, 130, 246, 0.25)"
          : "0 25px 60px rgba(15, 23, 42, 0.4)",
      }}
      className={`glass-panel glass-sheen transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function LogoMark() {
  return (
    <Link 
      href="/" 
      className="group flex items-center justify-center rounded-2xl border border-white/70 bg-white px-6 py-2.5 shadow-md shadow-slate-900/30 transition-colors duration-200 hover:border-slate-200 hover:bg-slate-100"
    >
      <Image
        alt="БизЛевел"
        className="h-8 w-auto object-contain transition duration-200 group-hover:grayscale group-hover:opacity-90"
        src={logoLight}
        priority
      />
    </Link>
  );
}

function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <MagneticButton
        href={appStoreUrl}
        className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10 gradient-border"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        App Store
      </MagneticButton>
      <MagneticButton
        href={googlePlayUrl}
        className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10 gradient-border"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
        </svg>
        Google Play
      </MagneticButton>
    </div>
  );
}

function HighlightBadge({ label }: { label: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 backdrop-blur-sm"
    >
      {label}
    </motion.span>
  );
}

// GP Tooltip component
function GPTooltip() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        className="ml-1 text-slate-500 hover:text-slate-300 transition"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Что такое GP?"
      >
        <Info className="h-3.5 w-3.5" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 rounded-lg glass-panel p-3 text-xs text-slate-200 z-50"
          >
            <strong className="text-amber-300">GP (Growth Points)</strong> — баллы роста для открытия новых уровней и функций в приложении
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 h-2 w-2 glass-panel" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

// Avatar placeholder component
function AvatarPlaceholder({ 
  emoji, 
  color, 
  size = "md" 
}: { 
  emoji: string; 
  color: "amber" | "blue" | "purple"; 
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "h-8 w-8 text-lg",
    md: "h-12 w-12 text-2xl",
    lg: "h-16 w-16 text-3xl",
  };
  
  const colorClasses = {
    amber: "from-amber-500/30 to-amber-600/20 shadow-amber-500/20",
    blue: "from-blue-500/30 to-blue-600/20 shadow-blue-500/20",
    purple: "from-purple-500/30 to-purple-600/20 shadow-purple-500/20",
  };

  return (
    <div 
      className={`flex items-center justify-center rounded-2xl bg-linear-to-br ${colorClasses[color]} shadow-lg ${sizeClasses[size]}`}
    >
      {emoji}
    </div>
  );
}

// Background gradient blobs (legacy - replaced by AuroraBackground)
function BackgroundBlobs() {
  return null; // Using AuroraBackground instead
}

// Noise texture overlay
function NoiseTexture() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isStepHovered, setIsStepHovered] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hoveredMentor, setHoveredMentor] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Auto-switch steps every 7 seconds, pause on hover
  useEffect(() => {
    if (isStepHovered) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isStepHovered]);

  useEffect(() => {
    let ticking = false;
    const updateScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 24);
      setShowSticky(offset > 420);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    let hlsInstance: HlsInstance | null = null;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = promoVideoUrl;
      return undefined;
    }

    import("hls.js")
      .then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          hlsInstance = new Hls();
          hlsInstance.loadSource(promoVideoUrl);
          hlsInstance.attachMedia(video);
        } else {
          video.src = promoVideoUrl;
        }
      })
      .catch(() => {
        video.src = promoVideoUrl;
      });

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, []);

  const handleVideoToggle = useCallback(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = false;
    if (video.paused) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, []);

  const step = useMemo(() => steps[activeStep], [activeStep]);

  return (
    <div className="min-h-screen bg-[#0B1220] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      <CursorGlow />
      <AuroraBackground />
      <NoiseTexture />

      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B1220]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <LogoMark />
          <MagneticButton
            href="https://app.bizlevel.kz/"
            className="hidden rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-[#0B1220] shadow-lg shadow-amber-500/20 transition pulse-ring sm:inline-flex"
          >
            Войти
          </MagneticButton>
          <a
            className="inline-flex rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10 sm:hidden"
            href="https://app.bizlevel.kz/"
            aria-label="Войти"
          >
          </a>
        </div>
      </header>

      <main className="pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* HERO */}
        <section ref={heroRef} className="mx-auto max-w-6xl px-6 pb-24 pt-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeInUp}>
                <HighlightBadge label="Новый формат обучения" />
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl"
              >
                Прокачай бизнес‑навыки.
                <br />
                <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Уровень за уровнем.
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg leading-relaxed text-slate-300 md:text-xl"
              >
                <strong className="text-white">15 минут в день.</strong> Это не курс и не марафон. Короткие видео,
                персонализированный AI и готовые артефакты, которые ты
                применяешь сразу в своём бизнесе.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4"
              >
                {/* На мобильных показываем только ссылки на магазины */}
                <StoreButtons className="md:hidden" />
                {/* На десктопе показываем только QR (hidden до md) */}
                <div className="hidden items-center gap-3 rounded-2xl glass-panel glass-sheen px-4 py-3 text-sm text-slate-300 md:flex">
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl border-2 border-white/20 bg-white p-1">
                    <Image
                      alt="QR код для скачивания"
                      className="h-full w-full rounded-lg"
                      src={qrTemplate}
                    />
                  </div>
                  <div className="text-xs">
                    Наведи камеру — скачай
                    <span className="block text-[11px] text-slate-400">
                      iOS и Android
                    </span>
                  </div>
                </div>
              </motion.div>
              {/* GP с пояснением */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-6 text-sm text-slate-400"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Первые 3 уровня бесплатно
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  30 GP за регистрацию
                  <GPTooltip />
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  50 GP за профиль
                </span>
              </motion.div>
            </motion.div>

            {/* iPhone with video - animated border + floating particles */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isHeroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <FloatingParticles />
              <div className="absolute -inset-8 rounded-[50px] bg-linear-to-br from-sky-500/25 via-blue-600/10 to-purple-500/5 blur-3xl" />
              <div className="absolute -inset-4 rounded-[45px] bg-linear-to-tr from-blue-500/20 to-transparent blur-2xl" />
              <div className="relative mx-auto w-[320px] animated-border">
                <div className="absolute left-[5.5%] top-[1.8%] h-[96.4%] w-[89%] overflow-hidden rounded-[40px] bg-black">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 h-full w-full object-contain"
                    muted
                    loop
                    playsInline
                    poster={promoVideoPoster}
                    preload="metadata"
                    onCanPlay={() => {
                      setIsVideoReady(true);
                      const video = videoRef.current;
                      if (video) {
                        video.play().catch(() => undefined);
                      }
                    }}
                    onPause={() => setIsVideoPlaying(false)}
                    onPlay={() => setIsVideoPlaying(true)}
                  />
                  {/* Play/Pause кнопка - ВСЕГДА видна */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute inset-0 z-10 flex items-center justify-center"
                    type="button"
                    aria-label={isVideoPlaying ? "Пауза" : "Воспроизвести видео"}
                    onClick={handleVideoToggle}
                  >
                    <motion.span 
                      animate={{ opacity: isVideoPlaying ? 0.6 : 1 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-md shadow-xl transition-opacity hover:opacity-100"
                    >
                      {isVideoPlaying ? (
                        <Pause className="h-6 w-6 fill-current" />
                      ) : (
                        <Play className="h-6 w-6 fill-current ml-1" />
                      )}
                    </motion.span>
                  </motion.button>
                  {!isVideoReady && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40">
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                    </div>
                  )}
                </div>
                <Image
                  alt="iPhone mockup"
                  className="relative z-10 w-full drop-shadow-[0_40px_80px_rgba(15,23,42,0.6)] pointer-events-none"
                  src={iphoneFrame}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features grid - 3D tilt cards */}
        <AnimatedSection className="mx-auto max-w-6xl px-6 pb-20" parallax parallaxOffset={60}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-3"
          >
            {featureCards.map((item, i) => (
              <TiltCard key={item.title} className="h-full">
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-panel glass-sheen gradient-border rounded-2xl p-6 h-full"
                >
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br ${item.iconBg}`}>
                    <item.Icon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Problem → Solution */}
        <AnimatedSection className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-[28px] glass-panel glass-sheen p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Курсы не работают. Знакомо?
                </motion.h2>
                <div className="mt-6 space-y-4">
                  {painPoints.map((item) => (
                    <motion.div
                      key={item.title}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="rounded-2xl glass-rose glass-sheen p-5 transition-all"
                    >
                      <div className="flex items-center gap-3 text-base font-semibold text-white">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/20">
                          <item.Icon className="h-4 w-4 text-rose-300" />
                        </div>
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm text-rose-100/80">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="hidden flex-col items-center gap-4 lg:flex">
                <div className="h-full w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300 backdrop-blur-sm">
                  Мы сделали по‑другому
                </span>
                <div className="h-full w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  БизЛевел — не курс. Это система.
                </motion.h2>
                <div className="mt-6 space-y-4">
                  {solutionPoints.map((item) => (
                    <motion.div
                      key={item.title}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="rounded-2xl glass-sky glass-sheen p-5 transition-all"
                    >
                      <div className="flex items-center gap-3 text-base font-semibold text-white">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/20">
                          <item.Icon className="h-4 w-4 text-sky-300" />
                        </div>
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm text-slate-200/80">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* How it works - с паузой на hover и аватаром Лео */}
        <AnimatedSection className="mx-auto max-w-6xl px-6 pb-24">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
                Как это работает
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Три шага — и навык в кармане
              </h2>
            </div>
            <div 
              className="grid gap-8 lg:grid-cols-[1fr_1fr]"
              onMouseEnter={() => setIsStepHovered(true)}
              onMouseLeave={() => setIsStepHovered(false)}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-3">
                  {steps.map((item, index) => (
                    <motion.button
                      key={item.title}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                        activeStep === index
                          ? "bg-[#F59E0B] text-[#0B1220] shadow-lg shadow-amber-500/30"
                          : "border border-white/15 text-white/80 hover:border-white/30 hover:bg-white/5"
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <item.Icon className="h-4 w-4" />
                      {item.accent}
                    </motion.button>
                  ))}
                </div>
                <div className="relative h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full rounded-full bg-linear-to-r from-amber-400 to-amber-500"
                    animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <div className="rounded-2xl glass-panel glass-sheen p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 text-sm text-slate-300">{step.description}</p>
                      <div className="mt-6 rounded-2xl glass-panel p-5">
                        {/* Шаг Видео - стилизованный placeholder */}
                        {activeStep === 0 && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-xs text-slate-300">
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                                <Play className="h-3 w-3" />
                              </span>
                              2 минуты, только суть
                            </div>
                            <div className="relative h-36 rounded-xl glass-panel overflow-hidden">
                              {/* Стилизованный video placeholder */}
                              <div className="absolute inset-0 bg-linear-to-br from-slate-800 via-slate-900 to-slate-950">
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-2">
                                    <Play className="h-5 w-5 text-white/60 ml-0.5" />
                                  </div>
                                  <span className="text-xs text-slate-400">Короткое видео</span>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                                  <div className="h-1 flex-1 rounded-full bg-white/10">
                                    <div className="h-1 w-1/3 rounded-full bg-amber-400" />
                                  </div>
                                  <span className="text-[10px] text-slate-500">1:47</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Шаг Диалог - с typing animation */}
                        {activeStep === 1 && (
                          <div className="space-y-3 text-xs">
                            <div className="flex items-start gap-2 rounded-xl glass-panel px-3 py-2.5 text-slate-200">
                              <span className="shrink-0 text-lg">🦁</span>
                              <div>
                                <span className="text-amber-300 font-medium">Лео: </span>
                                <TypingText text="Давай уточним цели бизнеса на 30 дней." delay={300} />
                              </div>
                            </div>
                            <div className="flex items-start gap-2 rounded-xl bg-amber-400/10 border border-amber-400/20 px-3 py-2.5 text-amber-100 ml-4">
                              <User className="h-4 w-4 shrink-0 text-white/40 mt-0.5" />
                              <div>
                                <span className="text-white/60">Ты:</span> Хочу увеличить продажи на 20%.
                              </div>
                            </div>
                            <div className="flex items-start gap-2 rounded-xl glass-panel px-3 py-2.5 text-slate-200">
                              <span className="shrink-0 text-lg">🦁</span>
                              <div>
                                <span className="text-amber-300 font-medium">Лео: </span>
                                <TypingText text="Отлично. Начнём с диагностики воронки." delay={2000} />
                              </div>
                            </div>
                          </div>
                        )}
                        {activeStep === 2 && (
                          <div className="grid gap-3 text-xs text-slate-200 sm:grid-cols-2">
                            {["Чек‑лист отдела продаж", "Шаблон финансовой модели", "Калькулятор маржи", "План 7‑дневных действий"].map((tool) => (
                              <div key={tool} className="flex items-center gap-2 rounded-xl glass-panel px-3 py-2.5">
                                <ClipboardList className="h-4 w-4 text-blue-400" />
                                {tool}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <GlassCard className="rounded-3xl bg-linear-to-br from-slate-900/80 via-slate-900/90 to-slate-950/90 p-6">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🦁</span>
                    AI‑тренер Лео
                  </span>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] text-emerald-200">
                    Онлайн 24/7
                  </span>
                </div>
                <div className="mt-5 rounded-2xl glass-panel p-6">
                  <p className="text-sm text-slate-200">
                    «Хочешь улучшить продажи за 30 дней? Давай начнём с быстрой
                    диагностики процесса…»
                  </p>
                </div>
                <div className="mt-5 space-y-3">
                  {["Понимает контекст твоего бизнеса", "Выдаёт конкретные шаги и шаблоны", "Фиксирует прогресс и напоминает"].map((line, i) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 rounded-xl glass-panel px-4 py-3 text-xs text-slate-300"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {line}
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </AnimatedSection>

        {/* Growth System - переделанная Башня с путём юзера */}
        <AnimatedSection className="mx-auto max-w-6xl px-6 pb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <GlassCard className="rounded-3xl p-8">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Твой путь в БизЛевел
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Первый этаж: 10 уровней с артефактами. Первые 3 — бесплатно. Дальше будут новые этажи.
              </p>
              <div className="mt-6 space-y-2">
                {levels.slice(0, 6).map((level, index) => (
                  <motion.div
                    key={level.num}
                    variants={fadeInUp}
                    whileHover={{ x: 4 }}
                    className="relative"
                  >
                    <div className={`flex items-center gap-3 rounded-xl p-3 text-sm transition-all ${
                      level.status === "free" 
                        ? "bg-emerald-500/10 border border-emerald-500/30" 
                        : "bg-white/5 border border-white/10"
                    }`}>
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                        level.status === "free"
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-white/10 text-slate-400"
                      }`}>
                        {level.status === "free" ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <Lock className="h-3.5 w-3.5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-white">
                            Уровень {level.num}: {level.name}
                          </span>
                          {level.num === 1 && (
                            <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-medium text-amber-300">
                              Ты здесь
                            </span>
                          )}
                          {level.status === "free" && level.num !== 1 && (
                            <span className="text-[10px] text-emerald-400">Бесплатно</span>
                          )}
                        </div>
                        <span className="text-xs text-slate-400">{level.desc}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
                  <span>+ ещё 4 уровня</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
              </div>
            </GlassCard>

            {/* Дерево навыков с пояснением */}
            <GlassCard className="rounded-3xl p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Дерево навыков</h3>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] text-slate-400 border border-white/10">
                  Пример профиля
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Так выглядит профиль предпринимателя после прохождения уровней
              </p>
              <div className="mt-6 space-y-5">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span className="flex items-center gap-2">
                        <skill.Icon className="h-4 w-4 text-slate-400" />
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-500">{skill.value}/10</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className={`h-2 rounded-full bg-linear-to-r ${skill.color} shimmer-bar`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value * 10}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </AnimatedSection>

        {/* Why it works - без "скоро тренеров станет больше" */}
        <AnimatedSection className="mx-auto max-w-6xl px-6 pb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 lg:grid-cols-[1fr_1fr]"
          >
            <GlassCard className="rounded-3xl bg-linear-to-br from-slate-900/80 via-slate-900/90 to-slate-950/90 p-8">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Проверенные методы. Современный формат.
              </h2>
              <motion.div
                variants={scaleIn}
                className="mt-6 rounded-2xl glass-strong glass-sheen bg-linear-to-br from-amber-400/15 via-slate-900/90 to-slate-950/90 p-6"
              >
                <div className="flex items-center gap-4">
                  {/* Placeholder для аватара Лео - заменить на Image когда будет файл */}
                  <AvatarPlaceholder emoji="🦁" color="amber" size="lg" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI‑тренер Лео</h3>
                    <p className="text-xs text-amber-200">Твой персональный бизнес‑ментор 24/7</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-300">
                  Отвечает на вопросы, проверяет знания и помогает применять всё
                  на практике.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                    На основе кейсов Harvard
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                    Stanford
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                    INSEAD
                  </span>
                </div>
              </motion.div>
            </GlassCard>

            <div className="grid gap-4">
              {pillars.map((item, i) => (
                <TiltCard key={item.title} className="h-full">
                  <motion.div
                    variants={fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="glass-panel glass-sheen gradient-border rounded-2xl p-6 h-full"
                  >
                    <div className="mb-3 flex items-center gap-3 text-lg font-semibold text-white">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/10">
                        <item.Icon className="h-5 w-5 text-blue-400" />
                      </div>
                      {item.title}
                    </div>
                    <p className="text-sm text-slate-300">{item.description}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* AI Trainers - с аватарами и hover эффектом */}
        <AnimatedSection className="mx-auto max-w-6xl px-6 pb-24" parallax parallaxOffset={50}>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Команда AI‑тренеров
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Персональные наставники помогают по разным задачам бизнеса.
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            {mentors.map((mentor, i) => (
              <TiltCard key={mentor.name} className="h-full">
                <motion.div
                  variants={fadeInUp}
                  onMouseEnter={() => setHoveredMentor(mentor.name)}
                  onMouseLeave={() => setHoveredMentor(null)}
                  className="relative h-full"
                >
                  <div className="glass-panel glass-sheen gradient-border rounded-2xl p-6 h-full">
                  {/* Placeholder аватар - заменить на Image */}
                  <div className="mb-4">
                    <AvatarPlaceholder 
                      emoji={mentor.emoji} 
                      color={mentor.color as "amber" | "blue" | "purple"} 
                      size="md" 
                    />
                  </div>
                  <div className="text-lg font-semibold text-white">{mentor.name}</div>
                  <div className={`mt-1 text-sm ${
                    mentor.color === "amber" ? "text-amber-300" :
                    mentor.color === "blue" ? "text-blue-300" : "text-purple-300"
                  }`}>
                    {mentor.role}
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{mentor.description}</p>
                  
                    {/* Hover example question */}
                    <AnimatePresence>
                      {hoveredMentor === mentor.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className={`mt-4 rounded-xl p-3 text-xs ${
                            mentor.color === "amber" ? "bg-amber-500/10 border border-amber-500/20 text-amber-200" :
                            mentor.color === "blue" ? "bg-blue-500/10 border border-blue-500/20 text-blue-200" :
                            "bg-purple-500/10 border border-purple-500/20 text-purple-200"
                          }`}
                        >
                          <span className="text-slate-400">Спроси:</span> {mentor.exampleQuestion}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Final CTA - обновлённый */}
        <AnimatedSection id="download" className="px-6 pb-28" parallax parallaxOffset={40}>
          <motion.div
            whileHover={{ boxShadow: "0 40px 100px rgba(245, 158, 11, 0.2)" }}
            className="mx-auto max-w-6xl rounded-[32px] glass-strong glass-sheen bg-linear-to-br from-amber-400/25 via-slate-900/60 to-slate-950 p-10 shadow-[0_30px_80px_rgba(245,158,11,0.15)]"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Начни с 3 бесплатных уровней
                </h2>
                <p className="mt-3 text-sm text-slate-200">
                  Финансы, цели, основы бизнеса — без оплаты. Убедись, что формат работает для тебя.
                </p>
                <p className="mt-3 text-xs text-slate-300">
                  15 минут в день — и у бизнеса появляется система роста.
                </p>
              </div>
              <div className="hidden items-center gap-3 rounded-2xl glass-panel glass-sheen px-4 py-3 text-sm text-slate-300 lg:flex">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl border-2 border-white/20 bg-white p-1">
                  <Image
                    alt="QR код для скачивания"
                    className="h-full w-full rounded-lg"
                    src={qrTemplate}
                  />
                </div>
                <div className="text-xs">
                  Наведи камеру — скачай
                  <span className="block text-[11px] text-slate-400">iOS и Android</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {/* На мобильных и планшетах показываем ссылки на магазины, на десктопе — только QR */}
                <StoreButtons className="justify-start lg:hidden" />
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </main>

      <footer className="border-t border-white/5 bg-[#0B1220] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 text-sm text-slate-400 md:flex-row md:items-start md:justify-between">
          <div>
            <Image alt="БизЛевел" className="mb-3 h-6 w-auto" src={logoLight} />
            <div className="text-white">© 2026 БизЛевел. Казахстан.</div>
            <div className="mt-1 text-xs text-slate-500">
              Новый формат обучения для малого бизнеса.
            </div>
          </div>
          <div className="flex flex-col gap-2 text-xs text-slate-400">
            <a className="transition hover:text-white" href="mailto:support@bizlevel.kz">
              support@bizlevel.kz
            </a>
            <div className="flex gap-3">
              <a className="transition hover:text-white" href="#">Instagram</a>
              <a className="transition hover:text-white" href="#">Telegram</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link className="transition hover:text-white" href="/privacy">Политика</Link>
            <Link className="transition hover:text-white" href="/terms">Условия</Link>
            <Link className="transition hover:text-white" href="/support">Поддержка</Link>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl glass-panel glass-sheen px-4 py-3 text-sm text-white shadow-xl sm:hidden"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs">3 уровня бесплатно</span>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[#F59E0B] px-4 py-2 text-xs font-semibold text-[#0B1220] shadow-lg shadow-amber-500/30"
                href={appStoreUrl}
              >
                Скачать
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
