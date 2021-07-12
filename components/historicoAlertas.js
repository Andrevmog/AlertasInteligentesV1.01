var historicoAlertas = Vue.component("historico-alertas", {
  name: "historico-alertas",
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
        this.alertaSelecionado = "";
      } else {
        this.alertaSelecionado = alerta;
      }
    },
  },
  watch: {},
  computed: {},
  template: `
  <div class="vueContainer">
    <div class="containerHist">



      <div class="row mb-2">
        <div class="col-lg-6 col-md-12 col-sm-12 justify-content-between p-2">
          <i style="color:#1ab394;" class="fal fa-bell"></i>
          <span style="font-size:22px">[Nome do Alerta]</span>
        </div>

        <div class="col-lg-6 col-md-12 d-flex justify-content-between p-2">
            <input type="text" class="input-sm form-control" name="fstart" id="fdtinicial" value="" />
            <span class="input-group-addon" style="display:flex;align-items:center;background-color:#e4e4e4;justify-content: center; border-color: #e4e4e4;width:61px">até</span>
            <input type="text" class="input-sm form-control" name="fend" id="fdtfinal" value="" />
            <button style="margin-left:30px" class="btn btn-primary">Pesquisar</button>
        </div>

      </div>

  </div>

    <div class="row justify-content-between labelTable" style="font-weight:bold">
      <span class="p-2 pl-4 col text-left">Data do disparo</span>
      <span class="p-2 col text-center ">Destinatários</span>
      <span class="p-2 col text-center ">Visualizados</span>
      <span class="p-2 col text-center ">Cliques do link</span>
      <span class="p-2 col text-center ">Ações</span>
    </div>
    <div class="row p-2 justify-content-between alerta">
        <span class="col text-left p-2 pl-4 ">01/06/2021</span>
        <span class="col text-center p-2">7</span>
        <span class="col text-center p-2">5</span>
        <span class="col text-center p-2">3</span>
        <span class="col text-center p-2">
          <i id="acao" style="margin-right:15px;cursor: pointer;" class="fas fa-eye"></i>
          <i id="acao" style="cursor: pointer;" class="fas fa-share"></i>
        </span>
    </div>

  </div>`,
});

new Vue({ el: "#historicoAlertas" });
