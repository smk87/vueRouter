<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>Loaded ID: {{ id }} (watch)</p>
    <p>Loaded ID: {{ uid }} (computed)</p>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  computed: {
    uid() {
      return this.$route.params.id;
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push("/"); // Similiar to React's history.push()
    }
  }
};
</script>