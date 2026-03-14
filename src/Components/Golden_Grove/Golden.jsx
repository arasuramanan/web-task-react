// import React, { useState, useEffect, useRef } from "react";
// import Navbar from "../Navbar/Navbar";

// /* ─────────────────────────────────────────────
//    GOLDEN GROVE  –  Pressana Infra
//    Palette: #e1bd53 (Gold) + #000075 (Royal Navy)
//    Font: Cormorant Garamond (display) + DM Sans (body)
// ───────────────────────────────────────────── */

// const AMENITIES = [
//   { name: "Badminton Court", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Badminton-Court.jpg" },
//   { name: "Basketball Court", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Basket-Ball-Court.jpg" },
//   { name: "Dining Pavilion", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Dining-Pavillion.jpg" },
//   { name: "Infinity Walking Track", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Infinity-Walking-Track.jpg" },
//   { name: "Kids Play Area", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Kids-Play-Area.jpg" },
//   { name: "Koi Pond", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Koi-Pond.jpg" },
//   { name: "Lily Pond", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Lilly-Pond.jpg" },
//   { name: "Mini Zip Line", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Mini-Zip-Line.jpg" },
//   { name: "Open Air Fitness Zone", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Open-Air-Fitness-Zone.jpg" },
//   { name: "Palm Sway", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Palm-Sway.jpg" },
//   { name: "Panchatatva Walking Track", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Panchatatva-Walking-Track.jpg" },
//   { name: "Party Lawn", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Party-Lawn.jpg" },
//   { name: "Pergola Seating", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Pergola-Seating.jpg" },
//   { name: "Pickleball Court", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Pickle-Ball-Court.jpg" },
//   { name: "Senior Activity Lawn", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Senior-Activity-Lawn.jpg" },
//   { name: "Story Hut", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Story-Hut.jpg" },
//   { name: "Toddler Play", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Toddler-Play.jpg" },
//   { name: "Traditional Kudil Seater", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Traditional-Kudil-Seater.jpg" },
// ];

// const HIGHLIGHTS = [
//   { icon: "🏅", title: "DTCP & RERA Approved", desc: "Fully approved for hassle-free, transparent ownership." },
//   { icon: "🌿", title: "14.45 Acres", desc: "Sprawling gated community with 254 thoughtfully planned plots." },
//   { icon: "✨", title: "60+ Amenities", desc: "World-class lifestyle infrastructure curated for every age." },
//   { icon: "📈", title: "High Appreciation", desc: "Prime location with strong long-term investment value." },
//   { icon: "🏡", title: "3–6 Cent Plots", desc: "Flexible plot sizes for villas, homes and family estates." },
//   { icon: "🤝", title: "Post-Purchase Support", desc: "Complete guidance from purchase through construction." },
// ];

// const COLLEGES = [
//   ["Rathinam College of Arts & Science", "7 km", "10 mins"],
//   ["Karpagam Medical College", "7 km", "10 mins"],
//   ["Nirmala College for Women", "7 km", "10 mins"],
//   ["Sri Ramakrishna College of Arts & Science", "10 km", "15 mins"],
//   ["PSG College of Technology", "9.6 km", "15 mins"],
//   ["Sri Krishna College of Engineering", "8 km", "20 mins"],
//   ["Karpagam Institute of Technology", "8.7 km", "15 mins"],
// ];

// const HOSPITALS = [
//   ["St. Mary's Hospital", "2 mins"],
//   ["GEM Hospital", "10 mins"],
//   ["Coimbatore Kidney Centre", "10 mins"],
//   ["KG Hospital", "15 mins"],
//   ["Coimbatore Medical College & Hospital", "15 mins"],
//   ["PSG Hospitals", "20 mins"],
// ];

// const FAQS = [
//   { q: "What type of property is Golden Grove?", a: "Golden Grove offers premium residential villa plots in a high-growth, gated community location in Coimbatore." },
//   { q: "What plot sizes are available?", a: "Golden Grove offers multiple plot sizes from 1.27 cents to 6.55 cents, suitable for individual homes, villas, and family estates." },
//   { q: "Is Golden Grove DTCP / RERA approved?", a: "Yes. Golden Grove is fully DTCP and RERA approved, ensuring complete legal transparency and security." },
//   { q: "Can NRIs invest in Golden Grove?", a: "Absolutely. NRI buyers are welcome. Our team provides end-to-end assistance for a smooth, hassle-free experience." },
//   { q: "What are Concierge Plots?", a: "Concierge Plots are a first-of-its-kind concept in India, offered exclusively at Golden Grove. They come with premium lifestyle services and personalised support from day one." },
// ];

// /* ── helpers ── */
// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, visible];
// }

// function Fade({ children, delay = 0, className = "" }) {
//   const [ref, visible] = useInView();
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0)" : "translateY(32px)",
//         transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// /* ── GOLDEN GROVE PAGE ── */
// const Golden = () => {
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

//         * { box-sizing: border-box; }

//         :root {
//           --gold:        #e1bd53;
//           --gold-light:  #f0d47a;
//           --gold-pale:   #fdf8ec;
//           --gold-dark:   #b8952e;
//           --navy:        #000075;
//           --navy-mid:    #00008f;
//           --navy-light:  #0000b0;
//           --navy-pale:   #eaeaff;
//           --ivory:       #FAF8F2;
//           --text-dark:   #0a0a2e;
//           --text-muted:  #3a3a6a;
//         }

//         .gg-root { font-family: 'DM Sans', sans-serif; background: var(--ivory); color: var(--text-dark); }
//         .gg-display { font-family: 'Cormorant Garamond', serif; }

//         /* ── HERO ── */
//         .hero { position: relative; min-height: 92vh; display: flex; align-items: center; overflow: hidden; }
//         .hero-bg {
//           position: absolute; inset: 0;
//           background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 55%, #000099 100%);
//         }
//         .hero-pattern {
//           position: absolute; inset: 0; opacity: .06;
//           background-image: repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%);
//           background-size: 28px 28px;
//         }
//         .hero-glow {
//           position: absolute; top: -20%; right: -10%; width: 60vw; height: 60vw;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(225,189,83,.22) 0%, transparent 65%);
//         }
//         .hero-content { position: relative; z-index: 2; max-width: 700px; padding: 0 2rem; }
//         .hero-badge {
//           display: inline-flex; align-items: center; gap: 8px;
//           background: rgba(225,189,83,.15); border: 1px solid rgba(225,189,83,.45);
//           color: var(--gold-light); padding: 7px 18px; border-radius: 40px;
//           font-size: .78rem; letter-spacing: .13em; text-transform: uppercase; margin-bottom: 1.5rem;
//         }
//         .hero h1 {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(3.2rem, 7.5vw, 6.5rem);
//           font-weight: 300; color: #fff; line-height: 1.05; margin: 0 0 1rem;
//         }
//         .hero h1 em { font-style: italic; color: var(--gold-light); }
//         .hero-sub {
//           color: rgba(255,255,255,.75); font-size: 1.15rem; font-weight: 300;
//           line-height: 1.75; max-width: 520px; margin-bottom: 2.5rem;
//         }
//         .hero-stats { display: flex; gap: 2.5rem; margin-bottom: 2.8rem; flex-wrap: wrap; }
//         .stat-item { display: flex; flex-direction: column; }
//         .stat-num {
//           font-family: 'Cormorant Garamond', serif; font-size: 2.6rem;
//           font-weight: 600; color: var(--gold-light); line-height: 1;
//         }
//         .stat-label {
//           font-size: .78rem; color: rgba(255,255,255,.55);
//           letter-spacing: .12em; text-transform: uppercase; margin-top: 5px;
//         }
//         .hero-cta {
//           display: inline-flex; align-items: center; gap: 10px;
//           background: var(--gold); color: var(--navy); font-weight: 700;
//           padding: 15px 36px; border-radius: 4px; font-size: 1rem;
//           cursor: pointer; border: none; text-decoration: none;
//           transition: background .2s, transform .15s, box-shadow .2s;
//           box-shadow: 0 4px 20px rgba(225,189,83,.35);
//         }
//         .hero-cta:hover { background: var(--gold-light); transform: translateY(-3px); box-shadow: 0 8px 28px rgba(225,189,83,.5); }
//         .hero-img-col { position: absolute; right: 0; top: 0; bottom: 0; width: 45%; overflow: hidden; }
//         .hero-img-col img { width: 100%; height: 100%; object-fit: cover; opacity: .45; }
//         .hero-img-col::before {
//           content: ''; position: absolute; inset: 0;
//           background: linear-gradient(to right, var(--navy-mid) 0%, transparent 55%);
//           z-index: 1;
//         }

