// System 1: Onclick
// {/* <button onclick="document.body.style.backgroundColor= 'rgba(222, 0, 78, 0.73)'">ClickMe</button> */}
// System 2: Onclick [Importand besi use korbo]
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
// System 3: Onclick
const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = clickBlue;
    function clickBlue() {
        document.body.style.backgroundColor = 'blue';
    }
// System 3: Onclick another[Uses sometime]
const makePurpleColor = document.getElementById('make-purple');
makePurpleColor.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}
// System 4: addEventListener
const makeGreenColor = document.getElementById('make-green');
makeGreenColor.addEventListener('click', makeGreen);
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

// System 4: addEventListener another[Important besi use kora hobe]
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})
