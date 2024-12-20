<script setup lang="ts">
const showModal = defineModel()

const caller = inject('caller')

</script>

<template>
    <div style="position: sticky; top: 0; z-index: 1;">
        <div class="noprint d-flex bg-thistle-tan-drk align-items-center justify-content-between w-100 py-2 gap-2 overflow-hidden">
            <div class="col-1"></div>

            <div class="col d-lg-flex d-none align-items-center justify-content-between fw-bold text-nowrap gap-2" style="font-size: 1.25rem;">
                <a href="#about-us"><span>ABOUT US</span></a>
                <a href="#our-mission"><span>OUR MISSION</span></a>
                <a href="#our-home"><span>OUR HOME</span></a>
                <a href="#our-community"><span>OUR COMMUNITY</span></a>
                <a href="#our-approach"><span>OUR APPROACH</span></a>
                <a href="#amenities"><span>HOUSE AMENITIES</span></a>
                <!-- <a href="#join-us"><span>JOIN US</span></a> -->
            </div>

            <div class="d-flex justify-content-evenly gap-3">
                <button class="btn btn-primary text-nowrap" @click="showModal = !showModal; caller = 'info';">Request Info</button>
                <button class="btn btn-success text-nowrap" @click="showModal = !showModal; caller = 'apply';">Apply now!</button>
            </div>

            <div class="col-1"></div>
        </div>
    </div>
</template>

<style scoped>
@keyframes aFadeIn {
    0% {
        background-color: #dbe4cf;
        color: black;
    }
    100% {
        background-color: rgba(196, 184, 155, 0.829);
        border-radius: 10px;
    }
}

a:hover {
    animation: 0.3s linear aFadeIn;
}
</style>