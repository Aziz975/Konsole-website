// // import React, { useEffect, useRef, useState } from "react";
// // import { ArrowRight, Upload, CheckCircle2 } from "lucide-react";

// // /* ---------- Settings ---------- */
// // // Put your form endpoint here (Formspree, EmailJS, your own backend...).
// // // Leave it empty while testing: the form will just log the data in the console.
// // const API_URL = "";

// // const MAX_FILE_MB = 5;

// // // Edit these to match your open roles
// // const positions = [
// //   "Content Creator",
// //   "Video Editor",
// //   "Social Media Manager",
// //   "Digital PR Executive",
// //   "Political Analyst",
// //   "Graphic Designer",
// //   "Other",
// // ];

// // const experiences = ["Fresher", "0-1 years", "1-3 years", "3-5 years", "5+ years"];

// // const initialForm = {
// //   name: "",
// //   email: "",
// //   phone: "",
// //   position: "",
// //   experience: "",
// //   city: "",
// //   link: "",
// //   message: "",
// // };

// // /* ---------- Shared styles ---------- */
// // const labelClass = "mb-2 block text-[14px] font-semibold tracking-[-0.01em]";
// // const inputClass =
// //   "w-full rounded-xl border border-[#d7d7d4] bg-white px-4 py-3.5 text-[16px] text-[#080b0b] outline-none transition placeholder:text-[#9a9a96] focus:border-[#080b0b] focus:ring-2 focus:ring-[#ffd21c]/70";

// // function Field({ label, required, children }) {
// //   return (
// //     <div>
// //       <label className={labelClass}>
// //         {label}
// //         {required && <span className="ml-0.5 text-[#ff6969]">*</span>}
// //       </label>
// //       {children}
// //     </div>
// //   );
// // }

// // export default function HiringForm() {
// //   const sectionRef = useRef(null);
// //   const [visible, setVisible] = useState(false);
// //   const [form, setForm] = useState(initialForm);
// //   const [resume, setResume] = useState(null);
// //   const [status, setStatus] = useState("idle"); // idle | sending | success | error
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         setVisible(entry.isIntersecting);
// //       },
// //       { threshold: 0.15 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, []);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleFile = (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     if (file.size > MAX_FILE_MB * 1024 * 1024) {
// //       setError(`Resume must be smaller than ${MAX_FILE_MB} MB.`);
// //       e.target.value = "";
// //       return;
// //     }

// //     setError("");
// //     setResume(file);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!resume) {
// //       setError("Please upload your resume.");
// //       return;
// //     }

// //     setError("");
// //     setStatus("sending");

// //     try {
// //       const data = new FormData();
// //       Object.entries(form).forEach(([key, value]) => data.append(key, value));
// //       data.append("resume", resume);

// //       if (API_URL) {
// //         const res = await fetch(API_URL, { method: "POST", body: data });
// //         if (!res.ok) throw new Error("Request failed");
// //       } else {
// //         console.log("Hiring form data:", Object.fromEntries(data));
// //       }

// //       setStatus("success");
// //       setForm(initialForm);
// //       setResume(null);
// //     } catch (err) {
// //       setStatus("error");
// //       setError("Something went wrong. Please try again or email us directly.");
// //     }
// //   };

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="w-full bg-[#faf9f6] px-6 py-20 text-[#080b0b] sm:px-10 md:px-14 lg:py-[100px] xl:px-[60px]"
// //     >
// //       <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-[110px]">

// //         {/* ================= LEFT: INTRO ================= */}
// //         <div className="lg:pt-4">
// //           <div
// //             className={`mb-6 text-[31px] font-normal leading-none tracking-[-0.02em] sm:text-[35px] md:text-[39px] xl:text-[42px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]" : "translate-y-12 opacity-0"}`}
// //             style={{ fontFamily: "'Caveat', cursive" }}
// //           >
// //             Looking For Sherpa
// //           </div>

// //           <h2
// //             className={`max-w-[520px] text-[44px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[55px] md:text-[62px] lg:text-[54px] xl:text-[64px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.25s_forwards]" : "translate-y-12 opacity-0"}`}
// //           >
// //             Join the team that creates influence.
// //           </h2>

