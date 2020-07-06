<template>
  <div class="home">
    <img class="logo" alt="wx-vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + WeUI App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style<%-` lang="${options.css}"`%>>
<%_ if (options.import === 'full') { _%>
.weui-page.home {
  background-color: #fff;
  text-align: center;
  color: #2c3e50;
}
<%_ } else { _%>
.home {
  background-color: #fff;
  text-align: center;
  color: #2c3e50;
}
<%_ } _%>
</style>
