<template>
  <div id="app">
<%_ if (options.import === 'full') { _%>
    <wx-navigation-view />
<%_ } else { _%>
    <router-view/>
<%_ } _%>
  </div>
</template>