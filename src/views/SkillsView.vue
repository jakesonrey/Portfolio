<script setup>
import MainLayout from '../components/MainLayout.vue';

// Page Title of Views
const pageTitle = 'Skills'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    <section>
        <div class="bg-white py-6 sm:py-8 lg:py-48">
        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-8 mb-8 md:mb-12">
            <div class="flex flex-col gap-2">
                <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl ">My Skills</h2>

               
            </div>

        </div>
        
        <!-- Project Image Gallery -->
        <div class="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-8 mb-8 md:mb-12">
            <!-- image - start -->
            <router-link to="/skills" href="#" class="group relative md:h-10">
                <img src="../assets/html.png"
                
    
                    loading="lazy" 
                    class="object-center transition duration-200 hover:scale-110" />
                     <div class="tailwind">
                        <img src="../assets/tailwind.webp" 
                
                    loading="lazy" 
                    class="object-center transition duration-200 hover:scale-110 mt-8" />
                     </div>
                
            </router-link>
            
            <router-link to="/skills" href="#" class="group relative md:h-10">
                <img src="../assets/css-3.png"
                    loading="lazy" 
                    class="object-center transition duration-200 hover:scale-110" />
                    <div class="php-icon">
                         <img src="../assets/php.png" 
                
                    loading="lazy" 
                    class="object-center transition duration-200 hover:scale-110 mt-8" />
                    </div>
            </router-link>
            <router-link to="/skills" href="#" class="group relative md:h-10">
                <img src="../assets/js.png"
                    loading="lazy" 
                    class="object-center transition duration-200 hover:scale-110" />
                     <div class="vue-icon">
                         <img src="../assets/logo.png" 
                
                    loading="lazy" 
                    class="object-center transition duration-200 hover:scale-110 mt-8" />
                    </div>


            </router-link>
            <router-link to="/skills" href="#" class="group relative md:h-10">
                <img src="../assets/bootstrap.png"
                    loading="lazy" 
                    class="object-center transition duration-200 hover:scale-110" />
                    <div class="mysql-icon">
                         <img src="../assets/mysql.png" 
                
                    loading="lazy" 
                    class="object-center transition duration-200 hover:scale-110 mt-8" />
                    </div>


            </router-link>
           
        </div>
        
    </div>
    
              


            
    
    </section>
  </MainLayout>
</template>
<style scoped>
.tailwind img{
    width: 90px;
    margin-top: 30%;
}
.php-icon img, .vue-icon img, .mysql-icon img{
    width: 90px;
}
section{
    margin-bottom: 5%;
}




</style>