// import { motion } from "framer-motion";
// import { CheckCircle2, Star, ArrowRight } from "lucide-react";
// import LeadForm from "./LeadForm";
// import mascot from "../assets/Iec-hero.png";
// import { FaShip, FaPlane, FaGlobeAsia, FaBoxOpen } from "react-icons/fa";
// import secureIcon from "../assets/card.png";
// import speedIcon from "../assets/card2.png";
// import supportIcon from "../assets/card3.png";

// const points = [
//   "IEC in 1–3 Working Days",
//   "100% Online Process",
//   "Dedicated IEC Advisor",
//   "Lifetime Valid Code",
//   "AD Code & ICEGATE Support",
//   "Expert Document Check",
// ];

// const trustBadges = [
//   {
//     image: secureIcon,
//     label: "100% Secure Process",
//     sub: "Your documents stay safe",
//     grad: "from-emerald-400 to-teal-500",
//     ring: "bg-emerald-50",
//   },
//   {
//     image: speedIcon,
//     label: "Fast Turnaround",
//     sub: "IEC in as little as 1–3 days",
//     grad: "from-orange-400 to-amber-500",
//     ring: "bg-orange-50",
//   },
//   {
//     image: supportIcon,
//     label: "Dedicated Expert Support",
//     sub: "Talk to a real IEC expert",
//     grad: "from-sky-400 to-blue-600",
//     ring: "bg-blue-50",
//   },
// ];

// const miniSteps = ["Share documents", "We file on DGFT portal", "Get your IEC"];

// /* ------------------------------------------------------------------
//    HeroVisual: code-built IEC illustration (replaces the GST banner image).
//    Swap it for a custom IEC banner anytime: just return an <img> here.
//    ------------------------------------------------------------------ */
// function FloatChip({ children, className = "", delay = 0 }) {
//   return (
//     <motion.span
//       animate={{ y: [0, -9, 0] }}
//       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
//       className={`absolute z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#126dc4] shadow-[0_10px_24px_-8px_rgba(10,30,70,0.35)] ring-1 ring-blue-100 sm:h-12 sm:w-12 ${className}`}
//     >
//       {children}
//     </motion.span>
//   );
// }

// function HeroVisual({ className = "" }) {
//   return (
//     <div className={`relative mx-auto aspect-[4/3] w-full max-w-[560px] ${className}`}>
//       {/* soft glow */}
//       <div className="pointer-events-none absolute left-[8%] top-[6%] h-[78%] w-[84%] rounded-full bg-blue-300/30 blur-3xl" />

//       {/* floating icons */}
//       <FloatChip className="left-[1%] top-[1%]">
//         <FaShip className="h-5 w-5 sm:h-6 sm:w-6" />
//       </FloatChip>
//       <FloatChip className="right-[2%] top-[2%] text-orange-500" delay={0.6}>
//         <FaPlane className="h-5 w-5 sm:h-6 sm:w-6" />
//       </FloatChip>
//       <FloatChip className="bottom-[20%] left-[0%] text-emerald-600" delay={1.2}>
//         <FaBoxOpen className="h-5 w-5 sm:h-6 sm:w-6" />
//       </FloatChip>

//       {/* mascot */}
//       <img
//         src={mascot}
//         alt="Legal Papers India expert pointing at your IEC certificate"
//         className="absolute bottom-[9%] right-0 z-10 h-[86%] w-auto object-contain drop-shadow-[0_22px_35px_rgba(30,70,120,0.22)]"
//       />

//       {/* IEC certificate card */}
//       <motion.div
//         animate={{ y: [0, -8, 0], rotate: [-3, -2, -3] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute left-[3%] top-[12%] z-20 w-[54%] rounded-2xl border border-blue-100 bg-white p-3 shadow-[0_24px_50px_-18px_rgba(10,30,70,0.45)] sm:p-4"
//       >
//         <div className="flex items-center gap-2">
//           <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white sm:h-9 sm:w-9">
//             <FaGlobeAsia className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//           </span>
//           <div className="min-w-0">
//             <p className="font-display text-[11px] font-extrabold uppercase leading-tight tracking-wide text-[#173252] sm:text-sm">
//               Import Export Code
//             </p>
//             <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[10px]">
//               IEC Certificate
//             </p>
//           </div>
//         </div>

//         <div className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
//           <div className="h-1.5 w-full rounded bg-blue-100" />
//           <div className="h-1.5 w-4/5 rounded bg-blue-100" />
//           <div className="h-1.5 w-3/5 rounded bg-blue-100" />
//         </div>

