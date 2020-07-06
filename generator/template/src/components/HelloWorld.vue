<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Get started with the wx-vue
      <a href="https://alex8088.github.io/wxvue/docs" target="_blank" rel="noopener">documentation</a> 
      and 
      <a href="https://alex8088.github.io/wxvue/demo" target="_blank" rel="noopener">example</a>.
      <br/>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <%_ for (plugin of plugins) { _%>
      <li><a href="<%- plugin.link %>" target="_blank" rel="noopener"><%- plugin.name %></a></li>
      <%_ } _%>
    </ul>
    <h3>Learn More</h3>
    <ul>
      <li><a href="https://github.com/alex8088/wx-vue" target="_blank" rel="noopener">wx-vue</a></li>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">vue.js</a></li>
      <li><a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli</a></li>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://weui.io" target="_blank" rel="noopener">weui</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped<%-` lang="${options.css}"`%>>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
   margin: 0 0 20px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #06ae56;
}
</style>
