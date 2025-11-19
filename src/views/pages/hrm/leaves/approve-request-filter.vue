<template>
  <div
    class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
  >
    <h4 class="mb-3">Approve Leave Request List</h4>
    <div class="d-flex align-items-center flex-wrap">
      <div class="input-icon-start mb-3 me-2 position-relative">
        <span class="icon-addon">
          <i class="ti ti-calendar"></i>
        </span>
        <input
          type="text"
          class="form-control date-range bookingrange"
          placeholder="Select"
          value="Academic Year : 2024 / 2025"
          ref="dateRangeInput"
        />
      </div>
      <div class="dropdown mb-3 me-2">
        <a
          href="javascript:void(0);"
          class="btn btn-outline-light bg-white dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          ><i class="ti ti-filter me-2"></i>Filter</a
        >
        <div class="dropdown-menu drop-width">
          <form @submit.prevent="submitForm">
            <div class="d-flex align-items-center border-bottom p-3">
              <h4>Filter</h4>
            </div>
            <div class="p-3 border-bottom">
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Leave Type</label>
                    <vue3-select
                      v-model="selected"
                      :options="TypeAprove"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Role</label>
                    <vue3-select
                      v-model="selectedOne"
                      :options="RoleAprove"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-0">
                    <label class="form-label">From - To Date</label>
                    <vue3-select
                      v-model="selectedTwo"
                      :options="DateAproveSel"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-0">
                    <label class="form-label">Status</label>
                    <vue3-select
                      v-model="selectedThree"
                      :options="SelectAproveSat"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3 d-flex align-items-center justify-content-end">
              <a href="javascript:void(0);" class="btn btn-light me-3">Reset</a>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="dropdown mb-3">
        <a
          href="javascript:void(0);"
          class="btn btn-outline-light bg-white dropdown-toggle"
          data-bs-toggle="dropdown"
          ><i class="ti ti-sort-ascending-2 me-2"></i>Sort by A-Z
        </a>
        <ul class="dropdown-menu p-3">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1"> Ascending </a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1"> Descending </a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">
              Recently Viewed
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">
              Recently Added
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      TypeAprove: [
        { label: "Select", value: "Select" },
        { label: "Medical Leave", value: "Medical Leave" },
        { label: "Casual Leave", value: "Casual Leave" },
        { label: "Maternity Leave", value: "Maternity Leave" },
      ],
      RoleAprove: [
        { label: "Select", value: "Select" },
        { label: "Students", value: "Students" },
        { label: "Teacher", value: "Teacher" },
        { label: "Admin", value: "Admin" },
      ],
      DateAproveSel: [
        { label: "Select", value: "Select" },
        { label: "05 May 2024 - 07 may 2024", value: "05 May 2024 - 07 may 2024" },
        { label: "07 May 2024 - 07 may 2024", value: "07 May 2024 - 07 may 2024" },
        { label: "08 May 2024 - 19 may 2024", value: "Admin" },
      ],
      SelectAproveSat: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/leaves/approve-request");
    },
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
    };
  },
};
</script>
