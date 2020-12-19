$(document).ready(function () {
  // Getting references to our form and input
  //var signUpForm = $("form.signup");
  //var emailInput = $("input#registerEmail");
  var passwordInput = $("#registerPassword");
  var usernameInput = $("#registerUsername");

  // When the signup button is clicked, we validate the email and password are not blank
  $(".signupBtn").on("click", function (event) {
    console.log("test");
    event.preventDefault();
    var userData = {
      password: passwordInput.val().trim(),
      username: usernameInput.val().trim()
    };
    console.log(userData);

    if (!userData.username || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
    usernameInput.val("");
    passwordInput.val("");
    //usernameInput("");
  });


  function signUpUser(userData) {
    $.post("/api/signup", {
      password: userData.password,
      username: userData.username
    })
      .then(function() {

        window.location.replace("/createblog");
      });
  }
});