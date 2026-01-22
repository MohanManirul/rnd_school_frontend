import apiClient from "@/services/apiClient";
import cogoToast from "cogo-toast";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useProductStoreStore = defineStore("productStore", () => {
  const router = useRouter();

      //actions
  const fetchCategories = async () => {
    try {
      const res = await apiClient.get('/CategoryList');   
      return res.data.data;
    } catch (error) {
      // server related issue
      console.error(error.message); // log the error for debugging
      cogoToast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right"
      });
    }
  };



  return { fetchCategories };
});