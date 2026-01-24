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

  // states for brands
  const topBrandItems = ref([]);
  const topBrandLoading = ref(false);
  const topBrandError = ref("");

  // Exclusive Products State
  const popularProducts = ref([]);
  const newProducts = ref([]);
  const topProducts = ref([]);
  const specialProducts = ref([]);
  const trendingProducts = ref([]);
  const loading = ref(false);

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

  // fetch top brands

  const fetchTopBrands = async () => {
    topBrandLoading.value = true;
    try {
      const res = await apiClient.get("/BrandList");

      topBrandItems.value = res?.data?.data ?? [];
      console.log(topBrandItems);
    } catch (error) {
      // server related issue
      topBrandItems.value = [];
      topBrandError.value = "Failed to load Top Brand";
      console.error(error.message); // log the error for debugging
    } finally {
      topBrandLoading.value = false;
    }
  };

  // Fetch Exclusive Products
  const fetchProductsByRemark = async (remark) => {
    loading.value = true;
    try {
      const response = await apiClient.get(
        `/ListProductByRemark/${remark.toLowerCase()}`
      );

      if (response.status === 200) {
        const products = response.data.data;

        // Update the corresponding product array based on remark
        switch (remark.toLowerCase()) {
          case "popular":
            popularProducts.value = products;
            break;
          case "new":
            newProducts.value = products;
            break;
          case "top":
            topProducts.value = products;
            break;
          case "special":
            specialProducts.value = products;
            break;
          case "trending":
            trendingProducts.value = products;
            break;
          default:
            console.warn(`Unknown remark: ${remark}`);
        }
      }
    } catch (error) {
      // console.error(`Error fetching ${remark} products:`, error);
      cogoToast.error(`Failed to load ${remark} products`);
    } finally {
      loading.value = false;
    }
  };

  // Helper Function to navigate the tab
  // Load products for a single tab
  const loadProductsByTab = async (tabName) => {
    await fetchProductsByRemark(tabName);
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
    topCategoriesError,

    // states for top brands
    fetchTopBrands,
    topBrandItems,
    topBrandLoading,
    topBrandError,

    // Exclusive Products
    popularProducts,
    newProducts,
    topProducts,
    specialProducts,
    trendingProducts,
    loading,
    loadProductsByTab,
    fetchProductsByRemark
  };
});
