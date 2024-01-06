<script setup>
import JavascriptLogo from '../assets/js.png';
import HtmlLogo from '../assets/html.png';
import CssLogo from '../assets/css-3.png';
import PhpLogo from '../assets/php.png';
import VueLogo from '../assets/logo.png';
import TailwindLogo from '../assets/tailwind.webp';



</script>

<template>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
            <h2 class="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">Technology Stacks</h2>
            <p class="max-w-md text-center text-gray-400 lg:text-right">Preview</p>
        </div>

        <!-- Technology Stacks -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
            <!-- logo - start -->
            <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                <img class="w-18 lg:w-24 h-full object-fit" :src="JavascriptLogo" alt="Javascript">
            </div>
           
            <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                <img class="w-18 lg:w-24 h-full object-fit" :src="HtmlLogo" alt="Javascript">
            </div>
      
             <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                <img class="w-18 lg:w-24 h-full object-fit" :src="CssLogo" alt="Javascript">
            </div>
          
             <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                <img class="w-18 lg:w-24 h-full object-fit" :src="PhpLogo" alt="Javascript">
            </div>
        

           
             <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                <img class="w-18 lg:w-24 h-full object-fit" :src="VueLogo" alt="Javascript">
            </div>
           
             <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                <img class="w-18 lg:w-24 h-full object-fit" :src="TailwindLogo" alt="Javascript">
            </div>
        </div>
    </div>
</template>