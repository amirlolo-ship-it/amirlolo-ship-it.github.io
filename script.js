// مدیریت منوی همبرگری
document.querySelector(".menu-toggle").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
});

// ردیابی اسکرول و به‌روزرسانی نوار پیشرفت
window.onscroll = function () {
  updateScrollProgressBar();
};

function updateScrollProgressBar() {
  const scrollProgressBar = document.getElementById("scroll-progress-bar");

  // محاسبه درصد اسکرول
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // به‌روزرسانی عرض نوار پیشرفت
  scrollProgressBar.style.width = scrollPercent + "%";
}

// فعال‌سازی انیمیشن‌های AOS
AOS.init({
  duration: 1000,
  once: true,
});

// تغییر حالت شب و روز
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// بررسی حالت ذخیره‌شده در localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// تغییر حالت با کلیک روی دکمه
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");

  if (isDarkMode) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});
