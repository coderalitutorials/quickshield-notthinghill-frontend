// import React from "react";
// import { Star, ShieldCheck, Quote, MessageSquare } from "lucide-react";

// const authenticReviews = [
//   {
//     id: 1,
//     name: "Sir Alistair Vance",
//     role: "Mayfair Property Resident",
//     image: "/images/reviews/user1.webp",
//     text: "Absolutely fantastic response from PrimeShield. Had a severe mouse infestation in our structural loft space. The team arrived promptly, tracked down entry pathways, and locked the area down permanently. Very clean work.",
//     rating: "5.0 Verified",
//   },
//   {
//     id: 2,
//     name: "Marcus Thorne",
//     role: "Director, Thorne Hospitality",
//     image: "/images/reviews/user2.webp",
//     text: "Very straightforward premium pricing structure. No hidden inspection parameters or useless traps. They cleared our active commercial kitchen area with total biological safety and full transparency.",
//     rating: "5.0 Verified",
//   },
//   {
//     id: 3,
//     name: "Lord Dominic West",
//     role: "Belgravia Estate Landlord",
//     image: "/images/reviews/user6.webp",
//     text: "Had a highly persistent bed bug outbreak across two flat layouts. PrimeShield resolved it completely using specialized deep thermal heat treatments. Unmatched reliability and execution.",
//     rating: "5.0 Verified",
//   },
//   {
//     id: 4,
//     name: "Lady Eleanor Sterling",
//     role: "Head of Operations, Sterling Logistics",
//     image: "/images/reviews/user3.webp",
//     text: "Outstanding commercial contract execution. PrimeShield setup non-toxic bio-barriers around our entire logistics warehouse layout. Constant updates, total peace of mind for our management.",
//     rating: "5.0 Verified",
//   },
// ];

// export default function PesSaveTestimonials() {
//   return (
//     <section className="relative py-24 md:py-32 bg-[#C5A86B] overflow-hidden z-20 border-b border-[#0A2240]/10 isolate">
      
//       {/* Lightweight performance-friendly background layer */}
//       <div className="absolute inset-0 bg-[radial-gradient(#0A2240_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none opacity-[0.03]" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Header Block */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
//           <div className="space-y-4 max-w-xl text-left">
//             <div className="inline-flex items-center gap-2 bg-[#0A2240] px-4 py-1.5 rounded-md shadow-md">
//               <MessageSquare className="w-3.5 h-3.5 text-[#C5A86B]" />
//               <span className="text-[10px] font-mono tracking-[0.25em] text-[#C5A86B] uppercase font-black">
//                 Client Testimonials
//               </span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0A2240] uppercase leading-none">
//               RELIABILITY <br />
//               <span className="text-white bg-[#0A2240] px-3.5 py-1 rounded-xl inline-block mt-2 shadow-lg">
//                 WITHOUT COMPROMISE
//               </span>
//             </h2>
//           </div>

//           <div className="max-w-sm text-left md:text-right">
//             <p className="text-[#0A2240]/90 text-sm leading-relaxed font-bold">
//               Read verified client reports from premium residential quarters and commercial hubs across London.
//             </p>
//           </div>
//         </div>

//         {/* Stable Masonry Grid - Transforms removed to stop layout shaking */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
//           {/* Column 1 */}
//           <div className="grid grid-cols-1 gap-6 w-full">
//             {authenticReviews.filter((_, i) => i % 2 === 0).map((review) => (
//               <ReviewCard key={review.id} review={review} />
//             ))}
//           </div>

//           {/* Column 2 - translate-y hata kar clean padding lga di hai taake height rigid rahe */}
//           <div className="grid grid-cols-1 gap-6 w-full md:pt-12">
//             {authenticReviews.filter((_, i) => i % 2 !== 0).map((review) => (
//               <ReviewCard key={review.id} review={review} />
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// function ReviewCard({ review }) {
//   return (
//     // will-change-transform hata diya hai aur shadows ko light weight rakha hai
//     <div className="w-full bg-[#0A2240] border border-white/5 p-8 rounded-[32px] flex flex-col justify-between shadow-lg relative overflow-hidden group transition-transform duration-300 ease-out hover:-translate-y-1 backface-hidden">
      
