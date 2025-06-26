import { ref, onMounted } from 'vue'

export function useImagePreloader(urls: string[]) {
  const loaded = ref(false)
  const progress = ref(0)

  onMounted(() => {
    if (urls.length === 0) {
      loaded.value = true
      progress.value = 1
      return
    }
    if (typeof window === 'undefined') return
    let loadedCount = 0
    urls.forEach(url => {
      const img = new window.Image()
      img.onload = img.onerror = () => {
        loadedCount++
        progress.value = loadedCount / urls.length
        if (loadedCount === urls.length) loaded.value = true
      }
      img.src = url
    })
  })

  return { loaded, progress }
}
