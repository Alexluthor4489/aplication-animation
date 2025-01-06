const optionImages = document.querySelectorAll('.option-image')//Procure todos que tiverem a classe.option-image e armazena na variável optionImages
const container = document.querySelector(".container")//Procura o seletor que estiver com a classe container e armazena na variável container.
const resultText = document.querySelector(".result-text")//Procura o seletor que estiver com a classe result-text e armazena na variável result-text.
const computerResult = document.querySelector(".computer-result img")
const userResult = document.querySelector(".user-result img")
const computerSrcImages = ['./imagens/pedra.png', './imagens/papel.png', './imagens/tesoura.png']

const winner = {
    /*
    (R) Rock - Pedra
    (P) Paper - Papel
    (S) Scissors - Tesoura */
    rr: 'Empate!',
    rp: 'Você',
    rs: 'Computador',
    pp: 'Empate!',
    pr: 'Você',
    ps: 'Computador',
    ss: 'Empate!',
    sr: 'Computador',
    sp: 'Você'
}

function handleOptionClick (event){//Quando passamosum parâmetro para uma função com qualquer nome que seja, podemos pegar este parâmetro e jogar em um console.log por exemplo e dai sabermos todas as informações desta função. No caso aqui a informação que precisamos é uma informação que vai dizer qual item exatamente esta sendo clicado, por que o eventListerner aviza qaundo houver um evento, mas não nos fala qula item em específico foi clicado se é o span 1, span 2, ou span3. Então a informação que estamos a procura é o currentTarget
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImages).indexOf(clickedImage)//Usamos o Array.from para pegar os spans e transformmá-los em um array e o indexof serve pra identificar a posição da figura que eu cliquei
    

    container.classList.add("start")//Aqui estamos usando o classList.add para que toda vez que o evento de click for chamado, a classe start seja adicionada ao container.
    resultText.textContent = "..."//Definindo que no lugar de Bora Jogar, vai aparecer os três pontinhos, para dar uma ideia de que estamos aguardando o resultado da partida.
    userResult.src = computerResult.src = computerSrcImages[0]//Aqui estamos definindo que tanto o usuário quanto o computador, vão ter valor inicial 00, para que nenhum saiba o que o outro vai mostrar.
    setTimeout(() => {//Estou usando o setTimeout para definir o tempo em que a animação vai ficar parada esperando o resultado. Aqui definimos com 2 segundos, ou 2000 ms, como fica configurado por padrão nesse formato.
        container.classList.remove("start")//Definindo que após o termino dos 2 segundos a classe start vai ser removida e portanto as mão vão voltar a se moverem para baixo e para cima.

        userResult.src = computerSrcImages[userIndex]//Aqui estou pegando o userResult com o seu src e ele esta recebendo a posição da imagem clicada.

        const randomNumber = Math.floor(Math.random() * computerSrcImages.length)//Criando uma variável que vai receber um número aleatório gerado pelo math.radom (Gera um numero aleatório entre 0 e 1) * computer.length significa que ele vai percorrer o array computerImg posição por posição. O problema do radom é que ele trás um número aleatório entre 0 e 2, mas pode ser um número fracionado como: 0,2, 1.3, 1.5 e por ai vai, então estamos usando o math.floor para arredondar este valor, ou seja, o resultado vai ser ou 0, 1 ou 2, portanto as 3 posições que precisamos do array de três itens estão aqui.
        computerResult.src = computerSrcImages[randomNumber]//Aqui basicamente eu estou chamando meu computeResult e estou chamando a posição dele, seja 0, 1 ou 2 através do randomNumber que construi aqui acima para gerar numeros aleatórios arredondados.
        const userValue = ['r','p','s'][userIndex]
        const computerValue = ['r','p','s'][randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner[userComputerResult]

        resultText.textContent = userValue === computerValue ? 'Empate!' : finalResult + 'Ganhou'//Alterando mensagem para exibir o ganhador.
    }, 2000);

}

optionImages.forEach(img => {/*Usando um forEch para percorrer todos os elementos, ou itens contidos em optionImages e esses itens precisam de um nome, então aqui vão se chamar img.*/
    img.addEventListener("click", handleOptionClick)//Aqui está sendo usado o eventListerner (ouvinte) para apontar um evento toda vez que este evento acontecer. No caso aqui o evento que ele vai monitorar e esperar é um evento de click. Como de costume, o evento de click precisa de um nome, este nome vai ser o nome da função na qual o bloco de código vai ser criado e no caso aqui a função vai se chamar handleOpitionClick, ela vai ser chamada toda vez que houver um evento de click em um desses itens percorridos pelo forEach que no caso representam os spans lá do HTML onde estão as imagens das mãos.
})