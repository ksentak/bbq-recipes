<template>
  <nav
    class="navbar navbar-expand-md navbar-light"
    style="background-color: #fff2bd;"
  >
    <div class="container-fluid">
      <h3 class="navbar-brand">My BBQ Recipes</h3>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul v-if="user === null" class="navbar-nav ms-auto">
          <li class="nav-item">
            <button class="btn login-btn">
              <router-link to="/login">Sign In</router-link>
            </button>
          </li>
          <li class="nav-item">
            <button class="btn register-btn">
              <router-link to="/register">Sign Up</router-link>
            </button>
          </li>
        </ul>

        <ul v-else class="navbar-nav ms-auto">
          <li class="nav-item">
            <button @click="logout" class="btn logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
    }
  }
};
</script>

<style>
.login-btn {
  color: #383637 !important;
}

.register-btn {
  border: 1px solid #383637 !important;
}
</style>
