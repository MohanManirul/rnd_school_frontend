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
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-flex align-items-center flex-wrap row-gap-3 mb-4">
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
                    <div class="mb-4">
                      <label class="form-label">Academic Year</label>
                      <vue3-select
                        :options="EditYearSel"
                        v-model="selected"
                        placeholder="June 2024/25"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Admission Number</label>
                      <input type="text" class="form-control" value="AD9892434" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Admission Date</label>
                      <div class="input-icon position-relative">
                        <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Roll Number</label>
                      <input type="text" class="form-control" value="35013" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Status</label>
                      <vue3-select
                        :options="EditActiveSel"
                        v-model="selectedOne"
                        placeholder="Active"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control" value="Ralph" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control" value="Claudia" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Class</label>
                      <vue3-select
                        :options="EditStandSel"
                        v-model="selectedTwo"
                        placeholder="II"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Section</label>
                      <vue3-select :options="EditSecSel" v-model="selectedThree" placeholder="A" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Gender</label>
                      <vue3-select
                        :options="EditGenderSel"
                        v-model="selectedFour"
                        placeholder="Female"
                      />
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
                    <div class="mb-4">
                      <label class="form-label">Blood Group</label>
                      <vue3-select
                        :options="EditBloodSel"
                        v-model="selectedFive"
                        placeholder="O +ve"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">House</label>
                      <vue3-select
                        :options="EditHouseSel"
                        v-model="selectedSix"
                        placeholder="Red"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Religion</label>
                      <vue3-select
                        :options="EditChristSel"
                        v-model="selectedSeven"
                        placeholder="Christianity"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Category</label>
                      <vue3-select
                        :options="EditOBCSel"
                        v-model="selectedEight"
                        placeholder="OBC"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Primary Contact Number</label>
                      <input type="text" class="form-control" value="+1 46548 84498" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Email Address</label>
                      <input type="email" class="form-control" value="jan@example.com" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Caste</label>
                      <input type="text" class="form-control" value="Catholic" />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Mother Tongue</label>
                      <vue3-select
                        :options="EditEnglSel"
                        v-model="selectedNine"
                        placeholder="English"
                      />
                    </div>
                  </div>
                  <div class="col-xxl col-xl-3 col-md-6">
                    <div class="mb-4">
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
                </div>
              </div>
            </div>
            <!-- /Personal Information -->

            <!-- Parents & Guardian Information -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-user-shield fs-16"></i>
                  </span>
                  <h4 class="text-dark">Parents & Guardian Information</h4>
                </div>
              </div>
              <div class="card-body pb-0">
                <div class="border-bottom mb-4">
                  <h5 class="mb-3">Father’s Info</h5>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="d-flex align-items-center flex-wrap row-gap-3 mb-4">
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
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Father Name</label>
                        <input type="text" class="form-control" value="Jerald Vicinius" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          value="jera@example.com"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Phone Number</label>
                        <input type="text" class="form-control" value="+1 45545 46464" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Father Occupation</label>
                        <input type="text" class="form-control" value="Mechanic" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-bottom mb-4">
                  <h5 class="mb-3">Mother’s Info</h5>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="d-flex align-items-center flex-wrap row-gap-3 mb-4">
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
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Mother Name</label>
                        <input type="text" class="form-control" value="Roberta Webber" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          value="robe@example.com"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Phone Number</label>
                        <input type="text" class="form-control" value="+1 46499 24357" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Mother Occupation</label>
                        <input type="text" class="form-control" value="Homemaker" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 class="mb-3">Guardian Details</h5>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-2">
                        <div class="d-flex align-items-center flex-wrap">
                          <label class="form-label text-dark fw-normal me-2"
                            >If Guardian Is</label
                          >
                          <div class="form-check me-3 mb-2">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="guardian"
                              id="parents"
                              checked=""
                            />
                            <label class="form-check-label" for="parents">
                              Parents
                            </label>
                          </div>
                          <div class="form-check me-3 mb-2">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="guardian"
                              id="guardian"
                            />
                            <label class="form-check-label" for="guardian">
                              Guardian
                            </label>
                          </div>
                          <div class="form-check mb-2">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="guardian"
                              id="other"
                            />
                            <label class="form-check-label" for="other"> Others </label>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center flex-wrap row-gap-3 mb-4">
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
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Guardian Name</label>
                        <input type="text" class="form-control" value="Jerald Vicinius" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Guardian Relation</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Phone Number</label>
                        <input type="text" class="form-control" value="+1 45545 46464" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          value="jera@example.com"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Occupation</label>
                        <input type="text" class="form-control" value="Mechanic" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Address</label>
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
            <!-- /Parents & Guardian Information -->

            <!-- Sibilings -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-users fs-16"></i>
                  </span>
                  <h4 class="text-dark">Sibilings</h4>
                </div>
              </div>
              <div class="card-body">
                <div class="addsibling-info">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-2">
                        <label class="form-label">Sibiling Info</label>
                        <div class="d-flex align-items-center flex-wrap">
                          <label class="form-label text-dark fw-normal me-2"
                            >Is Sibiling studying in same school</label
                          >
                          <div class="form-check me-3 mb-2">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="sibling"
                              id="yes"
                              checked=""
                            />
                            <label class="form-check-label" for="yes"> Yes </label>
                          </div>
                          <div class="form-check mb-2">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="sibling"
                              id="no"
                            />
                            <label class="form-check-label" for="no"> No </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Name</label>
                        <vue3-select
                          :options="EditNewYorkSel"
                          v-model="selectedTen"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Roll No</label>
                        <vue3-select
                          :options="EditRollSel"
                          v-model="selectedEleven"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Admission No</label>
                        <vue3-select
                          :options="EditAdmiSel"
                          v-model="selectedTwele"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-4">
                        <div class="d-flex align-items-center">
                          <div class="w-100">
                            <label class="form-label">Class</label>
                            <vue3-select
                              :options="EditClassSel"
                              v-model="selectedThirteen"
                              placeholder="Select"
                            />
                          </div>
                          <div>
                            <label class="form-label">&nbsp;</label>
                            <a href="javascript:void(0);" class="trash-icon ms-3"
                              ><i class="ti ti-trash-x"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-top pt-4">
                  <a
                    href="javascript:void(0);"
                    class="add-sibling btn btn-primary d-inline-flex align-items-center"
                    ><i class="ti ti-circle-plus me-2"></i>Add New</a
                  >
                </div>
              </div>
            </div>
            <!-- /Sibilings -->

            <!-- Address -->
            <div class="card card-two">
              <div class="card-header">
                <h4 class="d-flex align-items-center card-title">
                  <span class="card-icon"><i class="ti ti-map"></i></span>Address
                </h4>
              </div>
              <div class="card-body pb-0">
                <div class="add-section">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-4">
                        <label class="col-form-label">Current Address</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Current Address"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-4">
                        <label class="col-form-label">Permanent Address</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Permanent Address"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Address -->

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
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Route</label>
                      <vue3-select
                        :options="EditRouteSel"
                        v-model="selectedFourteen"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Vehicle Number</label>
                      <vue3-select
                        :options="EditAMSel"
                        v-model="selectedFifteen"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Pickup Point</label>
                      <vue3-select
                        :options="EditCincinSel"
                        v-model="selectedSixteen"
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
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Hostel</label>
                      <vue3-select
                        :options="EditHISel"
                        v-model="selectedSeventeen"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Room No</label>
                      <vue3-select
                        :options="EditRoomSel"
                        v-model="selectedEighteen"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Hostel Information -->

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
                        <label class="form-label mb-1">Medical Condition</label>
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
                        <p class="mb-2">BirthCertificate.pdf</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-2">
                      <div class="mb-3">
                        <label class="form-label mb-1">Upload Transfer Certificate</label>
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

            <!-- Medical History -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-medical-cross fs-16"></i>
                  </span>
                  <h4 class="text-dark">Medical History</h4>
                </div>
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-2">
                      <label class="form-label">Medical Condition</label>
                      <div class="d-flex align-items-center flex-wrap">
                        <label class="form-label text-dark fw-normal me-2"
                          >Medical Condition of a Student</label
                        >
                        <div class="form-check me-3 mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="condition"
                            id="good"
                            checked=""
                          />
                          <label class="form-check-label" for="good"> Good </label>
                        </div>
                        <div class="form-check me-3 mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="condition"
                            id="bad"
                          />
                          <label class="form-check-label" for="bad"> Bad </label>
                        </div>
                        <div class="form-check mb-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="condition"
                            id="others"
                          />
                          <label class="form-check-label" for="others"> Others </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label">Allergies</label>
                    <vue3-tags-input
                      class="input-tags form-control"
                      type="text"
                      id="inputBox"
                      data-role="tagsinput"
                      name="Label"
                      value="Allergy, Skin Allergy"
                      :tagsOne="tagsOne"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="form-label">Medications</label>
                    <vue3-tags-input
                      class="input-tags form-control"
                      type="text"
                      id="inputBox"
                      data-role="tagsinput"
                      name="Label"
                      value="Medecine Name"
                      :tagsTwo="tagsTwo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- /Medical History -->

            <!-- Previous School details -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-building fs-16"></i>
                  </span>
                  <h4 class="text-dark">Previous School Details</h4>
                </div>
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label">School Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value="Oxford Matriculation, USA"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-4">
                      <label class="form-label">Addrsess</label>
                      <input
                        type="text"
                        class="form-control"
                        value="1852 Barnes Avenue, Cincinnati, OH 45202"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Previous School details -->

            <!-- Other Details -->
            <div class="card">
              <div class="card-header bg-light">
                <div class="d-flex align-items-center">
                  <span class="bg-white avatar avatar-sm me-2 text-gray-7 flex-shrink-0">
                    <i class="ti ti-building-bank fs-16"></i>
                  </span>
                  <h4 class="text-dark">Other Details</h4>
                </div>
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-md-5">
                    <div class="mb-4">
                      <label class="form-label">Bank Name</label>
                      <input type="text" class="form-control" value="Bank of America" />
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="mb-4">
                      <label class="form-label">Branch</label>
                      <input type="text" class="form-control" value="Cincinnati" />
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="mb-4">
                      <label class="form-label">IFSC Number</label>
                      <input type="text" class="form-control" value="BOA83209832" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-4">
                      <label class="form-label">Other Information</label>
                      <textarea
                        class="form-control"
                        placeholder="Other Information"
                        rows="3"
                      >
