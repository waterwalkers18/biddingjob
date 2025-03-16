<template>
  <q-page padding class="flex flex-center">
    <div class="registration-container">
      <h4 class="text-center q-mb-lg">
        {{ showForm ? `Register as a ${userStore.userType}` : "Join as a Client or Freelancer" }}
      </h4>

      <!-- Role Selection UI -->
      <div v-if="!showForm" class="row justify-center q-gutter-md">
        <!-- Client Card -->
        <q-card
          bordered
          class="option-card"
          @click="selectRole('client')"
          :class="{ 'selected-card': userStore.userType === 'client' }"
        >
          <q-card-section class="flex items-center">
            <q-icon name="mdi-briefcase-outline" size="24px" class="icon-color" />
            <q-space />
            <q-radio v-model="userStore.userType" val="client" color="green" />
          </q-card-section>
          <q-card-section>
            <h6 class="text-bold">I'm a client, hiring for a project</h6>
          </q-card-section>
        </q-card>

        <!-- Freelancer Card -->
        <q-card
          bordered
          class="option-card"
          @click="selectRole('freelancer')"
          :class="{ 'selected-card': userStore.userType === 'freelancer' }"
        >
          <q-card-section class="flex items-center">
            <q-icon name="mdi-account-outline" size="24px" class="icon-color" />
            <q-space />
            <q-radio v-model="userStore.userType" val="freelancer" color="green" />
          </q-card-section>
          <q-card-section>
            <h6 class="text-bold">I'm a freelancer, looking for work</h6>
          </q-card-section>
        </q-card>
      </div>

      <!-- "Join Now" button to proceed -->
      <div v-if="!showForm" class="text-center q-mt-lg">
        <q-btn
          style="background-color:#0077B6;color:#ffff"
          label="Join Now"
          class="full-width"
          @click="navigateToRegistration"
        />
      </div>

      <!-- Registration Form UI (shown after selecting role) -->
      <div v-if="showForm">
        <q-btn no-caps class="social-btn apple-btn q-mb-md" icon="mdi-apple" rounded label="Continue with Apple" />
        <q-btn no-caps class="social-btn google-btn q-mb-md"  rounded>
          <img src="https://en.wikipedia.org/wiki/Google_logo" class="google-icon" />
          Continue with Google
        </q-btn>

        <!-- Divider -->
        <div class="divider">
          <span>or</span>
        </div>

        <q-form @submit.prevent="registerUser">
          <div class="row q-col-gutter-md">
            <q-input v-model="userStore.firstName" label="First name" class="col-6" dense outlined />
            <q-input v-model="userStore.lastName" label="Last name" class="col-6" dense outlined />
          </div>

          <q-input v-model="userStore.email" label="Work email address" type="email" class="q-mt-md" dense outlined />
          <q-input v-model="userStore.password" label="Password (8 or more characters)" type="password" class="q-mt-md" dense outlined />

          <q-select v-model="userStore.country" :options="countryOptions" label="Country" class="q-mt-md" dense outlined />
          <q-checkbox v-model="receiveTips" label="Send me emails on how to find talent that fits my needs." class="q-mt-md" />
          <q-btn type="submit" label="Create my account" style="background-color:#0077B6" class="full-width register-btn q-mb-md" />
          <p class="q-mt-md text-center">
            Already have an account? <router-link to="/auth/login" class="login-link">Log In</router-link>
          </p>
        </q-form>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/userStore'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const userStore = useUserStore()
const showForm = ref(false) // Controls UI switching
const receiveTips = ref(true) // Default checked
const countryOptions = ['Philippines', 'United States', 'United Kingdom', 'Canada', 'Australia'] // Example list

// Function to set user type
const selectRole = (role) => {
  userStore.setUserType(role)
}

// Function to show registration form
const navigateToRegistration = () => {
  if (!userStore.userType) {
    $q.notify({ type: 'negative', message: 'Please select a role before proceeding!' })
    return
  }
  showForm.value = true // Switch to registration form
}

// Function to handle registration
const registerUser = () => {
  console.log("User Registered:", userStore)
  $q.notify({ type: 'positive', message: 'Registration successful!' })
}
</script>
<style scoped>
.registration-container {
  width: 500px;
  text-align: center;
}

/* Role Selection */
.option-card {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.option-card:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.selected-card {
  border: 2px solid #0077B6;
}

.icon-color {
  color: #3a4047;
}

/* Google & Apple Buttons */
.social-btn {
  width: 100%;
  height: 40px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.apple-btn {
  background-color: black;
  color: white;
}

.google-btn {
  background-color: white;
  color: black;
  border: 1px solid #d3d3d3;
}

.google-icon {
  width: 20px;
  margin-right: 8px;
}

/* Divider */
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  position: relative;
}

.divider:before,
.divider:after {
  content: "";
  flex: 1;
  height: 1px;
  background: #d3d3d3;
  margin: 0 10px;
}

/* Register Button */
.register-btn {
  background-color: #008329;
  color: white;
  height: 40px;
  font-weight: bold;
}

/* Links */
.link {
  color: #008329;
  text-decoration: none;
}

.login-link {
  color: #0077B6;
  text-decoration: none;
  font-weight: bold;
}
</style>
