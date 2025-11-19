<template>
  <div
    class="card-header d-flex align-items-center justify-content-between flex-wrap pb-0"
  >
    <h4 class="mb-3">Hostel Rooms</h4>
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
                    <label class="form-label">Room No</label>
                    <vue3-select
                      :options="HostRoomSel"
                      v-model="selected"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <vue3-select
                      :options="PhonesSele"
                      v-model="selectedOne"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-0">
                    <label class="form-label">Type</label>
                    <vue3-select
                      :options="OneBedSele"
                      v-model="selectedTwo"
                      placeholder="One Bed"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-0">
                    <label class="form-label">More Filter</label>
                    <vue3-select
                      :options="BedFiltSele"
                      v-model="selectedThree"
                      placeholder="Select"
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
      BedFIltSele: [
        {label: "Select", value: "Select"},
        {label: "Filters", value: "Filters"},
        {label: "Room No", value: "Room No"},
        {label: "Hostel Name", value: "Hostel Name"},
        {label: "Room Type", value: "Room Type"},
        {label: "No of Bed", value: "No of Bed"},
        {label: "Cost per Bed", value: "Cost per Bed"},
        {label: "Action", value: "Action"},
      ],
      HostRoomSel: [
        {label: "Select", value: "Select"}, 
        {label: "A1", value: "A1"}, 
        {label: "A2", value: "A2"}, 
        {label: "A3", value: "A3"}, 
        {label: "A4", value: "A4"}, 
        {label: "B1", value: "B1"}, 
      ],
      PhonesSele: [
        {label: "Select", value: "Select"},
        {label: "Phoenix Residence", value: "Phoenix Residence"},
        {label: "Tranquil Haven", value: "Tranquil Haven"},
        {label: "Radiant Towers", value: "Radiant Towers"},
        {label: "Nova Nest", value: "Nova Nest"},
        {label: "Vista Villa", value: "Vista Villa"},
      ],
      OneBedSele: [
        {label: "One Bed", value: "One Bed"}, 
        {label: "One Bed AC", value: "One Bed AC"}, 
        {label: "Two Bed", value: "Two Bed"}, 
        {label: "Two Bed AC", value: "Two Bed AC"}, 
      ],
      BedFiltSele: [
        {label: "Select", value: "Select"},
        {label: "Filters", value: "Filters"},
        {label: "Room No", value: "Room No"},
        {label: "Hostel Name", value: "Hostel Name"},
        {label: "Room Type", value: "Room Type"},
        {label: "No of Bed", value: "No of Bed"},
        {label: "Cost per Bed", value: "Cost per Bed"},
        {label: "Action", value: "Action"},
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/hostel/hostel-rooms");
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
