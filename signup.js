function signUp() {
  const name = document.getElementById("signup").value;
  const email = document.querySelector(".mail").value;
  const password = document.getElementById("signupPass").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Get existing users from localStorage or empty array
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const userExists = existingUsers.some(user => user.username === email);
  if (userExists) {
    alert("Email already registered. Please log in.");
    return;
  }

  const newUser = {
    name: name,
    username: email,
    password: password,
  };

  // Add new user to the array and update localStorage
  existingUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Sign up successful!");
  window.location.href = "signin.html"; // Redirect to login
}
