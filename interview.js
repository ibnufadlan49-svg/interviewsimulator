/* Elemen-elemen utama yang dikontrol oleh JavaScript */
const progressBar = document.getElementById("progressBar");
const questionCounter = document.getElementById("questionCounter");
const hrdBubble = document.getElementById("hrdBubble");
const hrdText = document.getElementById("hrdText");
const candidateBubble = document.getElementById("candidateBubble");
const candidateText = document.getElementById("candidateText");
const answersGrid = document.getElementById("answersGrid");
const nextButton = document.getElementById("nextButton");

/* Konfigurasi jumlah maksimal pertanyaan */
const MAX_QUESTIONS = 10;
const TYPE_SPEED = 24;

/* State interview yang berubah selama permainan */
let selectedQuestions = [];
let currentIndex = 0;
let totalScore = 0;
let isTyping = false;
let typeTimer = null;

/* Mengacak urutan array tanpa mengubah data asli */
function shuffleArray(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

/* Menampilkan animasi bubble dari awal */
function replayBubbleAnimation(element) {
  element.classList.remove("bubble-enter");
  void element.offsetWidth;
  element.classList.add("bubble-enter");
}

/* Efek typewriter untuk teks HRD */
function typeWriter(text, onDone) {
  clearTimeout(typeTimer);
  hrdText.textContent = "";
  isTyping = true;

  let charIndex = 0;

  function writeNextCharacter() {
    hrdText.textContent = text.slice(0, charIndex);
    charIndex += 1;

    if (charIndex <= text.length) {
      typeTimer = setTimeout(writeNextCharacter, TYPE_SPEED);
      return;
    }

    isTyping = false;

    if (typeof onDone === "function") {
      onDone();
    }
  }

  writeNextCharacter();
}

/* Memperbarui progress bar dan nomor soal */
function updateProgress() {
  const currentNumber = Math.min(currentIndex + 1, MAX_QUESTIONS);
  const progressPercent = (currentNumber / MAX_QUESTIONS) * 100;

  questionCounter.textContent = `${currentNumber}/${MAX_QUESTIONS}`;
  progressBar.style.width = `${progressPercent}%`;
}

/* Membuat empat tombol pilihan jawaban */
function renderAnswers(question) {
  answersGrid.innerHTML = "";
  answersGrid.hidden = false;
  nextButton.hidden = true;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer.text;
    button.addEventListener("click", () => chooseAnswer(answer));
    answersGrid.appendChild(button);
  });
}

/* Menampilkan pertanyaan HRD saat giliran baru dimulai */
function showQuestion() {
  const question = selectedQuestions[currentIndex];

  updateProgress();
  candidateBubble.hidden = true;
  renderAnswers(question);
  replayBubbleAnimation(hrdBubble);
  typeWriter(question.question);
}

/* Menangani pilihan jawaban kandidat */
function chooseAnswer(answer) {
  if (isTyping) {
    return;
  }

  totalScore += answer.score;
  answersGrid.hidden = true;

  candidateText.textContent = answer.text;
  candidateBubble.hidden = false;
  replayBubbleAnimation(candidateBubble);

  hrdText.textContent = "Sedang mengetik...";
  replayBubbleAnimation(hrdBubble);

  setTimeout(() => {
    replayBubbleAnimation(hrdBubble);
    typeWriter(answer.response, () => {
      nextButton.hidden = false;
    });
  }, 1000);
}

/* Menyimpan hasil interview dan membuka halaman report */
function finishInterview() {
  const maxScore = MAX_QUESTIONS * 10;
  const finalScore = Math.round((totalScore / maxScore) * 100);

  localStorage.setItem("interviewScore", String(finalScore));
  localStorage.setItem("interviewAnswered", String(MAX_QUESTIONS));
  window.location.href = "result.html";
}

/* Berpindah ke pertanyaan berikutnya */
function goToNextQuestion() {
  if (isTyping) {
    return;
  }

  currentIndex += 1;

  if (currentIndex >= MAX_QUESTIONS) {
    finishInterview();
    return;
  }

  showQuestion();
}

/* Memulai simulasi interview dengan pertanyaan acak */
function startInterview() {
  selectedQuestions = shuffleArray(QUESTIONS).slice(0, MAX_QUESTIONS);
  currentIndex = 0;
  totalScore = 0;
  showQuestion();
}

/* Event listener tombol lanjut */
nextButton.addEventListener("click", goToNextQuestion);

/* Jalankan simulasi saat halaman selesai dimuat */
document.addEventListener("DOMContentLoaded", startInterview);
