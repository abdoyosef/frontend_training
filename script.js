document.addEventListener('DOMContentLoaded', function() {
    const formOpenBtn = document.querySelector("#form-open"),
        home = document.querySelector(".home"),
        formContainer = document.querySelector(".form_container"),
        formCloseBtn = document.querySelectorAll(".form_close"),
        signupBtn = document.querySelector("#signup"),
        loginBtn = document.querySelector("#login"),
        pwShowHide = document.querySelectorAll(".pw_hide");

    if (!formOpenBtn || !home || !formContainer || !formCloseBtn || !signupBtn || !loginBtn || !pwShowHide) {
        console.error("One or more elements not found!");
        return;
    }

    formOpenBtn.addEventListener("click", () => home.classList.add("show"));

    formCloseBtn.forEach(btn => {
        btn.addEventListener("click", () => home.classList.remove("show"));
    });

    pwShowHide.forEach(icon => {
        icon.addEventListener("click", () => {
            let getPwInput = icon.parentElement.querySelector("input")
            if (getPwInput.type === "password") {
                getPwInput.type = "text";
                icon.classList.replace("uil-eye-slash", "uil-eye")
            } else {
                getPwInput.type = "password";
                icon.classList.replace("uil-eye", "uil-eye-slash")
            }
        })
    })

    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.classList.add("active")
    });

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.classList.remove("active")
    });
});
