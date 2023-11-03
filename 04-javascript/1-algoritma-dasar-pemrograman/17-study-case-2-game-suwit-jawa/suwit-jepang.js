// Study Case 2 Suwit Jepang
var tanya = true;
while ( tanya ) {
    // Menangkap pilihan player
    var p = prompt("pilih : batu, kertas, gunting");

    // Menangkap pilihan komputer
    // Membangkitkan / Men-generate bilangan random
    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'batu';
    } else if ( comp >= 0.34 && comp < 0.67 ) {
        comp = 'gunting';
    } else {
        comp = 'kertas';
    }
    console.log(comp);

    var hasil = '';
    // Menentukan rules
    if( p == comp ) {
        hasil = 'SERI';
    } else if ( p == 'batu' ) {
        hasil = ( comp == 'gunting' ) ? 'MENANG':'KALAH';
    } else if ( p == 'gunting' ) {
        hasil = ( comp == 'batu' ) ? 'KALAH':'MENANG';
    } else if ( p == 'kertas' ) {
        hasil = ( comp == 'gunting') ? 'KALAH':'MENANG';
    } else {
        hasil = 'memasukkan pilihan yang salah.'
    }

    // Output
    alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasil nya adalah : Kamu ' + hasil);

    tanya = confirm('Apakah anda ingin bermain lagi ?');
}

alert('Terima kasih sudah bermain game suwit jepang 🙏');