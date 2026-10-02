/* ==========================================
   SCRIPT.JS
   Media Interaktif Manasik Haji
========================================== */

// ===============================
// Splash Screen
// ===============================

window.addEventListener("load", function () {

    const splash = document.getElementById("splash");

    setTimeout(function () {

        splash.style.display = "none";

    }, 1500);

});

// ===============================
// Scroll Halus
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===============================
// Efek Hover pada Card
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});

// ===============================
// Tombol Mulai Belajar
// ===============================

const mulai = document.querySelector(".btn-warning");

if (mulai) {

    mulai.addEventListener("click", function () {

        alert("Selamat Belajar Manasik Haji 😊");

    });

}

// ===============================
// Tombol Game
// ===============================

const game = document.querySelector(".btn-success");

if (game) {

    game.addEventListener("click", function () {

        alert("Selamat Bermain 🎮");

    });

}

// ===============================
// Salam Saat Website Dibuka
// ===============================

console.log("Selamat Datang di Media Interaktif Manasik Haji");

// ===============================
// Tahun Footer Otomatis
// ===============================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = "© " + new Date().getFullYear() + " Labbaik kids";

}

function game3(j){

    let hasil=document.getElementById("hasil3");
    
    if(j=="A"){
    
    hasil.innerHTML="✅ Benar! Ini adalah pakaian ihram.";
    
    hasil.style.color="green";
    
    skor+=20;
    
    }
    else{
    
    hasil.innerHTML="❌ Bukan perlengkapan ihram.";
    
    hasil.style.color="red";
    
    }
    
    }
    
    function game4(j){
    
    let hasil=document.getElementById("hasil4");
    
    if(j=="A"){
    
    hasil.innerHTML="✅ Benar! Ini adalah Thawaf.";
    
    hasil.style.color="green";
    
    skor+=20;
    
    }
    else{
    
    hasil.innerHTML="❌ Jawaban kurang tepat.";
    
    hasil.style.color="red";
    
    }
    
    }

   /* ===========================
   Tombol Musik
=========================== */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic(){

    if(music.paused){

        music.play();

        musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause Musik';

    }else{

        music.pause();

        musicBtn.innerHTML = '<i class="fa-solid fa-play"></i> Putar Lagi Musiknya';

    }

}