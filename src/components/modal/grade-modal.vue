<template>
  <!-- Add Grade -->
  <div class="modal fade" id="add_grade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Grade</h4>
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
                  <label class="form-label">Grade</label>
                  <input type="text" class="form-control" placeholder="Enter Grade" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Marks From(%)</label>
                  <vue3-select
                    :options="MarkSelect"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Marks Upto(%)</label>
                  <vue3-select :options="MarkUpSel" v-model="selected1" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Grade Points</label>
                  <vue3-select :options="GradeP" v-model="selected2" placeholder="Select" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue3-select :options="StatSele" v-model="selected3" placeholder="Select" />
                </div>
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Add Comment"
                  ></textarea>
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
              Add Grade
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Grade -->

  <!-- Edit Grade -->
  <div class="modal fade" id="edit_grade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Grade</h4>
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
                  <label class="form-label">Grade</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Grade"
                    value="O"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Marks From(%)</label>
                  <vue3-select
                    :options="EditMarkSelect"
                    v-model="selected4"
                    placeholder="90"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Marks Upto(%)</label>
                  <vue3-select
                    :options="EditMarkUpSel"
                    v-model="selected5"
                    placeholder="100"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Grade Points</label>
                  <vue3-select :options="EditGradeP" v-model="selected6" placeholder="0" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue3-select
                    :options="EditStatSele"
                    v-model="selected7"
                    placeholder="Active"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Add Comment"
                  ></textarea>
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
  <!-- Edit Grade -->

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
      selected1: [],
      selected2: [],
      selected3: [],
      selected4: [],
      selected5: [],
      selected6: [],
      selected7: [],
      MarkSelect: [
        {label: "Select", value: "Select"}, 
        {label: "90", value: "90"}
      ],
      MarkUpSel: [
        {label: "Select", value: "Select"},  
        {label: "100", value: "100"},  
      ],
      GradeP: [
        {label: "Select", value: "Select"},  
        {label: "0", value: "0"},  
        {label: "1", value: "1"},  
        {label: "2", value: "2"},  
        {label: "3", value: "3"},  
        {label: "4", value: "4"},  
        {label: "5", value: "5"},  
        {label: "6", value: "6"},  
        {label: "7", value: "7"},  
      ],
      StatSele: [
        {label: "Select", value: "Select"},   
        {label: "Active", value: "Active"}, 
        {label: "Inactive", value: "Inactive"}
      ],
      EditMarkSelect: [
        {label: "Select", value: "Select"}, 
        {label: "90", value: "90"}
      ],
      EditMarkUpSel: [
        {label: "Select", value: "Select"},  
        {label: "100", value: "100"},  
      ],
      EditGradeP: [
        {label: "Select", value: "Select"},  
        {label: "0", value: "0"},  
        {label: "1", value: "1"},  
        {label: "2", value: "2"},  
        {label: "3", value: "3"},  
        {label: "4", value: "4"},  
        {label: "5", value: "5"},  
        {label: "6", value: "6"},  
        {label: "7", value: "7"},  
      ],
      EditStatSele: [
        {label: "Select", value: "Select"},   
        {label: "Active", value: "Active"}, 
        {label: "Inactive", value: "Inactive"}
      ],
    };
  },
};
</script>