// //           <p
// //             className={`mt-7 max-w-[460px] text-[18px] leading-[1.5] tracking-[-0.01em] text-[#080b0b]/70 md:text-[20px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.4s_forwards]" : "translate-y-12 opacity-0"}`}
// //           >
// //             Tell us about yourself and attach your resume. If your skills match
// //             an open role, our team will get in touch with you.
// //           </p>
// //         </div>

// //         {/* ================= RIGHT: FORM ================= */}
// //         <div
// //           className={`rounded-3xl border border-[#e4e4e0] bg-white p-6 shadow-sm sm:p-10 ${visible ? "animate-[fadeUp_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_forwards]" : "translate-y-12 opacity-0"}`}
// //         >
// //           {status === "success" ? (
// //             <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
// //               <CheckCircle2 className="mb-5 h-14 w-14 text-[#1fc66b]" strokeWidth={1.8} />
// //               <h3 className="text-[30px] font-bold leading-[1.1] tracking-[-0.03em]">
// //                 Application received
// //               </h3>
// //               <p className="mt-3 max-w-[380px] text-[17px] leading-[1.5] text-[#080b0b]/65">
// //                 Thanks for applying. We'll review your details and reach out if
// //                 there's a fit.
// //               </p>
// //               <button
// //                 type="button"
// //                 onClick={() => setStatus("idle")}
// //                 className="mt-8 rounded-full border border-[#080b0b] px-7 py-3 text-[15px] font-semibold transition-colors hover:bg-[#080b0b] hover:text-white"
// //               >
// //                 Submit another application
// //               </button>
// //             </div>
// //           ) : (
// //             <form onSubmit={handleSubmit} className="space-y-5">
// //               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
// //                 <Field label="Full name" required>
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     value={form.name}
// //                     onChange={handleChange}
// //                     required
// //                     placeholder="Your full name"
// //                     className={inputClass}
// //                   />
// //                 </Field>

// //                 <Field label="Email" required>
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={form.email}
// //                     onChange={handleChange}
// //                     required
// //                     placeholder="you@example.com"
// //                     className={inputClass}
// //                   />
// //                 </Field>

// //                 <Field label="Phone number" required>
// //                   <input
// //                     type="tel"
// //                     name="phone"
// //                     value={form.phone}
// //                     onChange={handleChange}
// //                     required
// //                     placeholder="+91 98765 43210"
// //                     className={inputClass}
// //                   />
// //                 </Field>

// //                 <Field label="Current city" required>
// //                   <input
// //                     type="text"
// //                     name="city"
// //                     value={form.city}
// //                     onChange={handleChange}
// //                     required
// //                     placeholder="Raipur"
// //                     className={inputClass}
// //                   />
// //                 </Field>

// //                 <Field label="Position" required>
// //                   <select
// //                     name="position"
// //                     value={form.position}
// //                     onChange={handleChange}
// //                     required
// //                     className={inputClass}
// //                   >
// //                     <option value="" disabled>
// //                       Select a role
// //                     </option>
// //                     {positions.map((p) => (
// //                       <option key={p} value={p}>
// //                         {p}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </Field>

// //                 <Field label="Experience" required>
// //                   <select
// //                     name="experience"
// //                     value={form.experience}
// //                     onChange={handleChange}
// //                     required
// //                     className={inputClass}
// //                   >
// //                     <option value="" disabled>
// //                       Select experience
// //                     </option>
// //                     {experiences.map((x) => (
// //                       <option key={x} value={x}>
// //                         {x}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </Field>
// //               </div>

// //               <Field label="LinkedIn or portfolio link">
// //                 <input
// //                   type="url"
// //                   name="link"
// //                   value={form.link}
// //                   onChange={handleChange}
// //                   placeholder="https://"
// //                   className={inputClass}
// //                 />
// //               </Field>

