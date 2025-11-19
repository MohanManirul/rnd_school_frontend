<template>
  <!-- Ticket View -->
  <div class="offcanvas offcanvas-end ticket-popup" tabindex="-1" id="ticket-reply">
    <div class="offcanvas-header d-flex align-items-center justify-content-between">
      <div class="ticket-header-title">
        <h5>Laptop Issue</h5>
        <div class="ticket-drops drop-down">
          <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown"
            >Open</a
          >
          <div class="dropdown-menu">
            <ul>
              <li>
                <a href="javascript:void(0);"> Open </a>
              </li>
              <li>
                <a href="javascript:void(0);"> Closed </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <h5 class="text-primary me-2">IT Support</h5>
        <button
          type="button"
          class="close-btn"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="ti ti-x"></i>
        </button>
      </div>
    </div>
    <div class="offcanvas-body">
      <div class="issue-wrap">
        <div class="issue-information">
          <div class="d-flex align-items-center">
            <span class="badge bg-pending badge-id">#TK0003</span>
            <span class="badge bg-success"><i class="ti ti-circle-filled"></i>Low</span>
          </div>
          <ul>
            <li>
              <img src="@/assets/img/teachers/teacher-02.jpg" alt="img" />Assigned to
              <span>Daniel</span>
            </li>
            <li><i class="ti ti-calendar-bolt"></i>Updated 22 hours ago</li>
          </ul>
        </div>
        <div class="issue-select">
          <vue3-select
            v-model="selectedFour"
            :options="FourPublicMark"
            placeholder="Mark as Private"
          />
        </div>
      </div>
      <div class="ticket-reply">
        <ul class="reply-list">
          <li class="reply-main">
            <div class="reply-wrap">
              <div class="reply-info">
                <img src="@/assets/img/members/members-02.jpg" alt="img" />
                <div class="reply-note">
                  <p>
                    Note! This ticket is closed. If you want to re-open it, just post a
                    reply below.
                  </p>
                  <a href="javascript:void(0);"><i class="ti ti-x"></i></a>
                </div>
              </div>
              <div class="summernote">
                <div class="editor three-line">
                  <div class="editor-container">
                    <div ref="editorRef" class="quill-editor" />
                  </div>
                </div>
              </div>
              <div class="editor-btn">
                <a href="javascript:void(0);" class="btn btn-light"
                  ><i class="ti ti-pin"></i>Attachment</a
                >
                <a href="javascript:void(0);" class="btn btn-primary">Post Comment</a>
              </div>
            </div>
          </li>
          <li>
            <div class="reply-wrap">
              <div class="reply-info">
                <img src="@/assets/img/members/members-01.jpg" alt="img" />
                <div class="reply-user">
                  <h5>James Hendriques</h5>
                  <p><i class="ti ti-calendar-bolt"></i>Updated 5 hours ago</p>
                </div>
              </div>
              <h5 class="mb-1">Impact on Work</h5>
              <p>
                This issue disrupts meetings, delays task completion, and affects my
                overall productivity.
              </p>
              <div class="reply-imgs">
                <span class="badge badge-light"
                  >Screenshot.png<i class="ti ti-download"></i
                ></span>
              </div>
              <div class="reply-btn">
                <a href="javascript:void(0);" class="reply"
                  ><i class="ti ti-reload"></i>Reply</a
                >
                <a href="javascript:void(0);"
                  ><i class="ti ti-message-share"></i>1 Comments</a
                >
              </div>
              <div class="summernote">
                <div class="editor three-line">
                  <div class="editor-container">
                    <div ref="editorRefone" class="quill-editor" />
                  </div>
                </div>
              </div>
              <div class="editor-btn">
                <a href="javascript:void(0);" class="btn btn-light"
                  ><i class="ti ti-pin"></i>Attachment</a
                >
                <a href="javascript:void(0);" class="btn btn-primary">Post Comment</a>
              </div>
            </div>
            <ul>
              <li>
                <div class="reply-wrap">
                  <div class="reply-info">
                    <img src="@/assets/img/members/members-09.jpg" alt="img" />
                    <div class="reply-user">
                      <h5>Support Agent Angio</h5>
                      <p><i class="ti ti-calendar-bolt"></i>Updated 5 hours ago</p>
                    </div>
                  </div>
                  <p>
                    Switch on the side panel & update the OS, Login in to the device
                    manager and update the password
                  </p>
                  <div class="reply-imgs">
                    <span class="badge badge-light"
                      >Screenshot.png<i class="ti ti-download"></i
                    ></span>
                  </div>
                  <div class="reply-btn">
                    <a href="javascript:void(0);" class="reply"
                      ><i class="ti ti-reload"></i>Reply</a
                    >
                    <a href="javascript:void(0);"
                      ><i class="ti ti-message-share"></i>5 Comments</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div class="reply-wrap">
              <div class="reply-info">
                <img src="@/assets/img/members/members-02.jpg" alt="img" />
                <div class="reply-user">
                  <h5>Marilyn Siegle</h5>
                  <p><i class="ti ti-calendar-bolt"></i>Updated 6 hours ago</p>
                </div>
              </div>
              <p>
                Check the System and Application logs in the Event Viewer for warnings or
                errors that coincide with the times the freezes occur.
              </p>
              <div class="reply-imgs">
                <span class="badge badge-light"
                  >Screenshot.png<i class="ti ti-download"></i
                ></span>
                <span class="badge badge-light"
                  >Screenshot1.png<i class="ti ti-download"></i
                ></span>
                <span class="badge badge-light"
                  >Screenshot2.png<i class="ti ti-download"></i
                ></span>
                <span class="badge badge-light"
                  >Screenshot3.png<i class="ti ti-download"></i
                ></span>
              </div>
              <div class="reply-btn">
                <a href="javascript:void(0);" class="reply"
                  ><i class="ti ti-reload"></i>Reply</a
                >
                <a href="javascript:void(0);"
                  ><i class="ti ti-message-share"></i>7 Comments</a
                >
              </div>
            </div>
          </li>
          <li>
            <div class="reply-wrap">
              <div class="reply-info">
                <img src="@/assets/img/members/members-05.jpg" alt="img" />
                <div class="reply-user">
                  <h5>Brian Foust</h5>
                  <p><i class="ti ti-calendar-bolt"></i>Updated 8 hours ago</p>
                </div>
              </div>
              <p>
                Check for any pending updates and installing them to see if it resolves
                the issue
              </p>
              <div class="reply-btn">
                <a href="javascript:void(0);" class="reply"
                  ><i class="ti ti-reload"></i>Reply</a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- /Ticket View -->

  <!-- Add Ticket -->
  <div class="modal fade" id="add_ticket">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Ticket</h4>
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
                  <label class="form-label">Title</label>
                  <input type="text" class="form-control" placeholder="Enter Title" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Event Category</label>
                  <vue3-select
                    v-model="selected"
                    :options="IssueSel"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Subject</label>
                  <input type="text" class="form-control" placeholder="Enter Subject" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Assign To</label>
                  <vue3-select
                    v-model="selectedOne"
                    :options="Teresa"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Ticket Description</label>
                  <textarea class="form-control" placeholder="Add Question"></textarea>
                </div>
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select
                    v-model="selectedTwo"
                    :options="SelectProi"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Status</label>
                  <vue3-select
                    v-model="selectedThree"
                    :options="SelectRepo"
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
              Add Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Ticket -->
</template>
<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      IssueSel: [
        { label: "Select", value: "Select" },
        { label: "Internet Issue", value: "Internet Issue" },
        { label: "Redistribute", value: "Redistribute" },
        { label: "Computer", value: "Computer" },
        { label: "Complaint", value: "Complaint" },
      ],
      Teresa: [
        { label: "Select", value: "Select" },
        { label: "Teresa", value: "Teresa" },
        { label: "James", value: "James" },
        { label: "Daniel", value: "Daniel" },
        { label: "Jacquelin", value: "Jacquelin" },
      ],
      SelectProi: [
        { label: "Select", value: "Select" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
        { label: "Medium", value: "Medium" },
      ],
      SelectRepo: [
        { label: "Select", value: "Select" },
        { label: "Closed", value: "Closed" },
        { label: "Reopened", value: "Reopened" },
        { label: "Inprogesss", value: "Inprogesss" },
      ],
      FourPublicMark: [
        { label: "Mark as Public", value: "Mark as Public" },
        { label: "Mark as Private", value: "Mark as Private" },
      ],
    };
  },
  mounted() {
    this.initQuill();
  },
  methods: {
    submitForm() {
      this.$router.push("/support/ticket-list");
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
