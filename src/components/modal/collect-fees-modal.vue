<template>
  <div class="modal fade" id="add_fees_collect">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title">Collect Fees</h4>
            <span class="badge badge-sm bg-primary ms-2">AD124556</span>
          </div>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="bg-light-300 p-3 pb-0 rounded mb-4">
              <div class="row align-items-center">
                <div class="col-lg-3 col-md-6">
                  <div class="d-flex align-items-center mb-3">
                    <router-link
                      to="/students/student-details"
                      class="avatar avatar-md me-2"
                    >
                      <img src="@/assets/img/students/student-01.jpg" alt="img" />
                    </router-link>
                    <router-link to="/students/student-details" class="d-flex flex-column"
                      ><span class="text-dark">Janet</span>III, A</router-link
                    >
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <span class="fs-12 mb-1">Total Outstanding</span>
                    <p class="text-dark">2000</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <span class="fs-12 mb-1">Last Date</span>
                    <p class="text-dark">25 May 2024</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <span class="badge badge-soft-danger"
                      ><i class="ti ti-circle-filled me-2"></i>Unpaid</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Fees Group</label>
                  <vue3-select
                    :options="MonthlyCollecFee"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Fees Type</label>
                  <vue3-select :options="FeeSBus" v-model="selectedOne" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Amount</label>
                  <input type="text" class="form-control" placeholder="Enter Amout" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Collection Date</label>
                  <div class="date-pic">
                    <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Payment Type</label>
                  <vue3-select
                    :options="TypeFeesCollect"
                    v-model="selectedTwo"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Payment Reference No</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Payment Reference No"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="status-title">
                    <h5>Status</h5>
                    <p>Change the Status by toggle</p>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-sm"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-0">
                  <label class="form-label">Notes</label>
                  <textarea
                    rows="4"
                    class="form-control"
                    placeholder="Add Notes"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Pay Fees
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
const valueOne = ref();
export default {
  data() {
    return {
      valueOne,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      FeeSBus: [
        {label: "Select", value: "Select"}, 
        {label: "Tuition Fees", value: "Tuition Fees"}, 
        {label: "Monthly Fees", value: "Monthly Fees"}, 
        {label: "Admission Fees", value: "Admission Fees"}, 
        {label: "Bus Fees", value: "Bus Fees"}
      ],
      TypeFeesCollect: [
        {label: "Select", value: "Select"}, 
        {label: "Paytm", value: "Paytm"}, 
        {label: "Cash On Delivery", value: "Cash On Delivery"}, 
      ],
      MonthlyCollecFee: [
        {label: "Select", value: "Select"},
        {label: "Class 1 General", value: "Class 1 General"},
        {label: "Monthly Fees", value: "Monthly Fees"},
        {label: "Admission-Fees", value: "Admission-Fees"},
        {label: "Class 1- I Installment", value: "Class 1- I Installment"},
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/fees/collect-fees");
    },
  },
};
</script>
