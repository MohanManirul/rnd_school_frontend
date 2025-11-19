<template>
  <!-- Add Syllabus -->
  <div class="modal fade" id="add_syllabus">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Subject Group</h4>
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
                  <label class="form-label">Class</label>
                  <vue3-select
                    :options="ClassSylla"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue3-select
                    :options="SectionSelc"
                    v-model="selectedThree"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Subject Group</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Subject Group"
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
              Add Subject Group
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Syllabus -->

  <!-- Edit Syllabus -->
  <div class="modal fade" id="edit_syllabus">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Subject Group</h4>
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
                  <label class="form-label">Class</label>
                  <vue3-select
                    :options="EditClassSylla"
                    v-model="selectedOne"
                    placeholder="I"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Section</label>
                  <vue3-select
                    :options="EditectionSelc"
                    v-model="selectedTwo"
                    placeholder="A"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Save Changes</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Subject Group"
                    value="I, C English"
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
  <!-- /Edit Syllabus	-->

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
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      ClassSylla: [
        {label: "Select", value: "Select"}, 
        {label: "I", value: "I"}, 
        {label: "II", value: "II"}, 
        {label: "III", value: "III"}
      ],
      SectionSelc: [
        {label: "Select", value: "Select"}, 
        {label: "A", value: "A"}, 
        {label: "B", value: "B"}, 
        {label: "C", value: "C"}
      ],
      EditClassSylla: [
        {label: "Select", value: "Select"}, 
        {label: "I", value: "I"}, 
        {label: "II", value: "II"}, 
        {label: "III", value: "III"}
      ],
      EditectionSelc: [
        {label: "Select", value: "Select"},
        {label: "A", value: "A"}, 
        {label: "B", value: "B"}, 
        {label: "C", value: "C"}
      ],
    };
  },
};
</script>
