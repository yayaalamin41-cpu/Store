
document.addEventListener("DOMContentLoaded", function () {

    const languageButton = document.getElementById("languageButton");

    // تغيير اللغة
    function setLanguage(language) {

        const isArabic = language === "ar";

        document.documentElement.lang = language;
        document.documentElement.dir = isArabic ? "rtl" : "ltr";

        document.querySelectorAll("[data-ar][data-en]").forEach(function (element) {

            element.textContent = isArabic
                ? element.getAttribute("data-ar")
                : element.getAttribute("data-en");

        });

        document.querySelectorAll(
            "[data-ar-placeholder][data-en-placeholder]"
        ).forEach(function (element) {

            element.placeholder = isArabic
                ? element.getAttribute("data-ar-placeholder") || ""
                : element.getAttribute("data-en-placeholder") || "";

        });

        if (languageButton) {

            languageButton.textContent = isArabic
                ? "🌐 English"
                : "🌐 العربية";

        }

        localStorage.setItem("gimaLanguage", language);

    }

    if (languageButton) {

        languageButton.addEventListener("click", function () {

            const currentLanguage = document.documentElement.lang || "ar";

            setLanguage(currentLanguage === "ar" ? "en" : "ar");

        });

    }


    // تغيير الوضع الداكن والفاتح

    const themeButton = document.getElementById("themeButton");

    function setTheme(theme) {

        const isDark = theme === "dark";

        document.body.classList.toggle("dark-mode", isDark);

        if (themeButton) {

            themeButton.textContent = isDark
                ? "☀️ الوضع الفاتح"
                : "🌙 الوضع الداكن";

        }

        localStorage.setItem("gimaTheme", theme);

    }

    if (themeButton) {

        themeButton.addEventListener("click", function () {

            const isDark = document.body.classList.contains("dark-mode");

            setTheme(isDark ? "light" : "dark");

        });

    }


    // استرجاع اللغة المحفوظة

    setLanguage(
        localStorage.getItem("gimaLanguage") === "en" ? "en" : "ar"
    );


    // استرجاع الوضع المحفوظ

    setTheme(
        localStorage.getItem("gimaTheme") === "dark" ? "dark" : "light"
    );


    // إرسال رسالة صفحة تواصل معنا

    const contactForm = document.getElementById("contactForm");

    const successMessage = document.getElementById("successMessage");

    const whatsappLink = document.getElementById("whatsappLink");

    if (contactForm && successMessage && whatsappLink) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            // التحقق من صحة البيانات

            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();

                return;

            }

            // رابط واتساب غيمة ستور

            whatsappLink.href =
                "https://wa.me/message/K567TR7YECUVN1";

            // إظهار رسالة النجاح

            successMessage.style.display = "block";

            // إخفاء الفورم بعد الإرسال

            contactForm.style.display = "none";

            // الانتقال إلى رسالة النجاح

            successMessage.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        });

    }

});

