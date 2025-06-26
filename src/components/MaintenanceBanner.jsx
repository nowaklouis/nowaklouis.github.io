import React, { useState } from "react";

export default function MaintenanceBanner() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      className="bg-yellow-400 text-yellow-900 px-4 py-3 rounded-none flex justify-center items-center text-center relative"
      role="alert"
    >
      <strong className="font-bold mr-2">
        ⚠️ Site en cours de mise à jour
      </strong>
      <span>
        Certaines sections peuvent ne pas être finalisées ou accessibles.
      </span>
      <button
        onClick={() => setOpen(false)}
        aria-label="close"
        className="absolute right-2 top-2 text-yellow-900 hover:text-yellow-700 focus:outline-none"
      >
        &#x2715; {/* croix simple */}
      </button>
    </div>
  );
}
