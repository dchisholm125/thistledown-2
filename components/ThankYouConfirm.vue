<script setup lang="ts">
const showModal = defineModel()
</script>

<template>
    <div class="d-flex flex-column align-items-center justify-content-center" style="height: 85vh;">
        <h1 class="font-libre">Thank you for your interest in Thistledown Recovery Home!</h1>
        <br />
        <h4 class="font-libre">We will be in touch as soon as possible to discuss how we can help.</h4>
        <br />
        <button class="btn btn-primary"@click="showModal = !showModal">Close</button>
    </div>
</template>

<!-- <style scoped>

</style> -->