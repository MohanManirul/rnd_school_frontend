<template>
  <!-- Note Unit -->
  <div class="modal fade" id="note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add New Note</h4>
              </div>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body custom-modal-body">
              <form>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3">
                      <label class="form-label">Note Title</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <label class="form-label">User</label>
                      <vue3-select
                        :options="User"
                        v-model="selected"
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">Tag</label>
                      <vue3-select
                        :options="Tag"
                        v-model="selectedOne"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">Priority</label>
                      <vue3-select
                        :options="Priority"
                        v-model="selectedTwo"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3 summer-description-box notes-summernote">
                      <label class="form-label">Descriptions</label>
                      <div id="summernote">
                        <div class="editor three-line">
                          <div class="editor-container">
                            <div ref="editorRef" class="quill-editor" />
                          </div>
                        </div>
                      </div>
                      <p>Maximum 60 Characters</p>
                    </div>
                  </div>
                </div>

                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-submit"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Note Unit -->

  <!-- Note Unit -->
  <div class="modal fade" id="edit-note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Edit Note</h4>
              </div>
              <div class="edit-note-head d-flex align-items-center">
                <a href="javascript:void(0);" class="me-2">
                  <span>
                    <i data-feather="trash-2"></i>
                  </span>
                </a>
                <a href="javascript:void(0);" class="me-2">
                  <span>
                    <i data-feather="star"></i>
                  </span>
                </a>
                <a href="javascript:void(0);" class="me-2">
                  <span>
                    <i data-feather="eye"></i>
                  </span>
                </a>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div class="modal-body custom-modal-body">
              <form>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3">
                      <label>Note Title</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Meet Lisa to discuss project details"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      <label class="form-label">Assignee</label>
                      <vue3-select
                        :options="Assigne"
                        v-model="selectedThree"
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">Tag</label>
                      <vue3-select
                        :options="Tags"
                        v-model="selectedFour"
                        placeholder="Onhold"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">Priority</label>
                      <vue3-select
                        :options="Prioritys"
                        v-model="selectedFive"
                        placeholder="Low"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3 summer-description-box notes-summernote">
                      <label class="form-label">Descriptions</label>
                      <div id="summernote2">
                        <div class="editor three-line">
                          <div class="editor-container">
                            <div ref="editorRefOne" class="quill-editor" />
                          </div>
                        </div>
                      </div>
                      <p>Maximum 60 Characters</p>
                    </div>
                  </div>
                </div>

                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-submit"
                    data-bs-dismiss="modal"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Note Unit -->

  <!-- Delete Unit -->
  <div class="modal fade" id="delete-note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="delete-popup">
              <div class="delete-image text-center mx-auto">
                <img
                  src="@/assets/img/icons/close-circle.png"
                  alt="Img"
                  class="img-fluid"
                />
              </div>
              <div class="delete-heads">
                <h4>Are You Sure?</h4>
                <p>
                  Do you really want to delete this item, This process cannot be
                  undone.
                </p>
              </div>
              <div class="modal-footer-btn delete-footer">
                <a
                  href="javascript:void(0);"
                  class="btn btn-cancel me-2"
                  data-bs-dismiss="modal"
                  >Cancel</a
                >
                <a href="javascript:void(0);" class="btn btn-submit">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Unit -->

  <!-- View Unit -->
  <div class="modal fade" id="view-note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title edit-page-title">
                <h4>Notes</h4>
                <p>Personal</p>
              </div>
              <div class="edit-noted-head d-flex align-items-center">
                <a href="javascript:void(0);">
                  <span>
                    <i data-feather="trash-2"></i>
                  </span>
                </a>
                <a href="javascript:void(0);" class="me-2">
                  <span>
                    <i data-feather="star"></i>
                  </span>
                </a>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div class="modal-body custom-modal-body">
              <form>
                <div class="row">
                  <div class="col-12">
                    <div class="edit-head-view">
                      <h6>Take a hike at a local park</h6>
                      <p>
                        Hiking is a long, vigorous walk, usually on trails or
                        footpaths in the countryside. Walking for pleasure
                        developed in Europe during the eighteenth century.
                        Religious pilgrimages have existed much longer but they
                        involve walking long distances for a spiritual purpose
                        associated with specific religions and also we achieve
                        inner peace while we hike at a local park.
                      </p>

                      <p class="badged low">
                        <i class="fas fa-circle"></i> Low
                      </p>
                    </div>
                    <div class="modal-footer-btn edit-footer-menu">
                      <button
                        type="button"
                        class="btn btn-cancel me-2"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Unit -->
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
  data() {
    return {
      content: "",
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      selectedFive: [],
      User: [
        { label: "Choose", value: "Choose" },
        { label: "Recent1", value: "Recent1" },
        { label: "Recent2", value: "Recent2" },
      ],
      Tag: [
        { label: "Select", value: "Select" },
        { label: "Recent1", value: "Recent1" },
        { label: "Recent2", value: "Recent2" },
      ],
      Priority: [
        { label: "Select", value: "Select" },
        { label: "Recent1", value: "Recent1" },
        { label: "Recent2", value: "Recent2" },
      ],
      Assigne: [
        { label: "Choose", value: "Choose" },
        ,
        { label: "Recent1", value: "Recent1" },
        { label: "Recent2", value: "Recent2" },
      ],
      Tags: [
        { label: "Onhold", value: "Onhold" },
        { label: "Onhold", value: "Onhold" },
        { label: "Onhold", value: "Onhold" },
      ],
      Prioritys: [
        { label: "High", value: "High" },
        { label: "Medium", value: "Medium" },
        { label: "Low", value: "Low" },
      ],
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
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
