<template>
  <!-- Add Assign New Vehicle -->
  <div class="modal fade" id="add_assign_vehicle">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Assign New Vehicle</h4>
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
                  <label class="form-label">Select Route</label>
                  <vue3-select
                    :options="AssignRoute"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Select Pickup Point</label>
                  <vue3-select
                    :options="StreePoint"
                    v-model="selectedOne"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-0">
                  <label class="form-label">Select Vehicle</label>
                  <vue3-select
                    :options="SeleVehicle"
                    v-model="selectedTwo"
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
              Assign Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Assign New Vehicle -->

  <!-- Edit Assign New Vehicle -->
  <div class="modal fade" id="edit_assign_vehicle">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Assign Vehicle</h4>
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
                  <label class="form-label">Select Route</label>
                  <vue3-select
                    :options="EditAssignRoute"
                    v-model="selectedThree"
                    placeholder="Seattle"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Select Pickup Point</label>
                  <vue3-select
                    :options="EditStreePoint"
                    v-model="selectedFour"
                    placeholder="2233 Wood Street, Slidell, LA"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Select Vehicle</label>
                  <vue3-select
                    :options="EditSeleVehicle"
                    v-model="selectedFive"
                    placeholder="8930"
                  />
                </div>
                <div class="assigned-driver">
                  <h6>Assigned Driver</h6>
                  <div class="assigned-driver-info">
                    <span class="driver-img"
                      ><img src="@/assets/img/parents/parent-01.jpg" alt="Img"
                    /></span>
                    <div>
                      <h5>Thomas</h5>
                      <span>+1 64044 748904</span>
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
              Assign Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Edit Assign New Vehicle -->

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
export default {
  data() {
    return {
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      selectedFive: [],
      AssignRoute: [
        {label: "Select", value: "Select"}, 
        {label: "Seattle", value: "Seattle"}, 
        {label: "Camden", value: "Camden"}, 
        {label: "Detroit", value: "Detroit"}
      ],
      StreePoint: [
        {label: "Select", value: "Select"},
        {label: "2233 Wood Street, Slidell, LA", value: "2233 Wood Street, Slidell, LA"},
        {label: "3167 Stadium Drive, Worcester, MA", value: "3167 Stadium Drive, Worcester, MA"},
        {label: "4650 Aviation Way, Los Angeles, CA", value: "4650 Aviation Way, Los Angeles, CA"},
      ],
      SeleVehicle: [
        {label: "Select", value: "Select"}, 
        {label: "8930", value: "8930"}, 
        {label: "7895", value: "7895"}, 
        {label: "6465", value: "6465"}
      ],
      EditAssignRoute: [
        {label: "Select", value: "Select"}, 
        {label: "Seattle", value: "Seattle"}, 
        {label: "Camden", value: "Camden"}, 
        {label: "Detroit", value: "Detroit"}
      ],
      EditStreePoint: [
        {label: "Select", value: "Select"},
        {label: "2233 Wood Street, Slidell, LA", value: "2233 Wood Street, Slidell, LA"},
        {label: "3167 Stadium Drive, Worcester, MA", value: "3167 Stadium Drive, Worcester, MA"},
        {label: "4650 Aviation Way, Los Angeles, CA", value: "4650 Aviation Way, Los Angeles, CA"},
      ],
      EditSeleVehicle: [
        {label: "Select", value: "Select"}, 
        {label: "8930", value: "8930"}, 
        {label: "7895", value: "7895"}, 
        {label: "6465", value: "6465"}
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/transport/transport-assign-vehicle");
    },
  },
};
</script>