//         /* ── SECTION SHARED ── */
//         .section { padding: 100px 0; }
//         .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
//         .section-label {
//           font-size: .78rem; letter-spacing: .22em; text-transform: uppercase;
//           color: var(--gold-dark); font-weight: 600; margin-bottom: .75rem;
//         }
//         .section-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(2.2rem, 4.5vw, 3.2rem);
//           font-weight: 400; color: var(--navy); margin: 0 0 1.2rem; line-height: 1.15;
//         }
//         .section-body {
//           font-size: 1.1rem; color: var(--text-muted); line-height: 1.85; max-width: 640px;
//         }
//         .divider { width: 56px; height: 3px; background: var(--gold); margin: 1rem 0 1.5rem; border-radius: 2px; }

//         /* ── HIGHLIGHTS GRID ── */
//         .highlights { background: var(--navy); }
//         .highlight-grid {
//           display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 1.5px; background: rgba(225,189,83,.18);
//         }
//         .highlight-card {
//           background: var(--navy); padding: 2.5rem 2rem;
//           transition: background .25s, transform .25s;
//         }
//         .highlight-card:hover { background: var(--navy-mid); transform: translateY(-3px); }
//         .hi-icon { font-size: 2.2rem; margin-bottom: 1rem; }
//         .hi-title {
//           font-family: 'Cormorant Garamond', serif; font-size: 1.5rem;
//           color: var(--gold-light); margin: 0 0 .5rem;
//         }
//         .hi-desc { font-size: .98rem; color: rgba(255,255,255,.65); line-height: 1.75; }

//         /* ── ABOUT ── */
//         .about { background: var(--ivory); }
//         .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
//         .about-img-wrap { position: relative; }
//         .about-img-wrap img { width: 100%; border-radius: 2px; display: block; }
//         .about-badge-block {
//           position: absolute; bottom: -28px; right: -28px;
//           background: var(--gold); color: var(--navy);
//           padding: 1.5rem 2rem; font-family: 'Cormorant Garamond', serif;
//           box-shadow: 0 6px 24px rgba(0,0,117,.25);
//         }
//         .about-badge-num { font-size: 2.8rem; font-weight: 600; line-height: 1; }
//         .about-badge-lbl { font-size: .88rem; font-weight: 500; opacity: .85; }

//         /* ── PROPERTY TEXT — larger for easy reading ── */
//         .about-points {
//           list-style: none; padding: 0; margin: 1.5rem 0 2rem;
//           display: flex; flex-direction: column; gap: .9rem;
//         }
//         .about-points li {
//           display: flex; align-items: flex-start; gap: .85rem;
//           font-size: 1.1rem; color: var(--text-muted); line-height: 1.65;
//         }
//         .about-points li::before {
//           content: ''; flex-shrink: 0; width: 9px; height: 9px;
//           border-radius: 50%; background: var(--gold); margin-top: 8px;
//         }
//         .property-stat { font-size: 1.1rem !important; font-weight: 500 !important; color: var(--text-dark) !important; }

//         /* ── AMENITIES ── */
//         .amenities { background: var(--navy-pale); }
//         .amenities-scroll {
//           display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
//           gap: 1.25rem; margin-top: 3rem;
//         }

//         /* ── AMENITY CARD – cool hover ── */
//         .amenity-card {
//           position: relative; border-radius: 8px; overflow: hidden;
//           aspect-ratio: 1; cursor: pointer;
//           box-shadow: 0 3px 14px rgba(0,0,117,.13);
//           transition: transform .38s cubic-bezier(.34,1.56,.64,1), box-shadow .38s;
//         }
//         .amenity-card:hover {
//           transform: translateY(-10px) scale(1.04);
//           box-shadow: 0 20px 44px rgba(0,0,117,.3);
//         }
//         .amenity-card img {
//           width: 100%; height: 100%; object-fit: cover; display: block;
//           transition: transform .55s ease, filter .4s ease;
//           filter: brightness(.88);
//         }
//         .amenity-card:hover img {
//           transform: scale(1.12);
//           filter: brightness(.6) saturate(1.2);
//         }
//         /* Gold shimmer sweep */
//         .amenity-card::after {
//           content: '';
//           position: absolute; inset: 0;
//           background: linear-gradient(120deg, transparent 30%, rgba(225,189,83,.25) 50%, transparent 70%);
//           transform: translateX(-120%);
//           transition: transform .6s ease;
//           z-index: 2; pointer-events: none;
//         }
//         .amenity-card:hover::after { transform: translateX(120%); }
//         /* Navy-gold border glow */
//         .amenity-card::before {
//           content: '';
//           position: absolute; inset: 0; z-index: 3; border-radius: 8px;
//           border: 2.5px solid transparent;
//           transition: border-color .3s, box-shadow .3s;
//           pointer-events: none;
//         }
//         .amenity-card:hover::before {
//           border-color: var(--gold);
//           box-shadow: inset 0 0 18px rgba(225,189,83,.18);
//         }
//         /* Label rise & glow */
//         .amenity-label {
//           position: absolute; bottom: 0; left: 0; right: 0; z-index: 4;
//           background: linear-gradient(to top, rgba(0,0,117,.9) 0%, transparent 100%);
//           color: #fff; font-size: .92rem; padding: 1.6rem .9rem .75rem;
//           font-weight: 600; letter-spacing: .05em;
//           transform: translateY(6px);
//           transition: transform .32s ease, color .28s, letter-spacing .28s;
//         }
//         .amenity-card:hover .amenity-label {
//           transform: translateY(0);
//           color: var(--gold-light);
//           letter-spacing: .1em;
//         }

