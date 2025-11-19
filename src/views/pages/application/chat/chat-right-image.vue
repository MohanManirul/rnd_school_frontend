<template>
  <ul class="nav share-media-img mb-0">
    <li v-for="(image, index) in galleryImages" :key="`gallery-${index}`" @click="showGallery(index, 'gallery1')">
      <a href="javascript:;" data-fancybox="gallery" class="fancybox group-img-chat">
        <img :src="getImageUrl(image.src)" alt="" />
      </a>
    </li>
    <li
      class="blur-media"
      v-for="(image1, index1) in galleryImages1"
      :key="`gallery1-${index1}`"
      @click="showGallery(index1, 'gallery2')"
    >
      <a href="javascript:;" data-fancybox="gallery" class="fancybox group-img-chat">
        <img :src="getImageUrl(image1.src)" alt="" />
      </a>
      <span>+10</span>
    </li>
  </ul>

  <vue-easy-lightbox
    :visible="visible"
    :index="index"
    :imgs="currentImages"
    @hide="visible = false"
    @on-prev="handlePrev"
    @on-next="handleNext"
  />
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      index: 0,
      currentImages: [],
      galleryImages: [
        { id: 1, src: "media-01.jpg" },
        { id: 2, src: "media-02.jpg" },
        { id: 3, src: "media-03.jpg" },
        { id: 4, src: "media-04.jpg" },
        { id: 5, src: "media-05.jpg" },
      ],
      galleryImages1: [
        { id: 1, src: "media-02.jpg" },
      ],
    };
  },
  methods: {
    showGallery(index, type) {
      this.index = index;
      this.currentImages =
        type === "gallery1"
          ? this.galleryImages.map((img) => this.getImageUrl(img.src))
          : this.galleryImages1.map((img) => this.getImageUrl(img.src));
      this.visible = true;
    },
    handlePrev() {},
    handleNext() {},
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/media/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
