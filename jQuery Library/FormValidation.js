function validate() {
    let submitBtn = $('#submit');
    submitBtn.on('click', function (ev) {
        ev.preventDefault()
    });

    let valid = $('#valid');
    valid.css('display', 'none');

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckBox = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');

    submitBtn.on('click', submit);
    let isValid = true;
    let validResult = true;

    companyCheckBox.on('change', showCompany);
    let isChecked = false;

    function showCompany() {
        companyInfo.css('display', 'block');
        isChecked = true;
    }

    function submit() {

        isValid = validate(username, /^[A-Za-z0-9]{3,20}$/);
        validResult = isValidResult(isValid);

        isValid = validate(email, /.*@+.*\.+.*/);
        validResult = isValidResult(isValid);

        isValid = validate(password, /^[\w]{5,15}$/);
        validResult = isValidResult(isValid);

        isValid = validate(confirmPassword, /^[\w]{5,15}$/);
        validResult = isValidResult(isValid);

        if (confirmPassword.val() !== password.val()) {
            confirmPassword.css('border-color', 'red');
            isValid = false;
        } else {
            confirmPassword.css('border', 'none');
            isValid = validate(confirmPassword, /^[\w]{5,15}$/);
            validResult = isValidResult(isValid);
        }

        if (companyCheckBox.is(':checked')) {
            if (+companyNumber.val() < 1000 || +companyNumber.val() >= 10000) {
                companyNumber.css('border-color', 'red');
                isValid = false;
            } else {
                companyNumber.css('border', 'none');
            }
        }

        validResult = isValidResult(isValid);


        if (validResult || validResult == undefined) {
            valid.css('display', 'block');
        } else {
        }
    }

    function  validate (input, pattern) {
        if (!input.val().match(pattern)) {
            input.css('border', 'solid red');
            return false;

        } else {
            input.css('border', 'none');
            return true;
        }
    }

    function isValidResult(isValid) {
        if (!isValid) {
            return false;
        }
    }

}
