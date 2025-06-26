

/*function changetext() {
    let fpara = document.getElementById('fpara');
fpara.textContent = "Hello from anshuman"

}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click', changetext);*/
// to remove it you can type fpara.removeEventListener('click', changetext);

    // let anchorElement = document.getElementById('fanchor')

    // function handclick(event) {
    //     event.preventDefault()
    //     anchorElement.textContent = "click done hai"
    // }

    // anchorElement.addEventListener('click', handclick)

//   let paras = document.querySelectorAll('p');
  
//   function alertpara(event) {
//     alert("you have clicked on para: " + event.target.textContent);
//   }

//   for(let i=0; i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', alertpara);
//   }

let mydiv = document.getElementById('wrapper')

const alertdiv = (event) => {
    if(event.target.nodeName === 'SPAN') {
        alert("you have clicked on the: " +  event.target.textContent) 
    }
}
document.addEventListener('click', alertdiv)
// target is for the event all tasks like whatever we click on in the event but nodeName is for the specifics
// domcontentload (learn and understand from videos later )