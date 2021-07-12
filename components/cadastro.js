var reencaminharAlertas = Vue.component("reencaminhar-alertas", {
    name: "reencaminhar-alertas",
    props: {},
    data() {
      return {
        pesquisaNomeAlerta: "",
        lista: listaMock,
        style: listaAlertasStyle,
        tipoAlertaSelecionado: "clip",
        alertaSelecionado: {},
      };
    },
    created() {},
    mounted() {},
    methods: {
      selecionarAlerta(alerta) {
        if (alerta == this.alertaSelecionado) {
          this.alertaSelecionado = '';
        } else {
          this.alertaSelecionado = alerta;
        }
      },
    },
    watch: {},
    computed: {},
    template: `
        <div class="vueContainer">
          <div class="containerVue">

            <div class="envio row">
              <div class="label col-md-12 col-lg-4">Quais marcas?</div>
                  <div class="inputContainer justify-content-between d-flex col-md-4 col-lg-2">
                      <div class="dropdown">
                        <span class="ddtext" >Específico</span>
                        <span class="down"><i class="fas fa-chevron-down"></i></span>
                      </div>
                  </div>
              <div class="inputContainer d-flex col-md-12 col-lg-6"><input class="form-control"/><i class="fas fa-check-circle"></i></div>
            </div>
  
            <div class="emails row">
              <div class="label col-md-12 col-lg-4">Quais os conteúdos públicos?</div>
              <div class="inputContainer d-flex col-md-12 col-lg-8">
              <div class="vazio">
                <div>
                  <input type="checkbox" id="scales" name="scales"
                        checked>
                  <label for="scales">Posts do Instagram</label>
                </div>
                <div class="cb">
                  <input type="checkbox" id="scales" name="scales"
                        checked>
                  <label for="scales">Posts do Facebook</label>
                </div>
                <div class="cb">
                  <input type="checkbox" id="scales" name="scales"
                        checked>
                  <label for="scales">Posts do Twitter</label>
                </div>
                <div class="cb">
                  <input type="checkbox" id="scales" name="scales"
                        checked>
                  <label for="scales">Posts do Youtube</label>
                </div>
                <div class="cb">
                  <input type="checkbox" id="scales" name="scales"
                        checked>
                  <label for="scales">Impresso/digital</label>
                </div>
                <div class="cb">
                  <input type="checkbox" id="scales" name="scales"
                        checked>
                  <label for="scales">Rádio</label>
              </div>
              <div class="cb">
                <input type="checkbox" id="scales" name="scales"
                      checked>
                <label for="scales">TV</label>
            </div>  
              </div>
                <i class="fas fa-check-circle"></i></div>
            </div>
  
            <div class="envio row">
              <div class="label col-md-12 col-lg-4">Quais os perfis?</div>
                  <div class="inputContainer justify-content-between d-flex col-md-4 col-lg-2">
                      <div class="dropdown">
                        <span class="ddtext" >Específico</span>
                        <span class="down"><i class="fas fa-chevron-down"></i></span>
                      </div>
                  </div>
              <div class="inputContainer d-flex col-md-12 col-lg-6"><input class="form-control"/><i class="fas fa-check-circle"></i></div>
            </div>
  
            <div class="telefones row">
              <div class="label col-md-12 col-lg-4">Quais os conteúdos privados?</div>
              <div class="inputContainer d-flex col-md-12 col-lg-8">
              <div class="vazio">
              <div>
                  <input type="checkbox" id="scales" name="scales"
                        checked>
                  <label for="scales">Posts do Instagram</label>
                </div>
                <div class="cb">
                  <input type="checkbox" id="scales" name="scales"
                        checked>
                  <label for="scales">Menções do Instagram</label>
                </div>
                <div class="cb">
                  <input type="checkbox" id="scales" name="scales"
                        checked>
                  <label for="scales">Posts do Facebook</label>
                </div>
                <div class="cb">
                  <input type="checkbox" id="scales" name="scales"
                        checked>
                  <label for="scales">Menções do Facebook</label>
                </div>
                <div class="cb">
                  <input type="checkbox" id="scales" name="scales"
                        checked>
                  <label for="scales">Posts do Youtube</label>
                </div>
              </div>
              <i class="fas fa-check-circle"></i>
              </div>
            </div>

            <div class="envio row">
              <div class="label col-md-12 col-lg-4">Conteúdos deve ter palavras-chaves?</div>
                  <div class="inputContainer justify-content-between d-flex col-md-4 col-lg-2">
                      <div class="dropdown">
                        <span class="ddtext" >Sim</span>
                        <span class="down"><i class="fas fa-chevron-down"></i></span>
                      </div>
                  </div>
              <div class="inputContainer d-flex col-md-12 col-lg-6"><input class="form-control"/><i class="fas fa-check-circle"></i></div>
            </div>

            <div class="envio row">
              <div class="label col-md-12 col-lg-4">Conteúdo deve ter tags?</div>
                  <div class="inputContainer justify-content-between d-flex col-md-4 col-lg-2">
                      <div class="dropdown">
                        <span class="ddtext" >Sim</span>
                        <span class="down"><i class="fas fa-chevron-down"></i></span>
                      </div>
                  </div>
              <div class="inputContainer d-flex col-md-12 col-lg-6">
              <input class="form-control"/>
              <i class="fas fa-check-circle"></i></div>
            </div>

            <div class="telefones row">
              <div class="label col-md-12 col-lg-4">Configurações avançadas?</div>
              <div class="inputContainer d-flex col-md-12 col-lg-8">
                <div class="vazio">
                  <input type="checkbox" id="scales" name="scales" checked>
                </div>
                <i class="fas fa-check-circle"></i>
              </div>
            </div>
  
            <div class="envio row">
              <div class="label col-md-12 col-lg-4">Qual o ordenamento?</div>
                  <div class="inputContainer justify-content-between d-flex col-md-4 col-lg-2">
                      <div class="dropdown">
                        <span class="ddtext" >Mais recentes</span>
                        <span class="down"><i class="fas fa-chevron-down"></i></span>
                      </div>
                  </div>
              <div class="inputContainer d-flex col-md-12 col-lg-6"><a class="vazio"/><i class="fas fa-check-circle"></i></div>
            </div>

            <div class="envio row">
              <div class="label col-md-12 col-lg-4">Qual o agrupamento?</div>
                  <div class="inputContainer justify-content-between d-flex col-md-4 col-lg-2">
                      <div class="dropdown">
                        <span class="ddtext" >Notícias</span>
                        <span class="down"><i class="fas fa-chevron-down"></i></span>
                      </div>
                  </div>
              <div class="inputContainer d-flex col-md-12 col-lg-6"><a class="vazio"/><i class="fas fa-check-circle"></i></div>
            </div>

            <div class="envio row">
              <div class="label col-md-12 col-lg-4">Qual o tipo de diagramação?</div>
                  <div class="inputContainer justify-content-between d-flex col-md-4 col-lg-2">
                      <div class="dropdown">
                        <span class="ddtext">Completo</span>
                        <span class="down"><i class="fas fa-chevron-down"></i></span>
                      </div>
                  </div>
              <div class="inputContainer d-flex col-md-12 col-lg-6"><a class="vazio"/><i class="fas fa-check-circle"></i></div>
            </div>
  
            <div class="footer d-flex flex-row-reverse">
                <button class="btn btn-primary">Cancelar</button>
                <button class="btn btn-primary">Enviar</button>
            </div>
          
          </div>
        </div>
    `,
  });
  
  var copiarLink = Vue.component("copiarLink", {
    name: "copiarLink",
    props: {
      value:{
        type:String,
        required:true,
      },
      mostrarCheck:Boolean,
    },
    data() {
      return {
      };
    },
    created() {},
    mounted() {},
    methods: {
      selecionarAlerta(alerta) {
        if (alerta == this.alertaSelecionado) {
          this.alertaSelecionado = '';
        } else {
          this.alertaSelecionado = alerta;
        }
      },
    },
    watch: {},
    computed: {},
    template: `
  
      <div class="">
          <div class="link row">
            <div class="label col-md-12 col-lg-4">Link</div>
            <div class="inputContainer d-flex col-md-12 col-lg-8">
              <input v-model="value" class="form-control"/>
              <span class="cp">Copiar</span>
              <i v-if="mostrarCheck" class="fas fa-check-circle"></i>
            </div>
          </div>
      </div>
  
    `,
  });
  
  
  const listaAlertasStyle = {
    containerListaAlertas: `display:flex;flex-direction:column;gap:20px;`,
  };
  
  const listaMock = [{
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
  new Vue({
    el: "#reencaminharAlertas"
  });
  