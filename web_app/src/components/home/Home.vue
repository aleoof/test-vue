<template>
  <div>
    <h1 class="title">Adicinar Usuários</h1>

    <div class="columns is-multiline">
      <div class="column is-6">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Nome</label>
          </div>

          <div class="field-body">
            <div class="field">
              <p class="control">
                <input type="text" v-model="newName" placeholder="Nome" class="input" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Idade</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input type="text" v-model="newIdade" placeholder="Idade" class="input" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-2">
        <a class="button" v-on:click="addNewUser">Adicionar</a>
      </div>
      <div class="column is-12" v-for="(item,index) in items"
        :key="index">
      <Items
        v-if="item.activated"
        v-bind:index="index"
        v-bind:activate="item.activated"
        v-bind:name="item.name"
        v-bind:idade="item.idade"
        v-on:removeUser="removeUsers"
      ></Items>
      </div>
    </div>
  </div>
</template>

<script>
import Items from "../item-list/Items";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Items
  },
  data() {
    return {
      newName: "",
      newIdade: null,
      items: []
    };
  },
  mounted() {
    axios.get("http://localhost:3333/").then(response => (
      this.items = response.data));
  },
  methods: {
    addNewUser: function() {
      this.items.push({
        name: this.newName,
        idade: this.newIdade
      });
      // eslint-disable-next-line no-console
      console.log(this.newName, this.newIdade);
      (this.newName = ""), (this.newIdade = null);
    },

    removeUsers(e) {
      // eslint-disable-next-line no-console
      console.log(e);
      this.items.splice(e, 1);
    }
  }
};
</script>

<style>
</style>