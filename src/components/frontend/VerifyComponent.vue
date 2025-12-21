



<template>
    <div class="login_register_wrap section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-md-10">
          <div class="login_wrap">
            <div class="padding_eight_all bg-white">
              <div class="heading_s1">
                <h3>Verification</h3>
              </div>
              <form >
                <div class="form-group mb-3">
                  <input
                     
                    type="text"
                    required
                    class="form-control"
                    name="code"
                    placeholder="Verification Code"
                  />
                </div>
                <div class="form-group mb-3">
                  <button
                    type="submit"
                    class="btn btn-fill-out btn-block"
                    name="verify"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
