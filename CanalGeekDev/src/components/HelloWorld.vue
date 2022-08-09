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
          <th>#</th>
          <th>Nome</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(usuario, index) in usuarios" :key="usuario.id">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.nome }}</td>
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
          placeholder="Digite um código"
          type="text"
          v-model="id"
          name="idUsuario"
          class="form-control"
        />
      </p>

      <p>
        <input
          placeholder="Digite um Nome"
          type="text"
          v-model="nome"
          name="nomeUsuario"
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
      titulo: "CanalGeekDev",
      usuarios: [
        { id: 1, nome: "João" },
        { id: 2, nome: "Luiz" },
        { id: 3, nome: "Pedro" },
        { id: 4, nome: "Maria" },
      ],
      id: "",
      nome: "",
    };
  },
  methods: {
    deletar(parametro) {
      this.usuarios.splice(parametro, 1);
    },

    adicionar() {
      this.usuarios.push({
        id: this.id,
        nome: this.nome,
      });

      this.id = "";
      this.nome = "";
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
</style>
