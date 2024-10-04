<script setup lang="ts">
import html2pdf from "html2pdf";

function exportToPDF() {
  html2pdf(document.getElementById("form"), {
    margin: 1,
    filename: "generated-pdf.pdf",
  });
}
</script>

<template>
  <NuxtPage :exportToPDF id="main"/>
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