//         <div className="mt-3 flex items-center justify-between gap-2 rounded-lg bg-blue-50 px-2.5 py-1.5 sm:mt-4 sm:py-2">
//           <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-[#126dc4] sm:text-[11px]">
//             10-digit code
//           </span>
//           <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 sm:h-5 sm:w-5" />
//         </div>
//       </motion.div>

//       {/* gold banner */}
//       <div className="absolute inset-x-[1%] bottom-0 z-30 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 px-3 py-2.5 shadow-[0_14px_28px_-12px_rgba(217,119,6,0.6)] sm:py-3.5">
//         <Star className="h-4 w-4 fill-[#173252] text-[#173252]" />
//         <p className="font-display text-sm font-extrabold text-[#173252] sm:text-lg lg:text-xl">
//           Lifetime Valid IEC Code
//         </p>
//         <Star className="h-4 w-4 fill-[#173252] text-[#173252]" />
//       </div>
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff]">
//       {/* ================= BACKGROUND DECORATION ================= */}

//       {/* Soft blue glow */}
//       <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

//       {/* Soft orange glow */}
//       <div className="pointer-events-none absolute right-[-100px] top-10 h-72 w-72 rounded-full bg-orange-300/15 blur-3xl" />

//       {/* Bottom blue glow */}
//       <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />

//       {/* Decorative dotted texture */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.35]"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(30,91,160,0.10) 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       {/* ================= MAIN CONTAINER ================= */}

//       <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-8 px-4 pb-0 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:px-8 lg:pb-6 lg:pt-8">
//         {/* =====================================================
//             LEFT — HEADLINE + CONTENT
//         ====================================================== */}

//         <div className="order-1">
//           {/* Small heading */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-orange-500 sm:text-base sm:tracking-[0.2em]"
//           >
//             IEC Registration · Pan-India
//           </motion.p>

//           {/* Main Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="mt-4 font-display text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-[#126dc4] sm:text-5xl lg:text-[3.65rem]"
//           >
//             Get Import Export Code
//             <br />
//             in just{" "}
//             <span className="relative inline-block italic text-orange-500">
//               1–3 days.
//               {/* Underline */}
//               <svg
//                 viewBox="0 0 160 14"
//                 className="absolute -bottom-2 left-0 h-3 w-full text-orange-500"
//                 preserveAspectRatio="none"
//               >
//                 <path
//                   d="M2 9.5C30 2.5 75 2 100 6.5C120 10 140 6 158 4"
//                   stroke="currentColor"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                   fill="none"
//                 />
//               </svg>
//             </span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
//           >
//             Legal Papers India handles the paperwork, the DGFT portal and the
//             follow-up — so your IEC doesn't sit stuck on a query you didn't
//             know how to answer.
//           </motion.p>

//           {/* Banner image — mobile/tablet only, full width (edge to edge) */}
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.25 }}
//             className="-mx-4 mt-6 sm:-mx-6 lg:hidden"
//           >
//             <HeroVisual />
//           </motion.div>

//           {/* Points list */}
//           <motion.ul
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 sm:gap-x-6"
//           >
//             {points.map((p) => (
//               <li
//                 key={p}
//                 className="flex items-center gap-2 text-sm font-bold leading-5 text-[#173252] sm:text-base"
//               >
//                 <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" />
//                 {p}
//               </li>
//             ))}
//           </motion.ul>

//           {/* ================= TRUST BADGES — mobile + desktop ================= */}
//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.55 }}
//             className="mt-7 grid max-w-xl grid-cols-3 gap-2.5 sm:mt-8 sm:gap-4"
//           >
//             {trustBadges.map(({ image, label, sub, grad, ring }) => (
//               <motion.div
//                 key={label}
//                 whileHover={{ y: -6 }}
//                 className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-2 pb-3 pt-4 text-center shadow-[0_10px_28px_-14px_rgba(10,30,70,0.3)] transition-shadow duration-300 hover:shadow-[0_22px_44px_-16px_rgba(10,30,70,0.4)] sm:px-3 sm:pb-4 sm:pt-5"
//               >
//                 {/* top coloured line */}
//                 <div
//                   className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${grad}`}
//                 />

//                 {/* icon with soft coloured ring */}
//                 <span
//                   className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${ring} transition-transform duration-500 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]`}
//                 >
//                   <img
//                     src={image}
//                     alt={label}
//                     className="h-10 w-10 object-contain sm:h-14 sm:w-14"
//                   />
//                 </span>

//                 <p className="mt-2 text-[11px] font-extrabold leading-tight text-[#173252] sm:mt-3 sm:text-sm">
//                   {label}
//                 </p>

