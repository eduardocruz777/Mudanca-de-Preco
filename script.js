function verificar() {
    let pan = parseFloat(window.prompt(`Qual era o preço anterior do produto?`).replace(',', '.'))
    let pat = parseFloat(window.prompt(`Qual é o preço atual do produto?`).replace(',', '.'))
    let dif1 = (pat - pan)
    let por1 = (dif1 / pan) * 100
    let dif2 = (pan - pat)
    let por2 = (dif2 / pat) * 100
    res.innerHTML = '<h2><p>Analisando os valores informados:</p></h2>'
    if (pan < pat) {
        res.innerHTML += `<p>O produto custava ${pan.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} e agora custa ${pat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.</p>`
        res.innerHTML += '<p>Hoje o produto está mais caro.</p>'
        res.innerHTML += `<p>O preço subiu ${dif1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${por1.toLocaleString('pt-br', {maximumFractionDigits: 2})}% para cima.</p>`

    } else if (pan > pat) {
        res.innerHTML += `<p>O produto custava ${pan.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} e agora custa ${pat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>`
        res.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        res.innerHTML += `<p>O preço caiu ${dif2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${por2.toLocaleString('pt-br',{maximumFractionDigits: 2})}% para baixo.</p>`
    } else {
        window.alert('Por favor digite um valor válido')
        res.innerHTML = '<p>Clique no botão acima para analisar a mudança de preço</p>'
    }
}