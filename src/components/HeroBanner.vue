<script setup>


</script>

<template>
    <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row py-16">
        <!-- content - start -->
        <div class="flex flex-col justify-between xl:w-5/12">
            <div></div>

            <div class="sm:text-center lg:py-12 lg:text-left xl:py-24">
                <p class="mb-4 font-semibold text-gray-600 md:mb-6 md:text-lg xl:text-xl">Getting to know</p>

                <h1 class="mb-8 text-4xl font-bold   sm:text-5xl md:mb-12">Jakeson Rey Babatuan, A Software Developer.</h1>

                <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                    <router-link to="/about" href="#"
                        class="inline-block rounded-lg bg-cyan-400 px-8 py-3 text-center text-sm font-semibold text-white outline-none 
                        ring-indigo-300 transition duration-100 hover:bg-cyan-600 focus-visible:ring active:bg-cyan-700 md:text-base">
                        About Me
                    </router-link>

                    <router-link to="/contact"
                        class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none 
                        ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                        Contact Me
                    </router-link>
                </div>
            </div>

           
            
        </div>
        <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-1/4">
            <img src="../assets/Gwapo.jpg"
                loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
        </div>
    </section>
</template>