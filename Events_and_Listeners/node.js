

/*function changetext() {
    let fpara = document.getElementById('fpara');
fpara.textContent = "Hello from anshuman"

}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click', changetext);*/
// to remove it you can type fpara.removeEventListener('click', changetext);

let anchorElement = document.getElementById('fanchor')

function handclick(event) {
    event.preventDefault()
    anchorElement.textContent = "click done hai"
}

anchorElement.addEventListener('click', handclick)