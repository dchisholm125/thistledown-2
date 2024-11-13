<script setup lang="ts">
const showModal = ref(false)

</script>

<template>
    <div class="noprint d-flex bg-thistle-tan-drk align-items-center justify-content-between w-100 py-2 gap-2 overflow-hidden">
        <div class="col-1"></div>

        <div class="col d-flex justify-content-between fw-bold text-nowrap gap-2" style="font-size: 1.5vw;">
            <a href="#about-us"><span>ABOUT US</span></a>
            <a href="#our-mission"><span>OUR MISSION</span></a>
            <a href="#our-home"><span>OUR HOME</span></a>
            <a href="#our-community"><span>OUR COMMUNITY</span></a>
            <a href="#our-approach"><span>OUR APPROACH</span></a>
            <a href="#join-us"><span>JOIN US</span></a>
        </div>

        <NuxtLink class="col-auto btn btn-success" type="button" to="/About"
            @click="showModal = !showModal">
            Apply now!
        </NuxtLink>

        <span v-if="showModal">{{ showModal }}</span>

        <div class="col-1"></div>
    </div>
</template>