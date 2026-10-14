document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let mobile = document.getElementById("mobile").value.trim();
    let village = document.getElementById("village").value.trim();
    let wage = document.getElementById("wage").value;
    let date = document.getElementById("date").value;

    // Validation
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    if (age === "" || age < 18 || age > 70) {
        alert("Please enter a valid age between 18 and 70.");
        return;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (village === "") {
        alert("Please enter your village.");
        return;
    }

    if (wage === "" || wage <= 0) {
        alert("Please enter a valid daily wage.");
        return;
    }

    if (date === "") {
        alert("Please select your available work date.");
        return;
    }

    // Success message
    alert("Registration successful!");

    // Reset form
    document.getElementById("registrationForm").reset();
});