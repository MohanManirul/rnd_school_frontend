<template>
  <!-- Add Event Modal -->
  <div class="modal fade" id="add_event">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Event</h4>
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
          <div class="modal-body pb-0">
            <div class="mb-3">
              <label class="form-label"
                >Event Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Event Date <span class="text-danger">*</span></label
              >
              <div class="cal-icon">
                <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#" class="btn btn-light me-2" data-bs-dismiss="modal"
              >Cancel</a
            >
            <button type="submit" class="btn btn-primary">Add Event</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Event Modal -->

  <!-- Add Category Modal -->
  <div class="modal fade" id="add_new_event">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Category</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-hidden="true"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label class="form-label">Category Name</label>
              <input
                class="form-control form-white"
                placeholder="Enter name"
                type="text"
                name="category-name"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Choose Category Color</label>
              <vue3-select
                :options="Category"
                v-model="selected"
                placeholder="Select"
              />
            </div>
            <div class="submit-section">
              <button
                type="submit"
                class="btn btn-primary save-category submit-btn"
                data-dismiss="modal"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Category Modal -->
</template>

<script>
import { ref } from 'vue';
const valueOne = ref();

export default {
  data() {
    return {
      valueOne,
      selected: "Success",
      Category: [
        { label: "Success", value: "Success" },
        { label: "Danger", value: "Danger" },
        { label: "Info", value: "Info" },
        { label: "Primary", value: "Primary" },
        { label: "Warning", value: "Warning" },
        { label: "Inverse", value: "Inverse" },
      ],
    };
  },
};
</script>
