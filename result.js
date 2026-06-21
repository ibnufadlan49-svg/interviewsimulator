/* Elemen-elemen hasil yang akan diisi dari localStorage */
const scoreValue = document.getElementById("scoreValue");
const acceptanceValue = document.getElementById("acceptanceValue");
const resultTitle = document.getElementById("resultTitle");
const hrdReason = document.getElementById("hrdReason");

/* Mengambil skor akhir dari sesi interview sebelumnya */
const storedScore = Number(localStorage.getItem("interviewScore"));
const finalScore = Number.isFinite(storedScore)
  ? Math.max(0, Math.min(100, storedScore))
  : 0;

/* Menentukan laporan HRD berdasarkan skor */
function getInterviewReport(score) {
  if (score >= 70) {
    return {
      title: "PRO MAX EMPLOYEE",
      acceptance: 64,
      reason: "kamu terlalu normal untuk kantor ini. kita jadi curiga.",
    };
  }

  if (score >= 40) {
    return {
      title: "AVERAGE NPC WORKER",
      acceptance: 48,
      reason: "kamu bisa kerja, tapi vibes kamu kayak Excel 2007.",
    };
  }

  if (score >= 20) {
    return {
      title: "RED FLAG CANDIDATE",
      acceptance: 32,
      reason: "kita gak bilang kamu gagal, tapi kita ganti nomor kamu.",
    };
  }
  if (score >= 0) {
    return {
      title: "ABSOLUTE CHAOS",
      acceptance: 10,
      reason:
        "kami akan laporkan pengalaman ini ke HR lain biar gak kejadian lagi",
    };
  }
}

/* Menampilkan hasil akhir ke halaman */
function renderResult() {
  const report = getInterviewReport(finalScore);

  scoreValue.textContent = `${finalScore}/100`;
  acceptanceValue.textContent = `${report.acceptance}%`;
  resultTitle.textContent = report.title;
  hrdReason.textContent = report.reason;
}

/* Jalankan render saat halaman selesai dimuat */
document.addEventListener("DOMContentLoaded", renderResult);
