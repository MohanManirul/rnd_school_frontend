<script setup>
import { useProductStore } from "@/store/productStore";
import { onBeforeMount } from "vue";

   const store = useProductStore();
   onBeforeMount(async()=>{
      await store.fetchTopBrands() ;
   }) ;



</script>




<template>
  <div class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="heading_s4 text-center">
            <h2>Top Brands</h2>
          </div>
          <p class="text-center leads">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit massa enim Nullam nunc varius.
          </p>
        </div>
      </div>

      <!-- loading -->
            <div v-if="store.topBrandLoading" class="carousel-item active">
               <div class="d-flex align-item-center justify-content-center" style="height:420px">
                  <div class="text-center">
                     <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                     </div>
                     <p class="mt-3 mb-0">Loading Brands...</p>
                  </div>
               </div>
            </div>

         <!-- empty / error -->
            <div v-else-if="!store.topBrandItems.length" class="carousel-item active">
               <div class="d-flex align-item-center justify-content-center" style="height:420px">
                  <div class="text-center">
                     <p class="text-muted mb-0">{{ store.topBrandError || "No Brands available" }}</p>
                  </div>
               </div>
            </div>


      <!--Brand List -->
      <div  v-else class="row align-items-center">
        <div v-for="brand in store.topBrandItems" :key="brand.id"  class="p-2 col-6 col-md-4 col-lg-2">
          <div class="item">
            <div class="Brands_box">
              <router-link :to="`/by-brand?id=${brand.id}`">
                <img
                  :src="brand.brandImg"
                  :alt="brand.brandName"
                />
                <span>{{ brand.brandName }}</span>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Repeat similar blocks as needed -->
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>