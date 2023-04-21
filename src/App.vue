<template>
  <header-view/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <div> Version: 1.03</div>
</template>

<style>
@import './assets/styles/style.css';
@import './assets/styles/css2.css';
@import './assets/styles/font-awesome.min.css';
@import './assets/styles/responsive.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderView from './views/HeaderView.vue';

@Options({
  components: {
    HeaderView,
  },
})
export default class App extends Vue {}
</script>