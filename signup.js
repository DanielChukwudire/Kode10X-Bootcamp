function signUp() {
  const username = document.getElementById("signup").value;
  const password = document.getElementById("signupPass").value;

  if (username === "" || password === "") {
    alert("Please fill all Area");
    return;
  }
  const userData = {
    username: username,
    password: password,
  };
  localStorage.setItem("user", JSON.stringify(userData));
  alert("Sign up sucessfully");

  setTimeout(() => {
    window.location.href = "signin.html";
  });
}
