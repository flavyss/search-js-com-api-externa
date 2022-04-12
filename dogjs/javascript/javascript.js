var raca = document.querySelector("input")
var form = document.querySelector("form")
var campo = document.querySelector(".campo")

form.addEventListener("submit", (e) => {

    fetch("https://dog.ceo/api/breed/"+raca.value+"/images/random")
    .then(Response => Response.json())
    .then(foto => {

        campo.innerHTML = `<img src="`+ foto.message +`" alt="">`

    })
    e.preventDefault()

})