const checkbox = document.getElementById('checkbox');
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () =>
{
    document.body.classList.add('dark');
    document.getElementById("btn1").classList.add('btn-dark');
    document.getElementById("btn2").classList.add('btn-dark');

    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () =>
{
    document.body.classList.remove('dark');
    document.getElementById("btn1").classList.remove('btn-dark');
    document.getElementById("btn2").classList.remove('btn-dark');

    localStorage.setItem('darkMode', 'disabled');
};

if (darkMode === "enabled")
{
    enableDarkMode();
}

checkbox.addEventListener('click', () => {

    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled')
    {
        enableDarkMode();
        console.log(darkMode);
    }

    else 
    {
        disableDarkMode();
        console.log(darkMode);
    }
});