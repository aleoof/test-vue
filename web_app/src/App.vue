<template>
  <div>
    <Navbar></Navbar>
    <div class="margin">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
.margin {
  padding: 2em 2em;
}
</style>
