document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nameInput = document.getElementById("Name").value;
    const emailInput = document.getElementById("email").value;
    submitData(nameInput, emailInput);
  });

  function submitData(name, email) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Name: name,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((user) => console.log(user))
      .catch((error) => console.error("Error:", error));
  }
});
