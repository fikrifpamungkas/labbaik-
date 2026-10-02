/* ===================================
   GAME EDUKASI MANASIK HAJI
=================================== */

let skor = 0;

// Menampilkan jawaban benar
function benar(id){

    document.getElementById(id).innerHTML="✅ Jawaban Benar";
    document.getElementById(id).style.color="green";

    skor +=20;

}

// Menampilkan jawaban salah
function salah(id){

    document.getElementById(id).innerHTML="❌ Jawaban Salah";
    document.getElementById(id).style.color="red";

}

// Menampilkan nilai
function lihatNilai(){

    if(skor>160){
        skor=160;
    }

    document.getElementById("nilai").innerHTML = skor + " / 160";

    if(skor==160){

        alert("🎉 Selamat!\nNilai Kamu 160\nHebat!");

    }else if(skor>=80){

        alert("😊 Bagus!\nNilai Kamu : "+skor);

    }else if(skor>=60){

        alert("🙂 Lumayan!\nNilai Kamu : "+skor);

    }else{

        alert("😄 Tetap Semangat Belajar!\nNilai Kamu : "+skor);

    }

}

// Main lagi
function mainLagi(){

    location.reload();

}