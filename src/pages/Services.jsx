



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus } from "lucide-react";

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", code: "ANT-01", details: "Permanent nest eradication using advanced baiting matrices." },
//     { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", code: "BUG-02", details: "Industrial-grade thermal heat and targeted spray applications." },
//     { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", code: "MTH-03", details: "Specialized target applications for high-end carpets." },
//     { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", code: "BTL-04", details: "Precise treatments along baseboards and dark storage zones." },
//     { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", code: "COCK-05", details: "High-performance gel baits for commercial environments." },
//     { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", code: "MCE-06", details: "Comprehensive tracking and structural proofing." },
//     { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", code: "FLE-07", details: "Floor space misting to halt flea multiplication loops." },
//     { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", code: "WSP-08", details: "Fast-acting chemical injection for roofline nests." },
//     { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", code: "BEE-09", details: "Secure live extraction for colony preservation." },
//     { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", code: "SQR-10", details: "Heavy-gauge metal sealing and entry blockades." },
//     { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", code: "HYG-11", details: "Post-infestation biocide cleansing and sanitation." },
//     { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", code: "BRD-12", details: "Architectural UV-stabilized netting for facade." },
//   ];

//   const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen py-20 px-6 md:px-12">
//       <div className="max-w-[1400px] mx-auto border-l border-[#0A2240]/20">
        
