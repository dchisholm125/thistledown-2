<script setup lang="ts">
import { ref } from 'vue'

const showModal = defineModel()

</script>

<template>
    <div v-if="showModal" 
    class="noprint position-absolute d-flex top-0 left-0 z-3 text-white justify-content-center align-items-center bg-opaque-black" 
        style="height: 100vh; width: 100vw" id="modalDarkBox">
        <div class="noprint d-flex flex-column justify-content-center align-items-center bg-thistle-tan text-black w-75 opacity-100" id="modalMatte"
            style="background-color: #afafaf; max-height: 90vh;">
            
            <HousemateApplication v-model:showModal="showModal"/>
            
            <!-- <embed type="application/pdf" src="./docs/HousemateApplication.pdf" width="250" height="200"/> -->
        </div>
    </div>
</template>

<style scoped>
#modalDarkBox{
    display: none;
}
</style>