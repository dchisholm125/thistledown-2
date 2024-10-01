<script setup lang="ts">
import FullScreenModal from '~/components/FullScreenModal.vue';

useHead({
  titleTemplate: (titleChunk) => {
    return 'Thistledown Recovery Home';
  }
})

const showModal = defineModel<boolean>(false)

</script>

<template>

    <div class="d-flex">
        <img src="~/assets/thistledown-logo.svg" class="position-absolute h-0 w-0 border border-solid rounded img-fluid bg-opaque-white" 
            alt="About Us" width="700" height="500" loading="lazy" style="top: 15%; left: 15%;">
        <img class="img-fluid" src="~/assets/cate-bligh-rOjL1qsJ9vE-unsplash.jpg" />
    </div>

    <button class="btn btn-primary" @click="showModal = !showModal">HEY!</button>

    <ThistledownHeader />

    <Content />

    <FullScreenModal v-model="showModal" />

</template>

<style>
.banner-height {
    height: 80vh;
}

.bg-opaque-black {
    background-color: rgba(0, 0, 0, 0.75);
}

.bg-opaque-white {
    background-color: rgba(255, 255, 255, 0.75);
}

.bg-thistle-tan {
    background-color: white;
}

.bg-thistle-tan-drk {
    background-color: #dbe4cf;
}

.bg-heros {
    background-color: #e9efec95;
}

.thistledown-logo {
    color: #69765E;
}

.text-thistledown {
    color: #545454;
}

a {
    padding: 5px;
    text-decoration: none;
    color: #545454;
}

a:hover {
    padding: 5px;
    border-radius: 5px;
    background-color: rgba(196, 184, 155, 0.829);
    color: #2c2c2c;
}

p, a, .playfair-display-thistledown {
  font-family: sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.font-skinny {
    font-weight: 400;
}
</style>