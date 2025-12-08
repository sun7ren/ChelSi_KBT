"use client";

import { useState } from "react";

export default function Step6() {
  const [initial, setInitial] = useState("");
  const [finalR, setFinalR] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [score, setScore] = useState<null | string>(null);

  const M_NaOH = 0.100;
  const V_HCl = 25.0;

  function calculate() {
    const init = parseFloat(initial);
    const fin = parseFloat(finalR);
    const ans = parseFloat(studentAnswer);

    if (isNaN(init) || isNaN(fin) || isNaN(ans)) {
      setScore("Harap masukkan angka yang valid.");
      return;
    }

    const V_NaOH = fin - init;

    if (V_NaOH <= 0) {
      setScore("Pembacaan akhir harus lebih besar dari awal.");
      return;
    }

    const trueM = (M_NaOH * V_NaOH) / V_HCl;

    // ±0.005 tolerance
    if (Math.abs(ans - trueM) < 0.005) {
      setScore(`Benar! Kalkulasi Anda Adalah M(HCl) = ${ans.toFixed(3)} M`);
    } else {
      setScore(
        `Tidak Benar. Jawaban Anda = ${ans.toFixed(3)} M, Angka Benar = ${trueM.toFixed(3)} M`
      );
    }
  }

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg border border-gray-300">
      <h2 className="text-xl font-semibold">Langkah 6: Hasil & Perhitungan</h2>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-lg mb-2">Informasi yang Tersedia</h3>
        <p>M<sub>NaOH</sub> = <b>{M_NaOH.toFixed(3)} M</b></p>
        <p>V<sub>HCl</sub> = <b>{V_HCl.toFixed(1)} mL</b></p>

        <h3 className="font-semibold text-lg mt-4 mb-2">Rumus yang Digunakan</h3>
        <p className="italic text-gray-700">
          M<sub>NaOH</sub> × V<sub>NaOH</sub> = M<sub>HCl</sub> × V<sub>HCl</sub>
        </p>

        <p className="mt-2 text-gray-700">
          Disusun ulang untuk menemukan molaritas yang tidak diketahui:
        </p>

        <p className="font-medium">
          M<sub>HCl</sub> = (M<sub>NaOH</sub> × V<sub>NaOH</sub>) / V<sub>HCl</sub>
        </p>
      </div>

      <p className="text-gray-700">
        Masukkan hasil pembacaan buret dan molaritas yang Anda hitung di bawah ini.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium">Pembacaan buret awal (mL)</p>
          <input
            type="number"
            step="0.01"
            value={initial}
            onChange={(e) => setInitial(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <p className="font-medium">Pembacaan buret akhir (mL)</p>
          <input
            type="number"
            step="0.01"
            value={finalR}
            onChange={(e) => setFinalR(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="col-span-2">
          <p className="font-medium">Kalkulasi Anda M(HCl)</p>
          <input
            type="number"
            step="0.0001"
            value={studentAnswer}
            onChange={(e) => setStudentAnswer(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="mt-4 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700"
      >
        Periksa Jawaban
      </button>

      {score && (
        <p className="mt-3 text-lg font-semibold">
          {score}
        </p>
      )}
    </div>
  );

}
