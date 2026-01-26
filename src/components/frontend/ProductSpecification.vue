<script setup>

</script>


<template>
    <!-- ProductSpecification.html -->
<div class="container mt-5">
  <div class="row">
    <div class="col-md-12">

      <!-- Nav Tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <button
            class="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#details"
            type="button"
          >
            Details
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#reviews"
            type="button"
          >
            Review
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#add-review"
            type="button"
          >
            Add Review
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content">

        <!-- Details -->
        <div class="tab-pane fade show active p-3" id="details">
          <p>Product description goes here...</p>
        </div>

        <!-- Reviews -->
        <div class="tab-pane fade p-3" id="reviews">
          <ul class="list-group list-group-flush">

            <li class="list-group-item">
              <h6>Customer</h6>
              <p class="m-0 p-0">Sample review text</p>
              <div class="rating_wrap">
                <div class="rating">
                  <div class="product_rate" style="width: 80%;"></div>
                </div>
              </div>
            </li>

            <li class="list-group-item text-muted">
              No reviews yet.
            </li>

          </ul>
        </div>

        <!-- Add Review -->
        <div class="tab-pane fade p-3" id="add-review">
          <label class="form-label">Write Your Review</label>
          <textarea
            class="form-control form-control-sm"
            rows="5"
            placeholder="Your Review"
          ></textarea>

          <label class="form-label mt-2">Rating Score</label>
          <input
            type="number"
            min="1"
            max="10"
            class="form-control form-control-sm"
          />

          <button class="btn btn-danger mt-3 btn-sm">
            Submit
          </button>
        </div>

      </div>
    </div>
  </div>
</div>

</template>