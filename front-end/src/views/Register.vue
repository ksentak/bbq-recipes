<template>
  <div class="register">
    <div class="container">
      <div class="login-header">
        <h3 class="text-center mt-3">Register for an account</h3>
      </div>
      <form @submit.prevent="createUser">
        <span v-if="errorMessage">{{ errorMessage }}</span>
        <div class="row formRow1">
          <div class="col-10 offset-1">
            <input
              v-model="newUserEmail"
              type="email"
              name="email"
              class="form-control py-2"
              placeholder="Enter an email address..."
            />
          </div>
        </div>
        <div class="row formRow2">
          <div class="col-10 offset-1">
            <input
              v-model="newUserPassword"
              type="password"
              name="password"
              class="form-control py-2"
              placeholder="Enter a password..."
            />
          </div>
        </div>
        <div class="row formRow3">
          <div class="col-12 text-center">
            <button class="btn btn-primary" type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
      newUserEmail: '',
      newUserPassword: ''
    };
  },
  computed: {
    ...mapGetters({
      errorMessage: 'getAuthError'
    })
  },
  methods: {
    async createUser() {
      const newUser = {
        email: this.newUserEmail,
        password: this.newUserPassword
      };
      await this.$store.dispatch('createUser', newUser);
    }
  }
};
</script>

<style scoped>
.container {
  height: 25rem;
  width: 25rem;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: #ff590b;
  margin-top: 4rem;
  border-radius: 0.5rem;
}

.login-header {
  margin: 0;
  padding: 0;
  background-color: white;
  height: 5rem;
  width: 25rem;
  border: 1px solid gray;
  border-radius: 0.5rem 0.5rem 0 0;
}

.login-header h1 {
  text-align: center;
}

.formRow1 {
  margin-top: 3rem;
}

.formRow2 {
  margin-top: 1rem;
}

.formRow3 {
  margin-top: 0.5rem;
}
</style>
