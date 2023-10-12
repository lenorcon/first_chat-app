document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.querySelector("#toggle");
    const container = document.querySelector(".container");

    document.addEventListener("DOMContentLoaded", function(){
        const button = document.getElementById("login-btn");
        button.addEventListener("click", function() {
            alert("is click");
            loginTab.classList.add("active");
            registerTab.classList.remove("active");
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        });
        
    });

    document.addEventListener("DOMContentLoaded", function () {
        // ... (previous code)
    
        const createAccountBtn = document.querySelector("#create-account-btn");
    
        createAccountBtn.addEventListener("click", () => {
            // Switch to the registration tab and form
            registerTab.classList.add("active");
            loginTab.classList.remove("active");
            registerForm.style.display = "block";
            loginForm.style.display = "none";
        });
    });
    

    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            container.classList.add("dark-mode");
            container.classList.remove("light-mode");
        } else {
            container.classList.add("light-mode");
            container.classList.remove("dark-mode");
        }
    });

    const loginTab = document.querySelector("#login-tab");
    const registerTab = document.querySelector("#register-tab");
    const loginForm = document.querySelector("#login-form");
    const registerForm = document.querySelector("#register-form");

    loginTab.addEventListener("click", () => {
        loginTab.classList.add("active");
        registerTab.classList.remove("active");
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    registerTab.addEventListener("click", () => {
        registerTab.classList.add("active");
        loginTab.classList.remove("active");
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    });
});
