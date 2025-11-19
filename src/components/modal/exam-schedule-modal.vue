<template>
  <!-- Add Exam Schedule -->
  <div class="modal fade" id="add_exam_schedule">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Exam Schedule</h4>
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
                <div class="row">
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Class</label>
                      <input type="text" class="form-control" placeholder="Enter Class" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Section</label>
                      <vue3-select
                        :options="Selection"
                        v-model="selected"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Exam Name</label>
                      <vue3-select :options="WeeSel" v-model="selectedTwo" placeholder="Week text" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Start Time</label>
                      <vue3-select
                        :options="StartSelect"
                        v-model="selectedThree"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">End Time</label>
                      <vue3-select
                        :options="EndTimeSelect"
                        v-model="selectedFour"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Duration(min)</label>
                      <vue3-select
                        :options="SelectDura"
                        v-model="selectedFive"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="exam-schedule-add">
              <div
                class="exam-schedule-row d-flex align-items-center flex-wrap column-gap-3"
              >
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Exam Date</label>
                    <vue3-select
                      :options="SeleExams"
                      v-model="selectedSix"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Subject</label>
                    <vue3-select
                      :options="SubjSelect"
                      v-model="selectedSeven"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Room No</label>
                    <vue3-select
                      :options="ExaScheRoom"
                      v-model="selectedEight"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Max Marks</label>
                    <vue3-select
                      :options="MarksSelec"
                      v-model="selectedNine"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="d-flex align-items-end">
                    <div class="mb-3 flex-fill">
                      <label class="form-label">Min Marks</label>
                      <vue3-select
                        :options="MinMarkSelec"
                        v-model="selectedTen"
                        placeholder="Select"
                      />
                    </div>
                    <div class="mb-3 ms-2">
                      <a
                        href="javascript:void(0);"
                        class="delete-schedule-table"
                        @click="removeSchedule(index)"
                        ><i class="ti ti-trash"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-for="(schedule, index) in schedules"
                :key="index"
                class="exam-schedule-row d-flex align-items-center flex-wrap column-gap-3"
              >
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Exam Date</label>
                    <vue3-select
                      :options="EditSeleExams"
                      v-model="schedule.examDate"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Teacher</label>
                    <vue3-select
                      :options="EditSubjSelect"
                      v-model="schedule.subject"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Room No</label>
                    <vue3-select
                      :options="EditExaScheRoom"
                      v-model="schedule.roomNo"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Max Marks</label>
                    <vue3-select
                      :options="EditMarksSelec"
                      v-model="schedule.maxMarks"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="d-flex align-items-end">
                    <div class="mb-3 flex-fill">
                      <label class="form-label">Min Marks</label>
                      <vue3-select
                        :options="EditMinMarkSelec"
                        v-model="schedule.minMarks"
                        placeholder="Select"
                      />
                    </div>
                    <div class="mb-3 ms-2">
                      <a
                        href="javascript:void(0);"
                        @click="removeSchedule(index)"
                        class="delete-schedule-table"
                      >
                        <i class="ti ti-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="javascript:void(0);"
                class="btn btn-primary add-new-schedule"
                @click="addSchedule"
                ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
              >
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-2"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Exam Schedule</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Exam Schedule -->

  <!-- Edit Exam Schedule -->
  <div class="modal fade" id="edit_exam_schedule">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Exam Schedule</h4>
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
                <div class="row">
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Class</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Class"
                        value="I"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Section</label>
                      <vue3-select
                        :options="EditSelection"
                        v-model="selected1"
                        placeholder="A"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Exam Name</label>
                      <vue3-select
                        :options="EditWeeSel"
                        v-model="selected2"
                        placeholder="Week Test"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Start Time</label>
                      <vue3-select
                        :options="EditStartSelect"
                        v-model="selected3"
                        placeholder="09:30 AM"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">End Time</label>
                      <vue3-select
                        :options="EditEndTimeSelect"
                        v-model="selected4"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Duration(min)</label>
                      <vue3-select
                        :options="EditSelectDura"
                        v-model="selected5"
                        placeholder="3 hrs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="exam-schedule-add">
              <div
                class="exam-schedule-row d-flex align-items-center flex-wrap column-gap-3"
              >
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Exam Date</label>
                    <vue3-select :options="EditSeleExams" v-model="selected6" placeholder="13 May 2024" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Subject</label>
                    <vue3-select :options="EditSubjSelect" v-model="selected7" placeholder="English" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Room No</label>
                    <vue3-select :options="EditExaScheRoom" v-model="selected8" placeholder="101" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Max Marks</label>
                    <vue3-select :options="EditMarksSelec" v-model="selected9" placeholder="100" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="d-flex align-items-end">
                    <div class="mb-3 flex-fill">
                      <label class="form-label">Min Marks</label>
                      <vue3-select :options="EditMinMarkSelec" v-model="selected10" placeholder="35" />
                    </div>
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
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Edit Exam Schedule -->

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
              <button type="submit" class="btn btn-danger" data-bs-dismiss="modal">Yes, Delete</button>
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
      selectedTen: [],
      selected1: [],
      selected2: [],
      selected3: [],
      selected4: [],
      selected5: [],
      selected6: [],
      selected7: [],
      selected8: [],
      selected9: [],
      selected10: [],
      Selection: [
        {label: "Select", value: "Select"},
        {label: "A", value: "A"},
        {label: "B", value: "B"},
        {label: "C", value: "C"},
        ],
      WeeSel: [
        {label: "Select", value: "Select"}, 
        {label: "Week Test", value: "Week Test"}, 
        {label: "Chapter Wise Test", value: "Chapter Wise Test"}, 
        {label: "Unit Test", value: "Unit Test"}, 
      ],
      EndTimeSelect: [
        {label: "Select", value: "Select"},  
        {label: "10:45 AM", value: "10:45 AM"},  
        {label: "11:00 AM", value: "11:00 AM"},  
        {label: "11:30 AM", value: "11:30 AM"},  
        {label: "12:00 PM", value: "12:00 PM"},  
      ],
      StartSelect: [
        {label: "Select", value: "Select"}, 
        {label: "09:30 AM", value: "09:30 AM"}, 
        {label: "10:30 AM", value: "10:30 AM"}, 
        {label: "11:00 AM", value: "11:00 AM"}, 
        {label: "12:30 PM", value: "12:30 PM"}, 
      ],
      SelectDura: [
        {label: "Select", value: "Select"}, 
        {label: "3 hrs", value: "3 hrs"}, 
      ],
      SeleExams: [
        {label: "Select", value: "Select"}, 
        {label: "13 May 2024", value: "13 May 2024"}, 
        {label: "14 May 2024", value: "14 May 2024"}, 
        {label: "15 May 2024", value: "15 May 2024"}, 
      ],
      SubjSelect: [
        {label: "Select", value: "Select"},  
        {label: "English", value: "English"},  
        {label: "Spanish", value: "Spanish"},  
        {label: "Physics", value: "Physics"},  
      ],
      ExaScheRoom: [
        {label: "Select", value: "Select"}, 
        {label: "101", value: "101"}, 
        {label: "102", value: "102"}, 
        {label: "103", value: "103"}, 
      ],
      MarksSelec: [
        {label: "Select", value: "Select"},  
        {label: "100", value: "100"},  
      ],
      MinMarkSelec: [
        {label: "Select", value: "Select"},  
        {label: "35", value: "35"},  
      ],
      EditSelection: [
        {label: "Select", value: "Select"},  
        {label: "A", value: "A"},  
        {label: "B", value: "B"},  
        {label: "C", value: "C"},  
      ],
      EditWeeSel: [
        {label: "Select", value: "Select"}, 
        {label: "Week Test", value: "Week Test"}, 
        {label: "Chapter Wise Test", value: "Chapter Wise Test"}, 
        {label: "Unit Test", value: "Unit Test"},
      ],
      EditEndTimeSelect: [
        {label: "Select", value: "Select"},  
        {label: "10:45 AM", value: "10:45 AM"},  
        {label: "11:00 AM", value: "11:00 AM"},  
        {label: "11:30 AM", value: "11:30 AM"},  
        {label: "12:00 PM", value: "12:00 PM"},  
      ],
      EditStartSelect: [
        {label: "Select", value: "Select"}, 
        {label: "09:30 AM", value: "09:30 AM"}, 
        {label: "10:30 AM", value: "10:30 AM"}, 
        {label: "11:00 AM", value: "11:00 AM"}, 
        {label: "12:30 PM", value: "12:30 PM"},
      ],
      EditSelectDura: [
        {label: "Select", value: "Select"}, 
        {label: "3 hrs", value: "3 hrs"}, 
      ],
      EditSeleExams: [
        {label: "Select", value: "Select"}, 
        {label: "13 May 2024", value: "13 May 2024"}, 
        {label: "14 May 2024", value: "14 May 2024"}, 
        {label: "15 May 2024", value: "15 May 2024"}, 
      ],
      EditSubjSelect: [
        {label: "Select", value: "Select"},  
        {label: "English", value: "English"},  
        {label: "Spanish", value: "Spanish"},  
        {label: "Physics", value: "Physics"}, 
      ],
      EditExaScheRoom: [
        {label: "Select", value: "Select"}, 
        {label: "101", value: "101"}, 
        {label: "102", value: "102"}, 
        {label: "103", value: "103"}, 
      ],
      EditMarksSelec: [
        {label: "Select", value: "Select"},  
        {label: "100", value: "100"},  
      ],
      EditMinMarkSelec: [
        {label: "Select", value: "Select"},  
        {label: "35", value: "35"},  
      ],
      schedules: [],
    };
  },
  methods: {
    addSchedule() {
      this.schedules.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
        minMarks: "",
      });
    },
    removeSchedule(index) {
      this.schedules.splice(index, 1);
    },
  },
};
</script>
