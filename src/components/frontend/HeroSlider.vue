<script setup>
   import { useProductStore } from '@/store/productStore';
   import {  onBeforeMount,  ref } from 'vue';

   const productStore = useProductStore();
   
   onBeforeMount(async ()=>{
      await productStore.fetchSlider();        
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
            <div v-else-if="!productStore.sliderItems.length" class="carousel-item active">
               <div class="d-flex align-item-center justify-content-center" style="height:420px">
                  <div class="text-center">
                     <p class="text-muted mb-0">{{ productStore.sliderError || "No slider available" }}</p>
                  </div>
               </div>
            </div>
                   <!-- Slide Example -->
        <div
          v-else
          v-for="(item, i) in productStore.sliderItems"
          :key="item.id"
          class="carousel-item background_bg"
          :class="{ active: i === 0 }"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <div class="banner_slide_content">
            <div class="container">
              <div class="row">
                <div class="col-lg-7 col-9">
                  <div class="banner_content overflow-hidden">
                    <h5
                      class="mb-3 staggered-animation font-weight-light"
                      data-animation="slideInLeft"
                      data-animation-delay="0.5s"
                    >
                      {{ item.price }}
                    </h5>
                    <h2
                      class="staggered-animation"
                      data-animation="slideInLeft"
                      data-animation-delay="1s"
                    >
                      {{ item.title }}
                    </h2>
                    <a
                      class="btn btn-fill-out rounded-0 staggered-animation text-uppercase"
                      href="/details?id=1"
                      data-animation="slideInLeft"
                      data-animation-delay="1.5s"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /slide -->

        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev"><i class="ion-chevron-left"></i></a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next"><i class="ion-chevron-right"></i></a>
    </div>
</div>
</template>


<style scoped>

</style>