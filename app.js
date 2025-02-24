document.addEventListener("DOMContentLoaded", function () {
  const userLoginBtn = document.getElementById("user-login-btn");
  const adminLoginBtn = document.getElementById("admin-login-btn");
  const userLoginForm = document.getElementById("user-login-form");
  const adminLoginForm = document.getElementById("admin-login-form");
  const errorMessage = document.getElementById("error-message");

  // Toggle between User and Admin login forms
  userLoginBtn.addEventListener("click", function () {
    userLoginBtn.classList.add("active");
    adminLoginBtn.classList.remove("active");
    userLoginForm.classList.remove("hidden");
    adminLoginForm.classList.add("hidden");
    errorMessage.textContent = "";
  });

  adminLoginBtn.addEventListener("click", function () {
    adminLoginBtn.classList.add("active");
    userLoginBtn.classList.remove("active");
    adminLoginForm.classList.remove("hidden");
    userLoginForm.classList.add("hidden");
    errorMessage.textContent = "";
  });

  // Handle User Login Form Submission
  userLoginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;

    // Simulate login validation
    if (email === "user@example.com" && password === "user123") {
      alert("User login successful!");
      // Redirect to user dashboard
      window.location.href = "user-dashboard.html";
    } else {
      errorMessage.textContent = "Invalid email or password.";
    }
  });

  // Handle Admin Login Form Submission
  adminLoginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("admin-email").value;
    const password = document.getElementById("admin-password").value;

    // Simulate login validation
    if (email === "admin@example.com" && password === "admin123") {
      alert("Admin login successful!");
      // Redirect to admin dashboard
      window.location.href = "admin-dashboard.html";
    } else {
      errorMessage.textContent = "Invalid email or password.";
    }
  });
});
