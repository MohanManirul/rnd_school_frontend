<template>
  <!-- Add Fees Master -->
  <div class="modal fade" id="add_fees_master">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title">Add Fees Master</h4>
            <span class="badge bg-soft-info ms-2">2024 - 2025</span>
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
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Fees Group</label>
                  <vue3-select
                    :options="AdminMaster"
                    v-model="selected"
                    placholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Fees Type</label>
                  <vue3-select :options="FeesTuit" v-model="selectedOne" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Due Date</label>
                      <div class="date-pic">
                        <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Amount</label>
                      <input type="text" class="form-control" placeholder="Enter Amout" />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Fine Type</label>
                  <div class="d-flex align-items-center check-radio-group">
                    <label class="custom-radio none-radio">
                      <input
                        type="radio"
                        name="radio"
                        value="none"
                        v-model="selectedOption"
                      />
                      <span class="checkmark"></span>
                      None
                    </label>
                    <label class="custom-radio percentage-radio">
                      <input
                        type="radio"
                        name="radio"
                        value="percentage"
                        v-model="selectedOption"
                      />
                      <span class="checkmark"></span>
                      Percentage
                    </label>
                    <label class="custom-radio fixed-radio">
                      <input
                        type="radio"
                        name="radio"
                        value="fixed"
                        v-model="selectedOption"
                      />
                      <span class="checkmark"></span>
                      Fixed
                    </label>
                  </div>
                </div>
                <div
                  class="percentage-field"
                  :class="{ 'percentage-field-show': selectedOption === 'percentage' }"
                >
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Percentage</label>
                        <input type="text" class="form-control" placeholder="%" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Amount ($)</label>
                        <input type="text" class="form-control" placeholder="$" />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="fixed-field"
                  :class="{ 'fixed-field-show': selectedOption === 'fixed' }"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Amount ($)</label>
                        <input type="text" class="form-control" placeholder="$" />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  v-if="selectedOption === 'none'"
                  class="d-flex align-items-center justify-content-between"
                >
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
            </div>
            <div class="modal-footer">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Add Fees Master
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Fees Master-->

  <!-- Edit Fees Master -->
  <div class="modal fade" id="edit_fees_master">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title">Edit Fees Master</h4>
            <span class="badge bg-soft-info ms-2">2024 - 2025</span>
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
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Fees Group</label>
                  <vue3-select
                    :options="EditAdminMaster"
                    v-model="selectedTwo"
                    placholder="Admission-Fees"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Fees Type</label>
                  <vue3-select
                    :options="EditFeesTuit"
                    v-model="selectedThree"
                    placeholder="Tuition Fees"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Due Date</label>
                      <div class="date-pic">
                        <a-date-picker v-model="valueTwo" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Amount</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Amout"
                        value="$500"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Fine Type</label>
                  <div class="d-flex align-items-center check-radio-group">
                    <label class="custom-radio">
                      <input type="radio" name="radio2" checked="" />
                      <span class="checkmark"></span>
                      None
                    </label>
                    <label class="custom-radio percentage-radio">
                      <input type="radio" name="radio2" />
                      <span class="checkmark"></span>
                      Percentage
                    </label>
                    <label class="custom-radio fixed-radio">
                      <input type="radio" name="radio2" />
                      <span class="checkmark"></span>
                      Fixed
                    </label>
                  </div>
                </div>
                <div class="percentage-field">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Percentage</label>
                        <input type="text" class="form-control" placeholder="%" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Amount ($)</label>
                        <input type="text" class="form-control" placeholder="$" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fixed-field">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label">Amount ($)</label>
                        <input type="text" class="form-control" placeholder="$" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    id="switch-sm2"
                  />
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Edit Fees Master-->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="submitForm">
          <div class="modal-body text-center">
            <span class="delete-icon">
              <i class="ti ti-trash-x"></i>
            </span>
            <h4>Confirm Deletion</h4>
            <p>
              You want to delete all the marked items, this cant be undone once you
              delete.
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">
                Yes, Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
import { ref } from 'vue';
const valueOne = ref();
const valueTwo = ref();
export default {
  data() {
    return {
      selectedOption: "none",
      valueOne,
      valueTwo,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      AdminMaster: [
        {label: "Admission Fees", value: "Admission Fees"},
        {label: "Class 1 General", value: "Class 1 General"},
        {label: "Monthly Fees", value: "Monthly Fees"},
        {label: "Class 1 Lump Sum", value: "Class 1 Lump Sum"},
      ],
      FeesTuit: [
        {label: "Tuition Fees", value: "Tuition Fees"}, 
        {label: "Monthly Fees", value: "Monthly Fees"}, 
        {label: "Admission Fees", value: "Admission Fees"}, 
        {label: "Bus Fees", value: "Bus Fees"},
      ],
      EditAdminMaster: [
        {label: "Admission Fees", value: "Admission Fees"},
        {label: "Class 1 General", value: "Class 1 General"},
        {label: "Monthly Fees", value: "Monthly Fees"},
        {label: "Class 1 Lump Sum", value: "Class 1 Lump Sum"},
      ],
      EditFeesTuit: [
        {label: "Tuition Fees", value: "Tuition Fees"}, 
        {label: "Monthly Fees", value: "Monthly Fees"}, 
        {label: "Admission Fees", value: "Admission Fees"},
        {label: "Bus Fees", value: "Bus Fees"},
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/fees/fees-master");
    },
  },
};
</script>
