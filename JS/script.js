function validateform(e) {
    let isValid = true; 

    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address1 = document.getElementById('address1').value;
    let address2 = document.getElementById('address2').value;
    let address3 = document.getElementById('address3').value;
    let address4 = document.getElementById('address4').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmpassword').value;
    let date = document.getElementById('date').value;
    let file = document.getElementById('file').value;

    if (firstname === '' || lastname === '' || email === '' || phone === '' || address1 === '' || address2 === '' || address3 === '' || address4 === '') {
        alert('Please fill in all fields');
        isValid = false;
    }

    let genderChecked = document.querySelector('input[name="gender"]:checked');
    if (!genderChecked) {
        alert("Gender is required.");
        isValid = false;
    }

    let maritalStatusChecked = document.querySelector('input[name="marital"]:checked');
    if (!maritalStatusChecked) {
        alert("Marital Status is required.");
        isValid = false;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        isValid = false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        isValid = false;
    }

    if (date === '') {
        alert('Date of birth is required');
        isValid = false;
    }

    if (file === '') {
        alert('Please upload a file');
        isValid = false;
    }

    return isValid;
}

document.getElementById('form').addEventListener('submit', function(e) {
    if (!validateform()) {
        e.preventDefault();  
    }
});



const player = {
    user: 'herobaymax',
    level: 50,
    points: 12345
}

// const player = ['herobaymax', 50, 12345];

for (const key in player) {
    console.log(`${key}: ${player[key]}`);
}

for (i in player) {
    console.log(i, "hehe");
}

for (i of Object.values(player)) {
    console.log(i);
}


