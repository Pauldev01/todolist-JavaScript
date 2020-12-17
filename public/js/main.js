document.body.style.padding = "0"
document.body.style.backgroundColor = "lightgrey"

document.body.style.justifyContent = "center"
document.body.style.display = "flex"

let section = document.createElement('section')
section.style.backgroundColor = "white"
section.style.width = "80vw"
section.style.height = "60vh"
section.style.justifyContent = "center"
section.style.display = "flex"
document.body.append(section) 

let div1 = document.createElement('div')


let div2 = document.createElement('div')

let div3 = document.createElement('div')

let div4 = document.createElement('div')


section.append(div1, div2, div3, div4)