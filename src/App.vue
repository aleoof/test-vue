<template>
<div class="margin">
  <Home></Home>
  </div>
</template>

<script>
import Home from './components/home/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
.margin{ 
  padding: 2em 2em;
}
</style>
