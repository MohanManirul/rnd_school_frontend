<template>
  <!-- Add Blog -->
  <div class="modal fade" id="add_blog">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">New Blogs</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
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
                  <label class="form-label">Blog Title</label>
                  <input type="text" class="form-control" placeholder="Enter Title" />
                </div>
                <label class="form-label">Featured Image</label>
                <div
                  class="d-flex align-items-center upload-pic flex-wrap row-gap-3 mb-3"
                >
                  <div
                    class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames"
                  >
                    <i class="ti ti-photo-plus fs-16"></i>
                  </div>
                  <div class="profile-upload">
                    <div class="profile-uploader d-flex align-items-center">
                      <div class="drag-upload-btn mb-3">
                        Upload
                        <input type="file" class="form-control image-sign" multiple="" />
                      </div>
                      <a href="javascript:void(0);" class="btn btn-primary mb-3"
                        >Remove</a
                      >
                    </div>
                    <p>Upload image size 4MB, Format JPG, PNG, SVG</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Category</label>
                  <vue3-select
                    v-model="selected"
                    :options="EduCateSel"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Tags</label>
                  <vue3-select
                    v-model="selectedOne"
                    :options="GuideTag"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue3-select
                    v-model="selectedTwo"
                    :options="InacSta"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <div class="summernote">
                    <div class="editor three-line">
                      <div class="editor-container">
                        <div ref="editorRef" class="quill-editor" />
                      </div>
                    </div>
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
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Blog -->

  <!-- Edit Blog -->
  <div class="modal fade" id="edit_blog">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Blogs</h4>
          <button
            type="button"
            class="btn-close custom-btn-close"
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
                  <label class="form-label">Blog Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Title"
                    value="Personal development and self-improvement"
                  />
                </div>
                <label class="form-label">Featured Image</label>
                <div
                  class="d-flex align-items-center upload-pic flex-wrap row-gap-3 mb-3"
                >
                  <div
                    class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames"
                  >
                    <i class="ti ti-photo-plus fs-16"></i>
                  </div>
                  <div class="profile-upload">
                    <div class="profile-uploader d-flex align-items-center">
                      <div class="drag-upload-btn mb-3">
                        Upload
                        <input type="file" class="form-control image-sign" multiple="" />
                      </div>
                      <a href="javascript:void(0);" class="btn btn-primary mb-3"
                        >Remove</a
                      >
                    </div>
                    <p>Upload image size 4MB, Format JPG, PNG, SVG</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Category</label>
                  <vue3-select
                    v-model="selectedThree"
                    :options="EditEduCateSel"
                    placeholder="Advice"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Tags</label>
                  <vue3-select
                    v-model="selectedFour"
                    :options="EditGuideTag"
                    placeholder="Development"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue3-select
                    v-model="selectedFive"
                    :options="EditInacSta"
                    placeholder="Active"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label">Description</label>
                  <div class="summernote">
                    <div class="editor three-line">
                      <div class="editor-container">
                        <div ref="editorRefone" class="quill-editor" />
                      </div>
                    </div>
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
  <!-- /Edit Blog -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="submitForm">
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
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      content: "",
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      EduCateSel: [
        { label: "Select", value: "Select" },
        { label: "Education", value: "Education" },
        { label: "Advice", value: "Advice" },
        { label: "Academic", value: "Academic" },
        { label: "Clear Goals", value: "Clear Goals" },
      ],
      GuideTag: [
        { label: "Select", value: "Select" },
        { label: "Guide", value: "Guide" },
        { label: "Development", value: "Development" },
        { label: "Education", value: "Education" },
        { label: "Sports", value: "Sports" },
      ],
      InacSta: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      EduCateSelOne: [
        { label: "Select", value: "Select" },
        { label: "Education", value: "Education" },
        { label: "Advice", value: "Advice" },
        { label: "Academic", value: "Academic" },
        { label: "Clear Goals", value: "Clear Goals" },
      ],
      GuideTagOne: [
        { label: "Select", value: "Select" },
        { label: "Guide", value: "Guide" },
        { label: "Development", value: "Development" },
        { label: "Education", value: "Education" },
        { label: "Sports", value: "Sports" },
      ],
      InacStaOne: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    submitForm() {
      this.$router.push("/blogs/blog");
    },
    initQuill() {
      const quill = new Quill(this.$refs.editorRef, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });
      const quillone = new Quill(this.$refs.editorRefone, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });

      quill.on("text-change", () => {
        this.content = quill.root.innerHTML;
      });
      quillone.on("text-change", () => {
        this.content = quillone.root.innerHTML;
      });
    },
  },
};
</script>
