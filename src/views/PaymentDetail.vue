<template>
    <div class="form-wrapper">
        <section class="carosal-area1">
            <div class="main-contener">
                <h1>धन्यवाद!!!</h1>
                <h2> आपली माहिती यशस्वीरित्या जतन झाली आहे!!!! </h2>
                <h2>
                    आपली सभासद फीस ₹१०१ खालील UPI ID वर किंवा स्कॅनर वापरुन भरावी.
                </h2>
                <img src="@/assets/images/UPI_Sacnner.png" alt="" class="mt-2 mb-2">
                <input type="text" id="upiID" class="form-control" readonly
                    value="marathashivmudraprat.62641520@hdfcbank" />

                <p class="mt-4 text-start" style="text-indent: 25px;"> पेमेंट चा स्क्रीनशॉट मराठा शिवमुद्रा प्रतिष्ठान च्या
                    अधिकृत संपर्क क्रमांक <a target="_blank" href="https://wa.me/918233729696">८२३३७२९६९६</a> या व्हाट्सप
                    नंबरला पाठवावा. </p>
                <p class="text-start" style="text-indent: 25px;"> मा. पदाधिकारी माहितीची पडताळणी करतील. व त्यानंतर आपल्याला
                    सभासद क्रमांक आपल्या ई-मेल वर पाठवला जाईल.
                    धन्यवाद.
                </p>
                <div class="social-links">

                    <div class="row">
                        <div class="col-2">
                            युट्युब
                        </div>
                        <div class="col-10">
                            <div class="g-ytsubscribe" data-channelid="UCU9XzjJkTmCOHzFDnaMQKKA" data-layout="full"
                                data-count="default"> </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            इंस्टाग्राम
                        </div>
                        <div class="col-10">
                            <a target="_blank" href="https://instagram.com/maratha_shivmudra">
                                <img style="widows: 50px; height: 50px;" src="/img/Instagram_icon.png" />
                            </a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-2">
                            फेसबूक
                        </div>
                        <div class="col-10">
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmaratha.shivmudra96k&tabs&width=300&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                width="300" height="70" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                                allowfullscreen="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class RegisterSabhasad extends Vue {
    mounted(): void {
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        document.head.appendChild(script);
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
}

.form-wrapper {
    width: 100%;
    max-width: 500px;
    min-width: 300px;
    padding: 50px 30px 50px 30px;
    margin: 50px auto;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}
</style>