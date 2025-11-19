<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content bg-white">
      <div
        class="d-md-flex d-block align-items-center justify-content-between border-bottom pb-3"
      >
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="pe-1 mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-light bg-white btn-icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Refresh"
              data-bs-original-title="Refresh"
            >
              <i class="ti ti-refresh"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <system-sidebar></system-sidebar>
        <div class="col-xxl-10 col-xl-9">
          <div class="flex-fill border-start ps-3">
            <form @submit.prevent="submitForm">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3"
              >
                <div class="mb-3">
                  <h5 class="mb-1">OTP</h5>
                  <p>OTP configuration</p>
                </div>
                <div class="mb-3">
                  <button class="btn btn-light me-2" type="button">Cancel</button>
                  <button class="btn btn-primary" type="submit">Save</button>
                </div>
              </div>
              <div class="d-md-flex">
                <div class="row flex-fill">
                  <div class="col-xl-10">
                    <div class="d-bock">
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap border mb-3 p-3 pb-0 rounded"
                      >
                        <div class="row align-items-center flex-fill">
                          <div class="col-xxl-8 col-lg-6">
                            <div class="mb-3">
                              <h6>OTP Type</h6>
                              <p>You can configure the type</p>
                            </div>
                          </div>
                          <div class="col-xxl-4 col-lg-6">
                            <div class="mb-3">
                              <vue3-select
                                v-model="selected"
                                :options="EmailSel"
                                placeholder="SMS"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap border mb-3 p-3 pb-0 rounded"
                      >
                        <div class="row align-items-center flex-fill">
                          <div class="col-xxl-8 col-lg-6">
                            <div class="mb-3">
                              <h6>OTP Digit Limit</h6>
                              <p>Select size of the format</p>
                            </div>
                          </div>
                          <div class="col-xxl-4 col-lg-6">
                            <div class="mb-3">
                              <vue3-select
                                v-model="selectedOne"
                                :options="SizeSel"
                                placeholder="4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap border mb-3 p-3 pb-0 rounded"
                      >
                        <div class="row align-items-center flex-fill">
                          <div class="col-xxl-8 col-lg-6">
                            <div class="mb-3">
                              <h6>OTP Expire Time</h6>
                              <p>Select Expire time of OTP</p>
                            </div>
                          </div>
                          <div class="col-xxl-4 col-lg-6">
                            <div class="mb-3">
                              <vue3-select
                                v-model="selectedTwo"
                                :options="ExpireSel"
                                placeholder="5 Mins"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      EmailSel: [
        { label: "SMS", value: "SMS" },
        { label: "Email", value: "Email" },
      ],
      SizeSel: [
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
      ],
      ExpireSel: [
        { label: "5 Mins", value: "5 Mins" },
        { label: "2 Mins", value: "2 Mins" },
        { label: "10 Mins", value: "10 Mins" },
      ],
      title: "System Settings",
      text: "Dashboard",
      text1: "Settings",
      text2: "System Settings",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/system-settings/otp-settings");
    },
  },
};
</script>
