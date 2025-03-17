document.addEventListener('DOMContentLoaded',function (){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste')
     let tamanhoAtualFonte = 1;

       aumentaFonteBotao.addEventListener('click',function(){
         tamanhoAtualFonte += 0.1;
          document.body.style.fontSize = `${tamanhoAtualFonte}rem`
        })
       diminuirFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
       })

const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesDeAcesibilidade = document.getElementById('opcoes-acessibilidade');
  botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcesibilidade.classList.toggle('apresenta-lista');
  })
  alternaContraste.addEventListener ('click',function(){
    document.body.classList.toggle('alto-contraste')
  })
})