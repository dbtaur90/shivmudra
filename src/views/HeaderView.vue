<template>
  <header class="header">
    <!-- <section class="header-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-8 col-xs-12">
                            <div class="contact">
                                <p><span class="phone"><a href="#">Phone: +1023546789</a></span><span class="email"><a href="#">Email: testdomain@gmail.com</a></span></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="join-us">
                                <p><a href="#">JOIN US NOW</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->
    <section class="header-bottom">
      <div class="container">
        <span style="position: absolute; right: 0; color: #7fffff">
          नोंदणी क्र : महा./मुंबई/1225/2021</span>
        <div class="row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="main-logo text-start">
              <img src="./../assets/styles/img/1.png" alt="" />
              <span class="logo-text"><br class="special-br" />
                मराठा शिवमुद्रा प्रतिष्ठान</span>
            </div>
          </div>
          <div class="col-md-7 col-sm-12 col-xs-12">
            <div class="menu">
              <ul class="nav">
                <li class="nav-item" v-if="authStore.$state.isSet">
                  <button class="btn text-white d-sm-none" type="button" @click="$emit('menu-click')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-border-width" viewBox="0 0 16 16">
                      <path
                        d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </button>
                </li>
                <li class="nav-item" v-else>
                  <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">मुख्यपृष्ठ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">आमच्या विषयी</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">मोहिमा</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">संपर्क</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { useAuthStore } from '@/stores/AuthStore';
export default class HeaderView extends Vue { 
  authStore  = useAuthStore();
}
</script>

<style scoped>
.row, .row * {
  padding-left: 0;
}
</style>