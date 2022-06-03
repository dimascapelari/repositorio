<template>
  <div id="app">
    <div class="urna">
      <CompTela
        :tela="tela"
        :numeroVoto="numeroVoto"
        :quantidadeNumeros="quantidadeNumeros"
        :cadidato="candidato"
      />
      <CompTeclado :adicionarNumero="adicionarNumero" />
    </div>
  </div>
</template>

<script>
import "@/css/global.css";
import CompTeclado from "@/components/CompTeclado";
import CompTela from "@/components/CompTela";

export default {
  name: "App",
  components: {
    CompTeclado,
    CompTela,
  },
  methods: {
    adicionarNumero(numero) {
      //VERIFICA LIMITE DE NÚMEROS VOTADOS
      if (this.numeroVoto.length == this.quantidadeNumeros) {
        return false;
      }
      //ADICIONA O NÚMERO SELECIONADO
      this.numeroVoto += "" + numero;

      //VERIFICA CANDIDATO VOTADO
      this.verificarCandidato();
    },
    verificarCandidato() {
      //VOTO INCOMPLETO
      if (this.numeroVoto.length < this.quantidadeNumeros) {
        return false;
      }

      //VERIFICA CANDIDATO EXISTENTE
      if (this.candidatos[this.tela][this.numeroVoto]) {
        this.candidato = this.candidatos[this.tela][this.numeroVoto];
        return true;
      }

      //VOTO NULO
      this.candidato = {
        nome: "Voto nulo",
        partido: "Voto nulo",
        imagem: "",
      };
    },
  },
  data() {
    return {
      tela: "prefeito",
      numeroVoto: "",
      quantidadeNumeros: 2,
      candidato: {},
      candidatos: {
        prefeito: {
          "01": {
            nome: "Ash",
            partido: "Pokemon",
            imagem:
              "https://raw.githubusercontent.com/william-costa/wdev-urna-eletronica-resources/master/images/ash.png",
          },
          "08": {
            nome: "Vegeta",
            partido: "Dragon Ball",
            imagem:
              "https://raw.githubusercontent.com/william-costa/wdev-urna-eletronica-resources/master/images/vegeta.png",
          },
        },
        vereador: {
          "01234": {
            nome: "Pikachu",
            partido: "Pokemon",
            imagem:
              "https://raw.githubusercontent.com/william-costa/wdev-urna-eletronica-resources/master/images/pikachu.png",
          },
          "08001": {
            nome: "Goku",
            partido: "Dragon Ball",
            imagem:
              "https://raw.githubusercontent.com/william-costa/wdev-urna-eletronica-resources/master/images/goku.png",
          },
        },
      },
    };
  },
};
</script>

<style>
#app {
  background-color: var(--background-color);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.urna {
  width: 1000px;
  height: 500px;
  background-color: var(--ballot-box-background-color);
  padding: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
</style>
