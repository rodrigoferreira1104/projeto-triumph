let botão = document.querySelector('button');
let titulo = document.querySelector("h1");
let recarregar = document.querySelector('span');

botão.addEventListener('click', resultado)
recarregar.addEventListener('click', redefinir)

var sobre = document.getElementById('sobre')
var img = document.getElementById('imagem')
var margin = document.getElementById('fundo')

var questão1 = document.getElementById('questão1')
var questão2 = document.getElementById('questão2')
var questão3 = document.getElementById('questão3')
var Estrada = document.getElementById("Estrada")
var Misto = document.getElementById("Misto")
var terra = document.getElementById("Off-Road")


function resultado() {
    // introduzir conteudo 
    let form = document.getElementById('formulario')
    form.remove()

    margin.style.marginBottom = "20px"


    if (questão1[0].checked) {
            // escolhendo sozinho
        if (questão2[0].checked) {
                // custom
            if (questão3[0].checked) {
                    // asfalto - resultado
                    titulo.textContent = 'Street Twin'
                    sobre.textContent = 'Desempenho arrepiante e manobrabilidade que inspira confiança, agora com ainda mais conforto e estilo. Na versão 900cc'
                    img.src = "steettwin.jpg";
                } else if (questão3) {
                    // terra ou misto - resultado 
                    titulo.textContent = 'Scrambler'
                    sobre.textContent = "Com um design scrambler moderno, tecnologia focada no piloto e manobrabilidade intuitiva, a nova Street Scrambler foi criada para a liberdade e a curtição. Na versão 900cc"
                    img.src = "scrambler.jpg";
                }
            } else if (questão2[1].checked) {
                // esportiva
                if (questão3[0].checked) {
                    // asfalto - resultado
                    titulo.textContent = "Trident 660"
                    sobre.textContent = "Com seu belíssimo visual, sua manobrabilidade que inspira confiança, a tecnologia superior e o desempenho arrepiante do motor tricilíndrico, a Trident 660 é seu novo passaporte para a diversão."
                    img.src = "trident.jpg";
                }   else {
                    // caso escolha outro que nao seja asfalto - resultado
                    titulo.textContent = "Tiger 1200"
                    sobre.textContent = "Estabelecendo uma nova referência para motocicletas adventure, ela traz uma atitude e um estilo mais agressivos, um motor triple de mais potente, tecnologia de ponta e um incrível padrão de especificações técnicas. Nas versões de 900cc e 1200cc."
                    img.src = "tiger1200.jpg";
                }
            } else if (questão2[2].checked){
                // adventure - resultado
                titulo.textContent = "Tiger 900"
                sobre.textContent = "Estabelecendo uma nova referência para motocicletas adventure, ela traz uma atitude e um estilo mais agressivos, um motor triple de mais potente, tecnologia de ponta e um incrível padrão de especificações técnicas. Nas versões de 900cc e 1200cc."
                img.src = "tiger900.jpg";
            }
            
        } else if (questão1[1].checked) {
    // rodando com garupa
         if (questão2[0].checked) {
            // custom 
            if (questão3[0].checked) {
                    // asfalto - resultado 
                    titulo.textContent = "T100"
                    sobre.textContent = "Com todas as marcas de uma verdadeira lenda do motociclismo, a T100 oferece um estilo belíssimo, fácil manobrabilidade e funcionalidades modernas. Nas versões de 900cc e 1200cc."
                    img.src = "t100.jpg";    
                } else {
                        // o que sobra - resultado
                        titulo.textContent = "Scrambler"
                        sobre.textContent = "Com um design scrambler moderno, tecnologia focada no piloto e manobrabilidade intuitiva, a nova Street Scrambler foi criada para a liberdade e a curtição. Na versão 900cc"
                        img.src = "scrambler.jpg";
                    }
            } else if (questão2[1].checked) {
                // Esportiva
                if (questão3[0].checked) {
                    // Asfalto - resultado
                    titulo.textContent = "Triple RS"
                    sobre.textContent = "A Street Triple top de linha é a referência na categoria, proporciona melhor desempenho preparado para a competição em pista, estilo, postura, uma atitude mais agressiva e ainda melhor tecnologia, é a melhor motocicleta Street de Alto Desempenho elevada a um patamar maior."
                    img.src = "triplers.jpg";
                    } else {
                        // o que sobra - resultado
                        titulo.textContent = "Tiger 1200"
                        sobre.textContent = "Estabelecendo uma nova referência para motocicletas adventure, ela traz uma atitude e um estilo mais agressivos, um motor triple de mais potente, tecnologia de ponta e um incrível padrão de especificações técnicas. Nas versões de 900cc e 1200cc."
                        img.src = "tiger1200.jpg";
                    }
            } else if (questão2[2]) {
                    // resultado
                    titulo.textContent = "Tiger 900"
                    sobre.textContent = "Estabelecendo uma nova referência para motocicletas adventure, ela traz uma atitude e um estilo mais agressivos, um motor triple de mais potente, tecnologia de ponta e um incrível padrão de especificações técnicas. Nas versões de 900cc e 1200cc."
                    img.src = "tiger900.jpg";
                }   
    }
}   



function redefinir() {
    document.location.reload();
}


 