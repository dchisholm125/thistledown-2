<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return 'Thistledown Recovery Home';
  }
})

</script>

<template>

    <div class="d-flex">
        <img src="~/assets/thistledown-logo.svg" class="position-absolute h-0 w-0 border border-solid rounded img-fluid bg-opaque-white" 
            alt="About Us" width="700" height="500" loading="lazy" style="top: 15%; left: 15%;">
        <img class="img-fluid" src="~/assets/cate-bligh-rOjL1qsJ9vE-unsplash.jpg" />
    </div>

    <ThistledownHeader />

    <div id="about-us" class="d-flex banner-height m-0 p-0 align-items-center">
        <div class="col-6 h-100">
            <img src="~/assets/matheus-ferrero-TkrRvwxjb_8-unsplash.jpg" 
            style="height: 100%; max-width: 100%; object-fit: cover;" alt="About Us" loading="lazy">
        </div>
        <div class="col-6 px-5">
            <p class="display-6 font-skinny">CONWAY, NH</p>
            <p class="display-4">Gateway to Recovery</p>
            <p class="display-2">About Us</p>
            <p class="lead">Welcome to Thistledown Recovery Home, a dedicated sober living
                environment for men who are committed to transforming their lives and
                embracing sobriety. Our home is designed to provide a supportive and
                structured living space that fosters personal growth, accountability, and a
                sense of community among residents who are on a shared journey towards
                lasting recovery.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
        </div>
    </div>

    <div id="our-mission" class="d-flex banner-height m-0 p-0 align-items-center">
        <div class="col-6 px-5">
            <p class="display-6 font-skinny">CONWAY, NH</p>
            <p class="display-4">Gateway to Recovery</p>
            <p class="display-2">Our Mission</p>
            <p class="lead">At Thistledown Recovery Home, our mission is to offer a safe and stable
                residence for men who have made a conscious decision to stay sober. We
                understand that the path to recovery is unique for each individual, and we
                believe that a supportive home environment is crucial to maintaining
                sobriety. Our goal is to facilitate a space where residents can focus on their
                recovery without the distractions and triggers of their previous living
                situations.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
        </div>
        <div class="col-6 h-100">
            <img src="~/assets/kalen-emsley-4mHZqgoZQu8-unsplash.jpg" 
            style="height: 100%; max-width: 100%; object-fit: cover;" alt="About Us" loading="lazy">
        </div>
    </div>

    <div id="our-home" class="d-flex banner-height m-0 p-0 align-items-center">
        <div class="col-6 h-100">
            <img src="~/assets/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg" 
            style="height: 100%; max-width: 100%; object-fit: cover;" alt="Our Home" loading="lazy">
        </div>
        <div class="col-6 px-5">
            <p class="display-6 font-skinny">CONWAY, NH</p>
            <p class="display-4">Gateway to Recovery</p>
            <p class="display-2">Our Home</p>
            <p class="lead">Located in Conway, New Hampshire, our sober home is situated in a
                    peaceful and welcoming community. The residence features comfortable
                    living quarters, communal spaces for fellowship and relaxation, and
                    amenities that cater to the needs of our residents. We take pride in
                    maintaining a clean and orderly home to ensure a conducive atmosphere
                    for recovery.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
        </div>
    </div>

    <div id="our-community" class="d-flex banner-height m-0 p-0 align-items-center">
        <div class="col-6 px-5">
            <p class="display-6 font-skinny">CONWAY, NH</p>
            <p class="display-4">Gateway to Recovery</p>
            <p class="display-2">Our Community</p>
            <p class="lead">Thistledown is situated in a vibrant community, surrounded by a plethora of
                    diverse businesses. Its convenient location offers residents the unique
                    advantage of being within walking distance or a short commute to a wide
                    range of employment opportunities. Residents are permitted to store
                    personal bicycles on property and a local taxi service is available for
                    transportation needs, ensuring everyone has easy access to reliable travel
                    to and from their place of employment.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
        </div>
        <div class="col-6 h-100">
            <img src="~/assets/johannes-plenio-RwHv7LgeC7s-unsplash.jpg" 
            style="height: 100%; max-width: 100%; object-fit: cover;" alt="About Us" loading="lazy">
        </div>
    </div>

    <div id="our-approach" class="d-flex banner-height m-0 p-0 align-items-center">
        <div class="col-6 h-100">
            <img src="~/assets/gary-bendig-b30CHD9UdVs-unsplash.jpg" 
            style="height: 100%; max-width: 100%; object-fit: cover;" alt="Our Home" loading="lazy">
        </div>
        <div class="col-6 px-5">
            <p class="display-6 font-skinny">CONWAY, NH</p>
            <p class="display-4">Gateway to Recovery</p>
            <p class="display-2">Our Approach</p>
            <p class="lead">While we do not offer treatment services, our sober home operates with
                    guidelines that encourage a sober lifestyle. We require that all residents
                    commit to staying drug and alcohol-free, actively participate in their
                    personal recovery plans, and support one another in their journey. Our
                    house rules are designed to promote respect, responsibility, and personal
                    growth.</p>
            <p class="lead">Residents are encouraged to engage with external recovery programs,
                    attend meetings, and seek out the resources they need to support their
                    sobriety. We believe in the power of community and peer support, and our
                    home serves as a foundation from which residents can build a fulfilling and
                    sober life.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
        </div>
    </div>

    <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col justify-content-center text-center">
                <h1 id="join-us" class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Join Us</h1>
                <p class="lead">If you or a loved one is seeking a men's sober living home that prioritizes a
                    sober and supportive living environment, Thistledown Recovery Home may
                    be the right fit. We invite you to learn more about our home and how we
                    can be a part of your recovery journey. Please contact us for more
                    information or to schedule a visit.</p>
                <div>
                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
.banner-height {
    height: 80vh;
}

.bg-opaque-white {
    background-color: rgba(255, 255, 255, 0.75);
}

.bg-thistle-tan {
    background-color: white;
}

.bg-thistle-tan-drk {
    background-color: #dbe4cf;
}

.bg-heros {
    background-color: #e9efec95;
}

.thistledown-logo {
    color: #69765E;
}

.text-thistledown {
    color: #545454;
}

a {
    padding: 5px;
    text-decoration: none;
    color: #545454;
}

a:hover {
    padding: 5px;
    border-radius: 5px;
    background-color: rgba(196, 184, 155, 0.829);
    color: #2c2c2c;
}

p, a, .playfair-display-thistledown {
  font-family: sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.font-skinny {
    font-weight: 400;
}
</style>