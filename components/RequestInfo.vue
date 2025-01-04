<script setup lang="ts">
const showModal = defineModel('showModal')

const clickedOnce = ref<boolean>(true)

</script>

<template>
    <div class="matte">
        <div class="bd-example-snippet bd-code-snippet">
            <div v-if="clickedOnce" class="bd-example m-0 border-0">
                <h2 class="text-center mb-4">Request Info</h2>
                <h6 class="text-center fst-italic fw-normal">* Please fill out all required fields (highlighted with a <span style="color: red;">red&nbsp;</span>border).</h6>
                <form>
                    <div class="d-flex gap-3 mb-3">
                        <div class="col form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                            <label for="floatingInput">First Name</label>
                        </div>
                        <div class="col form-floating">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Last Name</label>
                        </div>
                    </div>
                    <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
                            <label for="floatingPassword">Phone #</label>
                    </div>
                    <div class="form-floating my-4">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" rows="18" style="height: 90%; max-height: 90%;" required></textarea>
                        <label for="floatingTextarea">Let us know how we can help</label>
                    </div>
                    <div class="d-flex gap-2">
                        <!-- <button class="btn btn-danger"@click="sendMsg()" :disabled="!passesBasicCheck">Send to Derek L.</button> -->
                        <button type="submit" class="btn btn-primary" @click="clickedOnce = true">Submit</button>
                        <button class="btn btn-danger" @click="showModal = false">Cancel</button>
                        <button class="btn btn-success" @click.prevent.stop="clickedOnce = !clickedOnce" :disabled="false">Send fake emial</button>
                    </div>
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