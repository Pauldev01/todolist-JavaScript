document.body.style.padding = "0"
document.body.style.backgroundColor = "lightgrey"

document.body.style.justifyContent = "center"
document.body.style.display = "flex"

let tableau = []
let done =[]
let undone =[]
let tempo =[]
let trash =[]

let section = document.createElement('section')
section.style.backgroundColor = "white"
section.style.width = "80vw"
//section.style.height = "95vh"
section.style.justifyContent = "center"
section.style.display = "flex"
section.style.borderRadius = "25px"
section.style.flexWrap = "wrap"
document.body.append(section)

let div1 = document.createElement('div')
div1.style.backgroundColor = "lightblue"
div1.style.width = "60%"
div1.style.height = "7vh"
div1.style.marginTop = "10px"
div1.style.borderRadius = "25px"

let h1div1 = document.createElement('h1')
h1div1.style.justifyContent = "center"
h1div1.style.display = "flex"
h1div1.innerHTML = "Todo List."
h1div1.style.color = "slategrey"
h1div1.style.fontFamily = "Courier New"
// h1div1.style.fontSize = "30px"



div1.append(h1div1)



let div2 = document.createElement('div')

div2.style.backgroundColor = "pink"
div2.style.width = "90%"
//div2.style.height = "82vh"
div2.style.marginTop = "10px"
div2.style.borderRadius = "25px"
div2.style.borderTop = "solid lightblue 5px"
div2.style.borderBottom = "solid lightblue 2px"
div2.style.justifyContent = "center"
div2.style.display = "flex"
div2.style.flexDirection = "column"



let div3 = document.createElement('div')
div3.style.backgroundColor = "white"
div3.style.border = "solid lightgrey 3px"
div3.style.width = "99%"
div3.style.height = "15vh"
div3.style.marginTop = "10px"
div3.style.borderRadius = "25px"

let span3 = document.createElement('span')
span3.innerHTML = "Ajouter une tache :"
span3.style.marginLeft = "20px"
span3.style.color = "grey"
span3.style.fontFamily = "Courier New"

let divyo = document.createElement('div')

let button3 = document.createElement('button')
button3.style.backgroundColor = "lightgrey"
button3.style.border = "none"
button3.style.height = "20px"
button3.style.width = "100px"
button3.innerHTML = "Ajouter"
button3.style.color = "white"
button3.style.fontFamily = "Courier New"

let label3 = document.createElement('input')
label3.style.width = "145px"
label3.focus()

divyo.append(label3,button3)
div3.append(span3,divyo)

let div4 = document.createElement('div')

let buttons
let tabbuttons =[]

 for (let i=0; i<3;i++){
buttons = document.createElement('button')
buttons.style.width = "20vw"
buttons.style.height = "2vh"
buttons.style.backgroundColor = "lightpink"

tabbuttons.push(buttons)
}
tabbuttons[0].innerHTML = "A faire"
tabbuttons[0].style.fontFamily = "Courier New"
tabbuttons[0].style.width = "5vw"
tabbuttons[0].style.border ="none"
tabbuttons[0].style.marginRight ="3px"
tabbuttons[0].style.marginTop ="3px"
tabbuttons[0].style.color = "slategrey"
tabbuttons[0].addEventListener('click',function(){
        //div5.append(undone)
        for(i=0;i<tableau.length;i++){
        if (tableau[i].hasAttribute("class") == false){
            //gris
            console.log("yo");
            tableau[i].style.display ="none"
        }
    }


        // for(i=0;i<tableau.length;i++){
        //     if (tableau[i].hasAttribute("class")){
        //         console.log("yo");
        //     }
        //     else{
        //         tableau.splice(tableau[i])
        //         tempo.push(tableau[i])
        //         console.log(tempo);
        //     }
        // }
        // for (i=0;i<done.length;i++){
        //     done[i].style.display="none"
        //     tableau.splice(tableau[i])
        //         tempo.push(tableau[i])
        //         console.log(tempo);
        // }
    })
tabbuttons[1].innerHTML = "Terniné"
tabbuttons[1].style.fontFamily = "Courier New"
tabbuttons[1].style.width = "5vw"
tabbuttons[1].style.border ="none"
tabbuttons[1].style.marginRight ="3px"
tabbuttons[1].style.marginTop ="3px"
tabbuttons[1].style.color = "slategrey"
tabbuttons[1].addEventListener('click',function(){
    //div5.append(undone)
    for(i=0;i<tableau.length;i++){
        if (tableau[i].hasAttribute("class") != false){
            //gris
            console.log("yo");
            tableau[i].style.display ="none"
        }
        else{
        }
    //     for (i=0;i<undone.length;i++){
    //         if (undone[i].hasAttribute("class")){
    //         }
    //         else {
    //             undone[i].style.display="none"
    //         tableau.splice(tableau[i])
    //             tempo.push(tableau[i])
    //             console.log(tempo);
    //         }

    //         undone[i].style.display="none"
    //         tableau.splice(tableau[i])
    //             tempo.push(tableau[i])
    //             console.log(tempo);
    //     }
     }
})


