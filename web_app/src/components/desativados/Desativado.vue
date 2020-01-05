<template>
  <div>
    <div v-if="!items">
      <h1 class="title">Nenhum usuário foi desativado</h1>
    </div>
    <div v-else>
      <h1 class="title">Usuário desativado</h1>
      <div class="column is-12" v-for="(item,index) in items" :key="index">
      <Items
        v-if="!item.activated"
        
        v-bind:index="index"
        v-bind:activate="item.activated"
        v-bind:name="item.name"
        v-bind:idade="item.idade"
      ></Items>
    </div>
    </div>
  </div>
</template>

<script>
import Items from "../item-list/Items";
import axios from "axios";

export default {
  name: "Desativado",
  components: {
    Items
  },
  data() {
    return {
      items: []
    };
  },
    mounted() {
    axios.get("http://localhost:3333/").then(response => (
      this.items = response.data));
  },
};
</script>

<style>
</style>