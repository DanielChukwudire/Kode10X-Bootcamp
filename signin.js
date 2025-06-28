function Login() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  const savedTolocal = JSON.parse(localStorage.getItem("user"));

  if (
    savedTolocal &&
    username === savedTolocal.username &&
    password === savedTolocal.password
  ) {
    alert("login sucessful");
  } else {
    alert("login failed");
  }
}
