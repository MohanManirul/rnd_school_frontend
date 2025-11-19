<template>
  <!-- Add Exam -->
  <div class="modal fade" id="add_exam">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Exam</h4>
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
                  <label class="form-label">Exam Name</label>
                  <input type="text" class="form-control" placeholder="Enter Exam Name" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Exam Date</label>
                  <div class="date-pic">
                    <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Start Time</label>
                  <vue3-select :options="ExamStart" v-model="selected" placeholder="Select" />
                </div>
                <div class="mb-0">
                  <label class="form-label">End Time</label>
                  <vue3-select :options="ExamEnd" v-model="selectedOne" placeholder="Select" />
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
              Add Exam
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Exam -->

  <!-- Edit Exam -->
  <div class="modal fade" id="edit_exam">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Exam</h4>
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
                  <label class="form-label">Exam Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Exam Name"
                    value="Week Test"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Exam Date</label>
                  <div class="date-pic">
                    <a-date-picker v-model="valueTwo" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Start Time</label>
                  <vue3-select
                    :options="EditExamStart"
                    v-model="selectedTwo"
                    placeholder="09:30 AM"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">End Time</label>
                  <vue3-select
                    :options="EditExamEnd"
                    v-model="selectedThree"
                    placeholder="10:45 AM"
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
  <!-- Edit Exam -->

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
      valueOne,
      valueTwo,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      ExamStart: [
        {label: "Select", value: "Select"}, 
        {label: "09:30 AM", value: "09:30 AM"}, 
        {label: "10:30 AM", value: "10:30 AM"}, 
        {label: "11:00 AM", value: "11:00 AM"}, 
        {label: "12:30 PM", value: "12:30 PM"}
      ],
      ExamEnd: [
        {label: "Select", value: "Select"}, 
        {label: "10:45 AM", value: "10:45 AM"}, 
        {label: "11:00 AM", value: "11:00 AM"}, 
        {label: "11:30 AM", value: "11:30 AM"}, 
        {label: "12:00 PM", value: "12:00 PM"}
      ],
      EditExamStart: [
        {label: "Select", value: "Select"}, 
        {label: "09:30 AM", value: "09:30 AM"}, 
        {label: "10:30 AM", value: "10:30 AM"}, 
        {label: "11:00 AM", value: "11:00 AM"}, 
        {label: "12:30 PM", value: "12:30 PM"}
      ],
      EditExamEnd: [
        {label: "Select", value: "Select"}, 
        {label: "10:45 AM", value: "10:45 AM"}, 
        {label: "11:00 AM", value: "11:00 AM"}, 
        {label: "11:30 AM", value: "11:30 AM"}, 
        {label: "12:00 PM", value: "12:00 PM"}
      ],
    };
  },
};
</script>
