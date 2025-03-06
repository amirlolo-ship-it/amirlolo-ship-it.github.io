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

// فعال‌سازی انیمیشن‌های AOS (اگر از AOS استفاده می‌کنید)
AOS.init({
  duration: 1000, // مدت زمان انیمیشن
  once: true, // انیمیشن فقط یک بار اجرا شود
});
