<script setup lang="ts">
const showModal = defineModel('showModal')
</script>

<template>
    <div class="matte">
        <div class="bd-example-snippet bd-code-snippet">
            <div class="bd-example m-0 border-0">
                <form>
                    <div class="d-flex gap-3 mb-3">
                        <div class="col form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">First Name</label>
                        </div>
                        <div class="col form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Last Name</label>
                        </div>
                    </div>
                    <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Phone #</label>
                    </div>
                    <div class="form-floating my-4">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" rows="18" style="height: 90%; max-height: 90%;"></textarea>
                        <label for="floatingTextarea">Let us know how we can help</label>
                    </div>
                    <div class="d-flex gap-2">
                        <!-- <button class="btn btn-danger"@click="sendMsg()" :disabled="!passesBasicCheck">Send to Derek L.</button> -->
                        <button type="submit" class="btn btn-primary" >Submit</button>
                        <button class="btn btn-danger" @click="showModal = false">Cancel</button>
                        <button class="btn btn-success" @click.prevent.stop="sendEmail()" :disabled="false">Send fake emial</button>
                    </div>
                </form>
            </div>
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
</style>