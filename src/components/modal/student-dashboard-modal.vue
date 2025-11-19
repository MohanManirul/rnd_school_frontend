<template>
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
                        :options="SectStuden"
                        v-model="selected"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Exam Name</label>
                      <vue3-select
                        :options="ExamNameTes"
                        v-model="selectedOne"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Start Time</label>
                      <vue3-select
                        :options="StartSelec"
                        v-model="selectedTwo"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">End Time</label>
                      <vue3-select
                        :options="EndTimeSelec"
                        v-model="selectedThree"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label">Duration(min)</label>
                      <vue3-select
                        :options="DurationDahsb"
                        v-model="selectedFour"
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
                    <vue3-select :options="ExamDateMay" v-model="selectedFive" placeholder="Select" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Subject</label>
                    <vue3-select :options="SubjectSelecSpa" v-model="selectedSix" placeholder="Select" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Room No</label>
                    <vue3-select :options="DashboardRoomNo" v-model="selectedSeven" placeholder="Select" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Max Marks</label>
                    <vue3-select :options="MaxMarkDsah" v-model="selectedEight" placeholder="Select" />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="d-flex align-items-end">
                    <div class="mb-3 flex-fill">
                      <label class="form-label">Min Marks</label>
                      <vue3-select :options="MinMarkDashb" v-model="selectedNine" placeholder="Select" />
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
                      :options="ExamDateMay"
                      v-model="schedule.examDate"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Teacher</label>
                    <vue3-select
                      :options="SubjectSelecSpa"
                      v-model="schedule.subject"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Room No</label>
                    <vue3-select
                      :options="DashboardRoomNo"
                      v-model="schedule.roomNo"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="shedule-info flex-fill">
                  <div class="mb-3">
                    <label class="form-label">Max Marks</label>
                    <vue3-select
                      :options="MaxMarkDsah"
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
                        :options="MinMarkDashb"
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
      SectStuden: [
        {label: "Select", value: "Select"}, 
        {label: "A", value:  "A"}, 
        {label: "B", value: "B"},
        {label: "c", value: "c"}     
        ],
      StartSelec: [
        {label: "Select", value: "Select"},  
        {label: "09:30 AM", value: "09:30 AM"}, 
        {label: "10:30 AM", value: "10:30 AM"}, 
        {label: "11:30 AM", value: "11:30 AM"}, 
        {label: "12:00 PM", value: "12:00 PM"}
      ],
      EndTimeSelec: [
        {label: "Select", value: "Select"}, 
        {label: "10:45 AM", value: "10:45 AM"}, 
        {label: "11:00 AM", value: "11:00 AM"},
        {label: "11:30 AM", value: "11:30 AM"}, 
        {label: "12:00 PM", value: "12:00 PM"}
      ],
      DurationDahsb: [
        {label: "Select", value: "Select"},  
        {label: "3 hrs", value: "3 hrs"}
      ],
      schedules: [],
      ExamDateMay: [
        {label: "Select", value: "Select"}, 
        {label: "13 May 2024", value: "13 May 2024"}, 
        {label: "14 May 2024", value: "14 May 2024"}, 
        {label: "15 May 2024", value: "15 May 2024"}
      ],
      SubjectSelecSpa: [
        {label: "Select", value: "Select"}, 
        {label: "English", value: "English"}, 
        {label: "Spanish", value: "Spanish"}, 
        {label: "Physics", value: "Physics"}
      ],
      DashboardRoomNo: [
        {label: "Select", value: "Select"}, 
        {label: "101", value: "101"},
        {label: "102", value: "102"}, 
        {label: "103", value: "103"},
        {label: "104", value: "104"},
      ],
      MaxMarkDsah: [
        {label: "Select", value: "Select"},
        {label: "100", value: "100"},
      ],
      MinMarkDashb: [
        {label: "Select", value: "Select"},
        {label: "35", value: "35"}
      ],
      ExamNameTes: [
        {label: "Select", value: "Select"},
        {label: "Week Text", value: "Week Text"},
        {label: "Monthly Test", value: "Monthly Test"},
        {label: "Chapter Wise Test", value: "Chapter Wise Test"},
        {label: "Unit Test", value: "Unit Test"},
      ],
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
