import apiClient from "@/services/apiClient";
import cogoToast from "cogo-toast";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  
  // states
  const Useremail = ref("");
  const isAuthenticated = ref(false);
  const loading = ref(false);

  // actions
  const login = async (email) => {
    try {
      const res = await apiClient.get(`/UserLogin/${email}`);
      
      if (res.data.message === 200) {
        Useremail.value = email;
        localStorage.setItem("email", email);
        cogoToast.success(res.data.data || "OTP sent to your email", {
          position: "top-right"
        });
        router.push("/verify");
      } else {
        cogoToast.error(res.data.data || "OTP sent to your email", {
          position: "top-right"
        });
      }

      return true;
    } catch (error) {     
      cogoToast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right"
      });
    }
  };

  const verifyOTP = async (otp) => {
    if (!Useremail.value) {
      cogoToast.error("Email not found. Please login first.", {
        position: "top-right"
      });
      return;
    }
    try {
      const res = await apiClient.post(
        `/VerifyLogin/${Useremail.value}/${otp}`
      );

      if (res.data.message === 200) {
        isAuthenticated.value = true; // ✅ set logged in
        cogoToast.success("Login Successful", { position: "top-right" });
        router.push("/");
      } else {
        cogoToast.error("Failed to verify OTP", { position: "top-right" });
      }
    } catch (error) {
      cogoToast.error("frontend catch block error", { position: "top-right" });
    }
  };

  // ========= Profile State =========
  const profile = ref({
    cus_name: "",
    cus_add: "",
    cus_city: "",
    cus_state: "",
    cus_postcode: "",
    cus_country: "",
    cus_phone: "",
    cus_fax: "",
    ship_name: "",
    ship_add: "",
    ship_city: "",
    ship_state: "",
    ship_postcode: "",
    ship_country: "",
    ship_phone: ""
  });

  const profileLoading = ref(false) ;
  const profileSaving = ref(false) ;

  // load prpfile
  const loadProfile = async () =>{
    profileLoading.value = true ;
    try{
      const res= await apiClient.get("ReadProfile");
      const data = res?.data?.data || null ;
      if(data){
        profile.value = {
          ...profile.value,
          ...Object.fromEntries(
            Object.entries(data).map(([kn,v]) => [kn,v??""])
          )
        }
      }
    }catch(error){
      console.log("Error Loading profile", error) ;
      cogoToast.error("Failed to load profile");
    }finally{
       profileLoading.value = false;
    }
  }


  // update profile
  const saveProfile = async () =>{
    profileSaving.value = true ;
    try {
      const payload = { ...profile.value };
      const res = await apiClient.post("CreateProfile", payload);
      if (res?.data?.msg === "success") {
        cogoToast.success("Profile saved Successfully");
      } else {
        cogoToast.error("Failed to save profile");
      }
    } catch (error) {
      console.log("Error Saving profile", error);
      cogoToast.error("Failed to save profile");
    }finally{
      profileSaving.value = false;
    }
  }

  return {
    Useremail,
    loading,
    login,
    verifyOTP,

    // for profile page
    profile,
    profileLoading,
    profileSaving,
    loadProfile,
    saveProfile
  };
});
