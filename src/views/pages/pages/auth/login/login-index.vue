<template>
  <div class="account-page">
    <div class="container-fuild">
      <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div class="row">
          <!-- Left Side Background Section -->
          <div class="col-lg-6">
            <div
              class="login-background position-relative d-lg-flex align-items-center justify-content-center d-lg-block d-none flex-wrap vh-100 overflowy-auto"
            >
              <div>
                <img src="@/assets/img/authentication/authentication-02.jpg" alt="Img" />
              </div>
              <div class="authen-overlay-item w-100 p-4">
                <h4 class="text-white mb-3">What's New on Preskool !!!</h4>

                <div
                  class="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card"
                >
                  <div>
                    <h6>Summer Vacation Holiday Homework</h6>
                    <p class="mb-0 text-truncate">
                      The school will remain closed from April 20th to June...
                    </p>
                  </div>
                  <a href="javascript:void(0);"><i class="ti ti-chevrons-right"></i></a>
                </div>

                <div
                  class="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card"
                >
                  <div>
                    <h6>New Academic Session Admission Start(2024-25)</h6>
                    <p class="mb-0 text-truncate">
                      An academic term is a portion of an academic year, the time ....
                    </p>
                  </div>
                  <a href="javascript:void(0);"><i class="ti ti-chevrons-right"></i></a>
                </div>

                <div
                  class="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card"
                >
                  <div>
                    <h6>Date sheet Final Exam Nursery to Sr.Kg</h6>
                    <p class="mb-0 text-truncate">
                      As the final examination for the session 2024-25 is ...
                    </p>
                  </div>
                  <a href="javascript:void(0);"><i class="ti ti-chevrons-right"></i></a>
                </div>

                <div
                  class="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card"
                >
                  <div>
                    <h6>Annual Day Function</h6>
                    <p class="mb-0 text-truncate">
                      Annual functions provide a platform for students to
                      showcase their...
                    </p>
                  </div>
                  <a href="javascript:void(0);"><i class="ti ti-chevrons-right"></i></a>
                </div>

              </div>
            </div>
          </div>

          <!-- Right Login Form -->
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
              <div class="col-md-8 mx-auto p-4">
                <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                  <div>
                    <div class="mx-auto mb-5 text-center">
                      <img
                        src="@/assets/img/authentication/authentication-logo.svg"
                        class="img-fluid"
                        alt="Logo"
                      />
                    </div>

                    <div class="card">
                      <div class="card-body">
                        <div class="mb-4">
                          <h2 class="mb-2">Welcome</h2>
                          <p class="mb-0">Please enter your details to sign in</p>
                        </div>

                        <div class="login-or">
                          <span class="span-or">Or</span>
                        </div>

                        <!-- Email -->
                        <div class="mb-3">
                          <label class="form-label">Email Address</label>
                          <div class="input-icon mb-3 position-relative">
                            <span class="input-icon-addon"><i class="ti ti-mail"></i></span>

                            <Field
                              name="email"
                              type="text"
                              v-model="email"
                              class="form-control"
                              :class="{ 'is-invalid': errors.email }"
                            />
                          </div>
                          <ErrorMessage name="email" class="text-danger" />
                        </div>

                        <!-- Password -->
                        <div class="mb-3">
                          <label class="form-label">Password</label>
                          <div class="pass-group">
                            <Field
                              name="password"
                              :type="showPassword ? 'text' : 'password'"
                              v-model="password"
                              class="form-control pass-input mt-2"
                              :class="{ 'is-invalid': errors.password }"
                            />
                            <span @click="toggleShow" class="toggle-password">
                              <i :class="showPassword ? 'ti ti-eye' : 'ti ti-eye-off'"></i>
                            </span>
                          </div>
                          <ErrorMessage name="password" class="text-danger" />
                        </div>

                        <!-- Remember & Forgot -->
                        <div class="form-wrap form-wrap-checkbox mb-3 d-flex justify-content-between">
                          <div class="form-check form-check-md mb-0">
                            <input class="form-check-input mt-0" type="checkbox" v-model="remember" />
                            <label class="ms-1 mb-0">Remember Me</label>
                          </div>
                          <router-link to="/forgot-password" class="link-danger">Forgot Password?</router-link>
                        </div>

                        <div class="mb-3">
                          <button type="submit" class="btn btn-primary w-100">Sign In</button>
                        </div>

                        <div class="text-center">
                          <h6 class="fw-normal text-dark mb-0">
                            Don’t have an account?
                            <router-link to="/register" class="hover-a">Create Account</router-link>
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div class="mt-5 text-center">
                      <p>&copy; {{ new Date().getFullYear() }} - Preskool</p>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>


<script setup>

import { ref } from "vue";

import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

const router = useRouter();
const auth = useAuthStore();

const email = ref(null);
const password = ref(null);
const remember = ref(null);

const schema = Yup.object({
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required").min(6, "Min 6 chars"),
});

// password toggle
const showPassword = ref(false);
const toggleShow = () => {
  showPassword.value = !showPassword.value;
};
const buttonLabel = () => (showPassword.value ? "Hide" : "Show");
const onSubmit = async (values) => {
  
  const result = await auth.login(values);
  
  (result);
  if (!result.success) {
    return alert(result.message);
  }

  router.push("/dashboard");
};
</script>


