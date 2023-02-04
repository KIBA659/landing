const themeSwithers = document.querySelectorAll('.changeTheme');

themeSwithers.forEach(switcher =>{
    switcher.addEventListener('click',function(){
        applyTheme(this.dataset.theme);
        localStorage.setItem('theme', this.dataset.theme)
    })
})

function applyTheme(themename) {
    let themeUrl = `css/theme-${themename}.css`;
    document.querySelector('[title="theme"]').setAttribute('href',themeUrl);
}

let activetheme = localStorage.getItem('theme');

if( activetheme === null){
    applyTheme('dark');
}else{
    applyTheme(activetheme);
}