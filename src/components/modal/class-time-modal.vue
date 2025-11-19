<template>
  <!-- Add Class -->
  <div class="modal fade" id="add_time_table">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Time Table</h4>
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
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label">Class</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue3-select :options="SecASel" v-model="selected" placeholder="A" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label">Subject Group</label>
                  <vue3-select :options="GroupSel" v-model="selected1" placeholder="Class I" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label">Period Start Time</label>
                  <vue3-select :options="PeriodSel" v-model="selected2" placeholder="Select" />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label">Duration(min)</label>
                  <vue3-select :options="SelectDur" v-model="selected3" placeholder="Select" />
                </div>
              </div>
            </div>
            <div class="add-more-timetable">
              <ul class="tab-links nav nav-pills" id="pills-tab2" role="tablist">
                <li
                  class="nav-link active"
                  id="pills-monday-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-monday"
                  role="tab"
                  aria-controls="pills-monday"
                  aria-selected="true"
                >
                  <a href="javascript:void(0);">Monday</a>
                </li>
                <li
                  class="nav-link"
                  id="pills-tuesday-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-tuesday"
                  role="tab"
                  aria-controls="pills-tuesday"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <a href="javascript:void(0);">Tuesday</a>
                </li>
                <li
                  class="nav-link"
                  id="pills-wednesday-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-wednesday"
                  role="tab"
                  aria-controls="pills-wednesday"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <a href="javascript:void(0);">Wednesday</a>
                </li>
                <li
                  class="nav-link"
                  id="pills-thursday-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-thursday"
                  role="tab"
                  aria-controls="pills-thursday"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <a href="javascript:void(0);">Thursday</a>
                </li>
                <li
                  class="nav-link"
                  id="pills-friday-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-friday"
                  role="tab"
                  aria-controls="pills-friday"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <a href="javascript:void(0);">Friday</a>
                </li>
              </ul>
              <div class="tab-content pt-0 dashboard-tab">
                <div
                  class="tab-pane fade show active"
                  id="pills-monday"
                  role="tabpanel"
                  aria-labelledby="pills-monday-tab"
                >
                  <div class="add-timetable-row">
                    <div class="row timetable-count">
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue3-select :options="SubjectSelect" v-model="selected4" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue3-select :options="SelTeach" v-model="selected5" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue3-select :options="FromSel" v-model="selected6" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue3-select :options="SelectTime" v-model="selected7" placeholder="Select" />
                          </div>
                          <div class="mb-3 ms-2">
                            <a
                              href="javascript:void(0);"
                              class="delete-time-table"
                              @click="removeSchedule(index)"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row timetable-count"
                      v-for="(schedule, index) in schedule"
                      :key="index"
                    >
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue3-select
                            :options="SubjectSelect"
                            v-model="schedule.examDate"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue3-select
                            :options="SelTeach"
                            v-model="schedule.subject"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue3-select
                            :options="FromSel"
                            v-model="schedule.roomNo"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue3-select
                              :options="SelectTime"
                              v-model="schedule.maxMarks"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 ms-2">
                            <a href="javascript:void(0);" class="delete-time-table"
                              ><i class="ti ti-trash" @click="removeSchedule(index)"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary add-new-timetable"
                      @click="addSchedule"
                      ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
                    >
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-tuesday"
                  role="tabpanel"
                  aria-labelledby="pills-tuesday-tab"
                >
                  <div class="add-timetable-row">
                    <div class="row timetable-count">
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue3-select :options="OneSubjectSelect" v-model="selected8" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue3-select :options="OneSelTeach" v-model="selected9" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue3-select :options="OneFromSel" v-model="selected10" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue3-select :options="OneSelectTime" v-model="selected11" placeholder="Select" />
                          </div>
                          <div class="mb-3 ms-2">
                            <a
                              href="javascript:void(0);"
                              class="delete-time-table"
                              @click="removeScheduleOne(index)"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row timetable-count"
                      v-for="(scheduleOne, index) in scheduleOne"
                      :key="index"
                    >
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue3-select
                            :options="OneSubjectSelect"
                            v-model="scheduleOne.examDate"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue3-select
                            :options="OneSelTeach"
                            v-model="scheduleOne.subject"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue3-select
                            :options="OneFromSel"
                            v-model="scheduleOne.roomNo"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue3-select
                              :options="OneSelectTime"
                              v-model="scheduleOne.maxMarks"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 ms-2">
                            <a
                              href="javascript:void(0);"
                              class="delete-time-table"
                              @click="removeScheduleOne(index)"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary add-new-timetable"
                      @click="addScheduleOne"
                      ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
                    >
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-wednesday"
                  role="tabpanel"
                  aria-labelledby="pills-wednesday-tab"
                >
                  <div class="add-timetable-row">
                    <div class="row timetable-count">
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue3-select :options="TwoSubjectSelect" v-model="selected12" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue3-select :options="TwoSelTeach" v-model="selected13" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue3-select :options="TwoFromSel" v-model="selected14" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue3-select :options="TwoSelectTime" v-model="selected15" placeholder="Select" />
                          </div>
                          <div class="mb-3 ms-2">
                            <a href="javascript:void(0);" class="delete-time-table"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row timetable-count"
                      v-for="(scheduleTwo, index) in scheduleTwo"
                      :key="index"
                    >
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue3-select
                            :options="TwoSubjectSelect"
                            v-model="scheduleTwo.examDate"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue3-select
                            :options="TwoSelTeach"
                            v-model="scheduleTwo.subject"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue3-select
                            :options="TwoFromSel"
                            v-model="scheduleTwo.roomNo"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue3-select
                              :options="TwoSelectTime"
                              v-model="scheduleTwo.maxMarks"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 ms-2">
                            <a href="javascript:void(0);" class="delete-time-table"
                              ><i
                                class="ti ti-trash"
                                @click="removeScheduleTwo(index)"
                              ></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary add-new-timetable"
                      @click="addScheduleTwo"
                      ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
                    >
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-thursday"
                  role="tabpanel"
                  aria-labelledby="pills-thursday-tab"
                >
                  <div class="add-timetable-row">
                    <div class="row timetable-count">
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue3-select
                            :options="ThreeSubjectSelect"
                            v-model="selected16"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue3-select :options="ThreeSelTeach" v-model="selected17" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue3-select :options="ThreeFromSel" v-model="selected18" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue3-select :options="ThreeSelectTime" v-model="selected19" placeholder="Select" />
                          </div>
                          <div class="mb-3 ms-2">
                            <a href="javascript:void(0);" class="delete-time-table"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row timetable-count"
                      v-for="(scheduleThree, index) in scheduleThree"
                      :key="index"
                    >
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue3-select
                            :options="ThreeSubjectSelect"
                            v-model="scheduleThree.examDate"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue3-select
                            :options="ThreeSelTeach"
                            v-model="scheduleThree.subject"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue3-select
                            :options="ThreeFromSel"
                            v-model="scheduleThree.roomNo"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue3-select
                              :options="ThreeSelectTime"
                              v-model="scheduleThree.maxMarks"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 ms-2">
                            <a
                              href="javascript:void(0);"
                              class="delete-time-table"
                              @click="removeScheduleThree(index)"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary add-new-timetable"
                      @click="addScheduleThree"
                      ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
                    >
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-friday"
                  role="tabpanel"
                  aria-labelledby="pills-friday-tab"
                >
                  <div class="add-timetable-row">
                    <div class="row timetable-count">
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue3-select :options="FourSubjectSelect" v-model="selected20" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue3-select :options="FourSelTeach" v-model="selected21" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue3-select :options="FourFromSel" v-model="selected22" placeholder="Select" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue3-select :options="FourSelectTime" v-model="selected23" placeholder="Select" />
                          </div>
                          <div class="mb-3 ms-2">
                            <a href="javascript:void(0);" class="delete-time-table"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row timetable-count"
                      v-for="(scheduleFour, index) in scheduleFour"
                      :key="index"
                    >
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Subject</label>
                          <vue3-select
                            :options="FourSubjectSelect"
                            v-model="scheduleFour.examDate"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Teacher</label>
                          <vue3-select
                            :options="FourSelTeach"
                            v-model="scheduleFour.subject"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <label class="form-label">Time From</label>
                          <vue3-select
                            :options="FourFromSel"
                            v-model="scheduleFour.roomNo"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-end">
                          <div class="mb-3 flex-fill">
                            <label class="form-label">Time To</label>
                            <vue3-select
                              :options="FourSelectTime"
                              v-model="scheduleFour.maxMarks"
                              placeholder="Select"
                            />
                          </div>
                          <div class="mb-3 ms-2">
                            <a
                              href="javascript:void(0);"
                              class="delete-time-table"
                              @click="removeScheduleFour(index)"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary add-new-timetable"
                      @click="addScheduleFour"
                      ><i class="ti ti-square-rounded-plus-filled me-2"></i>Add New</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" class="btn btn-primary">Add Time Table</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Class -->
