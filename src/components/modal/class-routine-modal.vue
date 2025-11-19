<template>
  <!-- Add Class Routine -->
  <div class="modal fade" id="add_class_routine">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Class Routine</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Teacher</label>
                  <vue3-select
                    :options="TeacherEri"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Class</label>
                  <vue3-select
                    :options="ClassRoun"
                    v-model="selectedOne"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue3-select
                    :options="SetSection"
                    v-model="selectedTwo"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Day</label>
                  <vue3-select
                    :options="ThurDay"
                    v-model="selectedThree"
                    placeholder="Select"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Start Time</label>
                      <div class="date-pic">
                        <a-time-picker
                          class="form-control timepicker"
                          placeholder="Choose"
                          use12-hours
                          format="h:mm a"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">End Time</label>
                      <div class="date-pic">
                        <a-time-picker
                          class="form-control timepicker"
                          placeholder="Choose"
                          use12-hours
                          format="h:mm a"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Class Room</label>
                  <vue3-select
                    :options="ClassRom"
                    v-model="selectedFour"
                    placeholder="Select"
                  />
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
                      id="switch-sm"
                    />
                  </div>
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
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Add Class Routine
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Class Routine -->

  <!-- Edit Class Routine -->
  <div class="modal fade" id="edit_class_routine">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Class Routine</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Teacher</label>
                  <vue3-select
                    :options="EditTeacherEri"
                    v-model="selectedFive"
                    placeholder="Erickson"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Class</label>
                  <vue3-select
                    :options="EditClassRoun"
                    v-model="selectedSix"
                    placeholder="I"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue3-select
                    :options="EditSetSection"
                    v-model="selectedSeven"
                    placeholder="A"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Day</label>
                  <vue3-select
                    :options="EditThurDay"
                    v-model="selectedEight"
                    placeholder="Monday"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Start Time</label>
                      <div class="date-pic">
                        <a-time-picker
                          class="form-control timepicker"
                          placeholder="Choose"
                          use12-hours
                          format="h:mm a"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">End Time</label>
                      <div class="date-pic">
                        <a-time-picker
                          class="form-control timepicker"
                          placeholder="Choose"
                          use12-hours
                          format="h:mm a"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Class Room</label>
                  <vue3-select
                    :options="EditClassRom"
                    v-model="selectedNine"
                    placeholder="101"
                  />
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
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Class Routine -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form>
          <div class="modal-body text-center">
            <span class="delete-icon">
              <i class="ti ti-trash-x"></i>
            </span>
            <h4>Confirm Deletion</h4>
            <p>
              You want to delete all the marked items, this cant be undone once
              you delete.
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
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
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      selectedFive: [],
      selectedSix: [],
      selectedSeven: [],
      selectedEight: [],
      selectedNine: [],
      TeacherEri: [
        { label: "Select", value: "Select" },
        "Erickson",
        "Mori",
        "Joseph",
        "James",
      ],
      ClassRoun: [{ label: "Select", value: "Select" }, "I", "II", "III", "IV"],
      SetSection: [{ label: "Select", value: "Select" }, "A", "B", "C"],
      ThurDay: [
        { label: "Select", value: "Select" },
        { label: "Monday", value: "Monday" },
        { label: "Tuesday", value: "Tuesday" },
        { label: "Wednesday", value: "Wednesday" },
        { label: "Thursday", value: "Thursday" },
        { label: "Friday", value: "Friday" },
      ],
      ClassRom: [
        { label: "Select", value: "Select" },
        { label: "101", value: "101" },
        { label: "102", value: "102" },
        { label: "103", value: "103" },
        { label: "104", value: "104" },
        { label: "105", value: "105" },
      ],
      EditTeacherEri: [
        { label: "Select", value: "Select" },
        { label: "Erickson", value: "Erickson" },
        { label: "Mori", value: "Mori" },
        { label: "Joseph", value: "Joseph" },
        { label: "James", value: "James" },
      ],
      EditClassRoun: [
        { label: "Select", value: "Select" },
        { label: "I", value: "I" },
        { label: "II", value: "II" },
        { label: "III", value: "III" },
        { label: "IV", value: "IV" },
      ],
      EditSetSection: [
        { label: "Select", value: "Select" },
        { label: "A", value: "A" },
        { label: "B", value: "B" },
        { label: "C", value: "C" },
      ],
      EditThurDay: [
        { label: "Select", value: "Select" },
        { label: "Monday", value: "Monday" },
        { label: "Tuesday", value: "Tuesday" },
        { label: "Wednesday", value: "Wednesday" },
        { label: "Thursday", value: "Thursday" },
        { label: "Friday", value: "Friday" },
      ],
      EditClassRom: [
        { label: "Select", value: "Select" },
        { label: "101", value: "101" },
        { label: "102", value: "102" },
        { label: "103", value: "103" },
        { label: "104", value: "104" },
        { label: "105", value: "105" },
      ],
    };
  },
};
</script>
