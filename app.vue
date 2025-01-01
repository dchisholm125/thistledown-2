<script setup lang="ts">
import html2pdf from "html2pdf";

const showModal = ref(false)

const caller = ref('')

provide('caller', caller)

</script>

<template>
    <div style="height: 45vh;">hi</div>
    <div>
      <h1 class="text-center">Thistledown Recovery Home is down for maintenance! Be back soon!</h1>
    </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>

<style>
@media print {
   .noprint{ display:none; }
   #printarea { display:block; }
}
</style>
