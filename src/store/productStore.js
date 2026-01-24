import apiClient from "@/services/apiClient";
import cogoToast from "cogo-toast";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useProductStore = defineStore("productStore", () => {
  // states for sliders
  const sliderItems = ref([]);
  const sliderLoading = ref(false);
  const sliderError = ref("");

  // states for categories
  const topCategoriesItems = ref([]);
  const topCategoriesLoading = ref(false);
  const topCategoriesError = ref("");

  //actions
  const fetchCategories = async () => {
    try {
      const res = await apiClient.get("/CategoryList");
      return res.data.data;
    } catch (error) {
      // server related issue
      console.error(error.message); // log the error for debugging
      cogoToast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right"
      });
    }
  };

  // fetch top categories

  const fetchTopCategories = async () => {
    topCategoriesLoading.value = true;
    try {
      const res = await apiClient.get("/CategoryList");

      topCategoriesItems.value = res?.data?.data ?? [];
      console.log(topCategoriesItems);
      
    } catch (error) {
      // server related issue
      topCategoriesItems.value = [];
      topCategoriesError.value = "Failed to load Top Categories";
      console.error(error.message); // log the error for debugging
    } finally {
      topCategoriesLoading.value = false;
    }
  };

  const fetchSlider = async () => {
    sliderLoading.value = true;
    try {
      const res = await apiClient.get("/ListProductSlider");

      sliderItems.value = res?.data?.data ?? [];
    } catch (error) {
      // server related issue
      sliderItems.value = [];
      sliderError.value = "Failed to load sliders";
      console.error(error.message); // log the error for debugging
    } finally {
      sliderLoading.value = false;
    }
  };

  return {
    fetchCategories,
    sliderItems,
    fetchSlider,
    sliderLoading,
    sliderError,
    // states for top categories
    fetchTopCategories,
    topCategoriesItems,
    topCategoriesLoading,
    topCategoriesError
  };
});
