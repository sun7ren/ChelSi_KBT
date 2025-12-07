"use client";

export default function Step0() {
  const chemicals = [
    "Hydrochloric Acid (HCl)",
    "Sodium Hydroxide (NaOH)",
    "Phenolphthalein",
    "Citric Acid (C₆H₈O₇)",
    "Sodium Bicarbonate (NaHCO₃)",
    "Sulfuric Acid (H₂SO₄)",
    "Potassium Hydroxide (KOH)",
    "Methyl Orange",
    "Litmus Paper",
  ];

  return (
    <div className="space-y-6">
      {/* Video Embed */}
      <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-300 shadow-sm">
        <iframe
          src="https://www.youtube.com/embed/sFpFCPTDv2w"
          width="100%"
          height="100%"
          allow="autoplay"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
