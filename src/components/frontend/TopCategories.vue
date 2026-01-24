<script setup>
import { useProductStore } from "@/store/productStore";
import { onBeforeMount } from "vue";

   const store = useProductStore();
   onBeforeMount(async()=>{
      await store.fetchTopCategories() ;
   }) ;
</script>


<template>
   <div class="section">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-md-6">
            <div class="heading_s4 text-center">
               <h2>Top Categories</h2>
            </div>
            <p class="text-center leads">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
               blandit massa enim Nullam nunc varius.
            </p>
            </div>
         </div>

         <!-- loading -->
            <div v-if="store.topCategoriesLoading" class="carousel-item active">
               <div class="d-flex align-item-center justify-content-center" style="height:420px">
                  <div class="text-center">
                     <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                     </div>
                     <p class="mt-3 mb-0">Loading Categories...</p>
                  </div>
               </div>
            </div>

         <!-- empty / error -->
            <div v-else-if="!store.topCategoriesItems.length" class="carousel-item active">
               <div class="d-flex align-item-center justify-content-center" style="height:420px">
                  <div class="text-center">
                     <p class="text-muted mb-0">{{ store.topCategoriesError || "No Categories available" }}</p>
                  </div>
               </div>
            </div>

         <!-- Categories -->
         <div v-else class="row align-items-center">

            <div v-for="category in store.topCategoriesItems" :key="category.id" class="p-2 col-2">
               <div class="item">
                  <div class="categories_box">
                     <router-link :to='`/by-category?id=${category.id}`'>
                     <img
                        :src="category.categoryImg"
                        :alt="category.categoryName"
                     />
                     <span>{{ category.categoryName }}</span>
                     </router-link>
                  </div>
               </div>
            </div>

         </div>
         <!-- /Categories -->
      </div>
   </div>

</template>


<style scoped>

</style>