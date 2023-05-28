<template>
  <header-view @menu-click="toggleSidebar" />
  <side-bar  @menu-click="showSidebar = false" v-if="authStore.$state.isSet" :show-sidebar="showSidebar" />
  <div class="row" @click=" showSidebar = false ">
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" :class="{backdrop: showSidebar}">
      <router-view />
      version 1.0.11
    </main>
  </div>
 

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
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

.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 8;
  pointer-events: none;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderView from './views/HeaderView.vue';
import SideBar from './components/SideBar.vue';
import { useAuthStore } from './stores/AuthStore';

@Options({
  components: {
    HeaderView,
    SideBar
  },
})
export default class App extends Vue {
  authStore  = useAuthStore();
  showSidebar = false;
  enableSidebar = false;
  created() {

    if (window.location.hash) {
      window.location.href = window.location.href.replace('/#', '');
    }

  }
  toggleSidebar() {
    this.showSidebar = !this.showSidebar
  }

}
</script>