<template>
  <ul class="nav mb-0">
    <li
      v-for="(image, index) in galleryImages"
      :key="'g1-' + index"
      @click="showGallery1(index)"
    >
      <div class="image-download-col me-1">
        <a href="javascript:;" data-fancybox="gallery" class="fancybox group-img-chat">
          <img :src="getImageUrl(image.src)" alt="" />
        </a>
      </div>
    </li>

    <li
      v-for="(image, index) in galleryImages1"
      :key="'g2-' + index"
      @click="showGallery2(index)"
    >
      <div class="image-download-col image-not-download">
        <a href="javascript:;" data-fancybox="gallery" class="fancybox group-img-chat">
          <img :src="getImageUrl(image.src)" alt="" />
          <span>10+</span>
        </a>
      </div>
    </li>
  </ul>

  <vue-easy-lightbox
    :visible="visible1"
    :index="index1"
    :imgs="galleryImages.map((img) => getImageUrl(img.src))"
    @hide="visible1 = false"
    @on-prev="handlePrev"
    @on-next="handleNext"
  />

  <vue-easy-lightbox
    :visible="visible2"
    :index="index2"
    :imgs="galleryImages1.map((img) => getImageUrl(img.src))"
    @hide="visible2 = false"
    @on-prev="handlePrev"
    @on-next="handleNext"
  />
</template>

<script>
export default {
  data() {
    return {
      visible1: false,
      index1: 0,
      galleryImages: [
        { id: 1, src: 'media-02.jpg' },
        { id: 2, src: 'media-03.jpg' }
      ],
      visible2: false,
      index2: 0,
      galleryImages1: [
        { id: 1, src: 'media-01.jpg' }
      ]
    }
  },
  methods: {
    showGallery1(index) {
      this.index1 = index
      this.visible1 = true
    },
    showGallery2(index) {
      this.index2 = index
      this.visible2 = true
    },
    handlePrev() {
      // Optional: handle previous image logic
    },
    handleNext() {
      // Optional: handle next image logic
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/media/${imageName}`, import.meta.url).href
    }
  }
}
</script>
