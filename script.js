//a1
let numberres = document.getElementById("numres")
let stringres = document.getElementById("strres")
let a = 70
let b = 90

//a2
let errormessage = document.getElementById("errormsg")

//a1
numberres.innerHTML = a + b
stringres.innerHTML = String(a) + String(b)

//a2
try{
    aletr("mistake muhhahahaha")
}

catch(err){
    errormessage.innerHTML = err
}