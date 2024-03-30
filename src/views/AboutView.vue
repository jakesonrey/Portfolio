<script setup>
import MainLayout from '../components/MainLayout.vue';

// Page Title of Views
const pageTitle = 'About'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <section>
      <div class="w-full bg-cyan-400">
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-black font-serif">
                ABOUT ME
            </h1>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="w-full bg-gray-100 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                <div class="w-full  h-80">
                    <img class="object-center object-cover w-full h-full" src="../assets/Gwapo.jpg" alt="Babatuan">
                </div>
                <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                    <p class="text-xl text-gray-800 font-bold">PERSONAL INFORMATION</p>
                  
                    <p class="text-base leading-relaxed text-gray-500 font-bold">Hi, I am Jakeson Rey Babatuan. 23 years old. I lived in Day-as, Cordova, Cebu. </p>
                </div>
            </div>
            <div class="w-full bg-gray-100 rounded-lg sahdow-lg  flex flex-col md:flex-row">
                <div class=" p-4 md:p-4 space-y-2">
                  <p class="text-xl text-gray-800 font-bold">HOBBIES</p>
                    <p class="text-base leading-relaxed text-justify text-gray-500 font-bold">
As a student in the field of IT, I take delight and satisfaction in the intricate realm of coding and programming. I enjoy unraveling complex algorithms and creating digital solutions. Apart from my academic endeavors, I am passionate about exploring new technologies, consistently keeping up with the latest developments in the tech industry. During leisure time, I express my creativity through digital art and design, bringing ideas to life on the screen.
                       </p>
                </div>
            </div>
            <div class="w-full bg-gray-100 rounded-lg sahdow-lg  flex flex-col md:flex-row">
                <div class=" p-4 md:p-4 space-y-2">
                  <p class="text-xl text-gray-800 font-bold">SKILLS</p>
                    <p class="text-base leading-relaxed text-justify text-gray-500 font-bold">

                      I'm proficient in web development using HTML, CSS, and JavaScript, experienced with modern front-end frameworks like Vue.js for dynamic interfaces, and I utilize Tailwind CSS for efficient styling. In back-end development, I manage databases with MySQL for smooth integration, and I understand the software development life cycle well, including using Git for version control. My commitment to continuous learning helps me stay updated with evolving technologies and best practices.
</p>
                </div>
            </div>
            <div class="w-full bg-gray-100 rounded-lg sahdow-lg  flex flex-col  ">
                <div class=" p-4 md:p-4 space-y-2">
                  <p class="text-xl text-gray-800 font-bold">EDUCATIONAL ATTAINMENT</p>
                    <p class="text-base leading-relaxed text-justify text-gray-500 font-bold">
                      I'm an enthusiastic student enrolled in the Information Technology program at Cordova Public College, where I've gained a strong foundation in programming, web development, and IT. I'm dedicated to academic excellence and acquiring practical skills, eager for continuous learning and personal growth in the rapidly evolving tech landscape, positioning myself to contribute meaningfully in Information Technology.
                    </p>
                </div>
            </div>
        </div>  
    </section>
</div>
    </section>
  </MainLayout>
</template>