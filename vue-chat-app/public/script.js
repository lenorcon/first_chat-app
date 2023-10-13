// document.addEventListener("DOMContentLoaded", function () {
//     const toggleSwitch = document.querySelector("#toggle");
//     const container = document.querySelector(".container");

//     document.addEventListener("DOMContentLoaded", function(){
//         const button = document.getElementById("login-btn");
//         button.addEventListener("click", function() {
//             alert("is click");
//             loginTab.classList.add("active");
//             registerTab.classList.remove("active");
//             loginForm.style.display = "block";
//             registerForm.style.display = "none";
//         });
        
//     });
    

    document.addEventListener("DOMContentLoaded", function () {
        // Get references to the login button and chat app UI container
        var loginButton = document.getElementById("login-btn");
        var chatAppUI = document.getElementById("chat-app-ui");
       
        // Add a click event listener to the login button
        loginButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior
        // Hide the login form
        document.getElementById("login-form").style.display = "none";
        // Show the chat app UI
        chatAppUI.style.display = "block";
       
        });
    
        // You can add more functionality as needed, such as form validation and user authentication.
    });



    document.addEventListener("DOMContentLoaded", function () {
        // Get references to the login button, username and password inputs, and error message element
        var loginButton = document.getElementById("login-btn");
        var usernameInput = document.getElementById("username-input");
        var passwordInput = document.getElementById("password-input");
        var errorMessage = document.getElementById("error-message");
        
        // Add a click event listener to the login button
        loginButton.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent the default form submission behavior
          
          // Perform authentication (you should replace this with your own authentication logic)
          var username = usernameInput.value;
          var password = passwordInput.value;
          var isAuthenticated = authenticateUser(username, password);
          
          if (isAuthenticated) {
            // Hide the login form
            document.getElementById("login-form").style.display = "none";
            // Show the chat app UI
            document.getElementById("chat-app-ui").style.display = "block";
          } else {
            // Display the error message
            errorMessage.style.display = "block";
          }
        });
      
        // You should replace this with your own authentication logic
        function authenticateUser(username, password) {
          // Example authentication logic - replace with your own
          // For demonstration purposes, we'll assume a fixed username and password
          const validUsername = "demoUser";
          const validPassword = "demoPassword";
          
          return username === validUsername && password === validPassword;
        }
      });

      document.addEventListener("DOMContentLoaded", function () {
        // Get references to the login and registration forms, as well as the "Create Account" link
        var loginForm = document.getElementById("login-form");
        var registerForm = document.getElementById("register-form");
        var createAccountLink = document.getElementById("create-account-link");
      
        // Add a click event listener to the "Create Account" link
        createAccountLink.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent the default link behavior
          
          // Hide the login form
          loginForm.style.display = "none";
          // Show the registration form
          registerForm.style.display = "block";
        });
      
        // You can add more functionality, such as switching back to the login form.
      });
      
      
  

//     document.addEventListener("DOMContentLoaded", function () {
//         // Get a reference to the Login button
//         var loginButton = document.getElementById("login-tab");
      
//         // Get a reference to the Chat App UI container
//         var chatAppUI = document.getElementById("chat-app-ui");
      
//         // Add a click event listener to the Login button
//         loginButton.addEventListener("click", function () {
//           // Hide the Login button
//           loginButton.style.display = "none";
      
//           // Show the Chat App UI
//           chatAppUI.style.display = "block";
//         });
//       });

//     document.addEventListener("DOMContentLoaded", function () {
//         // ... (previous code)
    
//         const createAccountBtn = document.querySelector("#create-account-btn");
    
//         createAccountBtn.addEventListener("click", () => {
//             // Switch to the registration tab and form
//             registerTab.classList.add("active");
//             loginTab.classList.remove("active");
//             registerForm.style.display = "block";
//             loginForm.style.display = "none";
//         });
//     });
    

//     toggleSwitch.addEventListener("change", () => {
//         if (toggleSwitch.checked) {
//             container.classList.add("dark-mode");
//             container.classList.remove("light-mode");
//         } else {
//             container.classList.add("light-mode");
//             container.classList.remove("dark-mode");
//         }
//     });

//     const loginTab = document.querySelector("#login-tab");
//     const registerTab = document.querySelector("#register-tab");
//     const loginForm = document.querySelector("#login-form");
//     const registerForm = document.querySelector("#register-form");

//     loginTab.addEventListener("click", () => {
//         loginTab.classList.add("active");
//         registerTab.classList.remove("active");
//         loginForm.style.display = "block";
//         registerForm.style.display = "none";
//     });

//     registerTab.addEventListener("click", () => {
//         registerTab.classList.add("active");
//         loginTab.classList.remove("active");
//         registerForm.style.display = "block";
//         loginForm.style.display = "none";
//     });
// });
