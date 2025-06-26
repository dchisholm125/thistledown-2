import { ref } from 'vue'

export function useForm<T extends Record<string, any>>(initialState: T, validate: (state: T) => boolean) {
  const form = ref({ ...initialState })
  const isSubmitting = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const reset = () => {
    form.value = { ...initialState }
    error.value = null
    success.value = false
  }

  const isValid = () => validate(form.value)

  return {
    form,
    isSubmitting,
    error,
    success,
    reset,
    isValid
  }
}
