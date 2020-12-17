let section = document.createElement('section')
document.body.append(section)

let div1 = document.createElement('div')
// section.prepend(div1)

let div2 = document.createElement('div')
// section.append(div2)

let div3 = document.createElement('div')
// section.append(div3)
let div4 = document.createElement('div')

var input = document.createElement('input')
input.style.width = "9vw"

var valueInput

let divresult = document.createElement('div')
var yo

divresult.style.width = "500px"
divresult.style.height = "200px"

//checkbox
let check = document.createElement('input')
check.type = "checkbox"
check.onchange = function(){
    if(check.checked){
        input.disabled = true
    }
    else{
        input.disabled = false
    }
}

divresult.append(input, check)

section.append(div1, div2, div3, div4, divresult)


let entr1
let entr2

let tab = []

let tittle = document.createElement('h1')
tittle.innerHTML = "Calculatrice JS"

let button1 = document.createElement('button')
button1.innerHTML = "1"
button1.style.backgroundColor = "lightgrey"
button1.style.border = "none"
button1.style.height = "30px"
button1.style.width = "30px"
button1.style.borderRadius = "5px"
button1.style.margin = "2px"
button1.addEventListener('click', function () {
    button1.value = "1"
    input.value = input.value + "1"
    console.log(input.value)
})


let button2 = document.createElement('button')
button2.innerHTML = "2"
button2.style.backgroundColor = "lightgrey"
button2.style.border = "none"
button2.style.height = "30px"
button2.style.width = "30px"
button2.style.borderRadius = "5px"
button2.style.margin = "2px"
button2.addEventListener('click', function () {
    button2.value = "2"
    input.value = input.value + "2"
    console.log(input.value)
})

let button3 = document.createElement('button')
button3.innerHTML = "3"
button3.style.backgroundColor = "lightgrey"
button3.style.border = "none"
button3.style.height = "30px"
button3.style.width = "30px"
button3.style.borderRadius = "5px"
button3.style.margin = "2px"
button3.addEventListener('click', function () {
    button1.value = "3"
    input.value = input.value + "3"
    console.log(input.value)
})

let buttonplus = document.createElement('button')
buttonplus.innerHTML = "+"
buttonplus.style.color = "white"
buttonplus.style.backgroundColor = "purple"
buttonplus.style.border = "none"
buttonplus.style.height = "30px"
buttonplus.style.width = "30px"
buttonplus.style.borderRadius = "5px"
buttonplus.style.margin = "2px"
buttonplus.addEventListener('click', function () {
    yo = "+"
    entr1 = Number(input.value)
    tab.push(entr1)
    input.value = ""
    console.log(tab);
})
let divresultat = document.createElement('button')
divresultat.style.height = "3vh"
divresultat.style.width = "5vw"
divresultat.style.marginLeft = "30px"
divresultat.style.backgroundColor = "gold"
divresultat.style.border = "solid 1px purple"

let resultat = document.createElement('span')


div1.append(tittle, button1, button2, button3, buttonplus, divresultat)
divresultat.append(resultat)

let button4 = document.createElement('button')
button4.innerHTML = "4"
button4.style.backgroundColor = "lightgrey"
button4.style.border = "none"
button4.style.height = "30px"
button4.style.width = "30px"
button4.style.borderRadius = "5px"
button4.style.margin = "2px"
button4.addEventListener('click', function () {
    button4.value = "4"
    input.value = input.value + "4"
    console.log(input.value)
})
let button5 = document.createElement('button')
button5.innerHTML = "5"
button5.style.backgroundColor = "lightgrey"
button5.style.border = "none"
button5.style.height = "30px"
button5.style.width = "30px"
button5.style.borderRadius = "5px"
button5.style.margin = "2px"
button5.addEventListener('click', function () {
    button5.value = "5"
    input.value = input.value + "5"
    console.log(input.value)
})
let button6 = document.createElement('button')
button6.innerHTML = "6"
button6.style.backgroundColor = "lightgrey"
button6.style.border = "none"
button6.style.height = "30px"
button6.style.width = "30px"
button6.style.borderRadius = "5px"
button6.style.margin = "2px"
button6.addEventListener('click', function () {
    button6.value = "6"
    input.value = input.value + "6"
    console.log(input.value)
})
let buttonminus = document.createElement('button')
buttonminus.innerHTML = "-"
buttonminus.style.backgroundColor = "purple"
buttonminus.style.color = "white"
buttonminus.style.border = "none"
buttonminus.style.height = "30px"
buttonminus.style.width = "30px"
buttonminus.style.borderRadius = "5px"
buttonminus.style.margin = "2px"
buttonminus.addEventListener('click', function () {
    yo = "-"
    entr1 = Number(input.value)
    tab.push(entr1)
    input.value = ""
    console.log(tab);
})

div2.append(button4, button5, button6, buttonminus)



