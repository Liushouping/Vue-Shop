<template>
    <LoadIng :active="isLoading"></LoadIng>
    <NavBar></NavBar>
    <div class="container-fluid">
    <ToastMessages></ToastMessages>
    <router-view/>
    </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import NavBar from '../components/NavBar.vue'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    NavBar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.isLoading = true
    this.$http.post(api, this.user)
      .then((res) => {
        this.isLoading = false
        if (!res.data.success) {
          this.$router.push('login')
        }
      })
  }
}
</script>
