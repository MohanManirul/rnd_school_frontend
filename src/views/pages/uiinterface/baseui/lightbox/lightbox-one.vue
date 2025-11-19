<template>
  <div class="card-body">
    <div class="row">
      <div
        class="col-md-4 mb-2 mb-md-0"
        v-for="(image, index) in galleryImages"
        :key="index"
        @click="show(index)"
      >
        <a href="javascript:;" class="image-popup fancystyle" data-fancybox="gallery">
          <img :src="getImageUrl(image.src)" class="img-fluid" alt="Gallery image" />
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
  />
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
        { src: "img-01.jpg" },
        { src: "img-02.jpg" },
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
