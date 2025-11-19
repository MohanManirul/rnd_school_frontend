<template>
  <div>
    <!-- Gallery images with click handlers -->
    <ul class="nav share-media-img mb-0">
      <li
        v-for="(image, index) in galleryImages"
        :key="index"
        @click="showVideo(index)"
      >
        <a href="javascript:;" data-fancybox class="fancybox group-img-chat">
          <img :src="getImageUrl(image.src)" alt="img" />
          <span><i class="bx bx-play-circle"></i></span>
        </a>
      </li>

      <li
        class="blur-media"
        v-for="(image1, index1) in galleryImages1"
        :key="'b-' + index1"
        @click="showVideo1(index1)"
      >
        <a href="javascript:;" data-fancybox class="fancybox group-img-chat">
          <img :src="getImageUrl(image1.src)" alt="img" />
        </a>
        <span>+10</span>
      </li>
    </ul>

    <!-- Video iframe section -->
    <div v-if="videoVisible" class="video-container">
      <button class="close-btn" @click="closeVideo"><i class="feather-x"></i></button>
      <iframe
        width="560"
        height="315"
        :src="videoUrl"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <div v-if="videoVisible1" class="video-container">
      <button class="close-btn" @click="closeVideo1"><i class="feather-x"></i></button>
      <iframe
        width="560"
        height="315"
        :src="videoUrl1"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoVisible: false,
      videoUrl: "",
      videoVisible1: false,
      videoUrl1: "",
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
    getImageUrl(filename) {
      return new URL(`@/assets/img/media/${filename}`, import.meta.url).href;
    },
    showVideo() {
      this.videoUrl = "https://www.youtube.com/embed/Mj9WJJNp5wA";
      this.videoVisible = true;
    },
    closeVideo() {
      this.videoVisible = false;
      this.videoUrl = "";
    },
    showVideo1() {
      this.videoUrl1 = "https://www.youtube.com/embed/Mj9WJJNp5wA";
      this.videoVisible1 = true;
    },
    closeVideo1() {
      this.videoVisible1 = false;
      this.videoUrl1 = "";
    },
  },
};
</script>

<style scoped>
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  z-index: 9999;
}

.video-container button .feather-x {
  color: #ccc;
}

.close-btn {
  background-color: rgba(30, 30, 30, 0.6);
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-self: flex-end;
}

.video-container iframe {
  margin: auto;
}
</style>
