// // code 1 
// const t1 = performance.now()

// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p')
//     para.textContent = "This is Para: " + i
//     document.body.appendChild(para)
// }

// const t2 = performance.now()
// console.log("total time taken by the code 1: " + (t2-t1))

// // code 2
//  const t3 = performance.now()

//  let mydiv = document.createElement('div')

//  for(let i=1; i<=100; i++) {
//     let para = document.createElement('p')
//     para.textContent = "This is para: " + i
//     mydiv.appendChild(para)
//  }

//  document.body.appendChild(mydiv)

//  const t4 = performance.now()
//  console.log("The time taken by the code 2:" + (t4-t3))

let fragment = document.createDocumentFragment()

for(let i=1; i<=100; i++) {
    let para = document.createElement('p')
    para.textContent = "This is para: " + i
    fragment.appendChild(para)
}

document.body.appendChild(fragment);

//we use fragment bcz in this the repaint and reflow is not their like it doent count 