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
          <form>
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
                      <label class="form-label">Teacher ID</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Class</label>
                      <vue3-select
                        :options="TeaClassSel"
                        v-model="selected"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Subject</label>
                      <vue3-select
                        :options="TeaSubSel"
                        v-model="selectedOne"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Gender</label>
                      <vue3-select
                        :options="TeaGenSel"
                        v-model="selectedTwo"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Primary Contact Number</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Email Address</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Blood Group</label>
                      <vue3-select
                        :options="TeaBloodSel"
                        v-model="selectedThree"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Date of Joining</label>
                      <div class="input-icon position-relative">
                        <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Father’s Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Mother’s Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Date of Birth</label>
                      <div class="input-icon position-relative">
                        <a-date-picker v-model="valueTwo" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Marital Status</label>
                      <vue3-select
                        :options="TeaMarSel"
                        v-model="selectedFour"
                        placeholder="Select"
                      />
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
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Qualification</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Work Experience</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Previous School if Any</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Previous School Address</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Previous School Phone No</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Address</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Permanent Address</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">PAN Number / ID Number</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Status</label>
                      <vue3-select :options="StaTeaSel" v-model="selectedFive" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-xxl-12 col-xl-12">
                    <div class="mb-3">
                      <label class="form-label">Notes</label>
                      <textarea
                        class="form-control"
                        placeholder="Other Information"
                        rows="4"
                      ></textarea>
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
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">EPF No</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Basic Salary</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Contract Type</label>
                      <vue3-select
                        :options="SelectContract"
                        v-model="selectedSix"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Work Shift</label>
                      <vue3-select
                        :options="WorkSelT"
                        v-model="selectedSeven"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Work Location</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Date of Leaving</label>
                      <div class="input-icon position-relative">
                        <a-date-picker v-model="valueThree" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                      </div>
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
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Casual Leaves</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Maternity Leaves</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Sick Leaves</label>
                      <input type="text" class="form-control" />
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
                    <i class="ti ti-map fs-16"></i>
                  </span>
                  <h4 class="text-dark">Bank Account Detail</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Account Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Account Number</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Bank Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">IFSC Code</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Branch Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Bank Details -->

            <!-- Transport Information -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-bus-stop fs-16"></i>
                  </span>
                  <h4 class="text-dark">Transport Information</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Route</label>
                      <vue3-select
                        :options="TeaRouSel"
                        v-model="selectedEight"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Vehicle Number</label>
                      <vue3-select :options="VecSel" v-model="selectedNine" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Pickup Point</label>
                      <vue3-select
                        :options="PicSelOne"
                        v-model="selectedTen"
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
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-building-fortress fs-16"></i>
                  </span>
                  <h4 class="text-dark">Hostel Information</h4>
                </div>
              </div>
              <div class="card-body pb-1">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Hostel</label>
                      <vue3-select
                        :options="HosTeaSel"
                        v-model="selectedEleven"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Room No</label>
                      <vue3-select
                        :options="SelRoomTea"
                        v-model="selectedTwele"
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
                <div class="row rows-cols-xxl-5">
                  <div class="col-xxl col-xl-3 col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Facebook</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Instagram</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Linked In</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Youtube</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Twitter URL</label>
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
                        <div class="btn btn-primary drag-upload-btn mb-2 me-2">
                          <i class="ti ti-file-upload me-1"></i>Upload Document
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
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Teacher</button>
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
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      valueOne,
      valueTwo,
      valueThree,
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
      selectedEleven: [],
      selectedTwele: [],
      title: "Add Teacher",
      text: "Dashboard",
      text1: "Peoples",
      text2: "Add Teacher",
      TeaClassSel: [
        {label: "Select", value: "Select"}, 
        {label: "III A", value: "III A"}, 
        {label: "II (A)", value: "II (A)"},
        {label: "VI (A)", value: "VI (A)"}, 
        {label: "VIII", value: "VIII"}
        ],
      TeaSubSel: [
        {label: "Select", value: "Select"}, 
        {label: "Physics", value: "Physics"}, 
        {label: "Computer", value: "Computer"}, 
        {label: "English", value: "English"}, 
        {label: "Spanish", value: "Spanish"}
      ],
      TeaGenSel: [
        {label: "Select", value: "Select"}, 
        {label: "Male", value: "Male"}, 
        {label: "Female", value: "Female"}
      ],
      TeaBloodSel: [
        {label: "Select", value: "Select"}, 
        {label: "O +ve", value: "O +ve"}, 
        {label: "B +ve", value: "B +ve"}, 
        {label: "B -ve", value: "B -ve"}
      ],
      TeaMarSel: [
        {label: "Select", value: "Select"}, 
        {label: "Single", value: "Single"}, 
        {label: "Married", value: "Married"}
      ],
      StaTeaSel: [
        {label: "Select", value: "Select"}, 
        {label: "Active", value: "Active"}, 
        {label: "Inactive", value: "Inactive"}
      ],
      SelectContract: [
        {label: "Select", value: "Select"}, 
        {label: "Yes", value: "Yes"}, 
        {label: "No", value: "No"}
      ],
      WorkSelT: [
        {label: "Select", value: "Select"}, 
        {label: "Day Shift", value: "Day Shift"}, 
        {label: "Night Shift", value: "Night Shift"}
      ],
      TeaRouSel: [
        {label: "Select", value: "Select"}, 
        {label: "Newyork", value: "Newyork"}, 
        {label: "Denver", value: "Denver"},
        {label: "Chicago", value: "Chicago"}
      ],
      VecSel: [
        {label: "Select", value: "Select"}, 
        {label: "AM 54548", value: "AM 54548"}, 
        {label: "AM 64528", value: "AM 64528"}, 
        {label: "AM 123548", value: "AM 123548"}
      ],
      PicSelOne: [
        {label: "Select", value: "Select"}, 
        {label: "Cincinatti", value: "Cincinatti"}, 
        {label: "Illinois", value: "Illinois"}, 
        {label: "Morgan", value: "Morgan"}
      ],
      HosTeaSel: [
        {label: "Select", value: "Select"}, 
        {label: "HI-Hostel, Floor", value: "HI-Hostel, Floor"}, 
        {label: "HI-Hostel, 2nd Floor", value: "HI-Hostel, 2nd Floor"}
      ],
      SelRoomTea: [
        {label: "Select", value: "Select"}, 
        {label: "20", value: "20"}, 
        {label: "22", value: "22"}, 
        {label: "24", value: "24"}, 
        {label: "26", value: "26"}
      ],
      tags: ["English", "Spanish"],
    };
  },
};
</script>
