<template>
  <div>
    <h1 class="text-3xl font-bold text-red-700 mb-10">Home Page</h1>

    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 mx-10">
      <div
        v-for="user in users"
        :key="user.id"
        class="bg-gray-100 rounded-lg shadow-md p-5 text-left"
      >
        <h3><span class="font-bold">Name</span> : {{ user.name }}</h3>
        <p><span class="font-bold">Compny Name </span>: {{ user.company }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      users: null,
    };
  },
  mounted() {
    this.fetchusers();
  },
  methods: {
    async fetchusers() {
      const response = await fetch(
        "https://fake-json-api.mock.beeceptor.com/users"
      );
      const data = await response.json();
      console.log(data);
      this.users = data;
    },
  },
};
</script>
