<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

/* Attractive style for form input. Keeping as global */
input[type=text] {
    border: 0;
    outline: 0;
    border-bottom: 1px solid #ccc;
    border-radius: 0px;
}
</style>