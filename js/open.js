function darkMode() {
    document.getElementById("darkmode").innerHTML='<link rel="stylesheet" href="css/darkmodeopen.css"/>';
    toggle()
}
function toggle() {
    document.getElementById("toggle").innerHTML='<li onclick="reset()" class="mdl-menu__item">Light Mode</li>';
}
function reset() {
    window.history.go(0);
}
function goToPage() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}
