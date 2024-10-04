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

    return isValid;
}

document.getElementById('form').addEventListener('submit', function(e) {
    if (!validateform()) {
        e.preventDefault();  
    }
});