<script setup lang="ts">

const contentSections = ref([
    {
        sectionName: "About Us",
        sectionContent: "Welcome to Thistledown Recovery Home, a dedicated sober living"
                    + "environment for men who are committed to transforming their lives and"
                    + "embracing sobriety. Our home is designed to provide a supportive and"
                    + "structured living space that fosters personal growth, accountability, and a"
                    + "sense of community among residents who are on a shared journey towards"
                    + "lasting recovery.",
        imgSrc: "/matheus-ferrero-TkrRvwxjb_8-unsplash.jpg",
        sectionBlurb: "Gateway to Recovery", 
        boldCallout: "CONWAY, NH", 
    },
    {
        sectionName: "Our Mission",
        sectionContent: "At Thistledown Recovery Home, our mission is to offer a safe and stable"
                    + "residence for men who have made a conscious decision to stay sober. We"
                    + "understand that the path to recovery is unique for each individual, and we"
                    + "believe that a supportive home environment is crucial to maintaining"
                    + "sobriety. Our goal is to facilitate a space where residents can focus on their"
                    + "recovery without the distractions and triggers of their previous living"
                    + "situations.",
        imgSrc: "/kalen-emsley-4mHZqgoZQu8-unsplash.jpg",
        sectionBlurb: "Gateway to Recovery", 
        boldCallout: "CONWAY, NH", 
    },
    {
        sectionName: "Our Home",
        sectionContent: "Located in Conway, New Hampshire, our sober home is situated in a"
                        + "peaceful and welcoming community. The residence features comfortable"
                        + "living quarters, communal spaces for fellowship and relaxation, and"
                        + "amenities that cater to the needs of our residents. We take pride in"
                        + "maintaining a clean and orderly home to ensure a conducive atmosphere"
                        + "for recovery.",
        imgSrc: "/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg",
        sectionBlurb: "Gateway to Recovery", 
        boldCallout: "CONWAY, NH", 
    },
    {
        sectionName: "Our Community",
        sectionContent: "Thistledown is situated in a vibrant community, surrounded by a plethora of"
                        + "diverse businesses. Its convenient location offers residents the unique"
                        + "advantage of being within walking distance or a short commute to a wide"
                        + "range of employment opportunities. Residents are permitted to store"
                        + "personal bicycles on property and a local taxi service is available for"
                        + "transportation needs, ensuring everyone has easy access to reliable travel"
                        + "to and from their place of employment.",
        imgSrc: "/johannes-plenio-RwHv7LgeC7s-unsplash.jpg",
        sectionBlurb: "Gateway to Recovery", 
        boldCallout: "CONWAY, NH", 
    },
    {
        sectionName: "Our Approach",
        sectionContent: "While we do not offer treatment services, our sober home operates with"
                        + "guidelines that encourage a sober lifestyle. We require that all residents"
                        + "commit to staying drug and alcohol-free, actively participate in their"
                        + "personal recovery plans, and support one another in their journey. Our"
                        + "house rules are designed to promote respect, responsibility, and personal"
                        + "growth.\n\t"
                        + "\n\t"
                        + "Residents are encouraged to engage with external recovery programs,"
                        + "attend meetings, and seek out the resources they need to support their"
                        + "sobriety. We believe in the power of community and peer support, and our"
                        + "home serves as a foundation from which residents can build a fulfilling and"
                        + "sober life.",
        imgSrc: "/gary-bendig-b30CHD9UdVs-unsplash.jpg",
        sectionBlurb: "Gateway to Recovery", 
        boldCallout: "CONWAY, NH", 
    },
])

</script>

<template>
<div class="d-flex flex-column">
    <ContentBlock v-for="(section, index) in contentSections" 
        :imgAfterText="index % 2 > 0"
        :sectionName="section.sectionName"
        :sectionContent="section.sectionContent"
        :imgSrc="section.imgSrc"
        :sectionBlurb="section.sectionBlurb"
        :boldCallout="section.boldCallout"
            />


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
    </div>
</template>