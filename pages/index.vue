<script setup lang="ts">
import FullScreenModal from '~/components/FullScreenModal.vue';

defineProps<{
    exportToPDF: Function
}>()

useHead({
  titleTemplate: (titleChunk) => {
    return 'Thistledown Recovery Home';
  }
})

const showModal = defineModel<boolean>(false)

</script>

<template>
<div class="vstack w-100">
    <img class="img-fluid" src="~/assets/thistledown-plus-background.png" />

    <ThistledownHeader />

    <Content />

    <FullScreenModal v-model="showModal" />
</div>
</template>

<style>
@keyframes fadeIn {
    0% {
        background-color: rgba(0, 0, 0, 0);
        font-size: 18pt;
        color: black;
    }
    100% {
        background-color: rgba(0, 0, 0, 0.048);
        border-radius: 10px;
        font-size: 19pt;
        color: blue;
    }
}

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