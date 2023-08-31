/*

Name : Hammad ahmad
shoaib ali 
*/
    function validateForm() {

      var email = document.getElementById("emailInput").value;
      var mobile = document.getElementById("mobileInput").value;

      // Validating email
      if (email === "") {
        alert("Please enter your email.");
        return false;
      }
      else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
      }

      // Validating mobile number
      if (mobile === "") {
        alert("Please enter your mobile number.");
        return false;
      }
      else if (!validateMobile(mobile)) {
        alert("Please enter a valid mobile number.");
        return false;
      }

      // If all validations pass, the form can be submitted
      return true;
    }

    // Email validation function
    function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // Mobile number validation function
    function validateMobile(mobile) {
      var mobileRegex = /^\d{10}$/; 
      return mobileRegex.test(mobile);
    }
