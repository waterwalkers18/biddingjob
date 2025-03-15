<script setup>
import { ref, onMounted } from "vue";
import api from "src/services/api"; // Import the API service

const message = ref("Loading...");

onMounted(async () => {
  try {
    const response = await api.get("/"); // Call the backend
    message.value = response.data.message; // Update UI with response
  } catch (error) {
    message.value = "Error connecting to backend!";
    console.error(error);
  }
});
</script>


<template>
  <q-page class="flex flex-center">
    <q-btn to="/form" label="Go to Form" color="primary" />
  </q-page>
</template>
