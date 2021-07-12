
var listaAlertas = Vue.component("novo-alerta", {
    name: "novo-alerta",
    props: {},
    data() {
      return {
            aplicarCor1:false,
            aplicarCor2:false,
            aplicarCor3:false,
            plus1:false,
            plus2:false,
            plus3:false,
      };
    },
    created() {},
    mounted() {},
    methods: {
        selecionarAlerta(alerta){
           if(alerta == this.alertaSelecionado){
               this.alertaSelecionado='';
           }else{
               this.alertaSelecionado=alerta;
           }
        },
    },
    watch: {},
    computed: {},
    template:`
    <div class="containerListaAlertas">
        <div class="form">
            <div>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </div>
        </div>

        <div class="resume">
          <span>
            Escolha qual alerta você gostaria de gerar:
          </span>
        </div>
        <div class="header">
            <div class="cartao" v-bind:class="{selecionadoBorda:aplicarCor1,plus:plus1}" @click="aplicarCor1 = !aplicarCor1,aplicarCor2 = false,aplicarCor3 = false" @mouseover="plus1=true" @mouseleave="plus1=false">
                <div class="cardImage">
                    <i v-bind:class="{selecionado:aplicarCor1}" class="fal fa-bell"></i>
                </div>
                <div class="cardContent">
                    <div class="cardTipo">
                        <span v-bind:class="{selecionado:aplicarCor1}" >Eventos</span>
                    </div>
                    <div class="cardText">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                </div>
            </div>
            <div class="cartao" id="cartao2" v-bind:class="{selecionadoBorda:aplicarCor2,plus:plus2}" @click="aplicarCor2 = !aplicarCor2,aplicarCor1 = false,aplicarCor3 = false" @mouseover="plus2=true" @mouseleave="plus2=false">
                <div class="cardImage">
                    <i v-bind:class="{selecionado:aplicarCor2}" class="fal fa-newspaper"></i>
                </div>
                <div class="cardContent">
                    <div class="cardTipo">
                        <span v-bind:class="{selecionado:aplicarCor2}">Clipping</span>
                    </div>
                    <div class="cardText">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                </div>
            </div>
            <div class="cartao" id="cartao3" v-bind:class="{selecionadoBorda:aplicarCor3,plus:plus3}" @click="aplicarCor3 = !aplicarCor3, aplicarCor2 = false,aplicarCor1 = false" @mouseover="plus3=true" @mouseleave="plus3=false">
                <div class="cardImage">
                    <i v-bind:class="{selecionado:aplicarCor3}" class="fal fa-file-chart-line"></i>
                </div>
                <div class="cardContent">
                    <div class="cardTipo">
                        <span v-bind:class="{selecionado:aplicarCor3}">Relatórios</span>
                    </div>
                    <div class="cardText">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                </div>
            </div>
        </div>
  </div>`
    ,
  });
  
  const listaAlertasStyle = {
    containerListaAlertas: `display:flex;flex-direction:column;gap:20px;`,
  };
  
  const listaMock = [
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 1",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 3",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 4",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 5",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "anexo",
      nomeAlerta: "Alerta 6",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "sms",
      nomeAlerta: "Alerta 7",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 8",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 9",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 10",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
  ];
  new Vue({ el: "#novo-alerta" });