//         /* ── CONNECTIVITY ── */
//         .connectivity { background: var(--navy); }
//         .conn-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 3rem; }
//         .conn-card {
//           background: rgba(255,255,255,.05);
//           border: 1px solid rgba(225,189,83,.22);
//           padding: 2rem; border-radius: 6px;
//           transition: border-color .25s, background .25s;
//         }
//         .conn-card:hover { border-color: var(--gold); background: rgba(225,189,83,.06); }
//         .conn-card h3 {
//           font-family: 'Cormorant Garamond', serif; color: var(--gold-light);
//           font-size: 1.38rem; margin: 0 0 1.25rem; font-weight: 400; letter-spacing: .04em;
//         }
//         .conn-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .8rem; }
//         .conn-list li {
//           color: rgba(255,255,255,.72); font-size: 1.02rem;
//           display: flex; align-items: flex-start; gap: .7rem; line-height: 1.55;
//         }
//         .conn-list li::before { content: '→'; color: var(--gold); flex-shrink: 0; font-size: .88rem; margin-top: 2px; }

//         /* ── TABLES ── */
//         .tables-section { background: var(--ivory); }
//         .tables-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 3rem; }
//         .tbl-wrap { overflow: hidden; border-radius: 6px; border: 1px solid #cccce8; }
//         .tbl-head {
//           background: var(--navy); color: var(--gold-light);
//           padding: 1.1rem 1.5rem; font-family: 'Cormorant Garamond', serif; font-size: 1.2rem;
//         }
//         table { width: 100%; border-collapse: collapse; }
//         th {
//           background: #00006a; color: rgba(255,255,255,.78);
//           font-size: .8rem; font-weight: 500; letter-spacing: .1em;
//           text-transform: uppercase; padding: .85rem 1.25rem; text-align: left;
//         }
//         td {
//           padding: .9rem 1.25rem; font-size: 1rem;
//           color: var(--text-muted); border-bottom: 1px solid #e0dff5;
//         }
//         tr:last-child td { border-bottom: none; }
//         tr:hover td { background: var(--navy-pale); color: var(--navy); }

//         /* ── FAQ ── */
//         .faq-section { background: var(--navy-pale); }
//         .faq-list { margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1px; background: #c0c0e8; }
//         .faq-item { background: var(--ivory); }
//         .faq-q {
//           display: flex; justify-content: space-between; align-items: center;
//           padding: 1.35rem 1.5rem; cursor: pointer; gap: 1rem;
//         }
//         .faq-q span { font-size: 1.06rem; font-weight: 600; color: var(--navy); }
//         .faq-icon {
//           flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
//           background: var(--navy); color: var(--gold-light);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 1.2rem; transition: transform .3s;
//         }
//         .faq-icon.open { transform: rotate(45deg); background: var(--gold); color: var(--navy); }
//         .faq-a { overflow: hidden; max-height: 0; transition: max-height .4s ease, padding .3s; padding: 0 1.5rem; }
//         .faq-a.open { max-height: 200px; padding-bottom: 1.4rem; }
//         .faq-a p { font-size: 1.02rem; color: var(--text-muted); line-height: 1.82; margin: 0; }

//         /* ── CONTACT FORM ── */
//         .contact-section { background: var(--navy); }
//         .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
//         .contact-info p { color: rgba(255,255,255,.68); line-height: 1.85; font-size: 1.02rem; }
//         .contact-info .section-title { color: #fff; }
//         .contact-info .section-label { color: var(--gold-light); }
//         .contact-info .divider { background: var(--gold); }
//         .form-group { display: flex; flex-direction: column; gap: .38rem; margin-bottom: 1.3rem; }
//         .form-group label { font-size: .78rem; color: rgba(255,255,255,.55); letter-spacing: .12em; text-transform: uppercase; }
//         .form-group input {
//           background: rgba(255,255,255,.07); border: 1px solid rgba(225,189,83,.3);
//           color: #fff; padding: 13px 16px; border-radius: 3px;
//           font-size: 1rem; font-family: 'DM Sans', sans-serif;
//           outline: none; transition: border-color .2s, background .2s;
//         }
//         .form-group input::placeholder { color: rgba(255,255,255,.3); }
//         .form-group input:focus { border-color: var(--gold); background: rgba(225,189,83,.07); }
//         .form-submit {
//           width: 100%; background: var(--gold); color: var(--navy);
//           border: none; padding: 15px; font-size: 1.05rem; font-weight: 700;
//           font-family: 'DM Sans', sans-serif; border-radius: 3px; cursor: pointer;
//           transition: background .2s, transform .15s, box-shadow .2s;
//           box-shadow: 0 4px 16px rgba(225,189,83,.3);
//         }
//         .form-submit:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(225,189,83,.5); }
//         .success-msg {
//           background: rgba(225,189,83,.12); border: 1px solid var(--gold);
//           color: var(--gold-light); padding: 1.8rem; border-radius: 4px;
//           font-size: 1rem; text-align: center; line-height: 1.85;
//         }

//         /* ── FOOTER STRIP ── */
//         .footer-strip {
//           background: #000050; padding: 1.5rem 2rem;
//           display: flex; justify-content: center; align-items: center;
//         }
//         .footer-strip p { color: rgba(255,255,255,.4); font-size: .88rem; margin: 0; text-align: center; }

//         /* ── RESPONSIVE ── */
//         @media (max-width: 900px) {
//           .about-grid, .contact-grid, .tables-grid, .conn-grid { grid-template-columns: 1fr; }
//           .hero-img-col { display: none; }
//           .hero-content { max-width: 100%; }
//           .about-badge-block { right: 8px; }
//         }
//         @media (max-width: 600px) {
//           .section { padding: 64px 0; }
//           .hero-stats { gap: 1.5rem; }
//           .stat-num { font-size: 2rem; }
//         }
//       `}</style>

//       <div className="gg-root">
//         <Navbar />

//         {/* ── HERO ── */}
//         <section className="hero">
//           <div className="hero-bg" />
//           <div className="hero-pattern" />
//           <div className="hero-glow" />

//           <div className="container">
//             <div className="hero-content">
//               <div className="hero-badge">
//                 <span>✦</span> DTCP & RERA Approved <span>✦</span>
//               </div>
//               <h1 className="gg-display">
//                 Golden<br /><em>Grove</em>
//               </h1>
//               <p className="hero-sub">
//                 An exclusive gated community by Pressana Infra — where refined living meets the vibrant pulse of Nanjundapuram, Coimbatore.
//               </p>
//               <div className="hero-stats">
//                 <div className="stat-item">
//                   <span className="stat-num">14.45</span>
//                   <span className="stat-label">Acres</span>
//                 </div>
//                 <div className="stat-item">
//                   <span className="stat-num">254</span>
//                   <span className="stat-label">Plots</span>
//                 </div>
//                 <div className="stat-item">
//                   <span className="stat-num">60+</span>
//                   <span className="stat-label">Amenities</span>
//                 </div>
//                 <div className="stat-item">
//                   <span className="stat-num">3–6</span>
//                   <span className="stat-label">Cent Plots</span>
//                 </div>
//               </div>
//               <a href="#contact" className="hero-cta">Book a Site Visit →</a>
//             </div>
//           </div>
//         </section>

//         {/* ── HIGHLIGHTS ── */}
//         <section className="section highlights" style={{ padding: "0" }}>
//           <div className="highlight-grid">
//             {HIGHLIGHTS.map((h, i) => (
//               <Fade key={i} delay={i * 0.07}>
//                 <div className="highlight-card">
//                   <div className="hi-icon">{h.icon}</div>
//                   <div className="hi-title gg-display">{h.title}</div>
//                   <div className="hi-desc">{h.desc}</div>
//                 </div>
//               </Fade>
//             ))}
//           </div>
//         </section>

