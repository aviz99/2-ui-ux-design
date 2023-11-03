// Study Case 2 Tebak Angka
var repeat = true;
while(repeat){
// Menangkap inputan player
alert("Ini adalah permainan tebakan angka" + "\n" + " silahkan masukkan angka 1-10");
var player = parseInt(prompt("Masukkan angka anda"));

// Membuat aturan permainan
var comp = Math.round(Math.random() * 10) + 1;
console.log(comp);


// Aturan permainan
var result = "";
for(var chance = 3; chance >= 1; chance--){
    if (player == comp) {
        result = "pilihan anda benar";
        alert("Selamat karena " + result);
        break;
    } else if (player != comp && chance > 1) {
            if (player > comp) {
                result = "Pilihan anda terlalu besar";
                alert("Maaf karena " + result);
                player = parseInt(prompt("Masukkan lagi angka anda"));
            } else if (player < comp) {
                result = "Pilihan anda terlalu kecil";
                alert("Maaf karena " + result);
                player = parseInt(prompt("Masukkan lagi angka anda"));
            } else {
                alert("Anda salah memasukkan angka");
                player = parseInt(prompt("Masukkan lagi angka anda"));
            }
    } else if(player != comp && chance == 1){
        result = "Maaf anda kehabisan kesempatan"
        alert(result);
    }
} repeat = confirm("Masih mau coba lagi?"); 

}
alert("Terima kasih telah bermain");