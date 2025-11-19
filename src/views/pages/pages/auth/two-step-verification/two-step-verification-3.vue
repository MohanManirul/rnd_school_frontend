<template>
  <div class="account-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="row justify-content-center">
          <div class="col-md-5 p-4">
            <form
              method="get"
              class="digit-group login-form-control"
              data-group-name="digits"
              data-autosubmit="false"
              autocomplete="off"
              action="/"
            >
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
                      <h2 class="mb-2">Login with your Email Address</h2>
                      <p class="mb-0">
                        We sent a verification code to your email. Enter the code from the
                        email in the field below
                      </p>
                    </div>
                    <div class="text-center">
                      <div class="d-flex align-items-center mb-3">
                        <input
                          v-for="(digit, index) in otpDigits"
                          :key="index"
                          :ref="'digit' + index"
                          type="text"
                          class="border rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold me-3"
                          maxlength="1"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          v-model="otp[index]"
                          @input="onInput(index, $event)"
                          @keydown.backspace="onBackspace(index, $event)"
                        />
                      </div>
                      <div>
                        <div class="badge bg-soft-danger mb-3">
                          <p>Otp will expire in 09:59</p>
                        </div>
                        <div class="form-wrap mb-0">
                          <button type="submit" class="btn btn-primary w-100">
                            Verify My Account
                          </button>
                        </div>
                      </div>
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
    return {
      otp: ["", "", "", ""],
      otpDigits: [0, 1, 2, 3],
    };
  },
  methods: {
    onInput(index, event) {
      const value = event.target.value;

      // Allow only digits
      if (!/^\d$/.test(value)) {
        this.otp[index] = "";
        return;
      }

      // Move to next input
      if (index < this.otp.length - 1) {
        const nextInput = this.$refs[`digit${index + 1}`][0];
        nextInput.focus();
      }
    },
    onBackspace(index, event) {
      if (!this.otp[index] && index > 0) {
        const prevInput = this.$refs[`digit${index - 1}`][0];
        prevInput.focus();
      }
    },
    submitForm() {
      this.$router.push("/reset-password");
    },
  },
};
</script>