//         {/* ── ABOUT ── */}
//         <section className="section about" id="about">
//           <div className="container">
//             <div className="about-grid">
//               <Fade delay={0}>
//                 <div className="about-img-wrap">
//                   <img src="https://pressanainfra.com/wp-content/uploads/2025/10/500x500-px-Nanjundapuram-Website-Banner-2.jpg" alt="Golden Grove Nanjundapuram" />
//                   <div className="about-badge-block">
//                     <div className="about-badge-num gg-display">216+</div>
//                     <div className="about-badge-lbl">Villa Plots</div>
//                   </div>
//                 </div>
//               </Fade>
//               <Fade delay={0.15}>
//                 <div>
//                   <div className="section-label">About the Project</div>
//                   <h2 className="section-title gg-display">A Lifestyle <em>Destination</em><br />in the Heart of Coimbatore</h2>
//                   <div className="divider" />
//                   <p className="section-body">
//                     Discover <strong>Golden Grove</strong> — spread across <strong>14.45 acres</strong> in the prime location of <strong>Nanjundapuram, Coimbatore</strong>. Offering the perfect balance of serene living and urban convenience, it's more than a residential community — it's a curated lifestyle destination.
//                   </p>
//                   <ul className="about-points">
//                     <li className="property-stat">Premium Location — excellent connectivity to schools, hospitals & city centres</li>
//                     <li className="property-stat">Luxury villa plots designed for your dream home</li>
//                     <li className="property-stat">Secure & transparent investment — DTCP & RERA approved</li>
//                     <li className="property-stat">Strategic investment with long-term value appreciation</li>
//                     <li className="property-stat">Complete post-purchase construction guidance</li>
//                   </ul>
//                   <a href="#contact" className="hero-cta" style={{ textDecoration: "none" }}>Enquire Now →</a>
//                 </div>
//               </Fade>
//             </div>
//           </div>
//         </section>

//         {/* ── AMENITIES ── */}
//         <section className="section amenities" id="amenities">
//           <div className="container">
//             <Fade>
//               <div className="section-label">World-Class Amenities</div>
//               <h2 className="section-title gg-display">60+ Features Crafted<br />for <em>Every Lifestyle</em></h2>
//               <div className="divider" />
//               <p className="section-body">
//                 A place where a serene environment meets convenient living. Give your senses a treat within a pristine landscape enriched with over 60 thoughtfully designed amenities.
//               </p>
//             </Fade>
//             <div className="amenities-scroll">
//               {AMENITIES.map((a, i) => (
//                 <Fade key={i} delay={(i % 6) * 0.06}>
//                   <div className="amenity-card">
//                     <img src={a.img} alt={a.name} />
//                     <div className="amenity-label">{a.name}</div>
//                   </div>
//                 </Fade>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── CONNECTIVITY ── */}
//         <section className="section connectivity" id="connectivity">
//           <div className="container">
//             <Fade>
//               <div className="section-label" style={{ color: "var(--gold)" }}>Location Advantage</div>
//               <h2 className="section-title gg-display" style={{ color: "#fff" }}>Seamlessly Connected<br />to <em>Everything</em></h2>
//               <div className="divider" />
//             </Fade>
//             <div className="conn-grid">
//               <Fade delay={0.1}>
//                 <div className="conn-card">
//                   <h3>🚉 Transport & Transit</h3>
//                   <ul className="conn-list">
//                     <li>Trichy Road & L&T Bypass</li>
//                     <li>Podanur Railway & Bus Stations</li>
//                     <li>Ukkadam & Singanallur Bus Stands</li>
//                     <li>Coimbatore Railway Station & Airport</li>
//                   </ul>
//                 </div>
//               </Fade>
//               <Fade delay={0.2}>
//                 <div className="conn-card">
//                   <h3>🛍️ Shopping & Entertainment</h3>
//                   <ul className="conn-list">
//                     <li>Brookfields Mall, Fun Republic, Prozone Mall</li>
//                     <li>PVR Cinemas, Cinepolis, KG Cinemas</li>
//                     <li>Race Course, VOC Park & Zoo, Valankulam Lake</li>
//                     <li>Kovai Kondattam & OxyZone Adventure Park</li>
//                   </ul>
//                 </div>
//               </Fade>
//             </div>
//           </div>
//         </section>

//         {/* ── TABLES ── */}
//         <section className="section tables-section" id="nearby">
//           <div className="container">
//             <Fade>
//               <div className="section-label">Proximity Map</div>
//               <h2 className="section-title gg-display">Everything You Need<br /><em>Minutes Away</em></h2>
//               <div className="divider" />
//             </Fade>
//             <div className="tables-grid">
//               <Fade delay={0.1}>
//                 <div className="tbl-wrap">
//                   <div className="tbl-head gg-display">🎓 Educational Institutions</div>
//                   <table>
//                     <thead><tr><th>Institution</th><th>Distance</th><th>Time</th></tr></thead>
//                     <tbody>
//                       {COLLEGES.map(([name, dist, time], i) => (
//                         <tr key={i}><td>{name}</td><td>{dist}</td><td>{time}</td></tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </Fade>
//               <Fade delay={0.2}>
//                 <div className="tbl-wrap">
//                   <div className="tbl-head gg-display">🏥 Hospitals</div>
//                   <table>
//                     <thead><tr><th>Hospital</th><th>Travel Time</th></tr></thead>
//                     <tbody>
//                       {HOSPITALS.map(([name, time], i) => (
//                         <tr key={i}><td>{name}</td><td>{time}</td></tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </Fade>
//             </div>
//           </div>
//         </section>

//         {/* ── FAQ ── */}
//         <section className="section faq-section" id="faq">
//           <div className="container">
//             <Fade>
//               <div className="section-label">Common Questions</div>
//               <h2 className="section-title gg-display">Frequently Asked<br /><em>Questions</em></h2>
//               <div className="divider" />
//             </Fade>
//             <Fade delay={0.1}>
//               <div className="faq-list" style={{ maxWidth: 780 }}>
//                 {FAQS.map((faq, i) => (
//                   <div className="faq-item" key={i}>
//                     <div className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
//                       <span>{faq.q}</span>
//                       <span className={`faq-icon${faqOpen === i ? " open" : ""}`}>+</span>
//                     </div>
//                     <div className={`faq-a${faqOpen === i ? " open" : ""}`}>
//                       <p>{faq.a}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Fade>
//           </div>
//         </section>

//         {/* ── CONTACT ── */}
//         <section className="section contact-section" id="contact">
//           <div className="container">
//             <div className="contact-grid">
//               <Fade delay={0}>
//                 <div className="contact-info">
//                   <div className="section-label" style={{ color: "var(--gold-light)" }}>Get In Touch</div>
//                   <h2 className="section-title gg-display" style={{ color: "#fff" }}>Book Your<br /><em>Site Visit</em></h2>
//                   <div className="divider" />
//                   <p>Experience Golden Grove firsthand. Our team will walk you through every plot and amenity, and help you find the perfect fit for your dream home or investment.</p>
//                   <p style={{ marginTop: "1.5rem" }}>
//                     <strong style={{ color: "var(--gold-light)" }}>📍 Location:</strong><br />
//                     <span style={{ color: "rgba(255,255,255,.62)", fontSize: "1rem" }}>Nanjundapuram, Coimbatore, Tamil Nadu</span>
//                   </p>
//                   <p style={{ marginTop: "1rem" }}>
//                     <strong style={{ color: "var(--gold-light)" }}>📞 Contact:</strong><br />
//                     <span style={{ color: "rgba(255,255,255,.62)", fontSize: "1rem" }}>Reach us via the form or visit pressanainfra.com</span>
//                   </p>
//                 </div>
//               </Fade>
//               <Fade delay={0.15}>
//                 {submitted ? (
//                   <div className="success-msg">
//                     <div style={{ fontSize: "2.5rem", marginBottom: ".6rem" }}>✓</div>
//                     <strong>Thank you, {formData.name}!</strong><br />
//                     Our team will contact you shortly to schedule your site visit.
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                       <label>Your Name</label>
//                       <input required placeholder="Eg. Ravi Kumar" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
//                     </div>
//                     <div className="form-group">
//                       <label>Email Address</label>
//                       <input type="email" required placeholder="email@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
//                     </div>
//                     <div className="form-group">
//                       <label>Phone Number</label>
//                       <input type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
//                     </div>
//                     <button type="submit" className="form-submit">Book My Site Visit →</button>
//                   </form>
//                 )}
//               </Fade>
//             </div>
//           </div>
//         </section>