</template>
<script>
export default {
  data() {
    return {
      schedule: [],
      scheduleOne: [],
      scheduleTwo: [],
      scheduleThree: [],
      scheduleFour: [],
      selected: [],
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
      selected11: [],
      selected12: [],
      selected13: [],
      selected14: [],
      selected15: [],
      selected16: [],
      selected17: [],
      selected18: [],
      selected19: [],
      selected20: [],
      selected21: [],
      selected22: [],
      selected23: [],
      SecASel: [
        {label: "Select", value: "Select"}, 
        {label: "A", value: "A"}, 
        {label: "B", value: "B"}, 
        {label: "C", value: "C"},
        {label: "D", value: "D"}
      ],
      GroupSel: [
        {label: "Class I", value: "Class I"}, 
        {label: "Class II", value: "Class II"}, 
        {label: "Class III", value: "Class III"}, 
        {label: "Class IV", value: "Class IV"}
      ],
      PeriodSel: [
        {label: "Select", value: "Select"}, 
        {label: "09:00 AM", value: "09:00 AM"}, 
        {label: "09:45 AM", value: "09:45 AM"}, 
        {label: "10:45 AM", value: "10:45 AM"},
      ],
      SelectTime: [
        {label: "Select", value: "Select"}, 
        {label: "09:45", value: "09:45"}, 
        {label: "10:45", value: "10:45"}, 
        {label: "11:30", value: "11:30"}, 
        {label: "12:15", value: "12:15"}, 
      ],
      SelectDur: [
        {label: "Select", value: "Select"}, 
        {label: "45 Mins", value: "45 Mins"}, 
        {label: "1 Hour", value: "1 Hour"}
      ],
      SubjectSelect: [
        {label: "Select", value: "Select"},  
        {label: "English", value: "English"},  
        {label: "Spanish", value: "Spanish"},  
        {label: "Physics", value: "Physics"},  
        {label: "Maths", value: "Maths"},  
      ],
      SelTeach: [
        {label: "Select", value: "Select"}, 
        {label: "Hellana", value: "Hellana"}, 
        {label: "Erickson", value: "Erickson"}, 
        {label: "Teresa", value: "Teresa"}, 
        {label: "Aaron", value: "Aaron"}, 
      ],
      FromSel: [
        {label: "Select", value: "Select"},
        {label: "09:00", value: "09:00"},
        {label: "09:45", value: "09:45"},
        {label: "10:45", value: "10:45"},
        {label: "11:30", value: "11:30"},
      ],
      OneSelectTime: [
        {label: "Select", value: "Select"}, 
        {label: "09:45", value: "09:45"}, 
        {label: "10:45", value: "10:45"}, 
        {label: "11:30", value: "11:30"}, 
        {label: "12:15", value: "12:15"}, 
      ],
      OneSelectDur: [
        {label: "Select", value: "Select"}, 
        {label: "45 Mins", value: "45 Mins"}, 
        {label: "1 Hour", value: "1 Hour"}
      ],
      OneSubjectSelect: [
        {label: "Select", value: "Select"},  
        {label: "English", value: "English"},  
        {label: "Spanish", value: "Spanish"},  
        {label: "Physics", value: "Physics"},  
        {label: "Maths", value: "Maths"},  
      ],
      OneSelTeach: [
        {label: "Select", value: "Select"}, 
        {label: "Hellana", value: "Hellana"}, 
        {label: "Erickson", value: "Erickson"}, 
        {label: "Teresa", value: "Teresa"}, 
        {label: "Aaron", value: "Aaron"},
      ],
      OneFromSel: [
        {label: "Select", value: "Select"},
        {label: "09:00", value: "09:00"},
        {label: "09:45", value: "09:45"},
        {label: "10:45", value: "10:45"},
        {label: "11:30", value: "11:30"},
      ],
      TwoSelectTime: [
        {label: "Select", value: "Select"}, 
        {label: "09:45", value: "09:45"}, 
        {label: "10:45", value: "10:45"}, 
        {label: "11:30", value: "11:30"}, 
        {label: "12:15", value: "12:15"}, 
      ],
      TwoSelectDur: [
        {label: "Select", value: "Select"}, 
        {label: "45 Mins", value: "45 Mins"}, 
        {label: "1 Hour", value: "1 Hour"}
      ],
      TwoSubjectSelect: [
        {label: "Select", value: "Select"},  
        {label: "English", value: "English"},  
        {label: "Spanish", value: "Spanish"},  
        {label: "Physics", value: "Physics"},  
        {label: "Maths", value: "Maths"},  
      ],
      TwoSelTeach: [
        {label: "Select", value: "Select"}, 
        {label: "Hellana", value: "Hellana"}, 
        {label: "Erickson", value: "Erickson"}, 
        {label: "Teresa", value: "Teresa"}, 
        {label: "Aaron", value: "Aaron"},
      ],
      TwoFromSel: [
        {label: "Select", value: "Select"},
        {label: "09:00", value: "09:00"},
        {label: "09:45", value: "09:45"},
        {label: "10:45", value: "10:45"},
        {label: "11:30", value: "11:30"},
      ],
      ThreeSelectTime: [
        {label: "Select", value: "Select"}, 
        {label: "09:45", value: "09:45"}, 
        {label: "10:45", value: "10:45"}, 
        {label: "11:30", value: "11:30"}, 
        {label: "12:15", value: "12:15"}, 
      ],
      ThreeSelectDur: [
        {label: "Select", value: "Select"}, 
        {label: "45 Mins", value: "45 Mins"}, 
        {label: "1 Hour", value: "1 Hour"}
      ],
      ThreeSubjectSelect: [
        {label: "Select", value: "Select"},  
        {label: "English", value: "English"},  
        {label: "Spanish", value: "Spanish"},  
        {label: "Physics", value: "Physics"},  
        {label: "Maths", value: "Maths"},  
      ],
      ThreeSelTeach: [
        {label: "Select", value: "Select"}, 
        {label: "Hellana", value: "Hellana"}, 
        {label: "Erickson", value: "Erickson"}, 
        {label: "Teresa", value: "Teresa"}, 
        {label: "Aaron", value: "Aaron"},
      ],
      ThreeFromSel: [
        {label: "Select", value: "Select"},
        {label: "09:00", value: "09:00"},
        {label: "09:45", value: "09:45"},
        {label: "10:45", value: "10:45"},
        {label: "11:30", value: "11:30"},
      ],
      FourSelectTime: [
        {label: "Select", value: "Select"}, 
        {label: "09:45", value: "09:45"}, 
        {label: "10:45", value: "10:45"}, 
        {label: "11:30", value: "11:30"}, 
        {label: "12:15", value: "12:15"}, 
      ],
      FourSelectDur: [
        {label: "Select", value: "Select"}, 
        {label: "45 Mins", value: "45 Mins"}, 
        {label: "1 Hour", value: "1 Hour"}
      ],
      FourSubjectSelect: [
        {label: "Select", value: "Select"},  
        {label: "English", value: "English"},  
        {label: "Spanish", value: "Spanish"},  
        {label: "Physics", value: "Physics"},  
        {label: "Maths", value: "Maths"}, 
      ],
      FourSelTeach: [
        {label: "Select", value: "Select"}, 
        {label: "Hellana", value: "Hellana"}, 
        {label: "Erickson", value: "Erickson"}, 
        {label: "Teresa", value: "Teresa"}, 
        {label: "Aaron", value: "Aaron"},
      ],
      FourFromSel: [
        {label: "Select", value: "Select"},
        {label: "09:00", value: "09:00"},
        {label: "09:45", value: "09:45"},
        {label: "10:45", value: "10:45"},
        {label: "11:30", value: "11:30"},
      ],
    };
  },
  methods: {
    addSchedule() {
      this.schedule.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
      });
    },
    addScheduleOne() {
      this.scheduleOne.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
      });
    },
    addScheduleTwo() {
      this.scheduleTwo.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
      });
    },
    addScheduleThree() {
      this.scheduleThree.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
      });
    },
    addScheduleFour() {
      this.scheduleFour.push({
        examDate: "",
        subject: "",
        roomNo: "",
        maxMarks: "",
      });
    },
    removeSchedule(index) {
      this.schedule.splice(index, 1);
    },
    removeScheduleOne(index) {
      this.scheduleOne.splice(index, 1);
    },
    removeScheduleTwo(index) {
      this.scheduleTwo.splice(index, 1);
    },
    removeScheduleThree(index) {
      this.scheduleThree.splice(index, 1);
    },
    removeScheduleFour(index) {
      this.scheduleFour.splice(index, 1);
    },
  },
};
</script>