//       <Quote className="absolute right-6 top-6 w-24 h-24 text-white/[0.015] pointer-events-none select-none" strokeWidth={1} />

//       <div>
//         {/* Card Header: Stars Line */}
//         <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
//           <div className="flex items-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className="w-4 h-4 fill-[#C5A86B] text-[#C5A86B]"
//                 strokeWidth={0}
//               />
//             ))}
//           </div>

//           <span className="text-[10px] font-mono font-black tracking-wider text-[#C5A86B] bg-white/5 border border-white/10 px-3 py-0.5 rounded-md">
//             {review.rating}
//           </span>
//         </div>

//         {/* Real Text Review Block */}
//         <div className="relative text-left mb-8 z-10">
//           <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium">
//             "{review.text}"
//           </p>
//         </div>
//       </div>

//       {/* Profile Signature Line */}
//       <div className="flex items-center gap-4 pt-5 border-t border-white/5 relative z-10">
//         <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-0.5 shrink-0">
//           <img
//             src={review.image}
//             alt={review.name}
//             className="w-full h-full object-cover rounded-lg grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-opacity duration-300"
//             loading="lazy"
//           />
//         </div>

//         <div className="text-left min-w-0 flex-grow">
//           <div className="flex items-center gap-1.5">
//             <h4 className="text-sm font-black text-white uppercase tracking-wider truncate">
//               {review.name}
//             </h4>
//             <ShieldCheck className="w-4 h-4 text-[#C5A86B] shrink-0" />
//           </div>

//           <span className="text-[11px] font-semibold text-slate-400 block mt-0.5 truncate">
//             {review.role}
//           </span>
//         </div>
//       </div>

//     </div>
//   );
// }













import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Quote,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

// Fictional sample testimonials for design preview only.
// Replace with genuine, authorised customer reviews before publishing.

const reviews = [
  {
    id: "01",
    name: "Edward Collins",
    initials: "EC",
    location: "Notting Hill, London",
    service: "Rodent Control",
    text:
      "We noticed unusual sounds coming from behind the kitchen cabinets. The team explained what might be happening, discussed possible access points and helped us understand the next steps. The communication was clear throughout.",
  },
  {
    id: "02",
    name: "Isabella Morgan",
    initials: "IM",
    location: "West London",
    service: "Bed Bug Treatment",
    text:
      "Finding signs of bed bugs was stressful, but the inspection process and available treatment options were explained carefully. It was reassuring to have a straightforward conversation about the situation.",
  },
  {
    id: "03",
    name: "Henry Wallace",
    initials: "HW",
    location: "London",
    service: "Wasp Control",
    text:
      "We were concerned about wasp activity near the roofline. Our questions were taken seriously, and the advice helped us understand what needed to happen next.",
  },
];

