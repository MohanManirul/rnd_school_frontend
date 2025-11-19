<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content content-two">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
      </div>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-md-12">
          <form @submit.prevent="submitForm">
            <!-- Personal Information -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-info-square-rounded fs-16"></i>
                  </span>
                  <h4 class="text-dark">Personal Information</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="add-section">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                        <div
                          class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames"
                        >
                          <i class="ti ti-photo-plus fs-16"></i>
                        </div>
                        <div class="profile-upload">
                          <div class="profile-uploader d-flex align-items-center">
                            <div class="drag-upload-btn mb-3">
                              Upload
                              <input
                                type="file"
                                class="form-control image-sign"
                                multiple=""
                              />
                            </div>
                            <a href="javascript:void(0);" class="btn btn-primary mb-3"
                              >Remove</a
                            >
                          </div>
                          <p class="fs-12">Upload image size 4MB, Format JPG, PNG, SVG</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-xxl-5 row-cols-md-6">
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" value="Kevin" />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Last Name</label>
                        <input type="text" class="form-control" value="Larry" />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Role</label>
                        <vue3-select
                          v-model="selected"
                          :options="SelectRole"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Department</label>
                        <vue3-select
                          v-model="selectedOne"
                          :options="DepeAd"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Designation</label>
                        <vue3-select
                          v-model="selectedTwo"
                          :options="DesigSel"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Gender</label>
                        <vue3-select
                          v-model="selectedThree"
                          :options="GendSele"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Primary Contact Number</label>
                        <input type="text" class="form-control" value="+1 63423 72397" />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Email Address</label>
                        <input
                          type="email"
                          class="form-control"
                          value="kevin@example.com"
                        />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Blood Group</label>
                        <vue3-select
                          v-model="selectedFour"
                          :options="BlooSele"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Marital Status</label>
                        <vue3-select
                          v-model="selectedFive"
                          :options="MartiSele"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Father’s Name</label>
                        <input type="text" class="form-control" value="Janet" />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Mother’s Name</label>
                        <input type="text" class="form-control" value="Daniel" />
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Date of Birth</label>
                        <div class="input-icon position-relative">
                          <span class="input-icon-addon">
                            <i class="ti ti-calendar"></i>
                          </span>
                          <date-picker
                            v-model="startdate"
                            placeholder=""
                            class="datetimepicker form-control"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Date of Joining</label>
                        <div class="input-icon position-relative">
                          <span class="input-icon-addon">
                            <i class="ti ti-calendar"></i>
                          </span>
                          <date-picker
                            v-model="startdateOne"
                            placeholder=""
                            class="datetimepicker form-control"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Language Known</label>
                        <vue3-tags-input
                          class="input-tags form-control"
                          type="text"
                          id="inputBox"
                          data-role="tagsinput"
                          name="Label"
                          value="English, Spanish"
                          :tags="tags"
                        />
                      </div>
                    </div>
                    <div class="col-xxl-4 col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Qualification</label>
                        <input type="text" class="form-control" value="M.Sc" />
                      </div>
                    </div>
                    <div class="col-xxl-4 col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Work Experience</label>
                        <input type="text" class="form-control" value="5" />
                      </div>
                    </div>
                    <div class="col-xxl-4 col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Note</label>
                        <input type="text" class="form-control" value="Description" />
                      </div>
                    </div>
                    <div class="col-xxl-6 col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Address</label>
                        <input
                          type="text"
                          class="form-control"
                          value="3495 Red Hawk Road, Buffalo Lake, MN 55314"
                        />
                      </div>
                    </div>
                    <div class="col-xxl-6 col-xl-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Permanent Address</label>
                        <input
                          type="text"
                          class="form-control"
                          value="3495 Red Hawk Road, Buffalo Lake, MN 55314"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Personal Information -->

            <!-- Payroll -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-user-shield fs-16"></i>
                  </span>
                  <h4 class="text-dark">Payroll</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">EPF No</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Basic Salary</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Contract Type</label>
                      <vue3-select
                        v-model="selectedSix"
                        :options="ContrSel"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Work Shift</label>
                      <vue3-select
                        v-model="selectedSeven"
                        :options="DaySele"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Work Location</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Payroll -->

            <!-- Leaves -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-users fs-16"></i>
                  </span>
                  <h4 class="text-dark">Leaves</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Medical Leaves</label>
                      <input type="text" class="form-control" value="01" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Casual Leaves</label>
                      <input type="text" class="form-control" value="04" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Maternity Leaves</label>
                      <input type="text" class="form-control" value="03" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Sick Leaves</label>
                      <input type="text" class="form-control" value="01" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Leaves -->

            <!-- Bank Details -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-users fs-16"></i>
                  </span>
                  <h4 class="text-map">Bank Account Detail</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Account Name</label>
                      <input type="text" class="form-control" value="Kevin" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Account Number</label>
                      <input type="text" class="form-control" value="178849035684" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Bank Name</label>
                      <input type="text" class="form-control" value="Bank of America" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">IFSC Code</label>
                      <input type="text" class="form-control" value="BOA83209832" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Branch Name</label>
                      <input type="text" class="form-control" value="Cincinnati" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Bank Details -->

            <!-- Transport Information -->
            <div class="card">
              <div
                class="card-header bg-light d-flex align-items-center justify-content-between"
              >
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-bus-stop fs-16"></i>
                  </span>
                  <h4 class="text-dark">Transport Information</h4>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" />
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Route</label>
                      <vue3-select
                        v-model="selectedEight"
                        :options="NewYoDe"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Vehicle Number</label>
                      <vue3-select
                        v-model="selectedNine"
                        :options="VehiclNumb"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Pickup Point</label>
                      <vue3-select
                        v-model="selectedTen"
                        :options="PicSel"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Transport Information -->

            <!-- Hostel Information -->
            <div class="card">
              <div
                class="card-header bg-light d-flex align-items-center justify-content-between"
              >
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-building-fortress fs-16"></i>
                  </span>
                  <h4 class="text-dark">Hostel Information</h4>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" />
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Hostel</label>
                      <vue3-select
                        v-model="selectedTenOne"
                        :options="FloHose"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Room No</label>
                      <vue3-select
                        v-model="selectedTenTwo"
                        :options="RooSele"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Hostel Information -->

            <!-- Social Media Links -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-building fs-16"></i>
                  </span>
                  <h4 class="text-dark">Social Media Links</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Facebook URL</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Twitter URL</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Linkediin URL</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Instagram URL</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Social Media Links -->

            <!-- Documents -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-file fs-16"></i>
                  </span>
                  <h4 class="text-dark">Documents</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-2">
                      <div class="mb-3">
                        <label class="form-label">Upload Resume</label>
                        <p>Upload image size of 4MB, Accepted Format PDF</p>
                      </div>
                      <div class="d-flex align-items-center flex-wrap">
                        <div class="btn btn-primary drag-upload-btn mb-2 me-2">
                          <i class="ti ti-file-upload me-1"></i>Change
                          <input
                            type="file"
                            class="form-control image_sign"
                            multiple=""
                          />
                        </div>
                        <p class="mb-2">Resume.pdf</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-2">
                      <div class="mb-3">
                        <label class="form-label">Upload Joining Letter</label>
                        <p>Upload image size of 4MB, Accepted Format PDF</p>
                      </div>
                      <div class="d-flex align-items-center flex-wrap">
                        <div class="btn btn-primary drag-upload-btn mb-2">
                          <i class="ti ti-file-upload me-1"></i>Upload Document
                          <input
                            type="file"
                            class="form-control image_sign"
                            multiple=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Documents -->

            <!-- Password -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-file fs-16"></i>
                  </span>
                  <h4 class="text-dark">Password</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">New Password</label>
                      <input type="password" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Confirm Password</label>
                      <input type="password" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Password -->

            <div class="text-end">
              <button type="button" class="btn btn-light me-3">Cancel</button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import Vue3TagsInput from "vue3-tags-input";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      title: "Add Staff",
      text: "Dashboard",
      text1: "HRM",
      text2: "Add Staff",
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: null,
      selectedTen: null,
      selectedTenOne: null,
      selectedTenTwo: null,
      SelectRole: [
        { label: "Select", value: "Select" },
        { label: "Teacher", value: "Teacher" },
        { label: "Accountant", value: "Accountant" },
        { label: "Libranrian", value: "Libranrian" },
      ],
      DepeAd: [
        { label: "Select", value: "Select" },
        { label: "Admin", value: "Admin" },
        { label: "Management", value: "Management" },
        { label: "Academic", value: "Academic" },
        { label: "Library", value: "Library" },
      ],
      DesigSel: [
        { label: "Select", value: "Select" },
        { label: "Teacher", value: "Teacher" },
        { label: "Accountant", value: "Accountant" },
        { label: "Libararian", value: "Libararian" },
      ],
      GendSele: [
        { label: "Select", value: "Select" },
        { label: "Female", value: "Female" },
        { label: "Male", value: "Male" },
      ],
      BlooSele: [
        { label: "Select", value: "Select" },
        { label: "O +ve", value: "O +ve" },
        { label: "B +ve", value: "B +ve" },
        { label: "B -ve", value: "B -ve" },
      ],
      MartiSele: [
        { label: "Select", value: "Select" },
        { label: "Single", value: "Single" },
        { label: "Married", value: "Married" },
      ],
      ContrSel: [
        { label: "Select", value: "Select" },
        { label: "Permanent", value: "Permanent" },
        { label: "Temporary", value: "Temporary" },
      ],
      DaySele: [
        { label: "Select", value: "Select" },
        { label: "Day Shift", value: "Day Shift" },
        { label: "Night Shift", value: "Night Shift" },
      ],
      NewYoDe: [
        { label: "Select", value: "Select" },
        { label: "Newyork", value: "Newyork" },
        { label: "Denver", value: "Denver" },
        { label: "Chicago", value: "Chicago" },
      ],
      VehiclNumb: [
        { label: "Select", value: "Select" },
        { label: "AM 54548", value: "AM 54548" },
        { label: "AM 64528", value: "AM 64528" },
        { label: "AM 123548", value: "AM 123548" },
      ],
      PicSel: [
        { label: "Select", value: "Select" },
        { label: "Cincinatti", value: "Cincinatti" },
        { label: "Illinois", value: "Illinois" },
        { label: "Morgan", value: "Morgan" },
      ],
      RooSele: [
        { label: "Select", value: "Select" },
        { label: "20", value: "20" },
        { label: "24", value: "24" },
        { label: "26", value: "26" },
      ],
      FloHose: [
        { label: "Select", value: "Select" },
        { label: "HI-Hostel,Floor", value: "HI-Hostel,Floor" },
        { label: "HI-Hostel ,2nd Floor", value: "HI-Hostel ,2nd Floor" },
      ],
      tags: ["English"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/hrm/staffs-list");
    },
  },
};
</script>
