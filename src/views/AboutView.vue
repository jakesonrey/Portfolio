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
                    <p class="text-xl text-white font-bold">PERSONAL INFORMATION</p>
                  
                    <p class="text-base leading-relaxed text-gray-500 font-bold">Hi, I am Jakeson Rey Babatuan. 23 years old. I lived in Day-as, Cordova, Cebu. </p>
                </div>
            </div>
            <div class="w-full bg-gray-100 rounded-lg sahdow-lg  flex flex-col md:flex-row">
                <div class=" p-4 md:p-4 space-y-2">
                  <p class="text-xl text-white font-bold">HOBBIES</p>
                    <p class="text-base leading-relaxed text-justify text-gray-500 font-bold">
As a student in the field of IT, I take delight and satisfaction in the intricate realm of coding and programming. I enjoy unraveling complex algorithms and creating digital solutions. Apart from my academic endeavors, I am passionate about exploring new technologies, consistently keeping up with the latest developments in the tech industry. During leisure time, I express my creativity through digital art and design, bringing ideas to life on the screen.
                       </p>
                </div>
            </div>
            <div class="w-full bg-gray-100 rounded-lg sahdow-lg  flex flex-col md:flex-row">
                <div class=" p-4 md:p-4 space-y-2">
                  <p class="text-xl text-white font-bold">SKILLS</p>
                    <p class="text-base leading-relaxed text-justify text-gray-500 font-bold">I possess a skill set that includes a high level of proficiency in programming languages, particularly Java,
                       along with expertise in web development utilizing HTML, CSS, and JavaScript.
                        My hands-on experience extends to modern front-end frameworks like Vue.js,
                         where I leverage its capabilities to design dynamic and responsive user interfaces.
                          Additionally, I am adept at utilizing Tailwind CSS for efficient and scalable styling.

In the realm of back-end development, my skills encompass database management with MySQL,
 ensuring smooth integration between front-end and back-end components.
  I have a comprehensive understanding of the software development life cycle and am well-versed in version control systems like Git.
   My commitment to continuous learning underscores my dedication to staying current with evolving technologies and industry best practices.</p>
                </div>
            </div>
            <div class="w-full bg-gray-100 rounded-lg sahdow-lg  flex flex-col  ">
                <div class=" p-4 md:p-4 space-y-2">
                  <p class="text-xl text-white font-bold">EDUCATIONAL ATTAINMENT</p>
                    <p class="text-base leading-relaxed text-justify text-gray-500 font-bold">I am a dedicated and ambitious individual currently enrolled in the Information Technology program at Cordova Public College. My educational journey has provided me with a solid foundation in programming, web development, and various facets of IT. Demonstrating a commitment to academic excellence, I've shown a passion for acquiring practical skills crucial in the rapidly evolving technology landscape throughout my coursework. I am enthusiastic about the continuous opportunities for learning and personal growth that my education affords me, positioning myself to make meaningful contributions in the dynamic world of Information Technology.</p>
                </div>
            </div>
        </div>  
    </section>
</div>
    </section>
  </MainLayout>
</template>