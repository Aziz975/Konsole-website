import { User } from "lucide-react";

// Placeholder data only. Replace with your own dummy values.
const data = {
  name: "Konsole Group",
  dob: "18/03/2008",
  uniqueId: "xxxx xxxx xxxx",
  address: "Digitally Everywhere",
};

export default function SampleIdCard({ person = data }) {
  return (
    <div className="mx-auto w-[360px] overflow-hidden mb-6 rounded-lg border border-slate-300 bg-white shadow-md">
      {/* Header: logo + title */}
      <div className="flex items-center px-4 pt-3">
        <p className="text-xs font-medium text-slate-600">Sample ID Card</p>
      </div>
      <div className="mx-4 mt-2 h-px bg-slate-200" />

      {/* Photo + details */}
      <div className="flex items-center gap-4 px-4 py-4">
        <div className="flex h-28 w-24 shrink-0 items-center justify-center rounded-sm border border-slate-300 bg-slate-100 text-slate-400">
          {/* Replace with  */}
          <img src="/image2.png" className="h-full w-full object-contain" />
          <User size={48} />
        </div>

        <div className="space-y-0.5 text-sm text-slate-800">
          <p className="text-base font-semibold">{person.name}</p>
          <p>DOB: {person.dob}</p>
        </div>
      </div>

      {/* Unique ID */}
      <p className="pb-3 text-center font-mono text-2xl tracking-[0.2em] text-slate-900">
        {person.uniqueId}
      </p>

         {/* Address */}
      <p className="pb-3 text-center font-mono text-2xl tracking-[0.2em] text-slate-900">
        {person.address}
      </p>

      {/* Bottom band */}
      <div className="border-t-2 border-red-600 py-1 text-center text-lg font-semibold text-slate-800">
        Our adhar
      </div>
    </div>
  );
}