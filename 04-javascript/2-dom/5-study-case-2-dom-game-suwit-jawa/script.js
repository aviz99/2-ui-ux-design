// Study Case 2 Game Suwit Jawa Remake
function pilihanComp() {

    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if ( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

// Rules
function resultHasil(com, player) {
    if( player == com ) return 'SERI';
    if( player == 'gajah' ) return ( com == 'orang' ) ? 'MENANG':'KALAH';
    if( player == 'orang' ) return ( com == 'gajah' ) ? 'KALAH':'MENANG';
    if( player == 'semut' ) return ( com == 'orang') ? 'KALAH':'MENANG';
}

// Event

function twist() {
    const gambarComp = document.querySelector('.img-komputer');
    const gambar = ['gajah','orang','semut'];
    let i = 0;
    const timeStart = new Date().getTime();
    setInterval( function() {
        if( new Date().getTime() - timeStart > 1000 ) {
            clearInterval;
            return;
        }
        gambarComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length ) i = 0;
    }, 100 );
}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pilih) {
    pilih.addEventListener('click', function() {
        const pilihanKomputer = pilihanComp();
        const pilihanPlayer = pilih.className;
        const result = resultHasil(pilihanKomputer, pilihanPlayer);

        twist();

        setTimeout(function() {
            const imageComp = document.querySelector('.img-komputer');
            imageComp.setAttribute('src','img/' + pilihanKomputer + '.png');

            const infoResult = document.querySelector('.info');
            infoResult.innerHTML = result;
        }, 1000);
        
    });
});































// const playerGajah = document.querySelector('.gajah');
// playerGajah.addEventListener('click', function() {
//     const pilihanKomputer = pilihanComp();
//     const pilihanPlayer = playerGajah.className;
//     const result = resultHasil(pilihanKomputer, pilihanPlayer);
    
//     const imageComp = document.querySelector('.img-komputer');
//     imageComp.setAttribute('src','img/' + pilihanKomputer + '.png');

//     const infoResult = document.querySelector('.info');
//     infoResult.innerHTML = result;
// });

// const playerOrang = document.querySelector('.orang');
// playerOrang.addEventListener('click', function() {
//     const pilihanKomputer = pilihanComp();
//     const pilihanPlayer = playerOrang.className;
//     const result = resultHasil(pilihanKomputer, pilihanPlayer);
    
//     const imageComp = document.querySelector('.img-komputer');
//     imageComp.setAttribute('src','img/' + pilihanKomputer + '.png');

//     const infoResult = document.querySelector('.info');
//     infoResult.innerHTML = result;
// });

// const playerSemut = document.querySelector('.semut');
// playerSemut.addEventListener('click', function() {
//     const pilihanKomputer = pilihanComp();
//     const pilihanPlayer = playerSemut.className;
//     const result = resultHasil(pilihanKomputer, pilihanPlayer);
    
//     const imageComp = document.querySelector('.img-komputer');
//     imageComp.setAttribute('src','img/' + pilihanKomputer + '.png');

//     const infoResult = document.querySelector('.info');
//     infoResult.innerHTML = result;
// });