// //               <Field label="Resume" required>
// //                 <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-[#b9b9b4] bg-[#faf9f6] px-4 py-4 transition hover:border-[#080b0b]">
// //                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#080b0b] text-white">
// //                     <Upload className="h-4 w-4" />
// //                   </span>
// //                   <span className="min-w-0 text-[15px] leading-[1.3]">
// //                     <span className="block truncate font-semibold">
// //                       {resume ? resume.name : "Upload your resume"}
// //                     </span>
// //                     <span className="block text-[13px] text-[#080b0b]/55">
// //                       PDF, DOC or DOCX, up to {MAX_FILE_MB} MB
// //                     </span>
// //                   </span>
// //                   <input
// //                     type="file"
// //                     accept=".pdf,.doc,.docx"
// //                     onChange={handleFile}
// //                     className="sr-only"
// //                   />
// //                 </label>
// //               </Field>

// //               <Field label="Why do you want to join us?">
// //                 <textarea
// //                   name="message"
// //                   value={form.message}
// //                   onChange={handleChange}
// //                   rows={4}
// //                   placeholder="Tell us a little about yourself and your work"
// //                   className={`${inputClass} resize-none`}
// //                 />
// //               </Field>

// //               {error && (
// //                 <p role="alert" className="text-[14px] font-medium text-[#e11d48]">
// //                   {error}
// //                 </p>
// //               )}

// //               <button
// //                 type="submit"
// //                 disabled={status === "sending"}
// //                 className="inline-flex items-center gap-7 rounded-full bg-[#111a1f] px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#08766d] disabled:cursor-not-allowed disabled:opacity-60"
// //               >
// //                 <span>{status === "sending" ? "Sending..." : "Submit Application"}</span>
// //                 <ArrowRight size={20} strokeWidth={1.8} />
// //               </button>
// //             </form>
// //           )}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// import React, {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import { ArrowRight, CheckCircle2, Upload, X } from "lucide-react";

// /* ---------- Settings ---------- */
// // Put your form endpoint here (Formspree, EmailJS, your own backend...).
// // Leave it empty while testing: the form will just log the data in the console.
// const API_URL = "";

// const MAX_FILE_MB = 5;

// // Edit these to match your open roles
// const positions = [
//   "Content Creator",
//   "Video Editor",
//   "Social Media Manager",
//   "Digital PR Executive",
//   "Political Analyst",
//   "Graphic Designer",
//   "Other",
// ];

// const experiences = ["Fresher", "0-1 years", "1-3 years", "3-5 years", "5+ years"];

// const initialForm = {
//   name: "",
//   email: "",
//   phone: "",
//   city: "",
//   position: "",
//   experience: "",
//   link: "",
//   message: "",
// };

// const labelClass = "mb-1.5 block text-[14px] font-semibold tracking-[-0.01em]";
// const inputClass =
//   "w-full rounded-xl border border-[#d7d7d4] bg-white px-4 py-3 text-[16px] text-[#080b0b] outline-none transition placeholder:text-[#9a9a96] focus:border-[#080b0b] focus:ring-2 focus:ring-[#ffd21c]/70";

// function Field({ label, required, children }) {
//   return (
//     <div>
//       <label className={labelClass}>
//         {label}
//         {required && <span className="ml-0.5 text-[#ff6969]">*</span>}
//       </label>
//       {children}
//     </div>
//   );
// }

// /* ---------- Context so any button can open the popup ---------- */
// const HiringPopupContext = createContext({
//   openHiring: () => {},
//   closeHiring: () => {},
// });

// export const useHiringPopup = () => useContext(HiringPopupContext);

// /* ---------- The modal itself ---------- */
// function HiringModal({ onClose }) {
//   const firstInput = useRef(null);
//   const [form, setForm] = useState(initialForm);
//   const [resume, setResume] = useState(null);
//   const [status, setStatus] = useState("idle"); // idle | sending | success | error
//   const [error, setError] = useState("");

//   // Close on Esc, lock page scroll while open, focus first field
//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", onKey);

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     firstInput.current?.focus();

//     return () => {
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = previousOverflow;
//     };
//   }, [onClose]);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (file.size > MAX_FILE_MB * 1024 * 1024) {
//       setError(`Resume must be smaller than ${MAX_FILE_MB} MB.`);
//       e.target.value = "";
//       return;
//     }

