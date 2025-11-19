<template>
  <div
    class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
  >
    <h4 class="mb-3">Fees Collection</h4>
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
          <form>
            <div class="d-flex align-items-center border-bottom p-3">
              <h4>Filter</h4>
            </div>
            <div class="p-3 border-bottom">
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">ID</label>
                    <vue3-select
                      :options="FeesTpyFilSel"
                      v-model="selected"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <vue3-select
                      :options="NamSelFil"
                      v-model="selectedOne"
                      placeholder="Select Name"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <vue3-select :options="SeleName" v-model="selectedTwo" placeholder="Select" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Fees Group</label>
                    <vue3-select
                      :options="SeFeesGro"
                      v-model="selectedThree"
                      placeholder="Select Fees Group"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Fees Type</label>
                    <vue3-select
                      :options="AdmiTypeFil"
                      v-model="selectedFour"
                      placeholder="Select Fees Type"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Status</label>
                    <vue3-select
                      :options="StaTypeActive"
                      v-model="selectedFive"
                      placeholder="Active"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3 d-flex align-items-center justify-content-end">
              <a href="javascript:void(0);" class="btn btn-light me-3">Reset</a>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Apply</button>
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
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      selectedFive: [],
      FeesTpyFilSel: [
        {label: "Select", value: "Select"}, 
        {label: "FG80482", value: "FG80482"}, 
        {label: "FG80481", value: "FG80481"}, 
        {label: "FG80480", value: "FG80480"}
      ],
      NamSelFil: [
        {label: "Select", value: "Select"}, 
        {label: "Janet", value: "Janet"}, 
        {label: "Joann", value: "Joann"},
        {label: "Kathleen", value: "Kathleen"}
      ],
      SeleName: [
        {label: "Select", value: "Select"}, 
        {label: "Janet", value: "Janet"}, 
        {label: "Joann", value: "Joann"},
        {label: "Kathleen", value: "Kathleen"}
      ],
      SeFeesGro: [
        {label: "Select Fees Group", value: "Select Fees Group"},
        {label: "Tuition Fees", value: "Tuition Fees"},
        {label: "Monthly Fees", value: "Monthly Fees"},
        {label: "Class 1 General", value: "Class 1 General"},
        {label: "Class 1 Lump Sum", value: "Class 1 Lump Sum"},
        {label: "Class 1-I Installment", value: "Class 1-I Installment"},
        {label: "Class 1-II Installment", value: "Class 1-II Installment"},
        {label: "Class 1-III Installment", value: "Class 1-III Installment"},
        {label: "Discount", value: "Discount"},
      ],
      AdmiTypeFil: [
        {label: "Select Fees Type", value: "Select Fees Type"},
        {label: "Admission Fees", value: "Admission Fees"},
        {label: "Apr-Mar", value: "Apr-Mar"},
        {label: "Bus Fees", value: "Bus Fees"},
        {label: "1st Installment Fees", value: "1st Installment Fees"},
        {label: "Topper  Discount", value: "Topper  Discount"},
        {label: "3rd Installment Fees", value: "3rd Installment Fees"},
        {label: "4th Installment Fees", value: "4th Installment Fees"},
        {label: "2nd Installment Fees", value: "2nd Installment Fees"},
      ],
      StaTypeActive: [
        {label: "Select", value: "Select"}, 
        {label: "Active", value: "Active"}, 
        {label: "Inactive", value: "Inactive"}
      ],
    };
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