//                 {/* sub text: mobile pe hidden, tablet/desktop pe visible */}
//                 <p className="mt-1 hidden text-xs leading-snug text-slate-500 sm:block">
//                   {sub}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* ================= RATING + MINI PROCESS — mobile + desktop ================= */}
//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.7 }}
//             className="mt-4 max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_28px_-14px_rgba(10,30,70,0.3)] sm:mt-5"
//           >
//             {/* rating row */}
//             <div className="flex flex-col gap-3 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-orange-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
//               <div className="flex items-center gap-3">
//                 <span className="font-display text-3xl font-extrabold leading-none text-[#126dc4]">
//                   4.9
//                 </span>
//                 <div>
//                   <div className="flex gap-0.5">
//                     {[0, 1, 2, 3, 4].map((s) => (
//                       <Star
//                         key={s}
//                         className="h-4 w-4 fill-amber-400 text-amber-400"
//                       />
//                     ))}
//                   </div>
//                   <p className="mt-0.5 text-xs font-semibold text-slate-600">
//                     Google rating · 2,401 reviews
//                   </p>
//                 </div>
//               </div>

//               <span className="w-fit rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
//                 1,00,000+ businesses served
//               </span>
//             </div>

//             {/* mini process row: mobile pe 3 columns (number upar, text neeche) */}
//             <div className="grid grid-cols-3 gap-2 px-3 py-4 sm:flex sm:items-center sm:justify-between sm:gap-2 sm:px-5">
//               {miniSteps.map((step, i) => (
//                 <div
//                   key={step}
//                   className="flex flex-col items-center gap-1.5 text-center sm:flex-1 sm:flex-row sm:gap-2 sm:text-left"
//                 >
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#126dc4] to-[#1e88e5] text-xs font-bold text-white">
//                     {i + 1}
//                   </span>
//                   <span className="text-[11px] font-bold leading-tight text-[#173252] sm:text-xs">
//                     {step}
//                   </span>
//                   {i < miniSteps.length - 1 && (
//                     <ArrowRight className="ml-auto hidden h-4 w-4 shrink-0 text-orange-500 sm:block" />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* =====================================================
//             RIGHT — FORM + IMAGE (desktop)
//         ====================================================== */}

//         <div className="order-2 flex flex-col items-center lg:items-center">
//           {/* FORM — Mobile: first, Desktop: second */}
//           <motion.div
//   id="top-form"
//   initial={{ opacity: 0, y: 25, scale: 0.97 }}
//   animate={{ opacity: 1, y: 0, scale: 1 }}
//   transition={{ duration: 0.6, delay: 0.35 }}
//   className="relative order-1 mt-2 w-full max-w-sm scroll-mt-4 lg:order-2 lg:mt-8 lg:max-w-md"
// >
//   <LeadForm id="lead-form" />
// </motion.div>

//           {/* BANNER IMAGE — DESKTOP ONLY */}
//           <motion.div
//             initial={{ opacity: 0, y: 30, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
//             className="relative order-2 mt-0 hidden items-end justify-center lg:order-1 lg:flex"
//           >
//             <HeroVisual className="relative z-10 lg:w-[24rem] xl:w-[28rem]" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import LeadForm from "./LeadForm";
import mascot from "../assets/Iec-hero.png";
import secureIcon from "../assets/card.png";
import speedIcon from "../assets/card2.png";
import supportIcon from "../assets/card3.png";

const points = [
  "IEC in 1–3 Working Days",
  "100% Online Process",
  "Dedicated IEC Advisor",
  "Lifetime Valid Code",
  "AD Code & ICEGATE Support",
  "Expert Document Check",
];

const trustBadges = [
  {
    image: secureIcon,
    label: "100% Secure Process",
    sub: "Your documents stay safe",
    grad: "from-emerald-400 to-teal-500",
    ring: "bg-emerald-50",
  },
  {
    image: speedIcon,
    label: "Fast Turnaround",
    sub: "IEC in as little as 1–3 days",
    grad: "from-orange-400 to-amber-500",
    ring: "bg-orange-50",
  },
  {
    image: supportIcon,
    label: "Dedicated Expert Support",
    sub: "Talk to a real IEC expert",
    grad: "from-sky-400 to-blue-600",
    ring: "bg-blue-50",
  },
];

const miniSteps = ["Share documents", "We file on DGFT portal", "Get your IEC"];

/* =========================================================
   HeroVisual: New complete IEC banner image
   Old floating icons, certificate card and gold banner removed.
========================================================= */

