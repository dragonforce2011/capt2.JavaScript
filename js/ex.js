//cria referencia ao form e ao elemento h3
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um ouvinte desse evento
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    resp.innerText = `Olá ${nome}`
    e.preventDefault()
})``