const frm = document.querySelector("form")
const result = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const valor = Number(frm.inPreco.value)

    const primeirov = valor/2
    const saber = (valor*2)+primeirov

    result.innerText = `Promoção maluca! levando 3 de ${produto} você paga ${saber.toFixed(2)}, o terceiro produto sai por: ${primeirov.toFixed(2)}`
    e.preventDefault()
})