//     setError("");
//     setResume(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!resume) {
//       setError("Please upload your resume.");
//       return;
//     }

//     setError("");
//     setStatus("sending");

//     try {
//       const data = new FormData();
//       Object.entries(form).forEach(([key, value]) => data.append(key, value));
//       data.append("resume", resume);

//       if (API_URL) {
//         const res = await fetch(API_URL, { method: "POST", body: data });
//         if (!res.ok) throw new Error("Request failed");
//       } else {
//         console.log("Hiring popup data:", Object.fromEntries(data));
//       }

//       setStatus("success");
//       setForm(initialForm);
//       setResume(null);
//     } catch (err) {
//       setStatus("error");
//       setError("Something went wrong. Please try again or email us directly.");
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#071313]/70 p-4 backdrop-blur-sm sm:items-center"
//       onMouseDown={(e) => e.target === e.currentTarget && onClose()}
//     >
//       <div
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="hiring-popup-title"
//         className="relative my-6 w-full max-w-[520px] animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] rounded-3xl bg-[#faf9f6] p-5 text-[#080b0b] shadow-2xl sm:p-7"
//       >
//         <button
//           type="button"
//           onClick={onClose}
//           aria-label="Close"
//           className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#080b0b]/60 transition-colors hover:bg-[#080b0b] hover:text-white"
//         >
//           <X className="h-5 w-5" />
//         </button>

//         {status === "success" ? (
//           <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
//             <CheckCircle2 className="mb-5 h-14 w-14 text-[#1fc66b]" strokeWidth={1.8} />
//             <h3 className="text-[30px] font-bold leading-[1.1] tracking-[-0.03em]">
//               Application received
//             </h3>
//             <p className="mt-3 max-w-[360px] text-[17px] leading-[1.5] text-[#080b0b]/65">
//               Thanks for applying. We'll review your details and reach out if
//               there's a fit.
//             </p>
//             <button
//               type="button"
//               onClick={onClose}
//               className="mt-8 rounded-full bg-[#111a1f] px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#08766d]"
//             >
//               Close
//             </button>
//           </div>
//         ) : (
//           <>
//             <div
//               className="mb-2 text-[26px] leading-none"
//               style={{ fontFamily: "'Caveat', cursive" }}
//             >
//               Looking For Sherpa
//             </div>
//             <h2
//               id="hiring-popup-title"
//               className="pr-10 text-[26px] font-bold leading-[1.05] tracking-[-0.045em] sm:text-[30px]"
//             >
//               Join the team that creates influence.
//             </h2>

//             <form onSubmit={handleSubmit} className="mt-5 space-y-3">
// <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                 <Field label="Full name" required>
//                   <input
//                     ref={firstInput}
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Your full name"
//                     className={inputClass}
//                   />
//                 </Field>

//                 <Field label="Email" required>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="you@example.com"
//                     className={inputClass}
//                   />
//                 </Field>

//                 <Field label="Phone number" required>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     required
//                     placeholder="+91 98765 43210"
//                     className={inputClass}
//                   />
//                 </Field>

//                 <Field label="Current city" required>
//                   <input
//                     type="text"
//                     name="city"
//                     value={form.city}
//                     onChange={handleChange}
//                     required
//                     placeholder="Raipur"
//                     className={inputClass}
//                   />
//                 </Field>

//                 <Field label="Position" required>
//                   <select
//                     name="position"
//                     value={form.position}
//                     onChange={handleChange}
//                     required
//                     className={inputClass}
//                   >
//                     <option value="" disabled>
//                       Select a role
//                     </option>
//                     {positions.map((p) => (
//                       <option key={p} value={p}>
//                         {p}
//                       </option>
//                     ))}
//                   </select>
//                 </Field>

//                 <Field label="Experience" required>
//                   <select
//                     name="experience"
//                     value={form.experience}
//                     onChange={handleChange}
//                     required
//                     className={inputClass}
//                   >
//                     <option value="" disabled>
//                       Select experience
//                     </option>
//                     {experiences.map((x) => (
//                       <option key={x} value={x}>
//                         {x}
//                       </option>
//                     ))}
//                   </select>
//                 </Field>
//               </div>