tabbuttons[2].innerHTML = "Tous"
tabbuttons[2].style.fontFamily = "Courier New"
tabbuttons[2].style.width = "5vw"
tabbuttons[2].style.border ="none"
tabbuttons[2].style.marginRight ="3px"
tabbuttons[2].style.marginTop ="3px"
tabbuttons[2].style.color = "slategrey"
tabbuttons[2].addEventListener('click',function(){
    console.log("yo");
    for (let i =0;i<tableau.length;i++){
        tableau[i].style.display = "flex"
    }
})

div3.append(tabbuttons[0],tabbuttons[1],tabbuttons[2])

let div5 = document.createElement('div')
//div5.style.height = "79vh"
div5.style.backgroundColor = "lightblue"
div5.style.width = "99%"
div5.style.marginRight = "20px"
div5.style.marginTop = "10px"
div5.style.borderRadius = "25px"

section.append(div1, div2)
div2.append(div3, div4, div5)
div5.append(tableau)

button3.addEventListener('click',function(){
let newcard = document.createElement('div')
newcard.style.backgroundColor = "lightgray"
newcard.style.width = "99%"
newcard.style.height = "10vh"
newcard.style.zIndex = "99"
newcard.style.borderRadius = "25px"
newcard.style.marginTop = "10px"
newcard.style.border = "solid white 3px"
newcard.style.display = "flex"
newcard.style.justifyContent = "space-between"
newcard.setAttribute("class", "undone")
undone.push(newcard)
console.log(undone);

tableau.push(newcard)
div5.append(newcard)

console.log(tableau);

let span = document.createElement('span')
span.style.marginLeft = "20px"
span.style.fontSize = "40px"
span.style.color = "grey"
span.style.fontFamily = "Courier New"
newcard.append(span)
span.innerHTML = label3.value
label3.value = ""

let icons = document.createElement('div')
icons.style.display = "flex";
icons.style.justifyContent = "center";
icons.style.alignItems = "center";
icons.style.margin = "20px"


let icon1 = document.createElement('i')
icon1.setAttribute("class", "fas fa-check-circle")
icon1.style.color = "MediumAquamarine"
icon1.addEventListener('click',function(){
    if (newcard.style.backgroundColor == "lightpink"){
        newcard.style.backgroundColor = "lightgray"
    }
    else{
        console.log(tableau);
        newcard.style.backgroundColor = "lightpink"
        newcard.removeAttribute("class")
        undone.splice(newcard)
        done.push(newcard)
    console.log(done)
    console.log(undone)

    }

})

let icon2 = document.createElement('i')
icon2.setAttribute("class", "fas fa-sticky-note")
icon2.style.color = "SandyBrown"
icon2.style.margin = "20px"

icon2.addEventListener('click',function(){
span.style.display = "none"
let inputyo = document.createElement('input')
inputyo.style.height = "20px"
inputyo.style.marginTop = "30px";
inputyo.style.marginLeft = "10px";
let buttonyo = document.createElement('button')
buttonyo.style.backgroundColor = "lightpink"
buttonyo.style.width = "70px"
buttonyo.style.height = "23px"
buttonyo.style.marginTop = "32px"
buttonyo.style.marginRight = "563px"
buttonyo.style.borderColor = "white"
buttonyo.innerHTML = "valider"
buttonyo.color="lategrey"
buttonyo.addEventListener('click',function(){
    // let yo = inputyo.value
    // yo.style.display = "flex"
    inputyo.style.display = "none"
    buttonyo.style.display = "none"
    span.innerHTML = inputyo.value
    span.style.display = "flex"
})

newcard.prepend(inputyo,buttonyo)
})

let icon3 = document.createElement('i')
icon3.setAttribute("class", "fas fa-trash")
icon3.style.color = ("PaleVioletRed")
icon3.addEventListener('click',function(){
    console.log("yo");

newcard.remove()
newcard.style.backgroundColor = ""
newcard.style.width = ""
newcard.style.height = ""
newcard.style.zIndex = ""
newcard.style.borderRadius = ""
newcard.style.marginTop = ""
newcard.style.border = ""
newcard.style.display = ""
newcard.style.justifyContent = ""
icon1.remove()

})




icons.append(icon1,icon2,icon3)
newcard.append(icons)


// if (newcard.hasAttribute("undone")){
// undone.push(newcard)
// console.log(undone);
// }


if(tableau.length!=0){
    div5.style.border = "solid lightgrey 3px"
}

 })

 document.body.addEventListener("keydown",function(e){
     if(e.keyCode === 13){
         if(label3.value !=""){
            button3.click()
         }
     }
 })