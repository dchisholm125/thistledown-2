<script setup lang="ts">
import Bike from '@/public/bicycle-3-svgrepo-com.svg'
import CableTV from '@/public/wifi-svgrepo-com.svg'
import Bathroom from '@/public/FullBathroom.svg'
import Kitchen from '@/public/fullkitchen.svg'
import OutdoorSpace from '@/public/outdoor-space.svg'
import Beds from '@/public/TwinBed.svg'
import WasherDryer from '@/public/Washer_and _Dryer_On-site.svg'
import Parking from '@/public/parking-svgrepo-com.svg'
import SingleDouble from '@/public/Single_and_double.svg'

import AboutUsPhoto from '@/public/AboutUs.jpeg'
import HouseAmenPhoto from '@/public/thistle.jpeg'
import MissionPhoto from '@/public/ourmission.jpeg'
import HomePhoto from '@/public/stream-rock.jpeg'
import ApproachPhoto from '@/public/ourapproach.jpeg'

const showModal = defineModel()
const caller = inject('caller')

const contentSections = ref([
    {
        sectionName: "About Us",
        sectionContent: "Welcome to Thistledown Recovery Home, a NH Coalition of Recovery " +
                        "Residences (NHCORR) certified recovery home located at 379 White " +
                        "Mountain Highway in Conway, NH. We offer a dedicated living " +
                        "environment for men who are committed to transforming their lives and " +
                        "embracing sobriety. Our home is designed to provide a supportive and " +
                        "structured living space that fosters personal growth, accountability, and a " +
                        "sense of community among residents who are on a shared journey towards " +
                        "lasting recovery.",
        imgSrc: AboutUsPhoto,
    },
    {
        sectionName: "Our Mission",
        sectionContent: "At Thistledown Recovery Home, our mission is to offer a safe and stable " +
                        "residence for men who have made a conscious decision to embrace " + 
                        "recovery. We understand that the path to recovery is unique for everyone, " +
                        "and we believe that a supportive home environment is crucial to " +
                        "maintaining sobriety. Our goal is to facilitate a space where residents can " +
                        "focus on their recovery without the distractions and triggers of their " +
                        "previous living situations.",
        imgSrc: MissionPhoto,
    },
    {
        sectionName: "Our Home",
        sectionContent: "Located in Conway, New Hampshire, our recovery home is situated in a " +
                        "peaceful and welcoming community. The residence features comfortable " +
                        "living quarters, communal spaces for fellowship and relaxation, and " +
                        "amenities that cater to the needs of our residents. We take pride in " +
                        "maintaining a clean and orderly home to ensure a conducive atmosphere " +
                        "for recovery.",
        imgSrc: HomePhoto,
        boldCallout: "CONWAY, NH", 
    },
    {
        sectionName: "Our Community",
        sectionContent: "Thistledown is situated in a vibrant community, surrounded by a plethora of " +
                        "diverse businesses. Its convenient location offers residents the unique " +
                        "advantage of being within a short commute to a wide range of employment " +
                        "opportunities. Residents are permitted to store personal bicycles on " +
                        "property and a local taxi service is available for transportation needs, " +
                        "ensuring everyone has easy access to reliable travel to and from their " +
                        "place of employment.",
    },
    {
        sectionName: "Our Approach",
        sectionContent: "Thistledown operates with guidelines that encourage a sober lifestyle. We " +
                        "require that all residents remain abstinent from non-prescribed mind-" +
                        "altering drugs, actively participate in their personal recovery plans, and " +
                        "support one another in their journey. Our house rules are designed to " +
                        "promote respect, responsibility, and personal growth. \n\t" +
                        "\n\t" + 
                        "Residents are encouraged to engage with external recovery programs, " +
                        "attend meetings and recovery activities of their choice, and seek out the " +
                        "resources needed to support their recovery. We believe in the power of " +
                        "community and peer support, and our home serves as a foundation from " +
                        "which residents can build a fulfilling and sober life.",
        imgSrc: ApproachPhoto,
    },
])

</script>

<template>
    <div class="d-flex flex-column bg-thistle-ultralight-grey">
        <ContentBlock v-for="(section, index) in contentSections" 
            :key="section.sectionName"
            :imgAfterText="index % 2 > 0"
            :sectionName="section.sectionName"
            :sectionContent="section.sectionContent"
            :imgSrc="section.imgSrc"
            :movSrc="section.movSrc"
            :boldCallout="section.boldCallout"
                />

        <ContentBlock :imgAfterText="true" :imgSrc="HouseAmenPhoto" sectionName="House Amenities">

            <div class="d-flex flex-column">
                <hr />
                <div class="d-flex align-self-center w-100">
                    <div class="col d-flex flex-column">
                        <div class="col">
                            <AmenityCard :icon="SingleDouble" text="Single and double occupancy bedrooms"/>
                        </div>
                        <div class="col">
                            <AmenityCard :icon="Beds" text="Twin bed, bedding, and personal dresser"/>
                        </div>
                        <div class="col">
                            <AmenityCard :icon="WasherDryer" text="Washer and dryer on-site"/>
                        </div>
                        <div class="col">
                            <AmenityCard :icon="CableTV" text="Cable television, free wi-fi"/>
                        </div>
                        <div class="col">
                            <AmenityCard :icon="Parking" text="On-site parking for residence who have a valid driver’s license, registered vehicle, and auto insurance."/>
                        </div>
                    </div>
                    <div class="col d-flex flex-column">
                        <div class="col">
                            <AmenityCard :icon="Kitchen" text="Full kitchen and multiple refrigerators"/>
                        </div>
                        <div class="col">
                            <AmenityCard :icon="Bathroom" text="3 full bathrooms"/>
                        </div>
                        <div class="col">
                            <AmenityCard :icon="OutdoorSpace" text="Outdoor communal space and smoking area"/>
                        </div>
                        <div class="col">
                            <AmenityCard :icon="Bike" text="Outdoor storage for personal bicycles and scooters"/>
                        </div>
                        <div class="col">
                            <!-- intentionally empty for symmetry -->
                        </div>
                    </div>
                </div>
            </div>
        </ContentBlock>
    
        <hr class="mx-4"/>

        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col justify-content-center text-center">
                    <h1 id="join-us" class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Join Us</h1>
                    <p class="lead">If you or a loved one is seeking a men&#39;s recovery home that prioritizes a
                    supportive living environment, Thistledown Recovery Home may be the
                    right fit. We invite you to learn more about our home and how we can be a
                    part of your recovery journey. Please contact us for more information or to
                    schedule a visit.</p>
                    <div class="d-lg-flex d-none justify-content-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" @click="showModal = !showModal; caller = 'info'">Request Info</button>
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