const optionImages = document.querySelectorAll('.option-image')//Procure todos que tiverem a classe.option-image
function handleOpitionClick (event){//Quando passamosum parâmetro para uma função com qualquer nome que seja, podemos pegar este parâmetro e jogar em um console.log por exemplo e dai sabermos todas as informações desta função. No caso aqui a informação que precisamos é uma informação que vai dizer qual item exatamente esta sendo clicado, por que o eventListerner aviza qaundo houver um evento, mas não nos fala qula item em específico foi clicado se é o span 1, span 2, ou span3. Então a informação que estamos a procura é o currentTarget
    console.log(event.currentTarget)
}





optionImages.forEach(img => {/*Usando um forEch para percorrer todos os elementos, ou itens contidos em optionImages e esses itens precisam de um nome, então aqui vão se chamar img.*/
    img.addEventListener("click", handleOpitionClick)//Aqui esta sendo usado o eventListerner (ouvinte) para apontar um evento toda vez que este evento acontecer. No caso aqui o evento que ele vai monitorar e esperar é um evento de click. Como de costume, o evento de click precisa de um nome, este nome vai ser o nome da função na qual o bloco de código vai ser criado e no caso aqui, a função vai se chamar handleOpitionClick e vai ser chamada toda vez que ouver um evento de click em um desses itens percorridos pelo forEach que no caso representam os spans lá do HTML onde estão as imagens da mãos.
})