// =========================================================
// SMOOTH SCROLL untuk semua link navigasi (#hero, #pendidikan, dst)
// =========================================================
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var targetId = this.getAttribute('href');
    var target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// =========================================================
// (Opsional) Efek navbar berubah warna saat discroll
// =========================================================
var navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 14px rgba(0,0,0,.15)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ================================
// AUTO TYPING TEXT
// ================================

const texts = [
    "Haii... Saya Salwa Salsabila Hasibuan",
    "Terima Kasih Sudah Mampir",
    "Haiii... Selamat Datang"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing-text").textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(() => {

            let erase = setInterval(() =>{

                letter = letter.slice(0,-1);
                document.getElementById("typing-text").textContent = letter;

                if(letter.length === 0){
                    clearInterval(erase);
                    count++;
                    index = 0;
                    setTimeout(type,300);
                }

            },40);

        },1800);

        return;
    }

    setTimeout(type,80);

})();