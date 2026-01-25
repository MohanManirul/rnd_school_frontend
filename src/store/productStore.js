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

  // states for category page
  const categoryProducts = ref([]) ;
  const categoryName = ref('') ;
  const categoryLoading = ref(false);
  const categoryError = ref(false);

  // states for brand page
  const brandProducts = ref([]) ;
  const brandName = ref('') ;
  const brandLoading = ref(false);
  const brandError = ref(false);

  // states for single product
  const productDetails = ref(null) ;
  const productImages = ref([]); ;
  const productSizes = ref([]);
  const productColors = ref([]);
  const detailsLoading = ref(false);
  const detailsError = ref(false);


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

  // load products for single category page
  const fetchProductByCategory = async(categoryId)=>{
    categoryLoading.value = true ;
    try{
      const categoryRes = await apiClient.get('CategoryList');    
      const categories = categoryRes?.data?.data?? [];
      const found = categories.find((c)=>c.id == categoryId );
      categoryName.value = found?.categoryName || "";      
      const res = await apiClient.get(`ListProductByCategory/${categoryId}`);   
      
      categoryProducts.value = res.data?.data ?? [] ;
    }catch(error){
      // server related issue
      categoryProducts.value = [];
      categoryError.value = "Failed to load products";
      console.error(error.message); // log the error for debugging
    } finally {
      categoryLoading.value = false;
    }
  }

  // load products for single brand page
  const fetchProductByBrand = async(brandId)=>{
    brandLoading.value = true ;
    try{
      const brandRes = await apiClient.get("/BrandList");    
      const brands = brandRes?.data?.data?? [];
      const found = brands.find((c)=>c.id == brandId );
      brandName.value = found?.brandName || "";      
      const res = await apiClient.get(`/ListProductByBrand/${brandId}`); 
      brandProducts.value = res.data?.data ?? [] ;
    }catch(error){
      // server related issue
      brandProducts.value = [];
      brandError.value = "Failed to load products";
      console.error(error.message); // log the error for debugging
    } finally {
      brandLoading.value = false;
    }
  }

    // const productDetails = ref(null);
    // const productImages = ref([]);
    // const productSizes = ref([]);
    // const productColors = ref([]);
    // const detailsLoading = ref(false);
    // const detailsError = ref(false);

  // fetch single product details by id
  const fetchProductDetailsById = async(id)=>{
    detailsLoading.value = true;    
    try{
      // const brandRes = await apiClient.get("/BrandList");    
      // const brands = brandRes?.data?.data?? [];
      // const found = brands.find((c)=>c.id == brandId );
      // brandName.value = found?.brandName || "";      
      const res = await apiClient.get(`/ProductDetailsById/${id}`); 
     
      const list = res?.data?.data || [];
      const row = list[0] || null ;
      productDetails.value = row;
      productImages.value = [row?.img1, row?.img2, row?.img3, row?.img4].filter(Boolean) ;
      productSizes.value = (row?.size || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      productColors.value = (row?.color || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

    }catch(error){
      // server related issue
      productDetails.value = null;
      productImages.value = [];
      productSizes.value = [];
      productColors.value = [];
      detailsError.value = "Failed to load products";
      console.error(error.message); // log the error for debugging
    } finally {
      detailsLoading.value = false;
    }
  }


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
    fetchProductsByRemark,

    // products by category
    categoryProducts,
    categoryName,
    categoryLoading,
    categoryError,
    fetchProductByCategory,

    // products by brand
    brandProducts,
    brandName,
    brandLoading,
    brandError,
    fetchProductByBrand,

    //single product details
    productDetails,
    productImages,
    productSizes,
    productColors,
    detailsError,
    fetchProductDetailsById,
  };
});
 