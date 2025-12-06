<template>
  <div class="flex flex-col justify-center items-center">
    <h2>user detail</h2>

    <div v-if="userdetails" class="bg-red-400 items-start">
      <p><span class="font-bold">Name:</span> {{ userdetails.name }}</p>
      <p><span class="font-bold">Email:</span> {{ userdetails.email }}</p>
      <p><span class="font-bold">Company:</span> {{ userdetails.company }}</p>
      <p><span class="font-bold">Email:</span> {{ userdetails.email }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserDetails",
  data() {
    return {
      userdetails: null,
    };
  },
  mounted() {
    this.getUserDetails();
  },
  methods: {
    async getUserDetails() {
      const userId = this.$route.params.id;
      // console.log("User ID:", userId);

      const responsdata = await fetch(
        `https://fake-json-api.mock.beeceptor.com/users/${userId}`
      );
      this.userdetails = await responsdata.json();
    },
  },
};
</script>
