<template>
    <div class="sidebar position-fixed bottom-0 start-0 d-sm-flex flex-column flex-shrink-0 p-3 text-white"
        style="width: 250px;" :class="{ 'd-none': !showSidebar }">
        <div class="sidebar-content">
            <div class="bg-transparent">
                <div class="text-start row">
                    <div class="col-3" style="padding: 0; margin: 5px;">
                        <img :src="verifyStore.$state.loggedUser.photoImage" alt="" style="width: 100%;"
                            class="rounded-circle">
                    </div>
                    <div class="col-8">

                        <small>{{ verifyStore.$state.loggedUser.sabhasadNumber }} </small> <br>
                        <strong>{{ verifyStore.$state.loggedUser.name }}</strong>
                        <p style="margin-bottom: 0;">
                            <small>{{ verifyStore.$state.loggedUser.title }} </small>
                        </p>
                    </div>

                </div>

            </div>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li>
                    <button type="button" href="#" class="btn nav-link text-white" @click="nagigatetoRoute('SabhasadList')">
                        <svg class="bi me-2" width="16" height="16">
                            <use xlink:href="#speedometer2" />
                        </svg>
                        सभासद अर्ज यादी
                    </button>
                </li>
                <li>
                    <button href="#" class="btn nav-link text-white" @click="nagigatetoRoute('postRequestList')">
                        <svg class="bi me-2" width="16" height="16">
                            <use xlink:href="#table" />
                        </svg>
                        नियुक्ती विनंती
                    </button>
                </li>
                <!-- <li>
                    <a href="#" class="nav-link text-white">
                        <svg class="bi me-2" width="16" height="16">
                            <use xlink:href="#grid" />
                        </svg>
                        प्रलंबित नियुक्त्या
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <svg class="bi me-2" width="16" height="16">
                            <use xlink:href="#people-circle" />
                        </svg>
                        पदाधिकारी साखळी
                    </a>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import router from '@/router';
import { useAuthStore } from '@/stores/AuthStore';
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
export default class MyComponent extends Vue {
    @Prop(Boolean) readonly showSidebar!: boolean;
    verifyStore = useAuthStore();
    isPostApprovalAllowed = false
    mounted(): void {
        const loggedUser = this.verifyStore.$state.loggedUser;
        if (loggedUser.post)
            this.isPostApprovalAllowed = loggedUser.level == 1 && ["अध्यक्ष", "उपाध्यक्ष", "सचिव", "प्रदेशाध्यक्ष"].includes(loggedUser.post);
        else{
            this.verifyStore.logout();
            router.replace({name:'login'});
        }
    }
    nagigatetoRoute(name: string) {
        router.push({ name: name });
        this.$emit('menu-click');
    }
}
</script>
<style scoped>
.sidebar {
    background: linear-gradient(to bottom, #800000 41%, #ff0000 100%);
    height: 100%
}

.position-fixed {
    z-index: 9;
    overflow-x: hidden;
    overflow-y: auto;
    transform: translateX(0%);
    width: 100%;
}

@media (min-width: 576px) {
    .sidebar-content {
        margin-top: 60px;
    }
}

@media (max-width: 576px) {
    .sidebar-content {
        margin-top: 12vh;
    }

    .position-fixed.d-none {
        transition: transform 1s ease-in-out;
        transform: translateX(-100%);
    }
}
</style>