//               <Field label="LinkedIn or portfolio link">
//                 <input
//                   type="url"
//                   name="link"
//                   value={form.link}
//                   onChange={handleChange}
//                   placeholder="https://"
//                   className={inputClass}
//                 />
//               </Field>

//               <Field label="Resume" required>
//                 <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-[#b9b9b4] bg-white px-4 py-3.5 transition hover:border-[#080b0b]">
//                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#080b0b] text-white">
//                     <Upload className="h-4 w-4" />
//                   </span>
//                   <span className="min-w-0 text-[15px] leading-[1.3]">
//                     <span className="block truncate font-semibold">
//                       {resume ? resume.name : "Upload your resume"}
//                     </span>
//                     <span className="block text-[13px] text-[#080b0b]/55">
//                       PDF, DOC or DOCX, up to {MAX_FILE_MB} MB
//                     </span>
//                   </span>
//                   <input
//                     type="file"
//                     accept=".pdf,.doc,.docx"
//                     onChange={handleFile}
//                     className="sr-only"
//                   />
//                 </label>
//               </Field>

//               <Field label="Why do you want to join us?">
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   rows={3}
//                   placeholder="Tell us a little about yourself and your work"
//                   className={`${inputClass} resize-none`}
//                 />
//               </Field>

//               {error && (
//                 <p role="alert" className="text-[14px] font-medium text-[#e11d48]">
//                   {error}
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 disabled={status === "sending"}
//                 className="inline-flex w-full items-center justify-between rounded-full bg-[#111a1f] px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#08766d] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:gap-10"
//               >
//                 <span>{status === "sending" ? "Sending..." : "Submit Application"}</span>
//                 <ArrowRight size={20} strokeWidth={1.8} />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ---------- Provider: wrap your app with this ---------- */
// export function HiringPopupProvider({ children }) {
//   const [open, setOpen] = useState(false);

//   const openHiring = useCallback(() => setOpen(true), []);
//   const closeHiring = useCallback(() => setOpen(false), []);

//   return (
//     <HiringPopupContext.Provider value={{ openHiring, closeHiring }}>
//       {children}
//       {open && <HiringModal onClose={closeHiring} />}
//     </HiringPopupContext.Provider>
//   );
// }



// import React, { useEffect, useRef, useState } from "react";
// import { ArrowRight, Upload, CheckCircle2 } from "lucide-react";

// /* ---------- Settings ---------- */
// // Put your form endpoint here (Formspree, EmailJS, your own backend...).
// // Leave it empty while testing: the form will just log the data in the console.
// const API_URL = "";

// const MAX_FILE_MB = 5;

// // Edit these to match your open roles
// const positions = [
//   "Content Creator",
//   "Video Editor",
//   "Social Media Manager",
//   "Digital PR Executive",
//   "Political Analyst",
//   "Graphic Designer",
//   "Other",
// ];

// const experiences = ["Fresher", "0-1 years", "1-3 years", "3-5 years", "5+ years"];

// const initialForm = {
//   name: "",
//   email: "",
//   phone: "",
//   position: "",
//   experience: "",
//   city: "",
//   link: "",
//   message: "",
// };

// /* ---------- Shared styles ---------- */
// const labelClass = "mb-2 block text-[14px] font-semibold tracking-[-0.01em]";
// const inputClass =
//   "w-full rounded-xl border border-[#d7d7d4] bg-white px-4 py-3.5 text-[16px] text-[#080b0b] outline-none transition placeholder:text-[#9a9a96] focus:border-[#080b0b] focus:ring-2 focus:ring-[#ffd21c]/70";

// function Field({ label, required, children }) {
//   return (
//     <div>
//       <label className={labelClass}>
//         {label}
//         {required && <span className="ml-0.5 text-[#ff6969]">*</span>}
//       </label>
//       {children}
//     </div>
//   );
// }

