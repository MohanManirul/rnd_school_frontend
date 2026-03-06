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
      console.log(res.data);

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
      console.log(error);
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

    const profileLoading = ref(false);
    const profileSaving = ref(false);
  
    // load profile
    const loadProfile = async () =>{
      profileLoading.value = true ;
      try{
        const res = await apiClient.get("/ReadProfile");
        const data = res?.data?.data || null ;
        console.log(data);
        
        if(data){
          profile.value = {
            ...profile.value ,
            ...Object.fromEntries(
              Object.entries(data).map(([k,v]) => [k,v ?? ""])
            ),
          }
        }
      }catch(error){
        console.error("Error loading profile",error) ;
        cogoToast.error("Failed to load profile.");
      }finally{
        profileLoading.value = false ;
      }
    }

  return {
    Useremail,
    loading,
    login,
    verifyOTP,
    //profile
    profile,
    profileLoading,
    profileSaving,
    loadProfile
  };
});
