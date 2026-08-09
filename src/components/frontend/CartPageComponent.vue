<script setup>
    import { ref, onMounted, computed } from "vue";
    import { useProductStore } from "@/store/productStore";


    const store = useProductStore();

    const onRemove = async (productId) => {
    await store.removeFromCart(productId);
    };

    onMounted(() => {
        store.fetchCart();
    });

  const increaseQty = (row) => {
      row.qty++;
      store.updateCartQuantity(row.product_id, row.qty);
  };

  const decreaseQty = (row) => {
      if (row.qty > 1) {
          row.qty--;
          store.updateCartQuantity(row.product_id, row.qty);
      }
  };

</script>

<template>
      <!-- Breadcrumb -->
  <div class="breadcrumb_section bg_gray page-title-mini">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="page-title">
            <h1>Cart List</h1>
          </div>
        </div>
        <div class="col-md-6">
          <ol class="breadcrumb justify-content-md-end">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item active">This Page</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-5">
    <div class="container my-5">
      <div class="row">
        <div class="col-12">
          <!-- Loading -->
          <div v-if="store.cartLoading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Loading cart...</p>
          </div>

          <!-- Error / Empty -->
          <div
            v-else-if="store.cartItems.length === 0"
            class="text-center py-5"
          >
            <p class="text-muted mb-0">
              {{ store.cartError || "Your cart is empty." }}
            </p>
          </div>

          <!-- Table -->
          <div v-else class="table-responsive shop_cart_table">
            <table class="table">
              <thead>
                <tr>
                  <th class="product-thumbnail">&nbsp;</th>
                  <th class="product-name">Product</th>
                  <th class="product-quantity">Quantity</th>
                  <th class="product-quantity">Rate</th>
                  <th class="product-subtotal">Total</th>
                  <th class="product-remove">Remove</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="row in store.cartItems" :key="row.product_id">
                  <td class="product-thumbnail">
                    <img :src="row.product?.image" alt="product" />
                  </td>
                  <td class="product-name">
                    {{ row.product?.title }}
                  </td>
                  <td class="product-quantity">
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        @click="decreaseQty(row)"
                        :disabled="row.qty <= 1"
                      >
                        -
                    </button>
                    {{ row.qty }}
                    <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          @click="increaseQty(row)"
                        >
                          +
                    </button>
                  </td>
                  <td class="product-subtotal">$ {{ row.price }}</td>
                  <td class="product-subtotal">$  {{ (row.qty  *  row.price).toFixed(2) }}</td>
                  <td class="product-remove">
                    <button
                      class="btn btn-sm btn-link text-danger"
                      @click="onRemove(row.product_id)"
                    >
                      <i class="ion-close"></i>
                      <!-- or ion-close -->
                    </button>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td colspan="6" class="px-0">
                    <div class="row g-0 align-items-center">
                      <div class="col-lg-4 col-md-6 mb-3 mb-md-0">
                        Total: $ <span>{{ store.cartTotal }}</span>
                      </div>
                      <div class="col-lg-8 col-md-6 text-start text-md-end">
                        <button
                          class="btn btn-line-fill btn-sm"
                          @click="onCheckout"
                        >
                          Check Out
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    /* Simple modal replacement (if not using Bootstrap's JS modal) */
    .modal-backdrop-custom {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1050;
    }
    .modal-custom {
    background: #fff;
    width: 100%;
    max-width: 640px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    .modal-header {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #eee;
    }
    .modal-body {
    padding: 1rem;
    }
    .btn-close {
    border: 0;
    background: transparent;
    }
</style>