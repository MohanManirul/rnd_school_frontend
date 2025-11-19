<template>
  <div class="sidebar" id="sidebar">    
    <div class="sidebar-inner slimscroll">
      <simplebar id="scrollbar" class="h-100" ref="scrollbar">
      <div id="sidebar-menu" class="sidebar-menu">
        <ul>
          <li>
            <a
              href="javascript:void(0);"
              class="d-flex align-items-center border bg-white rounded p-2 mb-4"
            >
              <img
                src="@/assets/img/icons/global-img.svg"
                class="avatar avatar-md img-fluid rounded"
                alt="Profile"
              />
              <span class="text-dark ms-2 fw-normal">Global International</span>
            </a>
          </li>
        </ul>
        <vertical-sidebar></vertical-sidebar>
      </div>
      </simplebar>
    </div>    
  </div>
</template>
<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
export default {
  components: {
    simplebar,
  },
  data() {
    return {
      
    };
  },
};
</script>
