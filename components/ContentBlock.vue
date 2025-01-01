<script setup lang="ts">
import { useWindowSize, useElementSize } from '@vueuse/core'

const props = defineProps<{
  imgAfterText: boolean, //
  sectionName: string, // 
  sectionContent: string, //
  imgSrc: string, //
  sectionBlurb?: string, // 
  boldCallout?: string, // 
}>()

const { width: windowWidth } = useWindowSize()

const imgEl = ref()
const imgSizeHeight = ref()

const compHtmlId = computed(() => {
  let buildStr = ''

  for(let char in props.sectionName) {
    buildStr += props.sectionName[char] === ' ' ? '-' : props.sectionName[char].toLowerCase()
  }

  return buildStr
})

onMounted(() => {
  imgSizeHeight.value = useElementSize(imgEl).height
})

</script>

<template>
  <div :id="compHtmlId" class="d-flex flex-column flex-lg-row m-0 p-0 align-items-center">
    <img v-if="!imgAfterText || windowWidth < 992" ref="imgEl" :src="props.imgSrc" class="col-12 col-lg-6 img-fluid"
      :alt="props.sectionName" loading="lazy">
    <div class="col-12 col-lg-6 d-flex flex-column justify-content-evenly py-3 py-lg-0 px-5" :style="windowWidth > 992 ? 'height: ' + imgSizeHeight + 'px' : ''">
      <p v-if="boldCallout" class="display-6 font-skinny text-nowrap overflow-elipsis">{{ boldCallout}}</p>
      <p v-if="sectionBlurb" class="display-4 text-nowrap overflow-elipsis">{{ sectionBlurb }}</p>
      <p class="display-2">{{ sectionName }}</p>
      <p class="lead text-wrap overflow-auto">{{ sectionContent }}</p>
    </div>
    <img v-if="imgAfterText && windowWidth >= 992" ref="imgEl" :src="props.imgSrc" class="col-12 col-lg-6 img-fluid" style="max-height: 60vh;" :alt="props.sectionName" loading="lazy">
  </div>
</template>

<style scoped>
img {
  object-fit: cover;
}
</style>