function Login() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find matching user
  const matchedUser = users.find(user => user.username === username && user.password === password);

  if (matchedUser) {
    alert(`Welcome back, ${matchedUser.name}!`);
    // Redirect to dashboard or another page
    // window.location.href = "dashboard.html";
  } else {
    alert("Incorrect email or password.");
  }
}
