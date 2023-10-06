document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector("#login-button");

  loginButton.addEventListener("click", async function (e) {
    e.preventDefault();

    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Simulate loading user data from fakeUsers.json
    try {
      const response = await fetch("fakeUsers.json");
      const users = await response.json();

      // Check if the entered credentials match any user in the JSON data
      const authenticatedUser = users.find(user => user.email === username && user.password === password);

      if (authenticatedUser) {
        // Redirect to the paginated list view
        window.location.href = "/list";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      alert("An error occurred while loading user data. Please try again later.");
    }
  });
});