//         {/* ── FOOTER STRIP ── */}
//         <div className="footer-strip">
//           <p>© {new Date().getFullYear()} Golden Grove by Pressana Infra. All rights reserved. · Nanjundapuram, Coimbatore, Tamil Nadu.</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Golden;
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import heroBanner from "../../assets/goldengrove.png"; // Import hero banner image

/* ─────────────────────────────────────────────
   GOLDEN GROVE  –  Pressana Infra
   Palette: #e1bd53 (Gold) + #000075 (Royal Navy)
   Font: Cormorant Garamond (display) + DM Sans (body)
───────────────────────────────────────────── */

const AMENITIES = [
  { name: "Badminton Court", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Badminton-Court.jpg" },
  { name: "Basketball Court", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Basket-Ball-Court.jpg" },
  { name: "Dining Pavilion", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Dining-Pavillion.jpg" },
  { name: "Infinity Walking Track", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Infinity-Walking-Track.jpg" },
  { name: "Kids Play Area", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Kids-Play-Area.jpg" },
  { name: "Koi Pond", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Koi-Pond.jpg" },
  { name: "Lily Pond", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Lilly-Pond.jpg" },
  { name: "Mini Zip Line", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Mini-Zip-Line.jpg" },
  { name: "Open Air Fitness Zone", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Open-Air-Fitness-Zone.jpg" },
  { name: "Palm Sway", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Palm-Sway.jpg" },
  { name: "Panchatatva Walking Track", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Panchatatva-Walking-Track.jpg" },
  { name: "Party Lawn", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Party-Lawn.jpg" },
  { name: "Pergola Seating", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Pergola-Seating.jpg" },
  { name: "Pickleball Court", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Pickle-Ball-Court.jpg" },
  { name: "Senior Activity Lawn", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Senior-Activity-Lawn.jpg" },
  { name: "Story Hut", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Story-Hut.jpg" },
  { name: "Toddler Play", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Toddler-Play.jpg" },
  { name: "Traditional Kudil Seater", img: "https://pressanainfra.com/wp-content/uploads/2025/10/Traditional-Kudil-Seater.jpg" },
];

const HIGHLIGHTS = [
  { icon: "🏅", title: "DTCP & RERA Approved", desc: "Fully approved for hassle-free, transparent ownership." },
  { icon: "🌿", title: "14.45 Acres", desc: "Sprawling gated community with 254 thoughtfully planned plots." },
  { icon: "✨", title: "60+ Amenities", desc: "World-class lifestyle infrastructure curated for every age." },
  { icon: "📈", title: "High Appreciation", desc: "Prime location with strong long-term investment value." },
  { icon: "🏡", title: "3–6 Cent Plots", desc: "Flexible plot sizes for villas, homes and family estates." },
  { icon: "🤝", title: "Post-Purchase Support", desc: "Complete guidance from purchase through construction." },
  { icon: "🔲", title: "Size", desc: "254 Units from purchase through construction." },
  { icon: "⚙️", title: "Configurations", desc: "Best Residential Plots in coimbatore and pollachi." },
];

const COLLEGES = [
  ["Rathinam College of Arts & Science", "7 km", "10 mins"],
  ["Karpagam Medical College", "7 km", "10 mins"],
  ["Nirmala College for Women", "7 km", "10 mins"],
  ["Sri Ramakrishna College of Arts & Science", "10 km", "15 mins"],
  ["PSG College of Technology", "9.6 km", "15 mins"],
  ["Sri Krishna College of Engineering", "8 km", "20 mins"],
  ["Karpagam Institute of Technology", "8.7 km", "15 mins"],
];

const HOSPITALS = [
  ["St. Mary's Hospital", "2 mins"],
  ["GEM Hospital", "10 mins"],
  ["Coimbatore Kidney Centre", "10 mins"],
  ["KG Hospital", "15 mins"],
  ["Coimbatore Medical College & Hospital", "15 mins"],
  ["PSG Hospitals", "20 mins"],
];

const FAQS = [
  { q: "What type of property is Golden Grove?", a: "Golden Grove offers premium residential villa plots in a high-growth, gated community location in Coimbatore." },
  { q: "What plot sizes are available?", a: "Golden Grove offers multiple plot sizes from 1.27 cents to 6.55 cents, suitable for individual homes, villas, and family estates." },
  { q: "Is Golden Grove DTCP / RERA approved?", a: "Yes. Golden Grove is fully DTCP and RERA approved, ensuring complete legal transparency and security." },
  { q: "Can NRIs invest in Golden Grove?", a: "Absolutely. NRI buyers are welcome. Our team provides end-to-end assistance for a smooth, hassle-free experience." },
  { q: "What are Concierge Plots?", a: "Concierge Plots are a first-of-its-kind concept in India, offered exclusively at Golden Grove. They come with premium lifestyle services and personalised support from day one." },
];

/* ── helpers ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Fade({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── GOLDEN GROVE PAGE ── */
const Golden = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        :root {
          --gold:        #e1bd53;
          --gold-light:  #f0d47a;
          --gold-pale:   #fdf8ec;
          --gold-dark:   #b8952e;
          --navy:        #000075;
          --navy-mid:    #00008f;
          --navy-light:  #0000b0;
          --navy-pale:   #eaeaff;
          --ivory:       #FAF8F2;
          --text-dark:   #0a0a2e;
          --text-muted:  #3a3a6a;
        }

        .gg-root { font-family: 'DM Sans', sans-serif; background: var(--ivory); color: var(--text-dark); }
        .gg-display { font-family: 'Cormorant Garamond', serif; }

        /* ── HERO BANNER ── */
        .hero-banner-container {
          width: 100%;
          margin: 0;
          padding: 0;
          line-height: 0;
          overflow: hidden;
        }
        
        .hero-banner-image {
          width: 100%;
          height: auto;
          max-height: 600px; /* Increased height */
          min-width: 100%; /* Ensures full width coverage */
          object-fit: cover;
          display: block;
        }

        /* ── HERO ── */
        .hero { position: relative; min-height: 92vh; display: flex; align-items: center; overflow: hidden; }
        .hero-bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 55%, #000099 100%);
        }
        .hero-pattern {
          position: absolute; inset: 0; opacity: .06;
          background-image: repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%);
          background-size: 28px 28px;
        }
        .hero-glow {
          position: absolute; top: -20%; right: -10%; width: 60vw; height: 60vw;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(225,189,83,.22) 0%, transparent 65%);
        }
        .hero-content { position: relative; z-index: 2; max-width: 700px; padding: 0 2rem; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(225,189,83,.15); border: 1px solid rgba(225,189,83,.45);
          color: var(--gold-light); padding: 7px 18px; border-radius: 40px;
          font-size: .78rem; letter-spacing: .13em; text-transform: uppercase; margin-bottom: 1.5rem;
        }
        .hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.2rem, 7.5vw, 6.5rem);
          font-weight: 300; color: #fff; line-height: 1.05; margin: 0 0 1rem;
        }
        .hero h1 em { font-style: italic; color: var(--gold-light); }
        .hero-sub {
          color: rgba(255,255,255,.75); font-size: 1.15rem; font-weight: 300;
          line-height: 1.75; max-width: 520px; margin-bottom: 2.5rem;
        }
        .hero-stats { display: flex; gap: 2.5rem; margin-bottom: 2.8rem; flex-wrap: wrap; }
        .stat-item { display: flex; flex-direction: column; }
        .stat-num {
          font-family: 'Cormorant Garamond', serif; font-size: 2.6rem;
          font-weight: 600; color: var(--gold-light); line-height: 1;
        }
        .stat-label {
          font-size: .78rem; color: rgba(255,255,255,.55);
          letter-spacing: .12em; text-transform: uppercase; margin-top: 5px;
        }
        .hero-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--gold); color: var(--navy); font-weight: 700;
          padding: 15px 36px; border-radius: 4px; font-size: 1rem;
          cursor: pointer; border: none; text-decoration: none;
          transition: background .2s, transform .15s, box-shadow .2s;
          box-shadow: 0 4px 20px rgba(225,189,83,.35);
        }
        .hero-cta:hover { background: var(--gold-light); transform: translateY(-3px); box-shadow: 0 8px 28px rgba(225,189,83,.5); }
        .hero-img-col { position: absolute; right: 0; top: 0; bottom: 0; width: 45%; overflow: hidden; }
        .hero-img-col img { width: 100%; height: 100%; object-fit: cover; opacity: .45; }
        .hero-img-col::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to right, var(--navy-mid) 0%, transparent 55%);
          z-index: 1;
        }

        /* ── SECTION SHARED ── */
        .section { padding: 100px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .section-label {
          font-size: .78rem; letter-spacing: .22em; text-transform: uppercase;
          color: var(--gold-dark); font-weight: 600; margin-bottom: .75rem;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          font-weight: 400; color: var(--navy); margin: 0 0 1.2rem; line-height: 1.15;
        }
        .section-body {
          font-size: 1.1rem; color: var(--text-muted); line-height: 1.85; max-width: 640px;
        }
        .divider { width: 56px; height: 3px; background: var(--gold); margin: 1rem 0 1.5rem; border-radius: 2px; }

        /* ── HIGHLIGHTS GRID ── */
        .highlights { background: var(--navy); }
        .highlight-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5px; 
          background: #e1bd53;;
        }
        .highlight-card {
          background: var(--navy); padding: 2.5rem 2rem;
          transition: background .25s, transform .25s;
        }
        .highlight-card:hover { background: var(--navy-mid); transform: translateY(-3px); }
        .hi-icon { font-size: 2.2rem; margin-bottom: 1rem; }
        .hi-title {
          font-family: 'Cormorant Garamond', serif; font-size: 1.5rem;
          color: var(--gold-light); margin: 0 0 .5rem;
        }
        .hi-desc { font-size: .98rem; color: rgba(255,255,255,.65); line-height: 1.75; }

        /* ── ABOUT ── */
        .about { background: var(--ivory); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .about-img-wrap { position: relative; }
        .about-img-wrap img { width: 100%; border-radius: 2px; display: block; }
        .about-badge-block {
          position: absolute; bottom: -28px; right: -28px;
          background: var(--gold); color: var(--navy);
          padding: 1.5rem 2rem; font-family: 'Cormorant Garamond', serif;
          box-shadow: 0 6px 24px rgba(0,0,117,.25);
        }
        .about-badge-num { font-size: 2.8rem; font-weight: 600; line-height: 1; }
        .about-badge-lbl { font-size: .88rem; font-weight: 500; opacity: .85; }

        /* ── PROPERTY TEXT — larger for easy reading ── */
        .about-points {
          list-style: none; padding: 0; margin: 1.5rem 0 2rem;
          display: flex; flex-direction: column; gap: .9rem;
        }
        .about-points li {
          display: flex; align-items: flex-start; gap: .85rem;
          font-size: 1.1rem; color: var(--text-muted); line-height: 1.65;
        }
        .about-points li::before {
          content: ''; flex-shrink: 0; width: 9px; height: 9px;
          border-radius: 50%; background: var(--gold); margin-top: 8px;
        }
        .property-stat { font-size: 1.1rem !important; font-weight: 500 !important; color: var(--text-dark) !important; }

        /* ── AMENITIES ── */
        .amenities { background: var(--navy-pale); }
        .amenities-scroll {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.25rem; margin-top: 3rem;
        }

        /* ── AMENITY CARD – cool hover ── */
        .amenity-card {
          position: relative; border-radius: 8px; overflow: hidden;
          aspect-ratio: 1; cursor: pointer;
          box-shadow: 0 3px 14px rgba(0,0,117,.13);
          transition: transform .38s cubic-bezier(.34,1.56,.64,1), box-shadow .38s;
        }
        .amenity-card:hover {
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 20px 44px rgba(0,0,117,.3);
        }
        .amenity-card img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform .55s ease, filter .4s ease;
          filter: brightness(.88);
        }
        .amenity-card:hover img {
          transform: scale(1.12);
          filter: brightness(.6) saturate(1.2);
        }
        /* Gold shimmer sweep */
        .amenity-card::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(225,189,83,.25) 50%, transparent 70%);
          transform: translateX(-120%);
          transition: transform .6s ease;
          z-index: 2; pointer-events: none;
        }
        .amenity-card:hover::after { transform: translateX(120%); }
        /* Navy-gold border glow */
        .amenity-card::before {
          content: '';
          position: absolute; inset: 0; z-index: 3; border-radius: 8px;
          border: 2.5px solid transparent;
          transition: border-color .3s, box-shadow .3s;
          pointer-events: none;
        }
        .amenity-card:hover::before {
          border-color: var(--gold);
          box-shadow: inset 0 0 18px rgba(225,189,83,.18);
        }
        /* Label rise & glow */
        .amenity-label {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 4;
          background: linear-gradient(to top, rgba(0,0,117,.9) 0%, transparent 100%);
          color: #fff; font-size: .92rem; padding: 1.6rem .9rem .75rem;
          font-weight: 600; letter-spacing: .05em;
          transform: translateY(6px);
          transition: transform .32s ease, color .28s, letter-spacing .28s;
        }
        .amenity-card:hover .amenity-label {
          transform: translateY(0);
          color: var(--gold-light);
          letter-spacing: .1em;
        }

        /* ── CONNECTIVITY ── */
        .connectivity { background: var(--navy); }
        .conn-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 3rem; }
        .conn-card {
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(225,189,83,.22);
          padding: 2rem; border-radius: 6px;
          transition: border-color .25s, background .25s;
        }
        .conn-card:hover { border-color: var(--gold); background: rgba(225,189,83,.06); }
        .conn-card h3 {
          font-family: 'Cormorant Garamond', serif; color: var(--gold-light);
          font-size: 1.38rem; margin: 0 0 1.25rem; font-weight: 400; letter-spacing: .04em;
        }
        .conn-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .8rem; }
        .conn-list li {
          color: rgba(255,255,255,.72); font-size: 1.02rem;
          display: flex; align-items: flex-start; gap: .7rem; line-height: 1.55;
        }
        .conn-list li::before { content: '→'; color: var(--gold); flex-shrink: 0; font-size: .88rem; margin-top: 2px; }

        /* ── TABLES ── */
        .tables-section { background: var(--ivory); }
        .tables-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 3rem; }
        .tbl-wrap { overflow: hidden; border-radius: 6px; border: 1px solid #cccce8; }
        .tbl-head {
          background: var(--navy); color: var(--gold-light);
          padding: 1.1rem 1.5rem; font-family: 'Cormorant Garamond', serif; font-size: 1.2rem;
        }
        table { width: 100%; border-collapse: collapse; }
        th {
          background: #00006a; color: rgba(255,255,255,.78);
          font-size: .8rem; font-weight: 500; letter-spacing: .1em;
          text-transform: uppercase; padding: .85rem 1.25rem; text-align: left;
        }
        td {
          padding: .9rem 1.25rem; font-size: 1rem;
          color: var(--text-muted); border-bottom: 1px solid #e0dff5;
        }
        tr:last-child td { border-bottom: none; }
        tr:hover td { background: var(--navy-pale); color: var(--navy); }

        /* ── FAQ ── */
        .faq-section { background: var(--navy-pale); }
        .faq-list { margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1px; background: #c0c0e8; }
        .faq-item { background: var(--ivory); }
        .faq-q {
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.35rem 1.5rem; cursor: pointer; gap: 1rem;
        }
        .faq-q span { font-size: 1.06rem; font-weight: 600; color: var(--navy); }
        .faq-icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
          background: var(--navy); color: var(--gold-light);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; transition: transform .3s;
        }
        .faq-icon.open { transform: rotate(45deg); background: var(--gold); color: var(--navy); }
        .faq-a { overflow: hidden; max-height: 0; transition: max-height .4s ease, padding .3s; padding: 0 1.5rem; }
        .faq-a.open { max-height: 200px; padding-bottom: 1.4rem; }
        .faq-a p { font-size: 1.02rem; color: var(--text-muted); line-height: 1.82; margin: 0; }

        /* ── CONTACT FORM ── */
        .contact-section { background: var(--navy); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .contact-info p { color: rgba(255,255,255,.68); line-height: 1.85; font-size: 1.02rem; }
        .contact-info .section-title { color: #fff; }
        .contact-info .section-label { color: var(--gold-light); }
        .contact-info .divider { background: var(--gold); }
        .form-group { display: flex; flex-direction: column; gap: .38rem; margin-bottom: 1.3rem; }
        .form-group label { font-size: .78rem; color: rgba(255,255,255,.55); letter-spacing: .12em; text-transform: uppercase; }
        .form-group input {
          background: rgba(255,255,255,.07); border: 1px solid rgba(225,189,83,.3);
          color: #fff; padding: 13px 16px; border-radius: 3px;
          font-size: 1rem; font-family: 'DM Sans', sans-serif;
          outline: none; transition: border-color .2s, background .2s;
        }
        .form-group input::placeholder { color: rgba(255,255,255,.3); }
        .form-group input:focus { border-color: var(--gold); background: rgba(225,189,83,.07); }
        .form-submit {
          width: 100%; background: var(--gold); color: var(--navy);
          border: none; padding: 15px; font-size: 1.05rem; font-weight: 700;
          font-family: 'DM Sans', sans-serif; border-radius: 3px; cursor: pointer;
          transition: background .2s, transform .15s, box-shadow .2s;
          box-shadow: 0 4px 16px rgba(225,189,83,.3);
        }
        .form-submit:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(225,189,83,.5); }
        .success-msg {
          background: rgba(225,189,83,.12); border: 1px solid var(--gold);
          color: var(--gold-light); padding: 1.8rem; border-radius: 4px;
          font-size: 1rem; text-align: center; line-height: 1.85;
        }

        /* ── FOOTER STRIP ── */
        .footer-strip {
          background: #000050; padding: 1.5rem 2rem;
          display: flex; justify-content: center; align-items: center;
        }
        .footer-strip p { color: rgba(255,255,255,.4); font-size: .88rem; margin: 0; text-align: center; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .about-grid, .contact-grid, .tables-grid, .conn-grid { grid-template-columns: 1fr; }
          .hero-img-col { display: none; }
          .hero-content { max-width: 100%; }
          .about-badge-block { right: 8px; }
          .hero-banner-image {
            max-height: 400px; /* Smaller on mobile */
          }
        }
        @media (max-width: 600px) {
          .section { padding: 64px 0; }
          .hero-stats { gap: 1.5rem; }
          .stat-num { font-size: 2rem; }
          .hero-banner-image {
            max-height: 300px; /* Even smaller on mobile */
          }
        }
      `}</style>

      <div className="gg-root">
        <Navbar />
        
        {/* Hero Banner Image - Immediately after Navbar */}
       {/* <div className="w-full m-0 p-0 leading-none text-[0]">
          <img 
            src={heroBanner} 
            alt="Golden Grove - Premium Villa Plots in Coimbatore" 
            className="w-full h-auto max-h-[500px] md:max-h-[700px] lg:max-h-[700px] object-cover block align-top m-0 pt-10"
          />
        </div> */}

        {/* Hero Banner Image - Immediately after Navbar */}
<div className="w-full m-0 pt-20 leading-none text-[0]">
  <img 
    src={heroBanner} 
    alt="Golden Grove - Premium Villa Plots in Coimbatore" 
    className="w-full h-auto max-h-[500px] md:max-h-[700px] lg:max-h-[700px] object-cover block align-top m-0"
  />
</div>

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-pattern" />
          <div className="hero-glow" />

          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">
                <span>✦</span> DTCP & RERA Approved <span>✦</span>
              </div>
              <h1 className="gg-display">
                Golden<br /><em>Grove</em>
              </h1>
              <p className="hero-sub">
                An exclusive gated community by Pressana Infra — where refined living meets the vibrant pulse of Nanjundapuram, Coimbatore.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-num">14.45</span>
                  <span className="stat-label">Acres</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">254</span>
                  <span className="stat-label">Plots</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">60+</span>
                  <span className="stat-label">Amenities</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">3–6</span>
                  <span className="stat-label">Cent Plots</span>
                </div>
              </div>
              <a href="#contact" className="hero-cta">Book a Site Visit →</a>
            </div>
          </div>
        </section>

        {/* ── HIGHLIGHTS ── */}
        <section className="section highlights" style={{ padding: "0" }}>
          <div className="highlight-grid">
            {HIGHLIGHTS.map((h, i) => (
              <Fade key={i} delay={i * 0.07}>
                <div className="highlight-card">
                  <div className="hi-icon">{h.icon}</div>
                  <div className="hi-title gg-display">{h.title}</div>
                  <div className="hi-desc">{h.desc}</div>
                </div>
              </Fade>
            ))}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="section about" id="about">
          <div className="container">
            <div className="about-grid">
              <Fade delay={0}>
                <div className="about-img-wrap">
                  <img src="https://pressanainfra.com/wp-content/uploads/2025/10/500x500-px-Nanjundapuram-Website-Banner-2.jpg" alt="Golden Grove Nanjundapuram" />
                  <div className="about-badge-block">
                    <div className="about-badge-num gg-display">216+</div>
                    <div className="about-badge-lbl">Villa Plots</div>
                  </div>
                </div>
              </Fade>
              <Fade delay={0.15}>
                <div>
                  <div className="section-label">About the Project</div>
                  <h2 className="section-title gg-display">A Lifestyle <em>Destination</em><br />in the Heart of Coimbatore</h2>
                  <div className="divider" />
                  <p className="section-body">
                    Discover <strong>Golden Grove</strong> — spread across <strong>14.45 acres</strong> in the prime location of <strong>Nanjundapuram, Coimbatore</strong>. Offering the perfect balance of serene living and urban convenience, it's more than a residential community — it's a curated lifestyle destination.
                  </p>
                  <ul className="about-points">
                    <li className="property-stat">Premium Location — excellent connectivity to schools, hospitals & city centres</li>
                    <li className="property-stat">Luxury villa plots designed for your dream home</li>
                    <li className="property-stat">Secure & transparent investment — DTCP & RERA approved</li>
                    <li className="property-stat">Strategic investment with long-term value appreciation</li>
                    <li className="property-stat">Complete post-purchase construction guidance</li>
                  </ul>
                  <a href="#contact" className="hero-cta" style={{ textDecoration: "none" }}>Enquire Now →</a>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── AMENITIES ── */}
        <section className="section amenities" id="amenities">
          <div className="container">
            <Fade>
              <div className="section-label">World-Class Amenities</div>
              <h2 className="section-title gg-display">60+ Features Crafted<br />for <em>Every Lifestyle</em></h2>
              <div className="divider" />
              <p className="section-body">
                A place where a serene environment meets convenient living. Give your senses a treat within a pristine landscape enriched with over 60 thoughtfully designed amenities.
              </p>
            </Fade>
            <div className="amenities-scroll">
              {AMENITIES.map((a, i) => (
                <Fade key={i} delay={(i % 6) * 0.06}>
                  <div className="amenity-card">
                    <img src={a.img} alt={a.name} />
                    <div className="amenity-label">{a.name}</div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONNECTIVITY ── */}
        <section className="section connectivity" id="connectivity">
          <div className="container">
            <Fade>
              <div className="section-label" style={{ color: "var(--gold)" }}>Location Advantage</div>
              <h2 className="section-title gg-display" style={{ color: "#fff" }}>Seamlessly Connected<br />to <em>Everything</em></h2>
              <div className="divider" />
            </Fade>
            <div className="conn-grid">
              <Fade delay={0.1}>
                <div className="conn-card">
                  <h3>🚉 Transport & Transit</h3>
                  <ul className="conn-list">
                    <li>Trichy Road & L&T Bypass</li>
                    <li>Podanur Railway & Bus Stations</li>
                    <li>Ukkadam & Singanallur Bus Stands</li>
                    <li>Coimbatore Railway Station & Airport</li>
                  </ul>
                </div>
              </Fade>
              <Fade delay={0.2}>
                <div className="conn-card">
                  <h3>🛍️ Shopping & Entertainment</h3>
                  <ul className="conn-list">
                    <li>Brookfields Mall, Fun Republic, Prozone Mall</li>
                    <li>PVR Cinemas, Cinepolis, KG Cinemas</li>
                    <li>Race Course, VOC Park & Zoo, Valankulam Lake</li>
                    <li>Kovai Kondattam & OxyZone Adventure Park</li>
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── TABLES ── */}
        <section className="section tables-section" id="nearby">
          <div className="container">
            <Fade>
              <div className="section-label">Proximity Map</div>
              <h2 className="section-title gg-display">Everything You Need<br /><em>Minutes Away</em></h2>
              <div className="divider" />
            </Fade>
            <div className="tables-grid">
              <Fade delay={0.1}>
                <div className="tbl-wrap">
                  <div className="tbl-head gg-display">🎓 Educational Institutions</div>
                  <table>
                    <thead><tr><th>Institution</th><th>Distance</th><th>Time</th></tr></thead>
                    <tbody>
                      {COLLEGES.map(([name, dist, time], i) => (
                        <tr key={i}><td>{name}</td><td>{dist}</td><td>{time}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Fade>
              <Fade delay={0.2}>
                <div className="tbl-wrap">
                  <div className="tbl-head gg-display">🏥 Hospitals</div>
                  <table>
                    <thead><tr><th>Hospital</th><th>Travel Time</th></tr></thead>
                    <tbody>
                      {HOSPITALS.map(([name, time], i) => (
                        <tr key={i}><td>{name}</td><td>{time}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section faq-section" id="faq">
          <div className="container">
            <Fade>
              <div className="section-label">Common Questions</div>
              <h2 className="section-title gg-display">Frequently Asked<br /><em>Questions</em></h2>
              <div className="divider" />
            </Fade>
            <Fade delay={0.1}>
              <div className="faq-list" style={{ maxWidth: 780 }}>
                {FAQS.map((faq, i) => (
                  <div className="faq-item" key={i}>
                    <div className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                      <span>{faq.q}</span>
                      <span className={`faq-icon${faqOpen === i ? " open" : ""}`}>+</span>
                    </div>
                    <div className={`faq-a${faqOpen === i ? " open" : ""}`}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-grid">
              <Fade delay={0}>
                <div className="contact-info">
                  <div className="section-label" style={{ color: "var(--gold-light)" }}>Get In Touch</div>
                  <h2 className="section-title gg-display" style={{ color: "#fff" }}>Book Your<br /><em>Site Visit</em></h2>
                  <div className="divider" />
                  <p>Experience Golden Grove firsthand. Our team will walk you through every plot and amenity, and help you find the perfect fit for your dream home or investment.</p>
                  <p style={{ marginTop: "1.5rem" }}>
                    <strong style={{ color: "var(--gold-light)" }}>📍 Location:</strong><br />
                    <span style={{ color: "rgba(255,255,255,.62)", fontSize: "1rem" }}>Nanjundapuram, Coimbatore, Tamil Nadu</span>
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    <strong style={{ color: "var(--gold-light)" }}>📞 Contact:</strong><br />
                    <span style={{ color: "rgba(255,255,255,.62)", fontSize: "1rem" }}>Reach us via the form or visit pressanainfra.com</span>
                  </p>
                </div>
              </Fade>
              <Fade delay={0.15}>
                {submitted ? (
                  <div className="success-msg">
                    <div style={{ fontSize: "2.5rem", marginBottom: ".6rem" }}>✓</div>
                    <strong>Thank you, {formData.name}!</strong><br />
                    Our team will contact you shortly to schedule your site visit.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Your Name</label>
                      <input required placeholder="Eg. Ravi Kumar" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" required placeholder="email@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <button type="submit" className="form-submit">Book My Site Visit →</button>
                  </form>
                )}
              </Fade>
            </div>
          </div>
        </section>

        {/* ── FOOTER STRIP ── */}
        <div className="footer-strip">
          <p>© {new Date().getFullYear()} Golden Grove by Pressana Infra. All rights reserved. · Nanjundapuram, Coimbatore, Tamil Nadu.</p>
        </div>
      </div>
    </>
  );
};

export default Golden;