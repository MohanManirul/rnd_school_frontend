<template>
  <div class="card-body">
    <div class="row">
      <div
        class="col-md-4 mb-2 mb-md-0"
        v-for="(image, index) in galleryImages"
        :key="index"
        @click="() => show(index)"
      >
        <a
          href="javascript:;"
          class="image-popup-desc fancystyle"
          data-fancybox="gallery"
          data-title="Title 01"
          data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
        >
          <img :src="getImageUrl(image.src)" class="img-fluid" alt="work-thumbnail" />
        </a>
      </div>
    </div>
  </div>

  <vue-easy-lightbox
    :visible="visible"
    :index="index"
    :imgs="galleryImages.map((image) => getImageUrl(image.src))"
    @hide="visible = false"
    @on-prev="handlePrev"
    @on-next="handleNext"
  >
  </vue-easy-lightbox>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      visible: false,
      index: 0,
      galleryImages: [
        { src: "img-03.jpg" },
        { src: "img-04.jpg" },
        { src: "img-05.jpg" },
        // Add more as needed
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/${imageName}`, import.meta.url).href;
    },
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handlePrev(oldIndex, newIndex) {
      // Optional: handle previous click
    },
    handleNext(oldIndex, newIndex) {
      // Optional: handle next click
    },
  },
};
</script>
