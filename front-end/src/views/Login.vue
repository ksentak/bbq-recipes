<template>
  <div class="login">
    <div class="container">
      <div class="login-header">
        <h1>My BBQ Recipes</h1>
      </div>
      <form @submit.prevent="login()">
        <div class="row formRow1">
          <div class="col-10 offset-1">
            <input
              type="email"
              name="email"
              v-model="email"
              class="form-control py-2"
              placeholder="Email address"
            />
          </div>
        </div>
        <div class="row formRow2">
          <div class="col-10 offset-1">
            <input
              type="password"
              v-model="password"
              name="password"
              class="form-control py-2"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="row formRow3">
          <div class="col-12 text-center">
            <button class="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password);
    }
  }
};
</script>

<style>
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
