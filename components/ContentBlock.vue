<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const props = defineProps<{
  imgAfterText: boolean, //
  sectionName: string, // 
  sectionContent: string, //
  imgSrc: string, //
  sectionBlurb?: string, // 
  boldCallout?: string, // 
}>()

const { width: windowWidth } = useWindowSize()

const compHtmlId = computed(() => {
  let buildStr = ''

  for(let char in props.sectionName) {
    buildStr += props.sectionName[char] === ' ' ? '-' : props.sectionName[char].toLowerCase()
  }

  return buildStr
})

const imgHtml = computed(() => {
  // This path must be correct for your file
  return `<img src="${props.imgSrc}" style="height: 100%; max-width: 100%; object-fit: cover;" alt="${props.sectionName}" loading="lazy">`
})

</script>

<template>
  <div :id="compHtmlId" class="d-flex flex-column flex-lg-row m-0 p-0 align-items-center">
    <img v-if="!imgAfterText || windowWidth < 992" :src="props.imgSrc" class="col-12 col-lg-6 img-fluid" :alt="props.sectionName" loading="lazy">
    <div class="col-12 col-lg-6 px-5">
      <p v-if="boldCallout" class="display-6 font-skinny">{{ boldCallout}}</p>
      <p v-if="sectionBlurb" class="display-4">{{ sectionBlurb }}</p>
      <p class="display-2">{{ sectionName }}</p>
      <p class="lead text-wrap">{{ sectionContent }}</p>
      <div class="d-grid gap-2 d-lg-flex justify-content-lg-start">
        <button type="button" class="btn btn-primary btn-lg px-4 me-lg-2">Primary</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
      </div>
    </div>
    <img v-if="imgAfterText && windowWidth >= 992" :src="props.imgSrc" class="col-12 col-lg-6 img-fluid" :alt="props.sectionName" loading="lazy">
  </div>
</template>