let button7 = document.createElement('button')
button7.innerHTML = "7"
button7.style.backgroundColor = "lightgrey"
button7.style.border = "none"
button7.style.height = "30px"
button7.style.width = "30px"
button7.style.borderRadius = "5px"
button7.style.margin = "2px"
button7.addEventListener('click', function () {
    button1.value = "7"
    input.value = input.value + "7"
    console.log(input.value)
})

let button8 = document.createElement('button')
button8.innerHTML = "8"
button8.style.backgroundColor = "lightgrey"
button8.style.border = "none"
button8.style.height = "30px"
button8.style.width = "30px"
button8.style.borderRadius = "5px"
button8.style.margin = "2px"
button8.addEventListener('click', function () {
    button8.value = "8"
    input.value = input.value + "8"
    console.log(input.value)
})

let button9 = document.createElement('button')
button9.innerHTML = "9"
button9.style.backgroundColor = "lightgrey"
button9.style.border = "none"
button9.style.height = "30px"
button9.style.width = "30px"
button9.style.borderRadius = "5px"
button9.style.margin = "2px"
button9.addEventListener('click', function () {
    button9.value = "9"
    input.value = input.value + "9"
    console.log(input.value)
})

let buttonce = document.createElement('button')
buttonce.innerHTML = "CE"
buttonce.style.backgroundColor = "grey"
buttonce.style.border = "none"
buttonce.style.height = "30px"
buttonce.style.width = "30px"
buttonce.style.borderRadius = "5px"
buttonce.style.margin = "2px"
buttonce.addEventListener('click', function () {
    input.value = ""
})

div3.append(button7, button8, button9, buttonce)



let buttonmulti = document.createElement('button')
buttonmulti.innerHTML = "X"
buttonmulti.style.color = "white"
buttonmulti.style.backgroundColor = "purple"
buttonmulti.style.border = "none"
buttonmulti.style.height = "30px"
buttonmulti.style.width = "30px"
buttonmulti.style.borderRadius = "5px"
buttonmulti.style.margin = "2px"
buttonmulti.addEventListener('click', function () {
    yo = "*"
    entr1 = Number(input.value)
    tab.push(entr1)
    input.value = ""
    console.log(tab);
})
let button0 = document.createElement('button')
button0.innerHTML = "0"
button0.style.backgroundColor = "lightgray"
button0.style.border = "none"
button0.style.height = "30px"
button0.style.width = "30px"
button0.style.borderRadius = "5px"
button0.style.margin = "2px"
button0.addEventListener('click', function () {
    button0.value = "0"
    input.value = input.value + "0"
    console.log(input.value)
})
let buttondivi = document.createElement('button')
buttondivi.innerHTML = "/"
buttondivi.style.backgroundColor = "purple"
buttondivi.style.color = "white"
buttondivi.style.border = "none"
buttondivi.style.height = "30px"
buttondivi.style.width = "30px"
buttondivi.style.borderRadius = "5px"
buttondivi.style.margin = "2px"
buttondivi.addEventListener('click', function () {
    yo = "/"
    entr1 = Number(input.value)
    tab.push(entr1)
    input.value = ""
    console.log(tab);
})
let buttonegal = document.createElement('button')
buttonegal.innerHTML = "="
buttonegal.style.backgroundColor = "yellow"
buttonegal.style.border = "none"
buttonegal.style.height = "30px"
buttonegal.style.width = "30px"
buttonegal.style.borderRadius = "5px"
buttonegal.style.margin = "2px"
buttonegal.style.border = "solid purple 2px"
buttonegal.addEventListener('click', function () {
    switch (yo){
        case "+":
            console.log("yo");
        entr2 =Number(input.value)
        tab.push(entr2)
        resultat.innerHTML = Number(tab[0]) + Number(tab[1])
        console.log(Number(tab[0]) + Number(tab[1]));
        input.value = ""
        tab = []
            break
            case "-":
            console.log("yo");
            console.log("yo");
        entr2 =Number(input.value)
        tab.push(entr2)
        resultat.innerHTML = Number(tab[0]) - Number(tab[1])
        console.log(Number(tab[0]) - Number(tab[1]));
        input.value = ""
        tab = []
            break
            case "*":
            console.log("yo");
            console.log("yo");
        entr2 =Number(input.value)
        tab.push(entr2)
        resultat.innerHTML = Number(tab[0]) * Number(tab[1])
        console.log(Number(tab[0]) * Number(tab[1]));
        input.value = ""
        tab = []
            break
            case "/":
                console.log("yo");
        entr2 =Number(input.value)
        tab.push(entr2)
        resultat.innerHTML = Number(tab[0]) / Number(tab[1])
        console.log(Number(tab[0]) / Number(tab[1]));
        input.value = ""
        tab = []
            console.log("yo");
            break
    }   
})

div4.append(buttonmulti, button0, buttondivi, buttonegal)