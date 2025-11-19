<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="pe-1 mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-light bg-white btn-icon me-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Refresh"
              data-bs-original-title="Refresh"
            >
              <i class="ti ti-refresh"></i>
            </a>
          </div>
          <div class="pe-1 mb-2">
            <button
              type="button"
              class="btn btn-outline-light bg-white btn-icon me-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              aria-label="Print"
              data-bs-original-title="Print"
            >
              <i class="ti ti-printer"></i>
            </button>
          </div>
          <div class="dropdown me-2 mb-2">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-light fw-medium d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <i class="ti ti-file-export me-2"></i>Export
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-file-type-pdf me-1"></i>Export as PDF</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-file-type-xls me-1"></i>Export as Excel
                </a>
              </li>
            </ul>
          </div>
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-primary d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_blog"
              ><i class="ti ti-square-rounded-plus me-2"></i>Add Blog</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <blog-comments-filter></blog-comments-filter>
        <div class="card-body p-0 py-3">
          <!-- Student List -->
          <div class="custom-datatable-filter table-responsive">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="dataTables_length" id="DataTables_Table_0_length">
                  <label
                    >Row Per Page
                    <select
                      name="DataTables_Table_0_length"
                      aria-controls="DataTables_Table_0"
                      class="form-select form-select-sm"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    Entries</label
                  >
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div id="DataTables_Table_0_filter" class="dataTables_filter text-end">
                  <label>
                    <input
                      type="search"
                      class="form-control form-control-sm"
                      placeholder="Search"
                      aria-controls="DataTables_Table_0"
                  /></label>
                </div>
              </div>
            </div>
            <table class="table datatable">
              <thead class="thead-light">
                <tr>
                  <th class="no-sort">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" id="select-all" />
                    </div>
                  </th>
                  <th>Comment</th>
                  <th>Date</th>
                  <th>Review</th>
                  <th>Blog</th>
                  <th>By</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td class="text-content">
                    I absolutely loved this article!... The insights
                  </td>
                  <td class="text-gray-9">25 May 2024</td>
                  <td>
                    <div class="rating">
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <span class="rating-rate">5.0</span>
                    </div>
                  </td>
                  <td class="text-gray-9 text-content">
                    5 Effective Strategies to Boost Your Productivity
                  </td>
                  <td>Rubiaana</td>
                  <td>
                    <vue3-select
                      v-model="selected"
                      :options="Unpublish"
                      placeholder="Unpublish"
                    />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      class="delete-icon"
                      ><i class="ti ti-trash-x"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td class="text-content">Self-improvement is a continuous journey</td>
                  <td class="text-gray-9">15 May 2024</td>
                  <td>
                    <div class="rating">
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <span class="rating-rate">5.0</span>
                    </div>
                  </td>
                  <td class="text-gray-9 text-content">
                    Personal development and self-improvement
                  </td>
                  <td>Jordan</td>
                  <td>
                    <vue3-select
                      v-model="selectedOne"
                      :options="OneUnpublish"
                      placeholder="Unpublish"
                    />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      class="delete-icon"
                      ><i class="ti ti-trash-x"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td class="text-content">
                    Prioritizing tasks makes a huge difference.
                  </td>
                  <td class="text-gray-9">12 May 2024</td>
                  <td>
                    <div class="rating">
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <span class="rating-rate">5.0</span>
                    </div>
                  </td>
                  <td class="text-gray-9 text-content">Prioritize Your Tasks</td>
                  <td>Daniel</td>
                  <td>
                    <vue3-select
                      v-model="selectedTwo"
                      :options="TwoUnpublish"
                      placeholder="Unpublish"
                    />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      class="delete-icon"
                      ><i class="ti ti-trash-x"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td class="text-content">Turning off notifications helped me focus</td>
                  <td class="text-gray-9">27 Apr 2024</td>
                  <td>
                    <div class="rating">
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <span class="rating-rate">5.0</span>
                    </div>
                  </td>
                  <td class="text-gray-9 text-content">
                    How to eliminate Eliminate Distractions
                  </td>
                  <td>Letitia</td>
                  <td>
                    <vue3-select
                      v-model="selectedThree"
                      :options="ThreeUnpublish"
                      placeholder="Unpublish"
                    />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      class="delete-icon"
                      ><i class="ti ti-trash-x"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td class="text-content">Regular breaks improve my retention.</td>
                  <td class="text-gray-9">16 Apr 2024</td>
                  <td>
                    <div class="rating">
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <span class="rating-rate">5.0</span>
                    </div>
                  </td>
                  <td class="text-gray-9 text-content">
                    Steps to Take Regular Breaks before learning
                  </td>
                  <td>Henrita</td>
                  <td>
                    <vue3-select
                      v-model="selectedFour"
                      :options="FourUnpublish"
                      placeholder="Unpublish"
                    />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      class="delete-icon"
                      ><i class="ti ti-trash-x"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td class="text-content">Using a planner keeps me on track</td>
                  <td class="text-gray-9">10 Apr 2024</td>
                  <td>
                    <div class="rating">
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <span class="rating-rate">5.0</span>
                    </div>
                  </td>
                  <td class="text-gray-9 text-content">
                    Using Time Management Techniques
                  </td>
                  <td>Ziatan</td>
                  <td>
                    <vue3-select
                      v-model="selectedFive"
                      :options="FiveUnpublish"
                      placeholder="Unpublish"
                    />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      class="delete-icon"
                      ><i class="ti ti-trash-x"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td class="text-content">Great strategies for schools!</td>
                  <td class="text-gray-9">24 Mar 2024</td>
                  <td>
                    <div class="rating">
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <span class="rating-rate">5.0</span>
                    </div>
                  </td>
                  <td class="text-gray-9 text-content">
                    Effective Strategies for School Administration
                  </td>
                  <td>Jason</td>
                  <td>
                    <vue3-select
                      v-model="selectedSix"
                      :options="SixUnpublish"
                      placeholder="Unpublish"
                    />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      class="delete-icon"
                      ><i class="ti ti-trash-x"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td class="text-content">Excited to learn about tech in schools!</td>
                  <td class="text-gray-9">18 Mar 2024</td>
                  <td>
                    <div class="rating">
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <span class="rating-rate">5.0</span>
                    </div>
                  </td>
                  <td class="text-gray-9 text-content">
                    Implementing Technology in School Management
                  </td>
                  <td>Gloria</td>
                  <td>
                    <vue3-select
                      v-model="selectedSeven"
                      :options="SevenUnpublish"
                      placeholder="Unpublish"
                    />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      class="delete-icon"
                      ><i class="ti ti-trash-x"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td class="text-content">Communication is key in any organization</td>
                  <td class="text-gray-9">11 Mar 2024</td>
                  <td>
                    <div class="rating">
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <span class="rating-rate">5.0</span>
                    </div>
                  </td>
                  <td class="text-gray-9 text-content">
                    Building Strong Communication Channels in Schools
                  </td>
                  <td>Elizabeth</td>
                  <td>
                    <vue3-select
                      v-model="selectedEight"
                      :options="EightUnpublish"
                      placeholder="Unpublish"
                    />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      class="delete-icon"
                      ><i class="ti ti-trash-x"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td class="text-content">Improving staff training sounds promising!</td>
                  <td class="text-gray-9">20 Feb 2024</td>
                  <td>
                    <div class="rating">
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <span class="rating-rate">5.0</span>
                    </div>
                  </td>
                  <td class="text-gray-9 text-content">
                    Effective Staff Training and Development in Schools
                  </td>
                  <td>Michael</td>
                  <td>
                    <vue3-select
                      v-model="selectedNine"
                      :options="NineUnpublish"
                      placeholder="Unpublish"
                    />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      class="delete-icon"
                      ><i class="ti ti-trash-x"></i
                    ></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="checkboxs">
                      <input type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                  </td>
                  <td class="text-content">Safety is paramount in schools</td>
                  <td class="text-gray-9">19 Feb 2024</td>
                  <td>
                    <div class="rating">
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <i class="ti ti-star-filled filled"></i>
                      <span class="rating-rate">5.0</span>
                    </div>
                  </td>
                  <td class="text-gray-9 text-content">
                    Ensuring Safety and Security Measures in Schools
                  </td>
                  <td>Richard</td>
                  <td>
                    <vue3-select
                      v-model="selectedTen"
                      :options="TenUnpublish"
                      placeholder="Unpublish"
                    />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-modal"
                      class="delete-icon"
                      ><i class="ti ti-trash-x"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <blog-comments-modal></blog-comments-modal>
