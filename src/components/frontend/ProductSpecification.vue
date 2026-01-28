<script setup>
import { useProductStore } from "@/store/productStore";
import { onBeforeMount , ref } from "vue";
import { useRoute } from "vue-router";

  const store = useProductStore();
  const route = useRoute() ;
  const productId = route.query.id ;

  onBeforeMount(async()=>{
   await store.fetchReviewsByProduct(productId);
  //  const data = await store.fetchReviewsByProduct(productId);    
  // console.log(data);
  });
  
  // add review
  const reviewText = ref('');
  const reviewScore = ref('');

  const onAddReview = async () =>{
    if(!reviewText.value || !reviewScore ){
      return alert("Review text and score required");
    }
    await store.createReview({

        product_id : productId,
        description : reviewText.value,
        rating : reviewScore.value

    });
    reviewText.value  = ''  ;
    reviewScore.value = ''  ;
  } 

</script>


<!-- ProductSpecification.vue -->
<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <!-- Nav Tabs -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="details-tab"
              data-bs-toggle="tab"
              data-bs-target="#details-tab-pane"
              type="button"
              role="tab"
              aria-controls="details-tab-pane"
              aria-selected="true"
            >
              Details
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="review-tab"
              data-bs-toggle="tab"
              data-bs-target="#review-tab-pane"
              type="button"
              role="tab"
              aria-controls="review-tab-pane"
              aria-selected="false"
            >
              Review
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="review_create-tab"
              data-bs-toggle="tab"
              data-bs-target="#review_create-tab-pane"
              type="button"
              role="tab"
              aria-controls="review_create-tab-pane"
              aria-selected="false"
            >
              Add Review
            </button>
          </li>
        </ul>
 
        <!-- Tab Panes -->
        <div class="tab-content" id="myTabContent">
          <!-- Details -->
          <div
            class="tab-pane fade show active p-3"
            id="details-tab-pane"
            role="tabpanel"
            aria-labelledby="details-tab"
            tabindex="0"
          >
            <div >{{ store.productDetails?.des }}</div>
          </div>

          <!-- Reviews -->
          <div
            class="tab-pane fade p-3"
            id="review-tab-pane"
            role="tabpanel"
            aria-labelledby="review-tab"
            tabindex="0"
          >
            <ul class="list-group list-group-flush">
              <li
                v-for="(rev , i) in store.reviews"
                :key="i"
                class="list-group-item"
              >
                <h6>{{ rev?.profile?.cus_name }}</h6>
                <p class="m-0 p-0">{{ rev?.description }}</p>
                <div class="rating_wrap">
                  <div class="rating">
                    <div
                      class="product_rate"
                      style="{width:(parseFloat(rev?.rating) || 0)+ '%'}"
                    ></div>
                  </div>
                </div>
              </li>
              <li
               v-if='!store.reviews.length'
                class="list-group-item text-muted"
              >
                No reviews yet.
              </li>
            </ul>
          </div>

          <!-- Add Review -->
          <div
            class="tab-pane fade p-3"
            id="review_create-tab-pane"
            role="tabpanel"
            aria-labelledby="review_create-tab"
            tabindex="0"
          >
            <label class="form-label">Write Your Review</label>
            <textarea
               v-model="reviewText"
              class="form-control form-control-sm"
              rows="5"
              placeholder="Your Review"
            ></textarea>

            <label class="form-label mt-2">Rating Score</label>
            <input
              v-model="reviewScore"
              min="1"
              max="10"
              type="number"
              class="form-control-sm form-control"
            />

            <button
              @click="onAddReview"
            class="btn btn-danger mt-3 btn-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* .product_rate {
  height: 10px;
  background-color: #ffc107;
} */
</style>
