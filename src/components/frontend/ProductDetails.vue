<script setup>
import { useProductStore } from "@/store/productStore";
import cogoToast from "cogo-toast";
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import ProductSpecification from '@/components/frontend/ProductSpecification.vue' ;
 const store = useProductStore();
 const route = useRoute();

 // template state
 const activeImage    = ref('') ;
 const selectedSize   = ref('');
 const selectedColor  = ref('');
 const quantity       = ref(1) ;

const decrementQty = () => {
  if (quantity.value > 1) quantity.value--;
};

const maxQty = 10;

const incrementQty = () => {  
  if (quantity.value < maxQty) quantity.value++; 
};

watch(quantity, (val) => {
  if (val < 1) quantity.value = 1;
});

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

// add to cart
 
const onAddToCart = async () =>{

  if( !selectedSize.value ) return cogoToast.error('Please select a size', {
            position: "top-right"
          }) ;
  if( !selectedColor.value ) return cogoToast.error('Please select a color', {
            position: "top-right"
          }) ;
  if( !quantity.value || quantity.value < 1 ) return cogoToast.error('Please select a quantity', {
            position: "top-right"
          }) ;

  const id = route.query.id ;
  await store.addToCart({
    product_id : id ,
    size      : selectedSize.value ,
    color     : selectedColor.value ,
    qty  : quantity.value ,
  });

}


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
            <h3 >Brand : {{ store.productDetails?.product?.brand?.brandName }}</h3>
            <h3 >Category : {{ store.productDetails?.product?.category?.categoryName }}</h3>
          </div>

          <div>
            <p>
              {{ store.productDetails?.product?.short_des }}
            </p>
          </div>

          <!-- Size -->
          <label class="form-label mt-3">Size</label>
          <select class="form-select" v-model="selectedSize">
            <option selected disabled value="">Choose Size</option>
            <option v-for="s in store.productSizes" :key="s" :value='s' >{{ s }}</option>
          </select>

          <!-- Color -->
          <label class="form-label mt-3">Color</label>
          <select class="form-select" v-model="selectedColor">
            <option selected disabled value="">Choose Color</option>
            <option v-for="c in store.productColors" :key="c" :value='c' >{{ c }}</option>
          </select>

          <hr />

          <div class="cart_extra">
            <div class="cart-product-quantity">
              <div class="quantity">
                <input type="button" value="-" class="minus" @click="decrementQty" />
                <input
                  type="text"
                  name="quantity"
                  title="Qty"
                  class="qty"
                  size="4"
                  v-model="quantity"
                />
                <input type="button" value="+" class="plus"  @click="incrementQty"/>
              </div>
            </div>

            <div class="cart_btn">
              <button class="btn btn-fill-out btn-addtocart" type="button" @click="onAddToCart">
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
              {{ store.productDetails?.des }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Specification -->
    <ProductSpecification />

  </div>
</div>

</template>