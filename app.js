const generatePassword = () => {
    const length = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'

    let password ='';
    for(i=0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * charset.length)
        password += charset[randomIndex]
    }
    document.getElementById('password').value = password;
    navigator.clipboard.writeText(password);
}

const Show = document.getElementById('generate');
Show.addEventListener("click",generatePassword)