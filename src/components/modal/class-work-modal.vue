<template>
  <!-- Add Home Work -->
  <div class="modal fade" id="add_home_work">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Home Work</h4>
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
                  <input type="text" class="form-control" placeholder="Enter Class" />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Section</label>
                      <vue3-select :options="SecAb" v-model="selected" placeholder="Select" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Subject</label>
                      <vue3-select :options="PhySubj" v-model="selectedOne" placeholder="Select" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Homework Date</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Homework Date"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Submission Date</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Submission Date"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Attachments</label>
                  <input type="text" class="form-control" placeholder="Placeholders" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Attachments</label>
                  <textarea
                    class="form-control"
                    placeholder="Add Comment"
                    rows="4"
                  ></textarea>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="status-title">
                    <h5>Status</h5>
                    <p>Change the Status by toggle</p>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-sm"
                    />
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
              Add Homework
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Home Work -->

  <!-- Edit Home Work -->
  <div class="modal fade" id="edit_home_work">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Home Work</h4>
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
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Class"
                    value="I"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Section</label>
                      <vue3-select :options="EditSecAb" v-model="selectedTwo" placeholder="A" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Subject</label>
                      <vue3-select
                        :options="EditPhySubj"
                        v-model="selectedThree"
                        placeholder="English"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Homework Date</label>
                      <input type="text" class="form-control" placeholder="10 May 2024" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Submission Date</label>
                      <input type="text" class="form-control" placeholder="12 May 2024" />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Attachments</label>
                  <input type="text" class="form-control" placeholder="Placeholders" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Attachments</label>
                  <textarea
                    class="form-control"
                    placeholder="Add Comment"
                    rows="4"
                  ></textarea>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="status-title">
                    <h5>Status</h5>
                    <p>Change the Status by toggle</p>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-sm2"
                    />
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
  <!-- /Edit Home Work -->

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
      SecAb: [
        {label: "Select", value: "Select"}, 
        {label: "A", value: "A"}, 
        {label: "B", value: "B"}, 
        {label: "C", value: "C"}
      ],
      PhySubj: [
        {label: "Select", value: "Select"},  
        {label: "English", value: "English"},  
        {label: "Physics", value: "Physics"},  
        {label: "Chemsitry", value: "Chemsitry"},  
        {label: "Biology", value: "Biology"},  
      ],
      EditSecAb: [
        {label: "Select", value: "Select"}, 
        {label: "A", value: "A"}, 
        {label: "B", value: "B"}, 
        {label: "C", value: "C"}
      ],
      EditPhySubj: [
        {label: "Select", value: "Select"},  
        {label: "English", value: "English"},  
        {label: "Physics", value: "Physics"},  
        {label: "Chemsitry", value: "Chemsitry"},  
        {label: "Biology", value: "Biology"},  
      ],
    };
  },
};
</script>
