function openMenu() {
    // document.getElementById("sideNav").style.width = "250px";
    document.getElementById("ham").style.display = "none";
    document.getElementById("close").style.display = "initial";
    document.getElementById("nav").style.display = "block";
    document.getElementById("nav").style.height = "80vh";
}
function closeMenu() {
    document.getElementById("nav").style.height = "0";
    document.getElementById("close").style.display = "none";
    document.getElementById("ham").style.display = "initial";
}
// function closeMenu() {
//     document.getElementById("sideNav").style.width = "0";
// }
// onclick -> addClass, append








$(document).ready(function () {
    $('.menu2').after('<div class="mobile-trigger"><i></i></div>');
    $('.mobile-trigger').click(function () {
        $('.mobile-trigger i').toggleClass("changed");
        $('.menu1').toggleClass("changed");
        $('.menu2').toggleClass("changed");
    });
});


























