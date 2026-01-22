<script setup>
   import { useProductStoreStore } from '@/store/productStore';
   import {  onBeforeMount,  ref } from 'vue';

   const productStore = useProductStoreStore();
   
   onBeforeMount(async ()=>{
      // await productStore.fetchSlider();        
   })
// fetched data before component loads
</script>

<style scoped>
 
</style>

<template>
   <div class="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
    <div id="carouselExampleControls" class="carousel slide carousel-fade light_arrow" data-bs-ride="carousel">
        <div class="carousel-inner">
         <!-- loading -->
            <div v-if="productStore.sliderLoading" class="carousel-item active">
               <div class="d-flex align-item-center justify-content-center" style="height:420px">
                  <div class="text-center">
                     <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                     </div>
                     <p class="mt-3 mb-0">Loading Slider...</p>
                  </div>
               </div>
            </div>
            <!-- empty / error -->
            <div v-if="!productStore.sliderLoading.length" class="carousel-item active">
               <div class="d-flex align-item-center justify-content-center" style="height:420px">
                  <div class="text-center">
                     <p class="text-muted mb-0">{{ productStore.sliderError || "No slider available" }}</p>
                  </div>
               </div>
            </div>
           

        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev"><i class="ion-chevron-left"></i></a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next"><i class="ion-chevron-right"></i></a>
    </div>
</div>
</template>


<style scoped>

</style>