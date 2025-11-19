<template>
  <div class="account-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <form @submit.prevent="submitForm">
              <div class="d-flex flex-column justify-content-between vh-100">
                <div class="mx-auto p-4 text-center">
                  <img
                    src="@/assets/img/authentication/authentication-logo.svg"
                    class="img-fluid"
                    alt="Logo"
                  />
                </div>
                <div class="card">
                  <div class="card-body">
                    <div class="mb-4">
                      <h2 class="mb-2">Forgot Password?</h2>
                      <p class="mb-0">
                        If you forgot your password, well, then we’ll email you
                        instructions to reset your password.
                      </p>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Email Address</label>
                      <div class="input-icon mb-3 position-relative">
                        <span class="input-icon-addon">
                          <i class="ti ti-mail"></i>
                        </span>
                        <input type="text" value="" class="form-control" />
                      </div>
                    </div>
                    <div class="mb-3">
                      <button type="submit" class="btn btn-primary w-100">Sign In</button>
                    </div>
                    <div class="text-center">
                      <h6 class="fw-normal text-dark mb-0">
                        Return to
                        <router-link to="/login-3" class="hover-a"> Login</router-link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="p-4 text-center">
                  <p class="mb-0">Copyright &copy; {{ new Date().getFullYear() }} - Preskool</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/reset-password-3");
    },
  },
};
</script>