Depending on the specific needs of your organization or system, additional information may be collected or tracked. It's important to ensure that any data collected complies with privacy regulations and policies to protect students' sensitive information.</textarea
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Other Details -->

            <div class="text-end">
              <button type="button" class="btn btn-light me-3">Cancel</button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
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
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      valueOne,
      valueTwo,
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
      selectedThirteen: [],
      selectedFourteen: [],
      selectedFifteen: [],
      selectedSixteen: [],
      selectedSeventeen: [],
      selectedEighteen: [],
      EditYearSel: [
        {label:"June 2024/25", value: "June 2024/25"},
         {label: "June 2023/24", value: "June 2023/24"}, 
         {label: "June 2023/23", value: "June 2023/23"}
      ],
      EditActiveSel: [
        {label: "Select", value: "Select"}, 
        {label: "Active", value: "Active"}, 
        {label: "Inactive", value: "Inactive"}, 
      ],
      EditStandSel: [
        {label: "Select", value: "Select"}, 
        {label: "I", value: "I"}, 
        {label: "II", value: "II"}, 
        {label: "III", value: "III"}, 
        {label: "IV", value: "IV"}, 
        {label: "V", value: "V"}, 
      ],
      EditSecSel: [
        {label: "Select", value: "Select"}, 
        {label: "A", value: "A"}, 
        {label: "B", value: "B"},
      ],
      EditGenderSel: [
        {label: "Select", value: "Select"}, 
        {label: "Male", value: "Male"}, 
        {label: "Female", value: "Female"},
      ],
      EditBloodSel: [
        {label: "Select", value: "Select"}, 
        {label: "O +ve", value: "O +ve"}, 
        {label: "B +ve", value: "B +ve"}, 
        {label: "B -ve", value: "B -ve"}, 
      ],
      EditHouseSel: [
        {label: "Select", value: "Select"},
        {label: "Red", value: "Red"},
      ],
      EditChristSel: [
         {label: "Select", value: "Select"}, 
        {label: "Christianity", value: "Christianity"}, 
        {label: "Buddhism", value: "Buddhism"}, 
        {label: "Irreligion", value: "Irreligion"}, 
      ],
      EditOBCSel: [
         {label: "Select", value: "Select"}, 
        {label: "OBC", value: "OBC"}, 
        {label: "BC", value: "BC"},
      ],
      EditEnglSel: [
        {label: "Select", value: "Select"},
        {label: "English", value: "English"},
        {label: "Spanish", value: "Spanish"},
      ],
      EditNewYorkSel: [
        {label: "Select", value: "Select"}, 
        {label: "Newyork", value: "Newyork"}, 
        {label: "Denver", value: "Denver"}, 
        {label: "Chicago", value: "Chicago"}, 
      ],
      EditRollSel: [
        {label: "Select", value: "Select"}, 
        {label: "35013", value: "35013"}, 
        {label: "35011", value: "35011"}, 
        {label: "35010", value: "35010"}, 
      ],
      EditAdmiSel: [
         {label: "Select", value: "Select"},
        {label: "AD9892434", value: "AD9892434"},
        {label: "AD9892433", value: "AD9892433"},
        {label: "AD9892432", value: "AD9892432"},
      ],
      EditClassSel: [
        {label: "select", value: "select"},
        {label: "I", value: "I"}, 
        {label: "II", value: "II"}, 
        {label: "III", value: "III"}, 
      ],
      EditRouteSel: [
        {label: "Select", value: "Select"}, 
        {label: "Newyork", value: "Newyork"}, 
        {label: "Denver", value: "Denver"}, 
        {label: "Chicago", value: "Chicago"}, 
      ],
      EditAMSel: [
        {label: "Select", value: "Select"},
        {label: "AM 54548", value: "AM 54548"},
        {label: "AM 64528", value: "AM 64528"},
        {label: "AM 123548", value: "AM 123548"},
      ],
      EditCincinSel: [
        {label: "Select", value: "Select"}, 
        {label: "Cincinatti", value: "Cincinatti"}, 
        {label: "Illinois", value: "Illinois"}, 
        {label: "Morgan", value: "Morgan"}, 
      ],
      EditHISel: [
        {label: "Select", value: "Select"},
        {label: "HI-Hostel, Floor", value: "HI-Hostel, Floor"},
        {label: "HI-Hostel, 2nd Floor", value: "HI-Hostel, 2nd Floor"},
      ],
      EditRoomSel: [
        {label: "Select", value: "Select"},
        {label: "20", value: "20"},
        {label: "22", value: "22"},
        {label: "24", value: "24"},
        {label: "26", value: "26"},
      ],
      title: "Edit Student",
      text: "Dashboard",
      text1: "Students",
      text2: "Edit Student",
      tags: ["English", "Spanish"],
      tagsOne: ["Allergy", "Skin Allergy"],
      tagsTwo: ["Medecine Name"],
    };
  },
};
</script>
