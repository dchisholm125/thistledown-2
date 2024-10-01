<script setup lang="ts">
const props = defineProps<{
    labelStr: string,
    inputType: string,
}>()

const textInput = defineModel<string | boolean>()

let staticTextInput = ref<string>()

const textarea = ref()

onMounted(() => {
    staticTextInput.value = textInput.value as string
})

</script>

<template>
<div class="mb-3">
    <label :for="staticTextInput" class="form-label">{{ labelStr }}</label>
    <div v-if="inputType == 'radio'">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="textInput1" @click="textInput = true">
            <label class="form-check-label" for="textInput1">
                Yes
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="textInput2" @click="textInput = false">
            <label class="form-check-label" for="textInput2">
                No
            </label>
        </div>
    </div>
    <textarea v-else-if="inputType == 'textarea'" ref="textarea" class="form-control" :id="staticTextInput" @input="textInput = textarea.value"></textarea>
    <input v-else v-model="textInput" :type="inputType" class="form-control" :id="staticTextInput" />
</div>
</template>