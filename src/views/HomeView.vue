<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATCH)
  }
}
</script>
