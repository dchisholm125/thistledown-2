<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from '~/composables/useForm'
import { sendReqInfoAPI, sendMsgAPI } from '~/services/api'

const showModal = defineModel('showModal')
const clickedOnce = ref<boolean>(true)

const initialState = {
  reqFName: '',
  reqLName: '',
  reqPhoneNum: '',
  reqEmailAddr: '',
  reqTextArea: ''
}

function validate(form: typeof initialState) {
  return (
    form.reqFName !== '' &&
    form.reqPhoneNum !== '' &&
    form.reqEmailAddr !== '' &&
    form.reqTextArea !== ''
  )
}

const {
  form,
  isSubmitting,
  error,
  success,
  reset,
  isValid
} = useForm(initialState, validate)

async function handleSubmit() {
  if (isSubmitting.value || !isValid()) return
  isSubmitting.value = true
  error.value = null
  try {
    await sendReqInfoAPI({
      applicant: form.value.reqFName + (form.value.reqLName ? ' ' + form.value.reqLName : ''),
      phoneNum: form.value.reqPhoneNum,
      emailAddr: form.value.reqEmailAddr,
      text: form.value.reqTextArea
    })
    await sendAllMsgs()
    clickedOnce.value = false
    success.value = true
  } catch (e: any) {
    error.value = e.message || 'Submission failed'
    alert('There was an error submitting your request. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

function sendAllMsgs() {
  sendMsgAPI({
    msgBody: `Dear Stacey, \n\nYou have just received a new request for information from:\n\n\tApplicant Name: ${form.value.reqFName} ${form.value.reqLName}\n\tPhone #: ${form.value.reqPhoneNum}\n\tEmail Address: ${form.value.reqEmailAddr}\n\n They have contacted because: \" ${form.value.reqTextArea}\"'`,
    phoneNum: '+16037035491'
  })
  setTimeout(() => {
    sendMsgAPI({
      msgBody: `Dear Derek, \n\nYou have just received a new request for information from:\n\n\tApplicant Name: ${form.value.reqFName} ${form.value.reqLName}\n\tPhone #: ${form.value.reqPhoneNum}\n\tEmail Address: ${form.value.reqEmailAddr}\n\n They have contacted because: \" ${form.value.reqTextArea}\"'`,
      phoneNum: '+16039153224'
    })
  }, 3000)
  setTimeout(() => {
    sendMsgAPI({
      msgBody: `Dear Derek C, \n\nYou have just received a new request for information from:\n\n\tApplicant Name: ${form.value.reqFName} ${form.value.reqLName}\n\tPhone #: ${form.value.reqPhoneNum}\n\tEmail Address: ${form.value.reqEmailAddr}\n\n They have contacted because: \" ${form.value.reqTextArea}\"'`,
      phoneNum: '+17204468559'
    })
  }, 6000)
}
</script>

<template>
    <div class="matte">
        <div class="bd-example-snippet bd-code-snippet">
            <div v-if="clickedOnce" class="bd-example m-0 border-0">
                <h2 class="text-center mb-4">Request Info</h2>
                <h6 class="text-center fst-italic fw-normal">* Please fill out all required fields (highlighted with a <span style="color: red;">red&nbsp;</span>border).</h6>
                <form @submit.prevent="handleSubmit">
                    <div class="d-flex gap-3 mb-3">
                        <div class="col form-floating mb-3">
                            <input v-model="form.reqFName" type="text" class="form-control" id="floatingFName" placeholder="John" required>
                            <label for="floatingFName">First Name</label>
                        </div>
                        <div class="col form-floating">
                            <input v-model="form.reqLName" type="text" class="form-control" id="floatingLName" placeholder="Smith">
                            <label for="floatingLName">Last Name</label>
                        </div>
                    </div>
                    <div class="form-floating">
                            <input v-model="form.reqPhoneNum" type="text" class="form-control" id="floatingPhoneNum" placeholder="603-555-1234" required>
                            <label for="floatingPhoneNum">Phone #</label>
                    </div>
                    <div class="form-floating my-4">
                            <input v-model="form.reqEmailAddr" type="email" class="form-control" id="floatingEmail" placeholder="example@abc.com" required>
                            <label for="floatingEmail">Email Address</label>
                    </div>
                    <div class="form-floating my-4">
                        <textarea v-model="form.reqTextArea" class="form-control" placeholder="Leave a comment here" id="floatingTextarea" rows="18" style="height: 90%; max-height: 90%;" required></textarea>
                        <label for="floatingTextarea">Let us know how we can help</label>
                    </div>
                    <div class="d-flex gap-2">
                        <button class="btn btn-primary" type="submit" :disabled="!isValid() || isSubmitting">
                            {{ isSubmitting ? 'Submitting...' : 'Submit' }}
                        </button>
                        <button class="btn btn-dark" @click="showModal = false">Cancel</button>
                    </div>
                    <div v-if="error" class="alert alert-danger mt-2">{{ error }}</div>
                    <div v-if="success" class="alert alert-success mt-2">Thank you! Your request has been submitted.</div>
                </form>
            </div>
            <ThankYouConfirm v-else v-model="showModal"/>
        </div>
    </div>
</template>

<style scoped>
.matte {
    background-color: white;
    width: 80%;
    height: 90vh;
    border-radius: 10px;
    padding: 10px;
    margin: 20px 0;
}

input:invalid, textarea:invalid {
    border-width: 2px;
    border-color: red;
}
</style>