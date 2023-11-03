// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(v => v.textContent.includes('JAVASCRIPT LANJUTAN'))


// ambil durasi masing - masing video
    .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
    .map(time => {
        // 10:30 -> [10. 30] split
        const parts = time.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// jumlahkan semua detiknya
    .reduce((total, sec) => total + sec);

// ubah format menjadi jam menit detik
const hour = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - hour * 3600;
const minute = Math.floor(jsLanjut / 60);
const second = jsLanjut - minute * 60;

// simpan di DOM
const pDuration = document.querySelector('.total-durasi');
pDuration.textContent = `${hour} Jam, ${minute} Menit, ${second} Detik.`;
const jumlahVideo = videos.filter(v => v.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJumlahVideo = document.querySelector('.jumlah-video');
pJumlahVideo.textContent = `${jumlahVideo} Video.`

console.log(jumlahVideo);