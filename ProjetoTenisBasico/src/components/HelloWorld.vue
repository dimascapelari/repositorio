<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div
      class="alert alert-warning"
      role="alert"
      v-show="usuarios.length === 0"
    >
      Não existem registros de usuários !
    </div>

    <table class="table table-striped" v-show="usuarios.length > 0">
      <thead>
        <tr>
          <th>id</th>
          <th>EAN</th>
          <th>Código Interno</th>
          <th>Descrição</th>
          <th>Detalhamento</th>
          <th>Fabricante</th>
          <th>Cor</th>
          <th>Tamanho</th>
          <th>Preço</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(usuario, index) in usuarios" :key="usuario.id">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.ean }}</td>
          <td>{{ usuario.codIn }}</td>
          <td>{{ usuario.desc }}</td>
          <td>{{ usuario.detalhe }}</td>
          <td>{{ usuario.fabric }}</td>
          <td>{{ usuario.cor }}</td>
          <td>{{ usuario.tamanho }}</td>
          <td>{{ usuario.preco }}</td>
          <td>
            <button class="btn btn-danger" @click="deletar(index)">
              Remover
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="form-group">
      <p>
        <input
          placeholder="Digite um id"
          type="text"
          v-model="id"
          name="idUsuario"
          class="form-control"
        />
      </p>

      <p>
        <input
          placeholder="Código EAN"
          type="text"
          v-model="ean"
          name="eanUsuario"
          class="form-control"
        />
      </p>

      <p>
        <input
          placeholder="Código Interno"
          type="text"
          v-model="codIn"
          name="codInUsuario"
          class="form-control"
        />
      </p>

      <p>
        <input
          placeholder="Descrição"
          type="text"
          v-model="desc"
          name="descInUsuario"
          class="form-control"
        />
      </p>

      <p>
        <input
          placeholder="Digite um Detalhamento"
          type="text"
          v-model="detalhe"
          name="detalheUsuario"
          class="form-control"
        />
      </p>

      <div id="fabricantes">
        <p>
          <label>Fabricante: </label>
          <select v-model="fabric">
            <option
              v-for="fabricante in fabricantes"
              :key="fabricante.id"
              :value="fabricante.fab"
            >
              {{ fabricante.fab }}
            </option>
          </select>
        </p>
      </div>

      <div class="variacoes">
        <p class="p1">
          <label>Cores: </label>
          <select v-model="cor">
            <option v-for="cor in cores" :key="cor.id" :value="cor.tipo">
              {{ cor.tipo }}
            </option>
          </select>
        </p>
        <p class="p1">
          <label>Tamanhos: </label>
          <select v-model="tamanho">
            <option
              v-for="tamanho in tamanhos"
              :key="tamanho.id"
              :value="tamanho.tam"
            >
              {{ tamanho.tam }}
            </option>
          </select>
        </p>
      </div>

      <p>
        <input
          placeholder="Digite o valor"
          type="text"
          v-model="preco"
          name="precoUsuario"
          class="form-control"
        />
      </p>

      <button class="btn btn-primary" @click="adicionar()">Adicionar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      tamanhos: [
        { id: 1, tam: "30" },
        { id: 2, tam: "31" },
        { id: 3, tam: "32" },
        { id: 4, tam: "33" },
        { id: 5, tam: "34" },
        { id: 6, tam: "35" },
        { id: 7, tam: "36" },
        { id: 8, tam: "37" },
        { id: 9, tam: "38" },
        { id: 10, tam: "39" },
        { id: 11, tam: "40" },
        { id: 12, tam: "41" },
        { id: 13, tam: "42" },
        { id: 14, tam: "43" },
        { id: 15, tam: "44" },
      ],
      cores: [
        { id: 1, tipo: "Branco" },
        { id: 2, tipo: "Laranja" },
        { id: 3, tipo: "Amarelo" },
        { id: 4, tipo: "Azul" },
        { id: 5, tipo: "Vermelho" },
        { id: 6, tipo: "Cinza" },
      ],
      fabricantes: [
        { id: 1, fab: "Nike" },
        { id: 2, fab: "Adidas" },
        { id: 3, fab: "Mizuno" },
        { id: 4, fab: "New Balance" },
        { id: 5, fab: "All Star" },
        { id: 6, fab: "Fila" },
        { id: 7, fab: "Asics" },
        { id: 8, fab: "Puma" },
        { id: 9, fab: "Olympikus" },
        { id: 10, fab: "Reebok" },
      ],
      usuarios: [
        {
          id: 1,
          ean: 1111111,
          codIn: 111,
          desc: "Ténis",
          detalhe: "Cano alto",
          fabric: "Nike",
          cor: "Branco",
          tamanho: "38",
          preco: "200,00",
        },
        {
          id: 2,
          ean: 2222222,
          codIn: 222,
          desc: "Sapatilha",
          detalhe: "Casual",
          fabric: "Moleca",
          cor: "Laranja",
          tamanho: "37",
          preco: "250,00",
        },
        {
          id: 3,
          ean: 3333333,
          codIn: 333,
          desc: "Sapatênis",
          detalhe: "Esporte",
          fabric: "Asics",
          cor: "Cinza",
          tamanho: "40",
          preco: "300,00",
        },
        {
          id: 4,
          ean: 4444444,
          codIn: 444,
          desc: "Coturno",
          detalhe: "Couro",
          fabric: "Freeway",
          cor: "Preto",
          tamanho: "41",
          preco: "350,00",
        },
      ],
      id: "",
      detalhe: "",
      ean: "",
      codIn: "",
      desc: "",
      fabric: "",
      cor: "",
      tamanho: "",
      preco: "",
    };
  },
  methods: {
    deletar(parametro) {
      this.usuarios.splice(parametro, 1);
    },

    adicionar() {
      this.usuarios.push({
        id: this.id,
        detalhe: this.detalhe,
        ean: this.ean,
        codIn: this.codIn,
        desc: this.desc,
        fabric: this.fabric,
        cor: this.cor,
        tamanho: this.tamanho,
        preco: this.preco,
      });

      this.id = "";
      this.detalhe = "";
      this.ean = "";
      this.codIn = "";
      this.desc = "";
      this.fabric = "";
      this.cor = "";
      this.tamanho = "";
      this.preco = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#fabricantes {
  display: flex;
  margin-left: 10px;
}

.p1 {
  display: flex;
  margin-left: 10px;
}
</style>
