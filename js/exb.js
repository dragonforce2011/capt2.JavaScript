const frm = document.querySelector("form")
const result = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const valor = Number(frm.inValor.value)
    const minuto = Number(frm.inTempo.value)

    const completo = Math.floor(minuto/15)
    const restante = minuto%15
    const custocompleto = completo * valor
    const preco = Math.ceil(restante/15)*valor
    const total = preco+custocompleto

    result.innerText = `o valor a pagar é de: ${total.toFixed(2)}`
    e.preventDefault()
})