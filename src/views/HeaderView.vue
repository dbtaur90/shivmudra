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
          नोंदणी क्र : महा./मुंबई/1225/2021</span
        >
        <div class="row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="main-logo">
              <img src="./../assets/styles/img/1.png" alt="" />
              <span class="logo-text"
                ><br class="special-br" />
                मराठा शिवमुद्रा प्रतिष्ठान</span
              >
            </div>
          </div>
          <div class="col-md-7 col-sm-12 col-xs-12">
            <div class="menu">
              <ul class="nav">
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

export default class HeaderView extends Vue {}
</script>

<style>

</style>