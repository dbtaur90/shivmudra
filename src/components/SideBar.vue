<template>
    <div class="sidebar position-fixed bottom-0 start-0 d-sm-flex flex-column flex-shrink-0 p-3 text-white"
        style="width: 250px;" :class="{ 'd-none': !showSidebar }">
        <div class="sidebar-content">
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                    <strong>mdo</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                        <svg class="bi me-2" width="16" height="16">
                            <use xlink:href="#home" />
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <svg class="bi me-2" width="16" height="16">
                            <use xlink:href="#speedometer2" />
                        </svg>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <svg class="bi me-2" width="16" height="16">
                            <use xlink:href="#table" />
                        </svg>
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <svg class="bi me-2" width="16" height="16">
                            <use xlink:href="#grid" />
                        </svg>
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <svg class="bi me-2" width="16" height="16">
                            <use xlink:href="#people-circle" />
                        </svg>
                        Customers
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
export default class MyComponent extends Vue {
    @Prop(Boolean) readonly showSidebar!: boolean;
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
        margin-top: 12vh;;
    }
    .position-fixed.d-none {
    transition: transform 1s ease-in-out;
    transform: translateX(-100%);
}
}
</style>