<template>
  <div>
    <!-- nav -->
    <ul class="nav bg-dark py-4">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/product">Product</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/cart">
          <i class="fas fa-shopping-cart"></i>
          <small class="badge badge-danger" style="font-size: 9px">{{cart.length}}</small>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data(){
    return {
      cart:[],
    }
  },
  created(){
    this.cart = this.$root.cart;
  }
};
</script>