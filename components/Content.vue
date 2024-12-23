<script setup lang="ts">
import BedDouble from '@/assets/bed-double.svg'
import Door from '@/assets/door.svg'

const showModal = defineModel()
const caller = inject('caller')

const contentSections = ref([
    {
        sectionName: "About Us",
        sectionContent: "Welcome to Thistledown Recovery Home, a dedicated sober living "
                    + "environment for men who are committed to transforming their lives and "
                    + "embracing sobriety. Our home is designed to provide a supportive and "
                    + "structured living space that fosters personal growth, accountability, and a "
                    + "sense of community among residents who are on a shared journey towards "
                    + "lasting recovery.",
        imgSrc: "/matheus-ferrero-TkrRvwxjb_8-unsplash.jpg",
        sectionBlurb: "Gateway to Recovery", 
    },
    {
        sectionName: "Our Mission",
        sectionContent: "At Thistledown Recovery Home, our mission is to offer a safe and stable "
                    + "residence for men who have made a conscious decision to stay sober. We "
                    + "understand that the path to recovery is unique for each individual, and we "
                    + "believe that a supportive home environment is crucial to maintaining "
                    + "sobriety. Our goal is to facilitate a space where residents can focus on their "
                    + "recovery without the distractions and triggers of their previous living "
                    + "situations.",
        imgSrc: "/jenn-buxton-iURt8NSVcXI-unsplash.jpg",
    },
    {
        sectionName: "Our Home",
        sectionContent: "Located in Conway, New Hampshire, our sober home is situated in a "
                        + "peaceful and welcoming community. The residence features comfortable "
                        + "living quarters, communal spaces for fellowship and relaxation, and "
                        + "amenities that cater to the needs of our residents. We take pride in "
                        + "maintaining a clean and orderly home to ensure a conducive atmosphere "
                        + "for recovery.",
        imgSrc: "/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg",
        sectionBlurb: "Gateway to Recovery", 
        boldCallout: "CONWAY, NH", 
    },
    {
        sectionName: "Our Community",
        sectionContent: "Thistledown is situated in a vibrant community, surrounded by a plethora of "
                        + "diverse businesses. Its convenient location offers residents the unique "
                        + "advantage of being within walking distance or a short commute to a wide "
                        + "range of employment opportunities. Residents are permitted to store "
                        + "personal bicycles on property and a local taxi service is available for "
                        + "transportation needs, ensuring everyone has easy access to reliable travel "
                        + "to and from their place of employment.",
        imgSrc: "/johannes-plenio-RwHv7LgeC7s-unsplash.jpg",
    },
    {
        sectionName: "Our Approach",
        sectionContent: "While we do not offer treatment services, our sober home operates with "
                        + "guidelines that encourage a sober lifestyle. We require that all residents "
                        + "commit to staying drug and alcohol-free, actively participate in their "
                        + "personal recovery plans, and support one another in their journey. Our "
                        + "house rules are designed to promote respect, responsibility, and personal "
                        + "growth.\n\t"
                        + "\n\t"
                        + "Residents are encouraged to engage with external recovery programs, "
                        + "attend meetings, and seek out the resources they need to support their "
                        + "sobriety. We believe in the power of community and peer support, and our "
                        + "home serves as a foundation from which residents can build a fulfilling and "
                        + "sober life.",
        imgSrc: "/gary-bendig-b30CHD9UdVs-unsplash.jpg",
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

    <hr class="mt-5"/>

    <div class="d-flex align-self-center">
        <div class="col d-flex flex-column">
            <div class="col p-2">
                <AmenityCard :icon="Door" text="Single and double occupancy bedrooms"/>
            </div>
            <div class="col p-2">
                <AmenityCard :icon="BedDouble" text="Twin bed, bedding, and personal dresser"/>
            </div>
            <div class="col p-2">
                <AmenityCard :icon="icon" text="Washer and dryer on-site"/>
            </div>
            <div class="col p-2">
                <AmenityCard :icon="icon" text="Cable television, free wi-fi"/>
            </div>
            <div class="col p-2">
                <AmenityCard :icon="icon" text="Parking on-site"/>
            </div>
        </div>
        <div class="col d-flex flex-column">
            <div class="col p-2">
                <AmenityCard :icon="icon" text="Full kitchen and multiple refrigerators"/>
            </div>
            <div class="col p-2">
                <AmenityCard :icon="icon" text="3 full bathrooms"/>
            </div>
            <div class="col p-2">
                <AmenityCard :icon="icon" text="Outdoor communal space and smoking area"/>
            </div>
            <div class="col p-2">
                <AmenityCard :icon="icon" text="Storage space for bicycles or motor vehicles"/>
            </div>
            <div class="col p-2">
                <!-- intentionally empty for symmetry -->
            </div>
        </div>
    </div>

    <div class="d-flex flex-column align-items-center justify-content-center w-100" id="amenities">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mt-4 mb-5">House amenities</h1>
        <ul class="list-group list-group-flush fs-4 gap-1 text-center ">
            <div class="list-group-item"><span class="animate">Single and double occupancy bedrooms</span></div>
            <div class="list-group-item"><span class="animate">Twin bed, bedding, and personal dresser</span></div>
            <li class="list-group-item"><span class="animate">Washer and dryer on-site</span></li>
            <li class="list-group-item"><span class="animate">Cable television, free wi-fi</span></li>
            <li class="list-group-item"><span class="animate">Full kitchen and multiple refrigerators</span></li>
            <li class="list-group-item"><span class="animate">3 full bathrooms</span></li>
            <li class="list-group-item"><span class="animate">Outdoor communal space and smoking area</span></li>
            <li class="list-group-item"><span class="animate">Storage space for bicycles or motor vehicles</span></li>
            <li class="list-group-item"><span class="animate">Parking on-site</span></li>
        </ul>
    </div>

    <hr class="mt-5"/>

        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col justify-content-center text-center">
                    <h1 id="join-us" class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Join Us</h1>
                    <p class="lead">If you or a loved one is seeking a men's sober living home that prioritizes a
                        sober and supportive living environment, Thistledown Recovery Home may
                        be the right fit. We invite you to learn more about our home and how we
                        can be a part of your recovery journey. Please contact us for more
                        information or to schedule a visit.</p>
                    <div class="d-lg-flex d-none justify-content-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" @click="showModal = !showModal; caller = 'info';">Request Info</button>
                        <button type="button" class="btn btn-success btn-lg px-4" @click="showModal = !showModal; caller = 'apply';">Apply Now!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

li {
    padding: 5px;
}

.animate:hover{
    animation: 0.5s linear fadeIn;
    color: blue;
    background-color: rgba(0, 0, 0, 0.048);
    border-radius: 10px;
    font-size: 19pt;
}
</style>