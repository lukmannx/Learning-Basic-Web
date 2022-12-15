let theme_switcher = document.querySelector('.theme-switcher');
let icon = localStorage.getItem('icon');
let theme = localStorage.getItem('theme');
setTheme(theme, icon);
theme_switcher.addEventListener('click', ()=>{
    if(theme_switcher.getAttribute('name') == 'sunny-outline'){
        setTheme('dark', 'moon-outline');
        theme_switcher.setAttribute('name', 'moon-outline');
    } else {
        setTheme('light', 'sunny-outline');
        theme_switcher.setAttribute('name', 'sunny-outline');
    }
    // jika antum menggunakan font awesome atau bootstrap icon, maka name ubah menjadi class dan value class nya cari aja di documentation misal (fa-matahari)
});

function setTheme(theme, icon) {
    document.documentElement.className = theme;
    theme_switcher.setAttribute('name', icon);
    localStorage.setItem('theme', theme);
    localStorage.setItem('icon', icon);
    if(
        (theme_switcher.getAttribute('name')== '' && theme == '') ||
        (theme == null && icon == null)
    ) {
        theme_switcher.setAttribute('name', 'sunny-outline');
    }
}