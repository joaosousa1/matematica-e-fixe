//Anima letra uma a uma efeito domino //////////////////////////////////////////
//cria classe css para a animacao domino
//RAMO DE TESTES
var estilo = document.createElement("style");
estilo.type = "text/css";
estilo.innerHTML = `
  .letra {
    display: inline-table;
    /*importante*/
    opacity: 0;
    margin-left: -0.1em;
    /* espaço enter as letras */
  }
  @keyframes salta {
    0% {
      /* font-size: 1em; */
      opacity: 0;
      transform: translateY(40px);
    }
    30% {
      /* font-size: 1em; */
      opacity: 0.4;
      transform: translateY(-20px) rotate(30deg);
    }
    75% {
      /* font-size: 1em; */
      transform: rotate(-20deg);
    }
    100% {
      /* font-size: 1em; */
      opacity: 1;
      transform: translateY(0px);
      margin-left: 0em;
    }`;
document.getElementsByTagName('head')[0].appendChild(estilo);

class Domino {
  constructor(el, delay) {
    this.e = el;
    this.el = window.document.getElementById(this.e);
    this.fra = "";
    this.l = "";
    this.n = 0;
    this.tags = "";
    this.init();
    this.delay = delay
    this.anima();
    
  }

  init() {
    this.fra = this.el.innerText;
    this.tags = "";
    //para cara letra na frase cria um elemento span e adiciona a classe css "letra"
    this.fra.split("").forEach((i) => {

      //console.log("TESTE Letra " + i);
      if (i === " ") {//adiciona espaços quando o caracterer é um espaço :P
        this.tags += "<div style='width: 0.4em; display:inline-table'></div>";
      }
      this.tags += `<span class="letra" >${i}</span>`;

    })
    //console.log("TESTE 1 " + this.tags);

    this.el.innerHTML = this.tags;

  };

  setFrase(frase = this.fra) {
    this.el.innerText = frase;
    this.init();
    this.anima();
  }

  anima(timeout = this.delay) { //adiciona classes css salta
  
    setTimeout(() => {


      this.el.innerHTML = "";
      this.el.innerHTML = this.tags;

      //console.log("TESTE ANIMA " + this.e);
      this.l = window.document.querySelectorAll("#" + this.e + " span");
      //this.l = window.document.getElementById(id).getElementsByTagName("span");

      //console.log("TESTE 2 this.l " + this.l);
      this.n = 0;
      for (let i = 0; i < this.l.length; i++) {

        if (this.l[i].innerText != " ") {
          this.l[i].style.animation = "salta 0.9s ease forwards " + this.n + "ms";
          //l[i].style.animation = "popup 2s ease forwards " + n + "s";
          this.n = this.n + 30; //a cada interação adiciona 30ms para criar o efeito domino
        }

      }

    }, timeout);

  }

}//FIM//////////////////////////////////////////////////////////////////

/*

//anima apos 1000ms
texto_1 = new Domino("tSlide1", 1000);

//anima novamente com 500ms de delay
texto_1.anima(500)

*/

