<script setup lang="ts">
defineProps<{
    icon: any,
    text: string,
}>()
</script>

<template>
    <div class="d-flex border align-items-center text-nowrap gap-2 m-0 p-3">
        <img :src="icon" height="25" width="25"/>
        <span>{{ text }}</span>
    </div>
</template>