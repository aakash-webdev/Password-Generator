document.addEventListener('DOMContentLoaded', function () {

    // -------------- Variables -------------- //
    const passwordLength = document.getElementById('password_length');
    const includeUppercase = document.getElementById('uppercase_check');
    const includeLowercase = document.getElementById('lowercase_check');
    const includeNumbers = document.getElementById('numbers_check');
    const includeSymbols = document.getElementById('symbols_check');
    const btn = document.getElementById('btn');
    const passwordDisplay = document.getElementById('password_display');
    const copyButton = document.getElementById('copy_icon');

    // -------------- Values stored -------------- //
    const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const numberChar = '0123456789';
    const symbolChar = '!@#$%^&*()_+~`|./-=';

    // -------------- Get values from range input -------------- //
    passwordLength.addEventListener('input', function () {
        document.getElementById('password_length_value').innerHTML = passwordLength.value;
    });


    // ------------------------------------------ Event listener to generate password ------------------------------------------ //
    btn.addEventListener('click', function () {


        let passwordStore = '';
        let allowedChars = '';

        // ---- Adding characters to the allowed characters string by checking the checkbox ---- //
        // Uppercase
        if (includeUppercase.checked) {
            allowedChars += uppercaseChar;
        };
        // Lowercase
        if (includeLowercase.checked) {
            allowedChars += lowercaseChar;
        };
        // Numbers
        if (includeNumbers.checked) {
            allowedChars += numberChar;
        };
        // Symbols
        if (includeSymbols.checked) {
            allowedChars += symbolChar;
        };

        // ---- Password character error handling ---- //
        if (includeUppercase.checked === false && includeLowercase.checked === false && includeNumbers.checked === false && includeSymbols.checked === false) {
            passwordDisplay.innerHTML = "Select at least one character type";
            passwordDisplay.style.color = 'red';
        }
        else {
            // ---- Generate the password by randomly selecting characters from the allowed character set ---- //
            for (let i = 0; i < passwordLength.value; i++) {
                // Generate a random index within the range of the allowed characters
                let randomIndex = Math.floor(Math.random() * allowedChars.length);
                // Append the randomly selected character to the password
                passwordStore += allowedChars[randomIndex];
            };

            // Display the generated password
            passwordDisplay.innerHTML = passwordStore;
            passwordDisplay.style.color = 'rgb(0, 193, 0)';

            // Copy Password
            copyButton.addEventListener('click', function () {
                navigator.clipboard.writeText(passwordDisplay.innerHTML);
            })

            // Text Reveal (Baffle js)
            let b = baffle('.reveal_text').reveal(2000).set({
                characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>'
            });
        };
    });

    // -------------- Copy password to clipboard -------------- //


    // -------------- Dark mode -------------- //
    const darkModeToggle = document.getElementById('dark_mode_checkbox');

    darkModeToggle.addEventListener('change', function () {
        const mainComponent = document.querySelector('.pwd_generator_component');
        mainComponent.classList.toggle('dark_mode');
        const mainElement = document.querySelector('main');
        mainElement.classList.toggle('dark_mode');
    });








});