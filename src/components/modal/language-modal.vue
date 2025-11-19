<template>
  <!-- Add Language -->
  <div class="modal fade" id="add_language">
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Add Language</h4>
            <button
              type="button"
              class="btn-close"
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
                    <label class="col-form-label">Language Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Language Name"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Code</label>
                    <input type="text" class="form-control" placeholder="Enter Code" />
                  </div>
                  <div
                    class="modal-satus-toggle d-flex align-items-center justify-content-between mb-3"
                  >
                    <div class="status-title">
                      <h5>RTL</h5>
                      <p>Change the Status by toggle</p>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user5" class="check" />
                      <label for="user5" class="checktoggle"> </label>
                    </div>
                  </div>
                  <div
                    class="modal-satus-toggle d-flex align-items-center justify-content-between"
                  >
                    <div class="status-title">
                      <h5>Status</h5>
                      <p>Change the Status by toggle</p>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user6" class="check" />
                      <label for="user6" class="checktoggle"> </label>
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
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Add Language
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Language -->

  <!-- Edit Language -->
  <div class="modal fade" id="edit_language">
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Edit Language</h4>
            <button
              type="button"
              class="btn-close"
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
                    <label class="col-form-label">Language Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Language Name"
                      value="English"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Code</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Code"
                      value="en"
                    />
                  </div>
                  <div
                    class="modal-satus-toggle d-flex align-items-center justify-content-between mb-3"
                  >
                    <div class="status-title">
                      <h5>RTL</h5>
                      <p>Change the Status by toggle</p>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user7" class="check" checked />
                      <label for="user7" class="checktoggle"> </label>
                    </div>
                  </div>
                  <div
                    class="modal-satus-toggle d-flex align-items-center justify-content-between"
                  >
                    <div class="status-title">
                      <h5>Status</h5>
                      <p>Change the Status by toggle</p>
                    </div>
                    <div class="status-toggle modal-status">
                      <input type="checkbox" id="user8" class="check" checked />
                      <label for="user8" class="checktoggle"> </label>
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
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Language -->

  <!-- Language Setup -->
  <div class="modal fade" id="language_setup">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Language Setup</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <!-- Table Filter -->
          <div class="d-flex align-items-center justify-content-between flex-wrap">
            <div class="d-flex align-items-center">
              <h5 class="mb-3 me-2">Search Criteria</h5>
              <div class="dropdown mb-3 me-2">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light bg-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  ><i class="ti ti-filter me-2"></i>Filter</a
                >
                <div class="dropdown-menu drop-width">
                  <form>
                    <div class="d-flex align-items-center border-bottom p-3">
                      <h4>Filter</h4>
                    </div>
                    <div class="p-3 pb-0 border-bottom">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label">Select Language</label>
                            <vue3-select
                              v-model="selectedFour"
                              :options="InvMod"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-3 d-flex align-items-center justify-content-end">
                      <a href="#" class="btn btn-light me-3">Reset</a>
                      <button type="submit" class="btn btn-primary">Apply</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="dropdown mb-3">
              <a
                href="javascript:void(0);"
                class="btn btn-outline-light bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
                ><i class="ti ti-sort-ascending-2 me-2"></i>Sort by A-Z
              </a>
              <ul class="dropdown-menu p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1 active">
                    Ascending
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    Descending
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    Recently Viewed
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">
                    Recently Added
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- /Table Filter -->

          <div class="table-responsive">
            <div class="custom-table language-setup-table">
              <table class="table">
                <thead>
                  <tr>
                    <th>Default Phrases</th>
                    <th>Change Phrases</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Description</td>
                    <td>
                      <input type="text" class="form-control" value="Text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>
                      <input type="text" class="form-control" value="Text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>
                      <input type="text" class="form-control" value="Text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>
                      <input type="text" class="form-control" value="Text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>
                      <input type="text" class="form-control" value="Text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>
                      <input type="text" class="form-control" value="Text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>
                      <input type="text" class="form-control" value="Text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>
                      <input type="text" class="form-control" value="Text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>
                      <input type="text" class="form-control" value="Text" />
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>
                      <input type="text" class="form-control" value="Text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a href="#" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Language Setup -->

  <!-- Import File -->
  <div class="modal fade" id="import_file">
    <div class="modal-dialog modal-dialog-centered custom-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <div class="modal-header">
            <h4 class="modal-title">Import Files</h4>
            <button
              type="button"
              class="btn-close"
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
                    <label class="col-form-label">Module Name</label>
                    <vue3-select
                      v-model="selected"
                      :options="StudModue"
                      placeholder="Select"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Language</label>
                    <vue3-select
                      v-model="selectedOne"
                      :options="ChinSel"
                      placeholder="Select"
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
                Import
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Import File -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered custom-modal promote-modal">
      <div class="modal-content">
        <div class="modal-wrapper">
          <form @submit.prevent="submitForm">
            <div class="promote-modal-body text-center">
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
                <button
                  type="submit"
                  class="btn btn-danger"
                  id="toprightToastBtn"
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
  </div>
  <!-- /Delete Modal -->
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedFour: null,
      isDropdownVisible: false,
      InvMod: [
        { label: "English", value: "English" },
        { label: "Arabic", value: "Arabic" },
        { label: "Chinese", value: "Chinese" },
      ],
      StudModue: [
        { label: "Select", value: "Select" },
        { label: "Students", value: "Students" },
        { label: "Parents", value: "Parents" },
        { label: "Teachers", value: "Teachers" },
      ],
      ChinSel: [
        { label: "Select", value: "Select" },
        { label: "English", value: "English" },
        { label: "Arabic", value: "Arabic" },
        { label: "Chinese", value: "Chinese" },
        { label: "Hindi", value: "Hindi" },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    submitForm() {
      this.$router.push("/website-settings/language");
    },
  },
};
</script>
