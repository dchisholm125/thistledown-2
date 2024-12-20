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
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" rows="3"></textarea>
                        <label for="floatingTextarea">Let us know how we can help</label>
                    </div>
                    <div class="mb-3">
                        <label for="exampleSelect" class="form-label">Select menu</label>
                        <select class="form-select" id="exampleSelect">
                        <option selected="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <fieldset class="mb-3">
                        <legend>Radios buttons</legend>
                        <div class="form-check">
                        <input type="radio" name="radios" class="form-check-input" id="exampleRadio1">
                        <label class="form-check-label" for="exampleRadio1">Default radio</label>
                        </div>
                        <div class="mb-3 form-check">
                        <input type="radio" name="radios" class="form-check-input" id="exampleRadio2">
                        <label class="form-check-label" for="exampleRadio2">Another radio</label>
                        </div>
                    </fieldset>
                    <div class="mb-3">
                        <label class="form-label" for="customFile">Upload</label>
                        <input type="file" class="form-control" id="customFile">
                    </div>
                    <div class="mb-3 form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked="">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                    </div>
                    <div class="mb-3">
                        <label for="customRange3" class="form-label">Example range</label>
                        <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    
            </div>
        </div>
    </div>
</template>

<style scoped>
.matte {
    background-color: white;
    width: 80%;
    border-radius: 10px;
    padding: 10px;
    margin: 20px 0;
}
</style>