//         {/* HEADER SECTION */}
//         <div className="pl-6 md:pl-12 mb-20">
//           <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-[#0A2240] mb-8">
//             Our pest <br/>Services
//           </h1>
//           <div className="flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-[#0A2240]/60">
//             {categories.map(cat => (
//               <button 
//                 key={cat} 
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 border-b-2 ${selectedCategory === cat ? "border-[#0A2240] text-[#0A2240]" : "border-transparent"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* BRUTALIST GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((s) => (
//             <div 
//               key={s.id} 
//               onClick={() => navigate("/contact-us")}
//               className="group relative border-b border-r border-[#0A2240]/20 p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0A2240]"
//             >
//               {/* DESKTOP HOVER IMAGE */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-500 hidden md:block"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* MOBILE/TABLET FIXED IMAGE */}
//               <div 
//                 className="absolute right-4 top-4 w-16 h-16 bg-cover bg-center rounded-lg border border-[#0A2240]/30 md:hidden"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* CONTENT LAYER */}
//               <div className="relative z-10 text-[#0A2240] group-hover:text-[#b99547] transition-colors pr-20 md:pr-0">
//                 <span className="font-mono text-[10px] mb-8 block opacity-40">{s.code}</span>
//                 <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">{s.title}</h2>
//                 <p className="text-sm font-medium leading-relaxed opacity-70 mb-10 max-w-xs">{s.details}</p>
                
//                 <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
//                   Initiate <Plus size={16} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus } from "lucide-react";

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", code: "ANT-01", details: "Permanent nest eradication using advanced baiting matrices." },
//     { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", code: "BUG-02", details: "Industrial-grade thermal heat and targeted spray applications." },
//     { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", code: "MTH-03", details: "Specialized target applications for high-end carpets." },
//     { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", code: "BTL-04", details: "Precise treatments along baseboards and dark storage zones." },
//     { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", code: "COCK-05", details: "High-performance gel baits for commercial environments." },
//     { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", code: "MCE-06", details: "Comprehensive tracking and structural proofing." },
//     { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", code: "FLE-07", details: "Floor space misting to halt flea multiplication loops." },
//     { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", code: "WSP-08", details: "Fast-acting chemical injection for roofline nests." },
//     { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", code: "BEE-09", details: "Secure live extraction for colony preservation." },
//     { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", code: "SQR-10", details: "Heavy-gauge metal sealing and entry blockades." },
//     { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", code: "HYG-11", details: "Post-infestation biocide cleansing and sanitation." },
//     { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", code: "BRD-12", details: "Architectural UV-stabilized netting for facade." },
//   ];

//   const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen py-20 px-6 md:px-12">
//       <div className="max-w-[1400px] mx-auto border-l border-[#0A2240]/20">
        
//         {/* HEADER SECTION */}
//         <div className="pl-6 md:pl-12 mb-20">
//           <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-[#0A2240] mb-8">
//             Our pest <br/>Services
//           </h1>
//           <div className="flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-[#0A2240]/60">
//             {categories.map(cat => (
//               <button 
//                 key={cat} 
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 border-b-2 ${selectedCategory === cat ? "border-[#0A2240] text-[#0A2240]" : "border-transparent"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* BRUTALIST GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((s) => (
//             <div 
//               key={s.id} 
//               onClick={() => navigate("/contact-us")}
//               className="group relative border-b border-r border-[#0A2240]/20 p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0A2240]"
//             >
//               {/* DESKTOP HOVER IMAGE - Increased opacity to 0.4 for better visibility */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.4] transition-opacity duration-500 hidden md:block"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* MOBILE/TABLET FIXED IMAGE */}
//               <div 
//                 className="absolute right-4 top-4 w-16 h-16 bg-cover bg-center rounded-lg border border-[#0A2240]/30 md:hidden"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* CONTENT LAYER */}
//               <div className="relative z-10 text-[#0A2240] group-hover:text-[#b99547] transition-colors pr-20 md:pr-0">
//                 <span className="font-mono text-[10px] mb-8 block opacity-40 group-hover:opacity-60">{s.code}</span>
//                 <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">{s.title}</h2>
//                 <p className="text-sm font-medium leading-relaxed opacity-70 mb-10 max-w-xs">{s.details}</p>
                
//                 <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
//                   BOOK SERVICE <Plus size={16} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }





// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Plus } from "lucide-react";

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");
  
//   // Ref map for scrolling
//   const serviceRefs = useRef({});

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", code: "ANT-01", details: "Permanent nest eradication using advanced baiting matrices." },
//     { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", code: "BUG-02", details: "Industrial-grade thermal heat and targeted spray applications." },
//     { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", code: "MTH-03", details: "Specialized target applications for high-end carpets." },
//     { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", code: "BTL-04", details: "Precise treatments along baseboards and dark storage zones." },
//     { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", code: "COCK-05", details: "High-performance gel baits for commercial environments." },
//     { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", code: "MCE-06", details: "Comprehensive tracking and structural proofing." },
//     { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", code: "FLE-07", details: "Floor space misting to halt flea multiplication loops." },
//     { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", code: "WSP-08", details: "Fast-acting chemical injection for roofline nests." },
//     { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", code: "BEE-09", details: "Secure live extraction for colony preservation." },
//     { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", code: "SQR-10", details: "Heavy-gauge metal sealing and entry blockades." },
//     { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", code: "HYG-11", details: "Post-infestation biocide cleansing and sanitation." },
//     { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", code: "BRD-12", details: "Architectural UV-stabilized netting for facade." },
//   ];

//   // Scroll to service effect
//   useEffect(() => {
//     if (location.state?.scrollToService) {
//       setSelectedCategory("All");
//       setTimeout(() => {
//         const target = serviceRefs.current[location.state.scrollToService];
//         if (target) {
//           target.scrollIntoView({ behavior: "smooth", block: "center" });
//         }
//       }, 300);
//     }
//   }, [location]);

//   const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen py-20 px-6 md:px-12">
//       <div className="max-w-[1400px] mx-auto border-l border-[#0A2240]/20">
        
//         <div className="pl-6 md:pl-12 mb-20">
//           <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-[#0A2240] mb-8">
//             Our pest <br/>Services
//           </h1>
//           <div className="flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-[#0A2240]/60">
//             {categories.map(cat => (
//               <button 
//                 key={cat} 
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 border-b-2 ${selectedCategory === cat ? "border-[#0A2240] text-[#0A2240]" : "border-transparent"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((s) => (
//             <div 
//               key={s.id}
//               ref={(el) => (serviceRefs.current[s.title] = el)}
//               onClick={() => navigate("/contact-us")}
//               className="group relative border-b border-r border-[#0A2240]/20 p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0A2240]"
//             >
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.4] transition-opacity duration-500 hidden md:block"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
//               <div 
//                 className="absolute right-4 top-4 w-16 h-16 bg-cover bg-center rounded-lg border border-[#0A2240]/30 md:hidden"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
//               <div className="relative z-10 text-[#0A2240] group-hover:text-[#b99547] transition-colors pr-20 md:pr-0">
//                 <span className="font-mono text-[10px] mb-8 block opacity-40 group-hover:opacity-60">{s.code}</span>
//                 <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">{s.title}</h2>
//                 <p className="text-sm font-medium leading-relaxed opacity-70 mb-10 max-w-xs">{s.details}</p>
//                 <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
//                   BOOK SERVICE <Plus size={16} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }



























// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { ArrowUpRight, ArrowDown, ArrowRight, Phone, MapPin, Check, Sparkles } from "lucide-react";

// const NAVY = "#0A2240";
// const GOLD = "#B99547";
// const PHONE = "+44 7417 502611";
// const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

// const servicesData = [
//   { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", kicker: "Small pests. Serious attention.", details: "Targeted ant control for London homes and workplaces, with attention to trails, potential nesting areas and appropriate treatment options." },
//   { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", kicker: "Take back your comfort.", details: "Bed bug inspections and treatment options for affected bedrooms, furniture and surrounding areas." },
//   { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", kicker: "Care for the details.", details: "Carpet moth assessment and treatment considerations for vulnerable carpets, rugs and textiles." },
//   { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", kicker: "Protect your interiors.", details: "Carpet beetle identification and control for affected fabrics, storage areas and interior spaces." },
//   { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", kicker: "A cleaner way forward.", details: "Cockroach management for kitchens and other affected spaces, informed by activity and property conditions." },
//   { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", kicker: "Find the source.", details: "Rodent control with attention to activity, entry points and practical property proofing measures." },
//   { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", kicker: "Restore peace of mind.", details: "Flea control options for affected indoor areas, including advice on preparation and follow-up precautions." },
//   { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", kicker: "Address the nest.", details: "Wasp nest assessment and suitable control options for homes, gardens and business premises." },
//   { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", kicker: "A considered response.", details: "Assessment of bee activity and guidance on appropriate specialist assistance or relocation where suitable." },
//   { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", kicker: "Look beyond the loft.", details: "Squirrel activity assessment and property proofing considerations for roof spaces and possible access points." },
//   { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", kicker: "Prevention matters.", details: "Pest-related hygiene and prevention support, considering affected areas and potential contamination concerns." },
//   { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", kicker: "Respect the architecture.", details: "Bird deterrent and proofing options, including netting for appropriate building features and affected areas." },
// ];

// const aliases = {
//   "Bed Bugs Heat Treatment": "Bed Bugs", "Bed Bug Treatment": "Bed Bugs",
//   "Rat & Mice Control": "Rats & Mice", "Rats and Mice": "Rats & Mice", "Rodent Control": "Rats & Mice",
//   "Wasp Control": "Wasp Removal", "Wasp Nest Removal": "Wasp Removal",
//   "Carpet Moth Treatment": "Moth Treatment", "Carpet Moth Control": "Moth Treatment",
//   "Cockroach Control": "Cockroach", "Flea Treatment": "Flea Eradication",
//   "Bird Proofing": "Bird Netting", "Bee Control": "Bee Relocation", "Squirrel Control": "Squirrels",
//   "Ants": "Ant Control", "Ants Control": "Ant Control", "Carpet Beetle": "Beetle Removal",
// };

// function Eyebrow({ children, light = false }) {
//   return <div className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-[#E8D5AE]" : "text-[#8B6C36]"}`}><span className={`h-px w-9 ${light ? "bg-[#E8D5AE]" : "bg-[#B99547]"}`} />{children}</div>;
// }

// function ServiceFeature({ service, index, onEnquire, setRef }) {
//   const reverse = index % 2 === 1;
//   return (
//     <article ref={setRef} className="group scroll-mt-32  border-t border-[#0A2240]/15 py-9 sm:py-12 lg:py-16">
//       <div className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${reverse ? "" : ""}`}>
//         <div className={`relative min-w-0 overflow-hidden bg-[#D9D4C9] lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
//           <div className="relative h-[350px]  overflow-hidden sm:h-[480px] lg:h-[570px]">
//             <img src={service.img} alt={`${service.title} pest control`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.055]" />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#071A30]/55 via-transparent to-transparent" />
//             <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white sm:bottom-9 sm:left-9 sm:right-9">
//               <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">QuickShield / Notting Hill</span>
//               <span className="font-serif text-4xl italic text-[#E8D5AE]">{String(service.id).padStart(2, "0")}</span>
//             </div>
//           </div>
//         </div>
//         <div className={`flex min-w-0 flex-col justify-center py-3 lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"}`}>
//           <Eyebrow>{service.cat}</Eyebrow>
//           <p className="mt-9 font-serif text-xl italic text-[#9D7C42] sm:text-2xl">{service.kicker}</p>
//           <h3 className="mt-3 text-[clamp(3rem,5.4vw,6.6rem)] font-medium leading-[0.99] tracking-[-0.075em] text-[#0A2240]">{service.title}</h3>
//           <p className="mt-7 max-w-md text-[15px] leading-8 text-[#5E6975]">{service.details}</p>
//           <div className="mt-10 border-t border-[#0A2240]/20 pt-7">
//             <button type="button" onClick={() => onEnquire(service.title)} className="group/btn inline-flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A2240]">
//               <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2240] text-white transition-all duration-300 group-hover/btn:bg-[#B99547] group-hover/btn:text-[#0A2240]"><ArrowUpRight size={19} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" /></span>
//               Enquire about this service
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const refs = useRef({});
//   const scrollRequest = useRef(null);
//   const collectionRef = useRef(null);

//   const filtered = useMemo(() => selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory), [selectedCategory]);

//   useEffect(() => {
//     const requested = location.state?.scrollToService;
//     if (!requested) return;
//     scrollRequest.current = aliases[requested] || requested;
//     setSelectedCategory("All");
//     const timer = window.setTimeout(() => {
//       const element = refs.current[scrollRequest.current];
//       if (element) { element.scrollIntoView({ behavior: "smooth", block: "start" }); scrollRequest.current = null; }
//     }, 350);
//     return () => window.clearTimeout(timer);
//   }, [location.key, location.state?.scrollToService]);

//   const changeCategory = (category) => {
//     setSelectedCategory(category);
//     window.requestAnimationFrame(() => collectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
//   };

//   const onEnquire = (service) => navigate("/contact-us", { state: { selectedService: service } });

//   return (
//     <main className="overflow-x-hidden bg-[#F7F5EF] text-[#0A2240]">
//       {/* CINEMATIC COVER */}
//       <section className="relative isolate min-h-[760px] overflow-hidden bg-[#0A2240] text-white sm:min-h-[850px] lg:min-h-[900px]">
//         <div className="absolute inset-0 -z-20"><img src="/images/shieldteam.webp" alt="" aria-hidden="true" fetchPriority="high" className="h-full w-full object-cover object-center" /></div>
//         <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,20,39,0.97)_0%,rgba(5,20,39,0.87)_43%,rgba(5,20,39,0.34)_100%)]" />
//         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06182D]/80 via-transparent to-[#06182D]/20" />
//         <div className="relative mx-auto flex min-h-[760px] max-w-[1500px] flex-col justify-between px-6 pb-10 pt-36 sm:min-h-[850px] sm:px-10 sm:pt-44 lg:min-h-[900px] lg:px-16 lg:pt-48">
//           <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60"><Link to="/" className="transition-colors hover:text-white">Home</Link><span className="h-px w-7 bg-[#B99547]" /><span className="text-[#E8D5AE]">Services</span></div>
//           <div className="max-w-[1100px] pb-10 lg:pb-16">
//             <Eyebrow light>Property care, thoughtfully delivered</Eyebrow>
//             <h1 className="mt-8 text-[clamp(4.3rem,10vw,11rem)] font-medium leading-[0.84] tracking-[-0.085em]">THE ART OF<br /><span className="font-serif font-normal italic text-[#E8D5AE]">protection.</span></h1>
//             <div className="mt-10 flex max-w-3xl flex-col gap-8 border-t border-white/25 pt-8 sm:flex-row sm:items-end sm:justify-between">
//               <p className="max-w-lg text-base leading-8 text-white/80">Considered pest control services for the spaces you value. From insects and rodents to bird proofing, discover our approach in Notting Hill, London.</p>
//               <a href="#service-collection" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#E8D5AE] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E8D5AE] transition-colors hover:bg-[#E8D5AE] hover:text-[#0A2240]">Explore services <ArrowDown size={17} /></a>
//             </div>
//           </div>
//           <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60"><span>QuickShield Services Notting Hill</span><span>London · United Kingdom</span></div>
//         </div>
//       </section>

//       {/* EDITORIAL INTRO */}
//       <section className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[0.36fr_1fr] lg:gap-20 lg:px-16 lg:py-40">
//         <div><Eyebrow>01 / What we do</Eyebrow></div>
//         <div><h2 className="max-w-[1080px] text-[clamp(3rem,6.3vw,7rem)] font-medium leading-[1.04] tracking-[-0.07em]">Different challenges.<br /><span className="font-serif font-normal italic text-[#B99547]">One considered</span> approach.</h2><div className="mt-10 grid gap-8 border-t border-[#0A2240]/20 pt-8 md:grid-cols-2 md:gap-12"><p className="text-xl font-medium leading-9 tracking-[-0.025em]">Pest control should respond to the property, not follow a one-size-fits-all formula.</p><p className="text-[15px] leading-8 text-[#5E6975]">Explore pest control services for residential and commercial properties. Each concern calls for attention to the pest, the environment and appropriate management options.</p></div></div>
//       </section>

//       {/* CATEGORY INDEX AND SERVICE FEATURES */}
//       <section id="service-collection" ref={collectionRef} className="scroll-mt-20 bg-[#F7F5EF] pb-24 sm:pb-32 lg:pb-40">
//         <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
//           <div className="sticky top-0 z-30 -mx-6 border-y border-[#0A2240]/15 bg-[#F7F5EF]/95 px-6 py-5 backdrop-blur-xl sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
//             <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-center gap-4"><span className="text-[11px] font-bold uppercase tracking-[0.17em]">Explore the collection</span><span className="rounded-full bg-[#0A2240] px-3 py-1 text-xs text-white">{filtered.length.toString().padStart(2, "0")}</span></div>
//               <div className="flex flex-wrap gap-x-6 gap-y-3">{categories.map(category => <button key={category} type="button" aria-pressed={selectedCategory === category} onClick={() => changeCategory(category)} className={`border-b-2 pb-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${selectedCategory === category ? "border-[#B99547] text-[#0A2240]" : "border-transparent text-[#0A2240]/45 hover:text-[#0A2240]"}`}>{category}</button>)}</div>
//             </div>
//           </div>
//           <div className="pt-3">{filtered.map((service, index) => <ServiceFeature key={service.id} service={service} index={index} setRef={el => { refs.current[service.title] = el; }} onEnquire={onEnquire} />)}</div>
//           <div className="flex flex-col gap-4 border-t border-[#0A2240]/20 pt-7 text-sm text-[#5E6975] sm:flex-row sm:items-center sm:justify-between"><span>Showing {filtered.length} of {servicesData.length} services</span><Link to="/contact-us" className="inline-flex items-center gap-2 font-semibold text-[#0A2240] hover:text-[#98763B]">Not sure which service you need? <ArrowUpRight size={18} /></Link></div>
//         </div>
//       </section>

//       {/* MIDNIGHT BRAND STATEMENT */}
//       <section className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32 lg:py-40">
//         <div className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full border border-[#B99547]/15" />
//         <div className="relative mx-auto grid max-w-[1500px] gap-14 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24 lg:px-16">
//           <div><Eyebrow light>02 / The QuickShield perspective</Eyebrow><h2 className="mt-8 text-[clamp(3.2rem,6.5vw,7.6rem)] font-medium leading-[1.01] tracking-[-0.075em]">Look closer.<br /><span className="font-serif font-normal italic text-[#E8D5AE]">Think further.</span></h2></div>
//           <div className="space-y-8"><p className="max-w-lg text-base leading-8 text-white/70">Effective pest management starts with understanding what is happening and why. We focus on practical options appropriate to the property and the issue.</p><div className="grid gap-5 border-t border-white/20 pt-8 sm:grid-cols-2"><div className="flex items-start gap-3"><Check size={19} className="mt-1 shrink-0 text-[#E8D5AE]" /><span className="text-sm leading-7 text-white/80">Residential and commercial enquiries</span></div><div className="flex items-start gap-3"><Check size={19} className="mt-1 shrink-0 text-[#E8D5AE]" /><span className="text-sm leading-7 text-white/80">Treatment and prevention considerations</span></div></div></div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="bg-[#E8D5AE] py-24 sm:py-32 lg:py-40"><div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16"><Eyebrow>03 / Your next step</Eyebrow><div className="mt-9 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between"><div><h2 className="text-[clamp(3.5rem,8vw,9rem)] font-medium leading-[0.95] tracking-[-0.08em]">LET'S MAKE<br /><span className="font-serif font-normal italic text-[#96723C]">a plan.</span></h2><p className="mt-8 max-w-xl text-base leading-8 text-[#0A2240]/75">Tell us what you have noticed. Contact QuickShield Services Notting Hill to discuss suitable next steps for your property.</p></div><div className="flex flex-col gap-3"><Link to="/contact-us" className="group inline-flex items-center justify-between gap-8 rounded-full bg-[#0A2240] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#B99547] hover:text-[#0A2240]">Send an enquiry <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link><a href="tel:+447417502611" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0A2240]/35 px-8 py-5 text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-white"><Phone size={17} />{PHONE}<ArrowRight size={17} /></a></div></div><div className="mt-20 flex items-center gap-3 border-t border-[#0A2240]/20 pt-6 text-xs text-[#0A2240]/70"><MapPin size={17} />3A Denbigh Rd, London W11 2SJ, United Kingdom</div></div></section>
//     </main>
//   );
// }













import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowDown, ArrowRight, Phone, MapPin, Check, Sparkles } from "lucide-react";

const NAVY = "#0A2240";
const GOLD = "#B99547";
const PHONE = "+44 7417 502611";
const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

const servicesData = [
  { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", kicker: "Small pests. Serious attention.", details: "Targeted ant control for London homes and workplaces, with attention to trails, potential nesting areas and appropriate treatment options." },
  { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", kicker: "Take back your comfort.", details: "Bed bug inspections and treatment options for affected bedrooms, furniture and surrounding areas." },
  { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", kicker: "Care for the details.", details: "Carpet moth assessment and treatment considerations for vulnerable carpets, rugs and textiles." },
  { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", kicker: "Protect your interiors.", details: "Carpet beetle identification and control for affected fabrics, storage areas and interior spaces." },
  { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", kicker: "A cleaner way forward.", details: "Cockroach management for kitchens and other affected spaces, informed by activity and property conditions." },
  { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", kicker: "Find the source.", details: "Rodent control with attention to activity, entry points and practical property proofing measures." },
  { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", kicker: "Restore peace of mind.", details: "Flea control options for affected indoor areas, including advice on preparation and follow-up precautions." },
  { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", kicker: "Address the nest.", details: "Wasp nest assessment and suitable control options for homes, gardens and business premises." },
  { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", kicker: "A considered response.", details: "Assessment of bee activity and guidance on appropriate specialist assistance or relocation where suitable." },
  { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", kicker: "Look beyond the loft.", details: "Squirrel activity assessment and property proofing considerations for roof spaces and possible access points." },
  { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", kicker: "Prevention matters.", details: "Pest-related hygiene and prevention support, considering affected areas and potential contamination concerns." },
  { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", kicker: "Respect the architecture.", details: "Bird deterrent and proofing options, including netting for appropriate building features and affected areas." },
];

const aliases = {
  "Bed Bugs Heat Treatment": "Bed Bugs", "Bed Bug Treatment": "Bed Bugs",
  "Rat & Mice Control": "Rats & Mice", "Rats and Mice": "Rats & Mice", "Rodent Control": "Rats & Mice",
  "Wasp Control": "Wasp Removal", "Wasp Nest Removal": "Wasp Removal",
  "Carpet Moth Treatment": "Moth Treatment", "Carpet Moth Control": "Moth Treatment",
  "Cockroach Control": "Cockroach", "Flea Treatment": "Flea Eradication",
  "Bird Proofing": "Bird Netting", "Bee Control": "Bee Relocation", "Squirrel Control": "Squirrels",
  "Ants": "Ant Control", "Ants Control": "Ant Control", "Carpet Beetle": "Beetle Removal",
};

function Eyebrow({ children, light = false }) {
  return <div className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-[#E8D5AE]" : "text-[#8B6C36]"}`}><span className={`h-px w-9 ${light ? "bg-[#E8D5AE]" : "bg-[#B99547]"}`} />{children}</div>;
}

function ServiceFeature({ service, index, setRef }) {
  const reverse = index % 2 === 1;
  return (
    <Link to="/contact-us" state={{ selectedService: service.title }} ref={setRef} aria-label={`Enquire about ${service.title}`} className="group block cursor-pointer scroll-mt-32 border-t border-[#0A2240]/15 py-9 sm:py-12 lg:py-16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99547]">
      <div className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${reverse ? "" : ""}`}>
        <div className={`relative min-w-0 overflow-hidden bg-[#D9D4C9] lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative h-[350px]  overflow-hidden sm:h-[480px] lg:h-[570px]">
            <img src={service.img} alt={`${service.title} pest control`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.055]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A30]/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white sm:bottom-9 sm:left-9 sm:right-9">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">QuickShield / Notting Hill</span>
              <span className="font-serif text-4xl italic text-[#E8D5AE]">{String(service.id).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
        <div className={`flex min-w-0 flex-col justify-center py-3 lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"}`}>
          <Eyebrow>{service.cat}</Eyebrow>
          <p className="mt-9 font-serif text-xl italic text-[#9D7C42] sm:text-2xl">{service.kicker}</p>
          <h3 className="mt-3 text-[clamp(3rem,5.4vw,6.6rem)] font-medium leading-[0.99] tracking-[-0.075em] text-[#0A2240]">{service.title}</h3>
          <p className="mt-7 max-w-md text-[15px] leading-8 text-[#5E6975]">{service.details}</p>
          <div className="mt-10 border-t border-[#0A2240]/20 pt-7">
            <span className="group/btn inline-flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A2240]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2240] text-white transition-all duration-300 group-hover/btn:bg-[#B99547] group-hover/btn:text-[#0A2240]"><ArrowUpRight size={19} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" /></span>
              Enquire about this service
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const refs = useRef({});
  const scrollRequest = useRef(null);
  const collectionRef = useRef(null);

  const filtered = useMemo(() => selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory), [selectedCategory]);

  useEffect(() => {
    const requested = location.state?.scrollToService;
    if (!requested) return;
    scrollRequest.current = aliases[requested] || requested;
    setSelectedCategory("All");
    const timer = window.setTimeout(() => {
      const element = refs.current[scrollRequest.current];
      if (element) { element.scrollIntoView({ behavior: "smooth", block: "start" }); scrollRequest.current = null; }
    }, 350);
    return () => window.clearTimeout(timer);
  }, [location.key, location.state?.scrollToService]);

  const changeCategory = (category) => {
    setSelectedCategory(category);
    window.requestAnimationFrame(() => collectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const onEnquire = (service) => navigate("/contact-us", { state: { selectedService: service } });

  return (
    <main className="overflow-x-hidden bg-[#F7F5EF] text-[#0A2240]">
      {/* CINEMATIC COVER */}
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#0A2240] text-white sm:min-h-[850px] lg:min-h-[900px]">
        <div className="pointer-events-none absolute inset-0 -z-20 flex items-start justify-center overflow-hidden bg-[#0A2240]">
          <img
            src="/images/shieldteam.webp"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="mt-8 h-[calc(100%-4rem)] w-[94%] object-contain object-top sm:mt-12 sm:h-[calc(100%-6rem)] sm:w-[92%] lg:mt-16 lg:h-[calc(100%-8rem)] lg:w-[90%]"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,20,39,0.97)_0%,rgba(5,20,39,0.87)_43%,rgba(5,20,39,0.34)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06182D]/80 via-transparent to-[#06182D]/20" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1500px] flex-col justify-between px-6 pb-10 pt-36 sm:min-h-[850px] sm:px-10 sm:pt-44 lg:min-h-[900px] lg:px-16 lg:pt-48">
          <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60"><Link to="/" className="transition-colors hover:text-white">Home</Link><span className="h-px w-7 bg-[#B99547]" /><span className="text-[#E8D5AE]">Services</span></div>
          <div className="max-w-[1100px] pb-10 lg:pb-16">
            <Eyebrow light>Property care, thoughtfully delivered</Eyebrow>
            <h1 className="mt-8 text-[clamp(4.3rem,10vw,11rem)] font-medium leading-[0.84] tracking-[-0.085em]">THE ART OF<br /><span className="font-serif font-normal italic text-[#E8D5AE]">protection.</span></h1>
            <div className="mt-10 flex max-w-3xl flex-col gap-8 border-t border-white/25 pt-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg text-base leading-8 text-white/80">Considered pest control services for the spaces you value. From insects and rodents to bird proofing, discover our approach in Notting Hill, London.</p>
              <a href="#service-collection" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#E8D5AE] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E8D5AE] transition-colors hover:bg-[#E8D5AE] hover:text-[#0A2240]">Explore services <ArrowDown size={17} /></a>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60"><span>QuickShield Services Notting Hill</span><span>London · United Kingdom</span></div>
        </div>
      </section>

      {/* EDITORIAL INTRO */}
      <section className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[0.36fr_1fr] lg:gap-20 lg:px-16 lg:py-40">
        <div><Eyebrow>01 / What we do</Eyebrow></div>
        <div><h2 className="max-w-[1080px] text-[clamp(3rem,6.3vw,7rem)] font-medium leading-[1.04] tracking-[-0.07em]">Different challenges.<br /><span className="font-serif font-normal italic text-[#B99547]">One considered</span> approach.</h2><div className="mt-10 grid gap-8 border-t border-[#0A2240]/20 pt-8 md:grid-cols-2 md:gap-12"><p className="text-xl font-medium leading-9 tracking-[-0.025em]">Pest control should respond to the property, not follow a one-size-fits-all formula.</p><p className="text-[15px] leading-8 text-[#5E6975]">Explore pest control services for residential and commercial properties. Each concern calls for attention to the pest, the environment and appropriate management options.</p></div></div>
      </section>

      {/* CATEGORY INDEX AND SERVICE FEATURES */}
      <section id="service-collection" ref={collectionRef} className="scroll-mt-20 bg-[#F7F5EF] pb-24 sm:pb-32 lg:pb-40">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <div className="sticky top-0 z-30 -mx-6 border-y border-[#0A2240]/15 bg-[#F7F5EF]/95 px-6 py-5 backdrop-blur-xl sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4"><span className="text-[11px] font-bold uppercase tracking-[0.17em]">Explore the collection</span><span className="rounded-full bg-[#0A2240] px-3 py-1 text-xs text-white">{filtered.length.toString().padStart(2, "0")}</span></div>
              <div className="flex flex-wrap gap-x-6 gap-y-3">{categories.map(category => <button key={category} type="button" aria-pressed={selectedCategory === category} onClick={() => changeCategory(category)} className={`border-b-2 pb-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${selectedCategory === category ? "border-[#B99547] text-[#0A2240]" : "border-transparent text-[#0A2240]/45 hover:text-[#0A2240]"}`}>{category}</button>)}</div>
            </div>
          </div>
          <div className="pt-3">{filtered.map((service, index) => <ServiceFeature key={service.id} service={service} index={index} setRef={el => { refs.current[service.title] = el; }} />)}</div>
          <div className="flex flex-col gap-4 border-t border-[#0A2240]/20 pt-7 text-sm text-[#5E6975] sm:flex-row sm:items-center sm:justify-between"><span>Showing {filtered.length} of {servicesData.length} services</span><Link to="/contact-us" className="inline-flex items-center gap-2 font-semibold text-[#0A2240] hover:text-[#98763B]">Not sure which service you need? <ArrowUpRight size={18} /></Link></div>
        </div>
      </section>

      {/* MIDNIGHT BRAND STATEMENT */}
      <section className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full border border-[#B99547]/15" />
        <div className="relative mx-auto grid max-w-[1500px] gap-14 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24 lg:px-16">
          <div><Eyebrow light>02 / The QuickShield perspective</Eyebrow><h2 className="mt-8 text-[clamp(3.2rem,6.5vw,7.6rem)] font-medium leading-[1.01] tracking-[-0.075em]">Look closer.<br /><span className="font-serif font-normal italic text-[#E8D5AE]">Think further.</span></h2></div>
          <div className="space-y-8"><p className="max-w-lg text-base leading-8 text-white/70">Effective pest management starts with understanding what is happening and why. We focus on practical options appropriate to the property and the issue.</p><div className="grid gap-5 border-t border-white/20 pt-8 sm:grid-cols-2"><div className="flex items-start gap-3"><Check size={19} className="mt-1 shrink-0 text-[#E8D5AE]" /><span className="text-sm leading-7 text-white/80">Residential and commercial enquiries</span></div><div className="flex items-start gap-3"><Check size={19} className="mt-1 shrink-0 text-[#E8D5AE]" /><span className="text-sm leading-7 text-white/80">Treatment and prevention considerations</span></div></div></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#E8D5AE] py-24 sm:py-32 lg:py-40"><div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16"><Eyebrow>03 / Your next step</Eyebrow><div className="mt-9 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between"><div><h2 className="text-[clamp(3.5rem,8vw,9rem)] font-medium leading-[0.95] tracking-[-0.08em]">LET'S MAKE<br /><span className="font-serif font-normal italic text-[#96723C]">a plan.</span></h2><p className="mt-8 max-w-xl text-base leading-8 text-[#0A2240]/75">Tell us what you have noticed. Contact QuickShield Services Notting Hill to discuss suitable next steps for your property.</p></div><div className="flex flex-col gap-3"><Link to="/contact-us" className="group inline-flex items-center justify-between gap-8 rounded-full bg-[#0A2240] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#B99547] hover:text-[#0A2240]">Send an enquiry <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link><a href="tel:+447417502611" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0A2240]/35 px-8 py-5 text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-white"><Phone size={17} />{PHONE}<ArrowRight size={17} /></a></div></div><div className="mt-20 flex items-center gap-3 border-t border-[#0A2240]/20 pt-6 text-xs text-[#0A2240]/70"><MapPin size={17} />3A Denbigh Rd, London W11 2SJ, United Kingdom</div></div></section>
    </main>
  );
}