const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const valor = Number(frm.inConsumo.value)

    const calcular= Number(valor*2)
    const result = Math.floor(calcular)

    resp.innerText = `O remédio ${nome} tem o desconto de: ${result}`
    e.preventDefault()
})