// Study Case 1 Play With Color
const btnColor = document.getElementById('btn-color');
btnColor.addEventListener('click', function() {
    // document.body.style.backgroundColor = 'lightgreen';
    // document.body.setAttribute('light-green');
    document.body.classList.toggle('light-green');
});

const newBtnColor =  document.createElement('button');
const textBtnColor = document.createTextNode('Random Color');

newBtnColor.appendChild(textBtnColor);
newBtnColor.setAttribute('type', 'button');
btnColor.after(newBtnColor);

newBtnColor.addEventListener('click', function() {
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

const redMerah = document.querySelector('input[name=red]');
const greenHijau = document.querySelector('input[name=green]');
const blueBiru = document.querySelector('input[name=blue]');

redMerah.addEventListener('input', function() {
    const red = redMerah.value;
    const green = greenHijau.value;
    const blue = blueBiru.value;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

greenHijau.addEventListener('input', function() {
    const red = redMerah.value;
    const green = greenHijau.value;
    const blue = blueBiru.value;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

blueBiru.addEventListener('input', function() {
    const red = redMerah.value;
    const green = greenHijau.value;
    const blue = blueBiru.value;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});


document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    // clientX = untuk mengetahui sumbu kordinat X / horizontal
    // clientX harus nempel disebuah object dan object yang harus dikirim kedalam parameter function
    // clientY = untuk mengetahui sumbu kordinat Y / vertikal
    // clientY harus nempel disebuah object dan object yang harus dikirim kedalam parameter function
    // console.log(event.clientX);
    // ukuran browser
    // innerWidth untuk mengetahui lebar kotak dari putih nya
    // console.log(window.innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
})

// const range = document.querySelectorAll('input');

// for (let i = 0; i < range.length; i++) {

//     range[i].addEventListener('input', function () {
//         const r = range[0].value;
//         const g = range[1].value;
//         const b = range[2].value;

//         document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     });
// }