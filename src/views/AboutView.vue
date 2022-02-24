<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATCH)
  }
}
</script>
