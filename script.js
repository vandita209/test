const finalImg = document.getElementById("finalImg");
const textImg = document.getElementById("text");
const para = document.querySelector(".textImg");


function getRandom() {
    fetch("https://some-random-apis.herokuapp.com/images")
        .then(res => res.json())
        .then(data => {
            finalImg.innerHTML = `<img style="width:400px; border:2px solid black" src="${data.url}"/>`
        })
}
para.addEventListener('click', textAppear => {
    textImg.innerText = 'this is long text for photo'
})
