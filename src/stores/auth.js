import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const token = ref(null);

const login = async (values) => {
  try {
    const res = await axios.post(
      "https://school_backend.test/api/adminpanel/login-check",
      {
        email: values.email,
        password: values.password
      },
      { withCredentials: true }
    );

    console.log("store-res", res.data.data); // debug friendly
    // res.data.data এ token আছে
    user.value = { email: values.email }; // বা API থেকে যদি user info আসে
    return { success: true };
    
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "API login failed!"
    };
  }
};



  const logout = () => {
    user.value = null;
    token.value = null;
    localStorage.removeItem("token");
  };

  return { user, token, login, logout };
});
