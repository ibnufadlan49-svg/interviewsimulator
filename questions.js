/* Daftar pertanyaan interview yang akan dipilih secara acak */
const QUESTIONS = [
  {
    question: "Kenapa kamu mau kerja di sini?",
    answers: [
      {
        text: "Butuh uang",
        score: 7,
        response: "jujur, tapi kamu kayak mesin ATM hidup",
      },
      {
        text: "WiFi rumah jelek",
        score: 3,
        response: "kita bukan provider internet",
      },
      {
        text: "Saya tersesat",
        score: 1,
        response: "kami bukan kantor Google Maps",
      },
      {
        text: "Saya dipanggil takdir",
        score: 2,
        response: "takdir kamu salah gedung.",
      },
    ],
  },
  {
    question: "Kelebihan kamu?",
    answers: [
      {
        text: "Bisa fokus kalau suasana tenang",
        score: 8,
        response: "akhirnya normal juga manusia ini",
      },
      {
        text: "Bisa pura-pura kerja",
        score: 5,
        response: "skill wajib semua kantor",
      },
      {
        text: "Bisa ngilang tanpa jejak",
        score: 3,
        response: "itu bukan HR value",
      },
      {
        text: "Saya karakter utama",
        score: 2,
        response: "ini bukan anime",
      },
    ],
  },
  {
    question: "Kelemahan kamu?",
    answers: [
      {
        text: "Terlalu perfeksionis",
        score: 6,
        response: "jawaban template LinkedIn detected",
      },
      {
        text: "Mager kalau belum deadline",
        score: 5,
        response: "relatable tapi bahaya",
      },
      {
        text: "Sering lupa saya kerja di mana",
        score: 2,
        response: "kamu ini employee atau NPC?",
      },
      {
        text: "Saya sempurna",
        score: 0,
        response: "silakan keluar secara sukarela",
      },
    ],
  },
  {
    question: "Kenapa kami harus pilih kamu?",
    answers: [
      {
        text: "Saya bisa belajar cepat",
        score: 8,
        response: "akhirnya ada niat hidup",
      },
      {
        text: "Karena saya datang jauh-jauh",
        score: 4,
        response: "itu bukan skill",
      },
      {
        text: "Karena saya sudah duduk",
        score: 3,
        response: "kursi juga duduk tiap hari",
      },
      {
        text: "Karena saya vibes-nya cocok",
        score: 2,
        response: "HR bukan zodiac reader",
      },
    ],
  },
  {
    question: "Gaji yang kamu mau?",
    answers: [
      {
        text: "Standar UMR",
        score: 8,
        response: "realistis, gak delulu",
      },
      {
        text: "Yang penting bisa makan",
        score: 6,
        response: "low expectation era",
      },
      {
        text: "Minimal bisa beli kopi tiap hari",
        score: 5,
        response: "kita bukan coffee shop sponsor",
      },
      {
        text: "Saya serahkan semesta",
        score: 1,
        response: "semesta gak approve payroll kamu",
      },
    ],
  },
  {
    question: "Bisa kerja di bawah tekanan?",
    answers: [
      {
        text: "Bisa, asal jelas tugasnya",
        score: 8,
        response: "dewasa akhirnya",
      },
      {
        text: "Saya biasa panik diam-diam",
        score: 5,
        response: "HR juga begitu, tapi jangan sampai ketahuan",
      },
      {
        text: "Saya tidur kalau stres",
        score: 3,
        response: "coping mechanism ilegal",
      },
      {
        text: "Saya adalah tekanan itu sendiri",
        score: 2,
        response: "kami mundur pelan-pelan",
      },
    ],
  },
  {
    question: "Ceritakan dirimu",
    answers: [
      {
        text: "Siswa/pekerja yang lagi belajar",
        score: 7,
        response: "baseline manusia produktif",
      },
      {
        text: "Masih loading…",
        score: 4,
        response: "Windows 7 behavior",
      },
      {
        text: "Saya tidak tahu saya siapa",
        score: 2,
        response: "ini bukan filosofi kelas berat",
      },
      {
        text: "Saya NPC",
        score: 1,
        response: "iya, keliatan",
      },
    ],
  },
  {
    question: "Target 5 tahun?",
    answers: [
      {
        text: "Lebih stabil finansial",
        score: 8,
        response: "dewasa mode ON",
      },
      {
        text: "Punya skill lebih bagus",
        score: 7,
        response: "bagus, gak halu",
      },
      {
        text: "Masih hidup",
        score: 6,
        response: "valid tapi depressing",
      },
      {
        text: "Jadi viral TikTok",
        score: 3,
        response: "bukan career plan",
      },
    ],
  },
  {
    question: "Pernah gagal?",
    answers: [
      {
        text: "Pernah, tapi belajar",
        score: 8,
        response: "growth mindset",
      },
      {
        text: "Sering, tapi lanjut aja",
        score: 7,
        response: "respect",
      },
      {
        text: "Gagal move on WiFi tetangga",
        score: 3,
        response: "ini kriminal ringan",
      },
      {
        text: "Saya gagal jadi manusia normal",
        score: 2,
        response: "kami bukan terapi",
      },
    ],
  },
  {
    question: "Ada pertanyaan?",
    answers: [
      {
        text: "Workflow kerja gimana?",
        score: 8,
        response: "finally serious",
      },
      {
        text: "Boleh scroll HP?",
        score: 4,
        response: "kamu udah mulai jujur ya",
      },
      {
        text: "ini prank?",
        score: 3,
        response: "kami juga ragu",
      },
      {
        text: "Kalau saya tidur dihitung kerja?",
        score: 1,
        response: "kamu dihitung keluar",
      },
    ],
  },
  {
    question: "Kalau ada konflik di tim, kamu ngapain?",
    answers: [
      {
        text: "Saya cari solusi lewat komunikasi",
        score: 8,
        response: "finally, orang dewasa hadir",
      },
      {
        text: "Saya diam dulu biar gak makin panas",
        score: 6,
        response: "coping mechanism standar",
      },
      {
        text: "Saya kabur dulu sambil nonton situasi",
        score: 4,
        response: "ini strategi survival, bukan teamwork",
      },
      {
        text: "Saya ikut konflik biar seru",
        score: 1,
        response: "kamu HR bencana berjalan",
      },
    ],
  },
  {
    question:
      "Apa yang kamu lakukan kalau tugas belum selesai tapi deadline mepet?",
    answers: [
      {
        text: "Saya atur prioritas dan kerja lembur kalau perlu",
        score: 8,
        response: "ini jawaban yang kita cari, akhirnya",
      },
      {
        text: "Saya minta perpanjangan deadline",
        score: 6,
        response: "masuk akal, asal gak tiap hari",
      },
      {
        text: "Saya kerjain setengah terus berharap aja cukup",
        score: 3,
        response: "hidup kamu penuh doa ya",
      },
      {
        text: "Saya tunggu inspirasi datang",
        score: 1,
        response: "inspirasi itu bukan shift kerja",
      },
    ],
  },
];