</template>
<script>
export default {
  data() {
    return {
      title: "Comments",
      text: "Dashboard",
      text1: "Pages",
      text2: "Comments",
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: null,
      selectedTen: null,
      Unpublish: [
        { label: "Unpublish", value: "Unpublish" },
        { label: "Publish", value: "Publish" },
      ],
      OneUnpublish: [
        { label: "Unpublish", value: "Unpublish" },
        { label: "Publish", value: "Publish" },
      ],
      TwoUnpublish: [
        { label: "Unpublish", value: "Unpublish" },
        { label: "Publish", value: "Publish" },
      ],
      ThreeUnpublish: [
        { label: "Unpublish", value: "Unpublish" },
        { label: "Publish", value: "Publish" },
      ],
      FourUnpublish: [
        { label: "Unpublish", value: "Unpublish" },
        { label: "Publish", value: "Publish" },
      ],
      FiveUnpublish: [
        { label: "Unpublish", value: "Unpublish" },
        { label: "Publish", value: "Publish" },
      ],
      SixUnpublish: [
        { label: "Unpublish", value: "Unpublish" },
        { label: "Publish", value: "Publish" },
      ],
      SevenUnpublish: [
        { label: "Unpublish", value: "Unpublish" },
        { label: "Publish", value: "Publish" },
      ],
      EightUnpublish: [
        { label: "Unpublish", value: "Unpublish" },
        { label: "Publish", value: "Publish" },
      ],
      NineUnpublish: [
        { label: "Unpublish", value: "Unpublish" },
        { label: "Publish", value: "Publish" },
      ],
      TenUnpublish: [
        { label: "Unpublish", value: "Unpublish" },
        { label: "Publish", value: "Publish" },
      ],
    };
  },
};
</script>
