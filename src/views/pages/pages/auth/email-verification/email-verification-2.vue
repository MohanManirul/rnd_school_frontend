<template>
  <div class="account-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="container-fuild">
        <div
          class="login-wrapper w-100 overflow-hidden position-relative flex-wrap d-block vh-100"
        >
          <div class="row">
            <div class="col-lg-6">
              <div
                class="d-lg-flex align-items-center justify-content-center bg-light-300 d-lg-block d-none flex-wrap vh-100 overflowy-auto bg-01"
              >
                <div>
                  <img
                    src="@/assets/img/authentication/authentication-10.svg"
                    alt="Img"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div
                class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap"
              >
                <div class="col-md-9 mx-auto p-4">
                  <form @submit.prevent="submitForm">
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
                          <div class="mb-3">
                            <h2 class="mb-2 text-center">Verify your Email</h2>
                            <p class="mb-0 text-center">
                              We've sent a link to your email ter4@example.com. Please
                              follow the link inside to continue
                            </p>
                          </div>
                          <div class="text-center mb-3">
                            <h6 class="fw-normal text-dark mb-0">
                              Didn’t receive an email?<a href="javascript:void(0);" class="hover-a">
                                Resend Link</a
                              >
                            </h6>
                          </div>
                          <button type="submit" class="btn btn-primary w-100">
                            Skip Now
                          </button>
                        </div>
                      </div>
                      <div class="mt-5 text-center">
                        <p class="mb-0">Copyright &copy; {{ new Date().getFullYear() }} - Preskool</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
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
      this.$router.push("/login-2");
    },
  },
};
</script>
