const el = id => document.getElementById(id);

/* ================= DARK MODE ================= */
const toggle = el("themeToggle");
const html = document.documentElement;

if (localStorage.theme === "dark") {
  html.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.onclick = () => {
  html.classList.toggle("dark");
  const d = html.classList.contains("dark");
  toggle.textContent = d ? "☀️" : "🌙";
  localStorage.theme = d ? "dark" : "light";
};

/* ================= ELEMENT ================= */
const nama = el("nama");
const nim = el("nim");
const matkul = el("matkul");
const tugas = el("tugas");
const uts = el("uts");
const uas = el("uas");
const kehadiran = el("kehadiran");

const resultTitle = el("resultTitle");
const nilaiFinal = el("nilaiFinal");
const gradeDisplay = el("gradeDisplay");
const statusDisplay = el("statusDisplay");
const detailTugas = el("detailTugas");
const detailUTS = el("detailUTS");
const detailUAS = el("detailUAS");
const detailkehadiran = el("detailkehadiran");

el("hitungBtn").onclick = hitungNilai;
el("resetBtn").onclick = resetForm;

/* ================= ANIMATION UTILS ================= */
function animateNumber(el, target) {
  let start = 0;
  const duration = 800;
  const stepTime = 16;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target.toFixed(2);
      clearInterval(timer);
    } else {
      el.textContent = start.toFixed(2);
    }
  }, stepTime);
}

function glowPulse(el) {
  el.style.animation = "pulseGlow 1s ease";
  setTimeout(() => el.style.animation = "", 1000);
}

function shake(el) {
  el.classList.add("shake");
  setTimeout(() => el.classList.remove("shake"), 400);
}

/* ================= LOGIKA ASLI ================= */
function hitungNilai() {
  if (!nama.value || !nim.value || !matkul.value) {
    [nama, nim, matkul].forEach(shake);
    return;
  }

  const t = +tugas.value || 0;
  const u1 = +uts.value || 0;
  const u2 = +uas.value || 0;
  const k = +kehadiran.value || 0;

  const akhir = (t * 0.2) + (u1 * 0.3) + (u2 * 0.4) + (k * 0.1);

  let grade = akhir >= 85 ? "A" :
              akhir >= 70 ? "B" :
              akhir >= 60 ? "C" :
              akhir >= 50 ? "D" : "E";

  let lulus = ["A", "B", "C"].includes(grade);

  resultTitle.textContent = `${nama.value} (${nim.value}) - ${matkul.value}`;

  nilaiFinal.textContent = "0.00";
  animateNumber(nilaiFinal, akhir);
  glowPulse(nilaiFinal);

  gradeDisplay.textContent = `Grade ${grade}`;
  statusDisplay.textContent = lulus ? "LULUS" : "TIDAK LULUS";

  detailTugas.textContent = (t * 0.2).toFixed(2);
  detailUTS.textContent = (u1 * 0.3).toFixed(2);
  detailUAS.textContent = (u2 * 0.4).toFixed(2);
  detailkehadiran.textContent = (k * 0.1).toFixed(2);
}

/* ================= RESET ================= */
function resetForm() {
  document.querySelectorAll("input").forEach(i => {
    i.value = "";
    i.style.transition = "0.3s";
  });

  nilaiFinal.style.opacity = 0;
  setTimeout(() => {
    resultTitle.textContent = "Masukkan data terlebih dahulu";
    nilaiFinal.textContent = "-";
    gradeDisplay.textContent = "-";
    statusDisplay.textContent = "-";
    detailTugas.textContent =
    detailUTS.textContent =
    detailUAS.textContent =
    detailkehadiran.textContent = "-";
    nilaiFinal.style.opacity = 1;
  }, 300);
}