// export default function HiringForm() {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);
//   const [form, setForm] = useState(initialForm);
//   const [resume, setResume] = useState(null);
//   const [status, setStatus] = useState("idle"); // idle | sending | success | error
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setVisible(entry.isIntersecting);
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (file.size > MAX_FILE_MB * 1024 * 1024) {
//       setError(`Resume must be smaller than ${MAX_FILE_MB} MB.`);
//       e.target.value = "";
//       return;
//     }

//     setError("");
//     setResume(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!resume) {
//       setError("Please upload your resume.");
//       return;
//     }

//     setError("");
//     setStatus("sending");

//     try {
//       const data = new FormData();
//       Object.entries(form).forEach(([key, value]) => data.append(key, value));
//       data.append("resume", resume);

//       if (API_URL) {
//         const res = await fetch(API_URL, { method: "POST", body: data });
//         if (!res.ok) throw new Error("Request failed");
//       } else {
//         console.log("Hiring form data:", Object.fromEntries(data));
//       }

//       setStatus("success");
//       setForm(initialForm);
//       setResume(null);
//     } catch (err) {
//       setStatus("error");
//       setError("Something went wrong. Please try again or email us directly.");
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-[#faf9f6] px-6 py-20 text-[#080b0b] sm:px-10 md:px-14 lg:py-[100px] xl:px-[60px]"
//     >
//       <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-[110px]">

//         {/* ================= LEFT: INTRO ================= */}
//         <div className="lg:pt-4">
//           <div
//             className={`mb-6 text-[31px] font-normal leading-none tracking-[-0.02em] sm:text-[35px] md:text-[39px] xl:text-[42px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]" : "translate-y-12 opacity-0"}`}
//             style={{ fontFamily: "'Caveat', cursive" }}
//           >
//             Looking For Sherpa
//           </div>

//           <h2
//             className={`max-w-[520px] text-[44px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[55px] md:text-[62px] lg:text-[54px] xl:text-[64px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.25s_forwards]" : "translate-y-12 opacity-0"}`}
//           >
//             Join the team that creates influence.
//           </h2>

//           <p
//             className={`mt-7 max-w-[460px] text-[18px] leading-[1.5] tracking-[-0.01em] text-[#080b0b]/70 md:text-[20px] ${visible ? "animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.4s_forwards]" : "translate-y-12 opacity-0"}`}
//           >
//             Tell us about yourself and attach your resume. If your skills match
//             an open role, our team will get in touch with you.
//           </p>
//         </div>

//         {/* ================= RIGHT: FORM ================= */}
//         <div
//           className={`rounded-3xl border border-[#e4e4e0] bg-white p-6 shadow-sm sm:p-10 ${visible ? "animate-[fadeUp_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_forwards]" : "translate-y-12 opacity-0"}`}
//         >
//           {status === "success" ? (
//             <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
//               <CheckCircle2 className="mb-5 h-14 w-14 text-[#1fc66b]" strokeWidth={1.8} />
//               <h3 className="text-[30px] font-bold leading-[1.1] tracking-[-0.03em]">
//                 Application received
//               </h3>
//               <p className="mt-3 max-w-[380px] text-[17px] leading-[1.5] text-[#080b0b]/65">
//                 Thanks for applying. We'll review your details and reach out if
//                 there's a fit.
//               </p>
//               <button
//                 type="button"
//                 onClick={() => setStatus("idle")}
//                 className="mt-8 rounded-full border border-[#080b0b] px-7 py-3 text-[15px] font-semibold transition-colors hover:bg-[#080b0b] hover:text-white"
//               >
//                 Submit another application
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//                 <Field label="Full name" required>
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Your full name"
//                     className={inputClass}
//                   />
//                 </Field>

//                 <Field label="Email" required>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="you@example.com"
//                     className={inputClass}
//                   />
//                 </Field>

//                 <Field label="Phone number" required>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     required
//                     placeholder="+91 98765 43210"
//                     className={inputClass}
//                   />
//                 </Field>

//                 <Field label="Current city" required>
//                   <input
//                     type="text"
//                     name="city"
//                     value={form.city}
//                     onChange={handleChange}
//                     required
//                     placeholder="Raipur"
//                     className={inputClass}
//                   />
//                 </Field>

//                 <Field label="Position" required>
//                   <select
//                     name="position"
//                     value={form.position}
//                     onChange={handleChange}
//                     required
//                     className={inputClass}
//                   >
//                     <option value="" disabled>
//                       Select a role
//                     </option>
//                     {positions.map((p) => (
//                       <option key={p} value={p}>
//                         {p}
//                       </option>
//                     ))}
//                   </select>
//                 </Field>

//                 <Field label="Experience" required>
//                   <select
//                     name="experience"
//                     value={form.experience}
//                     onChange={handleChange}
//                     required
//                     className={inputClass}
//                   >
//                     <option value="" disabled>
//                       Select experience
//                     </option>
//                     {experiences.map((x) => (
//                       <option key={x} value={x}>
//                         {x}
//                       </option>
//                     ))}
//                   </select>
//                 </Field>
//               </div>

//               <Field label="LinkedIn or portfolio link">
//                 <input
//                   type="url"
//                   name="link"
//                   value={form.link}
//                   onChange={handleChange}
//                   placeholder="https://"
//                   className={inputClass}
//                 />
//               </Field>

//               <Field label="Resume" required>
//                 <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-[#b9b9b4] bg-[#faf9f6] px-4 py-4 transition hover:border-[#080b0b]">
//                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#080b0b] text-white">
//                     <Upload className="h-4 w-4" />
//                   </span>
//                   <span className="min-w-0 text-[15px] leading-[1.3]">
//                     <span className="block truncate font-semibold">
//                       {resume ? resume.name : "Upload your resume"}
//                     </span>
//                     <span className="block text-[13px] text-[#080b0b]/55">
//                       PDF, DOC or DOCX, up to {MAX_FILE_MB} MB
//                     </span>
//                   </span>
//                   <input
//                     type="file"
//                     accept=".pdf,.doc,.docx"
//                     onChange={handleFile}
//                     className="sr-only"
//                   />
//                 </label>
//               </Field>

//               <Field label="Why do you want to join us?">
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   rows={4}
//                   placeholder="Tell us a little about yourself and your work"
//                   className={`${inputClass} resize-none`}
//                 />
//               </Field>

//               {error && (
//                 <p role="alert" className="text-[14px] font-medium text-[#e11d48]">
//                   {error}
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 disabled={status === "sending"}
//                 className="inline-flex items-center gap-7 rounded-full bg-[#111a1f] px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#08766d] disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 <span>{status === "sending" ? "Sending..." : "Submit Application"}</span>
//                 <ArrowRight size={20} strokeWidth={1.8} />
//               </button>
//             </form>
//           )}
//         </div>

//       </div>
//     </section>
//   );
// }

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ArrowRight, CheckCircle2, Upload, X } from "lucide-react";

/* ---------- Settings ---------- */
// Put your form endpoint here (Formspree, EmailJS, your own backend...).
// Leave it empty while testing: the form will just log the data in the console.
const API_URL = "";

const MAX_FILE_MB = 5;

// Edit these to match your open roles
const positions = [
  "Content Creator",
  "Video Editor",
  "Social Media Manager",
  "Digital PR Executive",
  "Political Analyst",
  "Graphic Designer",
  "Other",
];

const experiences = ["Fresher", "0-1 years", "1-3 years", "3-5 years", "5+ years"];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  position: "",
  experience: "",
  link: "",
  message: "",
};