function HeroVisual({ className = "" }) {
  return (
    <div className={`relative mx-auto w-full max-w-[560px] ${className}`}>
      <motion.img
        src={mascot}
        alt="Legal Papers India IEC registration - Lifetime Valid IEC Code"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="block h-auto w-full object-contain"
        fetchPriority="high"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff]">
      {/* ================= BACKGROUND DECORATION ================= */}

      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

      {/* Soft orange glow */}
      <div className="pointer-events-none absolute right-[-100px] top-10 h-72 w-72 rounded-full bg-orange-300/15 blur-3xl" />

      {/* Bottom blue glow */}
      <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />

      {/* Decorative dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,91,160,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-8 px-4 pb-0 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:px-8 lg:pb-14 lg:pt-8">
        {/* =====================================================
            LEFT — HEADLINE + CONTENT
        ====================================================== */}

        <div className="order-1">
          {/* Small heading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-orange-500 sm:text-base sm:tracking-[0.2em]"
          >
            IEC Registration · Pan-India
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-[#126dc4] sm:text-5xl lg:text-[3.65rem]"
          >
            Get Import Export Code
            <br />
            in just{" "}
            <span className="relative inline-block italic text-orange-500">
              1–3 days.
              {/* Underline */}
              <svg
                viewBox="0 0 160 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-orange-500"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9.5C30 2.5 75 2 100 6.5C120 10 140 6 158 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Legal Papers India handles the paperwork, the DGFT portal and the
            follow-up — so your IEC doesn't sit stuck on a query you didn't know
            how to answer.
          </motion.p>

          {/* Banner image — mobile/tablet only */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="-mx-4 mt-6 sm:-mx-6 lg:hidden"
          >
            <HeroVisual />
          </motion.div>

          {/* Points list */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 sm:gap-x-6"
          >
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 text-sm font-bold leading-5 text-[#173252] sm:text-base"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" />
                {p}
              </li>
            ))}
          </motion.ul>

          {/* ================= TRUST BADGES ================= */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-7 grid max-w-xl grid-cols-3 gap-2.5 sm:mt-8 sm:gap-4"
          >
            {trustBadges.map(({ image, label, sub, grad, ring }) => (
              <motion.div
                key={label}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-2 pb-3 pt-4 text-center shadow-[0_10px_28px_-14px_rgba(10,30,70,0.3)] transition-shadow duration-300 hover:shadow-[0_22px_44px_-16px_rgba(10,30,70,0.4)] sm:px-3 sm:pb-4 sm:pt-5"
              >
                {/* Top coloured line */}
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${grad}`}
                />

                {/* Icon with soft coloured ring */}
                <span
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${ring} transition-transform duration-500 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]`}
                >
                  <img
                    src={image}
                    alt={label}
                    className="h-10 w-10 object-contain sm:h-14 sm:w-14"
                  />
                </span>

                <p className="mt-2 text-[11px] font-extrabold leading-tight text-[#173252] sm:mt-3 sm:text-sm">
                  {label}
                </p>

                {/* Subtext: tablet/desktop only */}
                <p className="mt-1 hidden text-xs leading-snug text-slate-500 sm:block">
                  {sub}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ================= RATING + MINI PROCESS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-4 max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_28px_-14px_rgba(10,30,70,0.3)] sm:mt-5"
          >
            {/* Rating row */}
            <div className="flex flex-col gap-3 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-orange-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-extrabold leading-none text-[#126dc4]">
                  4.9
                </span>

                <div>
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="mt-0.5 text-xs font-semibold text-slate-600">
                    Google rating · 2,401 reviews
                  </p>
                </div>
              </div>

              <span className="w-fit rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                1,00,000+ businesses served
              </span>
            </div>

            {/* Mini process row */}
            <div className="grid grid-cols-3 gap-2 px-3 py-4 sm:flex sm:items-center sm:justify-between sm:gap-2 sm:px-5">
              {miniSteps.map((step, i) => (
                <div
                  key={step}
                  className="flex flex-col items-center gap-1.5 text-center sm:flex-1 sm:flex-row sm:gap-2 sm:text-left"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#126dc4] to-[#1e88e5] text-xs font-bold text-white">
                    {i + 1}
                  </span>

                  <span className="text-[11px] font-bold leading-tight text-[#173252] sm:text-xs">
                    {step}
                  </span>

                  {i < miniSteps.length - 1 && (
                    <ArrowRight className="ml-auto hidden h-4 w-4 shrink-0 text-orange-500 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            RIGHT — FORM + IMAGE (desktop)
        ====================================================== */}

        <div className="order-2 flex flex-col items-center lg:items-center">
          {/* FORM — Mobile first, desktop second */}
          <motion.div
            id="top-form"
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative order-1 mt-2 w-full max-w-sm scroll-mt-4 lg:order-2 lg:mt-8 lg:max-w-md"
          >
            <LeadForm id="lead-form" />
          </motion.div>

          {/* NEW BANNER IMAGE — DESKTOP ONLY */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative order-2 mt-0 hidden items-end justify-center lg:order-1 lg:flex"
          >
            <HeroVisual className="relative z-10 lg:w-[24rem] xl:w-[28rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
