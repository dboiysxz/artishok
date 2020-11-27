const artistsMenu = document.getElementById('artists-menu')
const writersMenu = document.getElementById('writers-menu')

function toggleArtists () {
    artistsMenu.classList.toggle('active')
    writersMenu.classList.remove('active')
    document.body.classList.toggle('active')
}

function toggleWriters () {
    writersMenu.classList.toggle('active')
    artistsMenu.classList.remove('active')
    document.body.classList.toggle('active')
}

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }
