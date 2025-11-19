<template>
  <div class="modal fade" id="add_event">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">New Event</h4>
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
                <div>
                  <label class="form-label">Event For</label>
                  <div class="d-flex align-items-center flex-wrap">
                    <div class="form-check me-3 mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="event"
                        id="all"
                        checked=""
                        @click="setActive('All')"
                      />
                      <label class="form-check-label" for="all"> All </label>
                    </div>
                    <div class="form-check me-3 mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="event"
                        id="students"
                        @click="setActive('student')"
                      />
                      <label class="form-check-label" for="students"> Students </label>
                    </div>
                    <div class="form-check me-3 mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="event"
                        id="staffs"
                        @click="setActive('staffs')"
                      />
                      <label class="form-check-label" for="staffs"> Staffs </label>
                    </div>
                  </div>
                </div>
                <div
                  class="all-content"
                  id="all-student"
                  :class="{ active: isActive === 'student' }"
                >
                  <div class="mb-3">
                    <label class="form-label">Classes</label>
                    <vue3-select
                      :options="TeachClassDas"
                      v-model="selected"
                      placeholder="Select"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Sections</label>
                    <vue3-select
                      :options="SecTeachDash"
                      v-model="selectedOne"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div
                  class="all-content"
                  id="all-staffs"
                  :class="{ active: isActive === 'staffs' }"
                >
                  <div class="mb-3">
                    <div class="bg-light-500 p-3 pb-2 rounded">
                      <label class="form-label">Role</label>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-check form-check-sm mb-2">
                            <input class="form-check-input" type="checkbox" />Admin
                          </div>
                          <div class="form-check form-check-sm mb-2">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked
                            />Teacher
                          </div>
                          <div class="form-check form-check-sm mb-2">
                            <input class="form-check-input" type="checkbox" />Driver
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-check form-check-sm mb-2">
                            <input class="form-check-input" type="checkbox" />Accountant
                          </div>
                          <div class="form-check form-check-sm mb-2">
                            <input class="form-check-input" type="checkbox" />Librarian
                          </div>
                          <div class="form-check form-check-sm mb-2">
                            <input class="form-check-input" type="checkbox" />Receptionist
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3" :class="{ active: isActive === 'all' }">
                    <label class="form-label">All Teachers</label>
                    <vue3-select
                      :options="AllteachDashb"
                      v-model="selectedTwo"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Event Title</label>
                <input type="text" class="form-control" placeholder="Enter Title" />
              </div>
              <div class="mb-3">
                <label class="form-label">Event Category</label>
                <vue3-select
                  :options="EventTeachDash"
                  v-model="selectedThree"
                  placeholder="Select"
                />
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Start Date</label>
                  <div class="date-pic">
                    <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">End Date</label>
                  <div class="date-pic">
                    <a-date-picker v-model="valueTwo" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Start Time</label>
                  <div class="date-pic">
                    <a-time-picker
                      class="form-control timepicker"
                      placeholder="09:10 AM"
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
                      placeholder="12:50 PM"
                      use12-hours
                      format="h:mm a"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <div class="bg-light p-3 pb-2 rounded">
                    <div class="mb-3">
                      <label class="form-label">Attachment</label>
                      <p>Upload size of 4MB, Accepted Format PDF</p>
                    </div>
                    <div class="d-flex align-items-center flex-wrap">
                      <div class="btn btn-primary drag-upload-btn mb-2 me-2">
                        <i class="ti ti-file-upload me-1"></i>Upload
                        <input type="file" class="form-control image_sign" multiple="" />
                      </div>
                      <p class="mb-2">Fees_Structure.pdf</p>
                    </div>
                  </div>
                </div>
                <div class="mb-0">
                  <label class="form-label">Message</label>
                  <textarea class="form-control" rows="4">
Meeting with Staffs on the Quality Improvement s and completion of syllabus before the August,  enhance the students health issue</textarea
                  >
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
</template>
<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
export default {
  data() {
    return {
      isActive: "",
      valueOne,
      valueTwo,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      AllteachDashb: [
        {label: "Select", value: "Select"},
        {label: "I", value: "I" }, 
        {label: "II", value: "II"}, 
        {label: "III", value: "III"},
        {label: "IV", value: "IV"}
      ],
      EventTeachDash: [
        {label: "Select", value: "Select"},
        {label: "Celebration", value: "Celebration"},
        {label: "Training", value: "Training"}, 
        {label: "Meeting", value: "Meeting"},
        {label: "Holidays", value: "Holidays"},
      ],
      SecTeachDash: [
        {label: "All Section", value: "All Section"},
        {label: "A", value:  "A"}, 
        {label: "B", value: "B"}
      ],
      TeachClassDas: [
        {label: "Select", value: "Select"},
        {label: "I", value: "I" }, 
        {label: "II", value: "II"}, 
        {label: "III", value: "III"}
      ],
    };
  },
  methods: {
    setActive(isActive) {
      this.isActive = isActive;
    },
  },
};
</script>
