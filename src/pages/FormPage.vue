<script setup>
import { ref } from "vue";
import api from "src/services/api";

const name = ref("");
const email = ref("");
const message = ref("");
const responseMessage = ref("");

const submitForm = async () => {
  try {
    const response = await api.post("/submit-form", {
      name: name.value,
      email: email.value,
      message: message.value,
    });

    responseMessage.value = response.data.message;
    console.log("Saved:", response.data);

    // Reset form fields
    name.value = "";
    email.value = "";
    message.value = "";
  } catch (error) {
    responseMessage.value = "Error submitting form!";
    console.error("Form error:", error);
  }
};
</script>

<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md">
      <q-card-section>
        <q-title>Submit Form</q-title>
      </q-card-section>

      <q-card-section>
        <q-input v-model="name" label="Name" filled />
        <q-input v-model="email" label="Email" filled type="email" />
        <q-input v-model="message" label="Message" filled type="textarea" />

        <q-btn @click="submitForm" label="Submit" color="primary" class="q-mt-md" />
        <p v-if="responseMessage">{{ responseMessage }}</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>
