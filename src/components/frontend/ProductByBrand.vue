<script setup>
import { useProductStore } from "@/store/productStore";
import { watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

  const store = useProductStore();
  const fetchCurrentBrand = async () =>{
    const brandId = route.query.id ;        
    await store.fetchProductByBrand(brandId) ;
  }

watch(() => route.query.id, fetchCurrentBrand, { immediate: true });

</script>

<template>
<!-- Breadcrumb -->
<div class="breadcrumb_section bg_gray page-title-mini">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="page-title">
          <h1>
            Brand: <span>{{ store.brandName }}</span>
          </h1>
        </div>
      </div>
      <div class="col-md-6">
        <ol class="breadcrumb justify-content-md-end">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="breadcrumb-item active">This Page</li>
        </ol>
      </div>
    </div>
  </div>
</div>

<!-- Content -->
<div class="mt-5">
  <div class="container my-5">
    <!-- loading -->
            <div v-if="store.brandLoading" class="carousel-item active">
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
            <div v-else-if="!store.brandProducts.length" class="carousel-item active">
               <div class="d-flex align-item-center justify-content-center" style="height:420px">
                  <div class="text-center">
                     <p class="text-muted mb-0">{{ store.brandError || "No products available by this Brands" }}</p>
                  </div>
               </div>
            </div>
    <!-- Product Grid -->
    <div v-else id="byBrandList" class="row">

      <!-- Product Item -->
      <div v-for="item in store.brandProducts" :key="item.id"  class="col-lg-3 col-md-4 col-6">
        <div class="product">
          <div class="product_img">
            <router-link :to='`/details?id=${item.id}`'>
              <img
                :src="item.image"
                :alt="item.title"
              />
            </router-link>

            <div class="product_action_box">
              <ul class="list_none pr_action_btn">
                <li>
                  <router-link :to='`/details?id=${item.id}`'>
                    <i class="icon-magnifier-add"></i>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
 
          <div class="product_info">
            <h6 class="product_title">
              <router-link :to='`/details?id=${item.id}`'>{{ item.title }}</router-link>
            </h6>

            <div class="product_price">
              <span class="price">$ {{ item.price }}</span>
            </div>
 
            <div class="rating_wrap">
              <div class="rating">
                <div class="product_rate"  :style="{width: (item.star || 0)+ '%'}"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Product Item -->

    </div>
    <!-- /row -->

  </div>
</div>

</template>