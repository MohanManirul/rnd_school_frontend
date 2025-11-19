<template>
  <div class="modal fade" id="login_detail">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Login Details</h4>
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
          <div class="student-detail-info">
            <span class="student-img"
              ><img src="@/assets/img/students/student-01.jpg" alt="Img"
            /></span>
            <div class="name-info">
              <h6>Janet <span>III, A</span></h6>
            </div>
          </div>
          <div class="table-responsive custom-table no-datatable_length">
            <table class="table datanew">
              <thead class="thead-light">
                <tr>
                  <th>User Type</th>
                  <th>User Name</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Parent</td>
                  <td>parent53</td>
                  <td>parent@53</td>
                </tr>
                <tr>
                  <td>Student</td>
                  <td>student20</td>
                  <td>stdt@53</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-dismiss="modal"
            >Cancel</a
          >
        </div>
      </div>
    </div>
  </div>

  <!-- Add Fees Collect -->
  <div class="modal fade" id="add_fees_collect">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title">Collect Fees</h4>
            <span class="badge badge-sm bg-primary ms-2">AD124556</span>
          </div>
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
            <div class="bg-light-300 p-3 pb-0 rounded mb-4">
              <div class="row align-items-center">
                <div class="col-lg-3 col-md-6">
                  <div class="d-flex align-items-center mb-3">
                    <router-link
                      to="/students/student-details"
                      class="avatar avatar-md me-2"
                    >
                      <img src="@/assets/img/students/student-01.jpg" alt="img" />
                    </router-link>
                    <router-link to="/students/student-details" class="d-flex flex-column"
                      ><span class="text-dark">Janet</span>III, A</router-link
                    >
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <span class="fs-12 mb-1">Total Outstanding</span>
                    <p class="text-dark">2000</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <span class="fs-12 mb-1">Last Date</span>
                    <p class="text-dark">25 May 2024</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <span class="badge badge-soft-danger"
                      ><i class="ti ti-circle-filled me-2"></i>Unpaid</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Fees Group</label>
                  <vue3-select
                    :options="FeesDetails"
                    v-model="selected"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Fees Type</label>
                  <vue3-select
                    :options="SeleFeesType"
                    v-model="selectedOne"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Amount</label>
                  <input type="text" class="form-control" placeholder="Enter Amout" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Collection Date</label>
                  <div class="date-pic">
                    <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Payment Type</label>
                  <vue3-select
                    :options="PayMentDetails"
                    v-model="selectedTwo"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Payment Reference No</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Payment Reference No"
                  />
                </div>
              </div>
              <div class="col-lg-12">
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
              <div class="col-lg-12">
                <div class="mb-0">
                  <label class="form-label">Notes</label>
                  <textarea
                    rows="4"
                    class="form-control"
                    placeholder="Add Notes"
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
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Pay Fees</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Fees Collect -->

   <!-- Apply Leave -->
		<div class="modal fade" id="apply_leave">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Apply Leave</h4>
						<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal"
							aria-label="Close">
							<i class="ti ti-x"></i>
						</button>
					</div>
					<form>
						<div class="modal-body">
							<div class="row">
								<div class="col-md-12">
									<div class="mb-3">
										<label class="form-label">Leave Date</label>
										<div class="date-pic">
											<a-date-picker v-model="valueTwo" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
										</div>
									</div>
									<div class="mb-3">
										<label class="form-label">Leave Type</label>
                    <vue3-select 
                      :options="Leave"
                      v-model="selectedThree"
                      placeholder="Select"
                    />
									</div>
									<div class="mb-3">
										<label class="form-label">Leave From date</label>
										<div class="date-pic">
											<a-date-picker v-model="valueThree" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
										</div>
									</div>
									<div class="mb-3">
										<label class="form-label">Leave to Date</label>
										<div class="date-pic">
											<a-date-picker v-model="valueFour" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
										</div>
									</div>
									<div class="mb-3">
										<label class="form-label">Leave Days</label>
										<div class="d-flex align-items-center check-radio-group">
											<label class="custom-radio">
												<input type="radio" name="radio" checked="">
												<span class="checkmark"></span>
												Full day
											</label>
											<label class="custom-radio">
												<input type="radio" name="radio">
												<span class="checkmark"></span>
												First Half
											</label>
											<label class="custom-radio">
												<input type="radio" name="radio">
												<span class="checkmark"></span>
												Second Half
											</label>
										</div>
									</div>
									<div class="mb-3">
										<label class="form-label">No of Days</label>
										<input type="text" class="form-control">
									</div>
									<div class="mb-0">
										<label class="form-label">Reason</label>
										<input type="text" class="form-control">
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<a href="#" class="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
							<button type="submit" class="btn btn-primary">Apply Leave</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Apply Leave -->
</template>
<script>
import { ref } from 'vue';
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
const valueFour = ref();
export default {
  data() {
    return {
      valueOne,
      valueTwo,
      valueThree,
      valueFour,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      PayMentDetails: [
        {label: "Select", value: "Select"}, 
        {label: "Paytm", value: "Paytm"}, 
        {label: "Cash On Delivery", value: "Cash On Delivery"}
      ],
      SeleFeesType: [
        {label: "Select", value: "Select"},
        {label: "Tuition Fees", value: "Tuition Fees"},
        {label: "Monthly Fees", value: "Monthly Fees"},
        {label: "Admission Fees", value: "Admission Fees"},
        {label: "Bus Fees", value: "Bus Fees"},
      ],
      FeesDetails: [
        {label: "Select", value: "Select"},
        {label: "Class 1 General", value: "Class 1 General"},
         {label: "Monthly Fees", value: "Monthly Fees"},
        {label: "Admission Fees", value: "Admission Fees"},
        {label: "Class 1-I Installment", value: "Class 1-I Installment"},
      ],
      Leave: [
        {label: "Select", value: "Select"},
        {label: "Medical Leave", value: "Medical Leave"},
         {label: "Casual Leave", value: "Casual Leave"},
        {label: "Special Leave", value: "Special Leave"},
        {label: "Maternity Leave", value: "Maternity Leave"},
      ],
    };
  },
};
</script>