const labelClass = "mb-1.5 block text-[14px] font-semibold tracking-[-0.01em]";
const inputClass =
  "w-full rounded-xl border border-[#d7d7d4] bg-white px-4 py-3 text-[16px] text-[#080b0b] outline-none transition placeholder:text-[#9a9a96] focus:border-[#080b0b] focus:ring-2 focus:ring-[#ffd21c]/70";

function Field({ label, required, children }) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="ml-0.5 text-[#ff6969]">*</span>}
      </label>
      {children}
    </div>
  );
}

/* ---------- Context so any button can open the popup ---------- */
const HiringPopupContext = createContext({
  openHiring: () => {},
  closeHiring: () => {},
});

export const useHiringPopup = () => useContext(HiringPopupContext);

/* ---------- The modal itself ---------- */
function HiringModal({ onClose }) {
  const firstInput = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  // Close on Esc, lock page scroll while open, focus first field
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstInput.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setError(`Resume must be smaller than ${MAX_FILE_MB} MB.`);
      e.target.value = "";
      return;
    }

    setError("");
    setResume(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      setError("Please upload your resume.");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const data = new FormData();
      Object.entries(form).forEach(([key, value]) => data.append(key, value));
      data.append("resume", resume);

      if (API_URL) {
        const res = await fetch(API_URL, { method: "POST", body: data });
        if (!res.ok) throw new Error("Request failed");
      } else {
        console.log("Hiring popup data:", Object.fromEntries(data));
      }

      setStatus("success");
      setForm(initialForm);
      setResume(null);
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#071313]/70 p-4 backdrop-blur-sm sm:items-center"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="hiring-popup-title"
        className="relative my-8 w-full max-w-[520px] animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] rounded-3xl bg-[#faf9f6] p-5 text-[#080b0b] shadow-2xl sm:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#080b0b]/60 transition-colors hover:bg-[#080b0b] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "success" ? (
          <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
            <CheckCircle2 className="mb-5 h-14 w-14 text-[#1fc66b]" strokeWidth={1.8} />
            <h3 className="text-[30px] font-bold leading-[1.1] tracking-[-0.03em]">
              Application received
            </h3>
            <p className="mt-3 max-w-[360px] text-[17px] leading-[1.5] text-[#080b0b]/65">
              Thanks for applying. We'll review your details and reach out if
              there's a fit.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-[#111a1f] px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#08766d]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div
              className="mb-2 text-[26px] leading-none"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              We Are Hiring
            </div>
            {/* <h2
              id="hiring-popup-title"
              className="pr-10 text-[26px] font-bold leading-[1.05] tracking-[-0.045em] sm:text-[30px]"
            >
              Join the team that creates influence.
            </h2> */}

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    ref={firstInput}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </Field>

                <Field label="Email" required>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>

                <Field label="Phone number" required>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </Field>

                <Field label="Current city" required>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="Raipur"
                    className={inputClass}
                  />
                </Field>

                <Field label="Position" required>
                  <select
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a role
                    </option>
                    {positions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Experience" required>
                  <select
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select experience
                    </option>
                    {experiences.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="LinkedIn or portfolio link">
                <input
                  type="url"
                  name="link"
                  value={form.link}
                  onChange={handleChange}
                  placeholder="https://"
                  className={inputClass}
                />
              </Field>

              <Field label="Resume" required>
                <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-[#b9b9b4] bg-white px-4 py-3.5 transition hover:border-[#080b0b]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#080b0b] text-white">
                    <Upload className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 text-[15px] leading-[1.3]">
                    <span className="block truncate font-semibold">
                      {resume ? resume.name : "Upload your resume"}
                    </span>
                    <span className="block text-[13px] text-[#080b0b]/55">
                      PDF, DOC or DOCX, up to {MAX_FILE_MB} MB
                    </span>
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFile}
                    className="sr-only"
                  />
                </label>
              </Field>

              {/* <Field label="Why do you want to join us?">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us a little about yourself and your work"
                  className={`${inputClass} resize-none`}
                />
              </Field> */}

              {error && (
                <p role="alert" className="text-[14px] font-medium text-[#e11d48]">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-between rounded-full bg-[#111a1f] px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#08766d] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:gap-10"
              >
                <span>{status === "sending" ? "Sending..." : "Submit Application"}</span>
                <ArrowRight size={20} strokeWidth={1.8} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Provider: wrap your app with this ---------- */
export function HiringPopupProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openHiring = useCallback(() => setOpen(true), []);
  const closeHiring = useCallback(() => setOpen(false), []);

  return (
    <HiringPopupContext.Provider value={{ openHiring, closeHiring }}>
      {children}
      {open && <HiringModal onClose={closeHiring} />}
    </HiringPopupContext.Provider>
  );
}