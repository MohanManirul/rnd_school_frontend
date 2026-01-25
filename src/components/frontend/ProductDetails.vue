<script setup>
import { useProductStore } from "@/store/productStore";
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";

 const store = useProductStore();
 const route = useRoute();

 // template state
 const activeImage    = ref('') ;
 const selectedSize   = ref('');
 const selectedColor  = ref('');
 const quantity       = ref(1) ;

 // quantity increment
const incrementQty = () =>{
  quantity.value++ ;
}
 // quantity deccrement
const decrementQty = () =>{
  quantity.value-- ;
}

//load product details and reviews
const loadAll = async ()=>{
  const id = route.query.id  ;
    await store.fetchProductDetailsById( id );
    activeImage.value = store.productImages[0] || "" ;
}

onBeforeMount(async()=>{
  await loadAll() ;
})

watch(()=>route.query.id , loadAll);

console.log(store.productColors);

</script>


<template>
    <!-- Section -->
<div class="section">
  <div class="container">
    <!-- loading -->
        <div v-if="store.detailsLoading" class="carousel-item active">
            <div class="d-flex align-item-center justify-content-center" style="height:420px">
              <div class="text-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <p class="mt-3 mb-0">Loading Product Details...</p>
              </div>
            </div>
        </div>

        <!-- empty / error -->
        <div v-else-if="!store.productDetails" class="carousel-item active">
            <div class="d-flex align-item-center justify-content-center" style="height:420px">
              <div class="text-center">
                  <p class="text-muted mb-0">{{ store.detailsError || "No Product Details Available" }}</p>
              </div>
            </div>
        </div>

    <!-- Product Details -->
    <div class="row">
      <!-- Images -->
      <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
        <div class="product-image">
          <div class="product_img_box">
            <img
              class="w-100"
              :src="activeImage"
              :alt="store.productDetails?.product?.title"
            />
          </div>

          <div class="row p-2">
            <button 
              v-for="(img , index) in store.productImages" :key="index"
              type="button" class="col-3 product_img_box p-1 btn btn-link"
              @click="activeImage=img"
              >
              <img
                :src="img"
                class="w-100"
                :alt="store.productDetails?.product?.title"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Details -->
      <div class="col-lg-6 col-md-6">
        <div class="pr_detail">
          <div class="product_description">
            <h4 class="product_title">{{ store.productDetails?.product?.title }}</h4>
            <h1 class="price">$ {{ store.productDetails?.product?.price }}</h1>
          </div>

          <div>
            <p>
              {{ store.productDetails?.product?.short_des }}
            </p>
          </div>

          <!-- Size -->
          <label class="form-label mt-3">Size</label>
          <select class="form-select">
            <option>Choose Size</option>
            <option v-for="s in store.productSizes" :key="s" :value='s' >{{ s }}</option>
          </select>

          <!-- Color -->
          <label class="form-label mt-3">Color</label>
          <select class="form-select">
            <option>Choose Color</option>
            <option v-for="c in store.productColors" :key="c" :value='c' >{{ c }}</option>
          </select>

          <hr />

          <div class="cart_extra">
            <div class="cart-product-quantity">
              <div class="quantity">
                <input type="button" value="-" class="minus" />
                <input
                  type="text"
                  name="quantity"
                  title="Qty"
                  class="qty"
                  size="4"
                  value="1"
                />
                <input type="button" value="+" class="plus" />
              </div>
            </div>

            <div class="cart_btn">
              <button class="btn btn-fill-out btn-addtocart" type="button">
                <i class="icon-basket-loaded"></i> Add to cart
              </button>
              <button class="btn btn-link add_wishlist" type="button">
                <i class="fa fa-heart"></i>
              </button>
            </div>
          </div>

          <hr />

          <!-- Long Description -->
          <div class="mt-3">
            <h5>Description</h5>
            <p>
              This is a long product description. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Specification -->
    <div class="product-specification mt-5">
      <h4>Specifications</h4>
      <ul>
        <li>Material: Example Material</li>
        <li>Dimensions: 10 x 20 x 5 cm</li>
        <li>Weight: 500g</li>
        <li>Model: ABC-123</li>
      </ul>
    </div>

  </div>
</div>

</template>