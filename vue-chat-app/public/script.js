document.addEventListener("DOMContentLoaded", function () {
  // Functionality for switching between login and register forms
  function showRegisterTab() {
    // Check if the elements exist before trying to access them
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const registerTab = document.getElementById("register-tab");
    const createAccountLink = document.getElementById("create-account-link");

    if (loginForm && registerForm && registerTab && createAccountLink) {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
      registerTab.style.display = "inline-block";
      createAccountLink.style.display = "none";
    }
  }

  // Functionality for toggling between dark and light mode
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
  }

  // Event listener for the "Create Account" link
  const createAccountLink = document.getElementById("create-account-link");
  if (createAccountLink) {
    createAccountLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      showRegisterTab();
    });
  }

  // Event listener for the toggle button
  const toggleButton = document.getElementById("toggle");
  if (toggleButton) {
    toggleButton.addEventListener("change", function () {
      toggleDarkMode();
    });
  }
});
