import { defineStore } from "pinia";
import apiClient from "@/services/apiClient";

export const useLeftSideBarStore = defineStore("leftSideBarStore", () => {
  // Logout
  const leftSideBarData = async () => {
    try {
      const res = await apiClient.get("/modules");
      return res.data.data;
    } catch (e) {
      alert("left Side Bar Data Fetched Failed");
    }
  };

  return { leftSideBarData };
});
