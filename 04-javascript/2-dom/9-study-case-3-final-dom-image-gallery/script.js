// Study Case 3 Final Image Gallery
const container = document.querySelector('.container');
const mainImg = document.querySelector('.main-img');
const thumbsImg = document.querySelectorAll('.thumb-img');

container.addEventListener('click', function(e) {
    // cek apakah yang diklik adalah thumb-img
    if ( e.target.className == 'thumb-img' ) {
        mainImg.src = e.target.src;
        mainImg.classList.add('fade');
        setTimeout(function() {
            mainImg.classList.remove('fade');
        }, 500);

        thumbsImg.forEach(function(thumb) {
            if ( thumb.classList.contains('active') ) {
                thumb.classList.remove('active');
            }
            // thumb.className = 'thumb';
        });
        e.target.classList.add('active');
    }
});