<template>
  <div>
    <h2>DataTableComp</h2>
    <DataTable
      :value="products"
      editMode="row"
      dataKey="id"
      v-model:editingRows="editingRows"
      @row-edit-save="onRowEditSave"
      responsiveLayout="scroll"
    >
      <CompColumn field="code" header="Code" style="width: 20%">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" autofocus />
        </template>
      </CompColumn>
      <CompColumn field="name" header="Name" style="width: 20%">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </CompColumn>
      <CompColumn field="price" header="Price" style="width: 20%">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </CompColumn>
      <CompColumn
        :rowEditor="true"
        style="width: 10%; min-width: 8rem"
        bodyStyle="text-align:center"
      ></CompColumn>
    </DataTable>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import { data } from "../data/data";

export default {
  name: "DataTableComp",

  data() {
    return {
      txt: "DataTableComp",
      editingRows: [],
      products: null,
    };
  },
  created() {
    this.columns = [
      { field: "code", header: "Code" },
      { field: "name", header: "Name" },
      { field: "quantity", header: "Quantity" },
      { field: "price", header: "Price" },
    ];
  },

  methods: {
    getProducts() {
      this.products = data;
    },
    // Use essa função para pegar dados em formato .json e transformá-los em objeto e inseri-los na varíavel desejada
    // getProductsApi() {
    //   return fetch("/src/data/db.json")
    //     .then((resposta) => resposta.json())
    //     .then((dados) => dados.data);
    // },
    onRowEditSave(event) {
      let { newData, index } = event;

      this.products[index] = newData;
    },
  },
  mounted() {
    this.getProducts();
    // this.products = this.getProductsApi();
  },
};
</script>

<style>
</style>