export default function ClientJournal() {
  return (
    <section
      aria-labelledby="client-journal-title"
      className="relative overflow-hidden bg-[#F8F1E4] text-[#0A2240]"
    >
      {/* Decorative lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#0A2240]/[0.04]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#0A2240]/[0.04]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        {/* TOP INTRO */}
        <div className="mb-16 flex flex-wrap items-center justify-between gap-6 border-b border-[#0A2240]/20 pb-8">
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-[#B99547]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#96733B]">
              The Client Journal
            </span>
          </div>

          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0A2240]/50">
            QuickShield Services Notting Hill
          </span>
        </div>

        {/* FEATURED STORY */}
        <div className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
          {/* Left heading */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#96733B]">
                Experiences & Perspectives
              </span>

              <h2
                id="client-journal-title"
                className="mt-8 text-[clamp(3.5rem,5.5vw,7rem)] font-semibold leading-[0.98] tracking-[-0.065em]"
              >
                THE
                <br />
                HUMAN
                <br />
                <span className="font-serif font-normal italic text-[#B99547]">
                  side.
                </span>
              </h2>

              <p className="mt-9 max-w-sm text-base leading-8 text-[#536071]">
                Pest control is about more than solving
                problems. It is also about listening,
                explaining and helping people feel
                informed about their property.
              </p>
            </div>

            <div className="mt-12 hidden lg:block">
              <span className="font-serif text-[120px] leading-none text-[#B99547]/25">
                “
              </span>
            </div>
          </div>

          {/* Main featured story */}
          <article className="relative overflow-hidden bg-[#0A2240] text-[#F8F1E4]">
            <div className="absolute right-0 top-0 h-40 w-40 border-b border-l border-[#B99547]/30" />

            <div className="relative flex h-full min-h-[530px] flex-col justify-between p-8 sm:p-12 lg:p-16">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8BA7C]">
                  Featured Story / 01
                </span>

                <span className="rounded-full border border-[#B99547]/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#D8BA7C]">
                  {reviews[0].service}
                </span>
              </div>

              <div className="my-16">
                <Quote
                  size={42}
                  strokeWidth={1}
                  className="mb-9 text-[#B99547]"
                />

                <blockquote>
                  <p className="font-serif text-[clamp(1.8rem,3vw,3.3rem)] leading-[1.4] tracking-[-0.025em]">
                    “{reviews[0].text}”
                  </p>
                </blockquote>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/20 pt-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#B99547] font-semibold text-[#D8BA7C]">
                    {reviews[0].initials}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {reviews[0].name}
                    </h3>

                    <p className="mt-1 text-xs text-white/55">
                      {reviews[0].location}
                    </p>
                  </div>
                </div>

                <span className="font-serif text-4xl italic text-[#B99547]">
                  01.
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* SECONDARY STORIES */}
        <div className="mt-24 sm:mt-32">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#96733B]">
                More Client Perspectives
              </span>

              <h3 className="mt-5 text-[clamp(2.4rem,4vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Every experience
                <span className="font-serif font-normal italic text-[#B99547]">
                  {" "}has a story.
                </span>
              </h3>
            </div>

            <span className="text-sm font-semibold text-[#96733B]">
              02 — 03
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {reviews.slice(1).map((review, index) => (
              <article
                key={review.id}
                className={`group relative flex flex-col justify-between overflow-hidden border border-[#0A2240]/15 p-8 transition-all duration-500 hover:border-[#B99547] sm:p-12 ${
                  index === 0
                    ? "bg-[#EDE5D6]"
                    : "bg-[#F7F5F0]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-5">
                    <span className="font-serif text-6xl italic text-[#B99547]/70">
                      {review.id}
                    </span>

                    <MessageSquare
                      size={26}
                      strokeWidth={1.3}
                      className="text-[#B99547]"
                    />
                  </div>

                  <span className="mt-12 inline-block border-b border-[#B99547] pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#96733B]">
                    {review.service}
                  </span>

                  <blockquote className="mt-8">
                    <p className="text-xl font-medium leading-[1.7] tracking-[-0.025em] sm:text-2xl">
                      “{review.text}”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-14 flex items-center gap-4 border-t border-[#0A2240]/15 pt-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2240] text-sm font-semibold text-[#F8F1E4]">
                    {review.initials}
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {review.name}
                    </h4>

                    <p className="mt-1 text-xs text-[#536071]">
                      {review.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-24 border-t border-[#0A2240]/20 pt-12 sm:mt-32">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#96733B]">
                Your Property Matters
              </span>

              <h3 className="mt-5 text-[clamp(2.2rem,4vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.05em]">
                Let's start with
                <span className="font-serif font-normal italic text-[#B99547]">
                  {" "}a conversation.
                </span>
              </h3>
            </div>

            <Link
              to="/contact-us"
              className="group inline-flex w-fit items-center gap-6 rounded-full bg-[#0A2240] px-8 py-5 text-sm font-bold text-[#F8F1E4] transition-all duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
            >
              Contact QuickShield

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        <p className="mt-10 text-xs leading-6 text-[#536071]">
          Demonstration testimonials shown for layout preview only.
          Replace with genuine customer feedback before publishing.
        </p>
      </div>
    </section>
  );
}
