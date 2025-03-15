<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="bg-white text-black flex" style="height: 80px;padding-right:20px;padding-left:80px">
      <q-toolbar class="q-px-lg">
        <!-- Logo -->
        <q-toolbar-title shrink class="text-weight-bold">
          ProjectBidding
        </q-toolbar-title>

        <!-- Mega Dropdown -->
        <q-btn flat dense label="Find talent" class="q-ml-md" @mouseover="openMenu = true" icon-right="mdi-chevron-down">
          <q-menu style="margin-top:25px !important;" v-model="openMenu" auto-close transition-show="jump-down" transition-hide="jump-up" anchor="bottom left" self="top left" fit class="full-width-menu">
            <q-card class="bg-white full-width">
              <div class="container">
                <div class="row">
                  <!-- Left Sidebar Menu -->
                  <div class="col-3">
                    <q-list bordered separator>
                      <q-item clickable v-ripple @mouseover="selectedCategory = 'marketplace'" icon-right="mdi-chevron-down" >
                        <q-item-section>
                          <q-item-label>Post a job and hire a pro</q-item-label>
                          <q-item-label caption class="text-green">Talent Marketplace</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-ripple @mouseover="selectedCategory = 'catalog'">
                        <q-item-section>
                          <q-item-label>Browse and buy projects</q-item-label>
                          <q-item-label caption class="text-green">Project Catalog</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-ripple @mouseover="selectedCategory = 'consultations'">
                        <q-item-section>
                          <q-item-label>Get expert advice</q-item-label>
                          <q-item-label caption class="text-green">Consultations</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>

                  <!-- Right Content Section -->
                  <div class="col-9 q-pa-md">
                    <q-separator />
                    <div v-if="selectedCategory === 'marketplace'">
                      <h6 class="text-bold">Talent Marketplace™</h6>
                      <p class="text-caption">Learn about working with talent or explore specific hiring needs.</p>
                      <q-btn flat class="text-green text-bold" label="Hire on Talent Marketplace →" />
                      <div class="row q-mt-md">
                        <div class="col-4">
                          <p class="text-caption text-bold">Development & IT</p>
                          <p class="text-caption text-bold">Design & Creative</p>
                          <p class="text-caption text-bold">Sales & Marketing</p>
                        </div>
                        <div class="col-4">
                          <p class="text-caption text-bold">Admin & Support</p>
                          <p class="text-caption text-bold">Finance & Accounting</p>
                          <p class="text-caption text-bold">HR & Training</p>
                        </div>
                        <div class="col-4">
                          <p class="text-caption text-bold">Engineering & Architecture</p>
                          <p class="text-caption text-bold">Legal</p>
                          <p class="text-caption text-bold">Hire Freelancers</p>
                        </div>
                      </div>
                    </div>

                    <div v-if="selectedCategory === 'catalog'">
                      <h6 class="text-bold">Project Catalog</h6>
                      <p class="text-caption">Discover projects that match your needs.</p>
                    </div>

                    <div v-if="selectedCategory === 'consultations'">
                      <h6 class="text-bold">Consultations</h6>
                      <p class="text-caption">Get expert advice tailored to your business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-menu>
        </q-btn>
        <q-space />

        <!-- Auth Buttons -->
        <div style="width:700px;justify-content:flex-end;align-items:center" class="flex">
          <q-input debounce="500" class="q-mr-lg" rounded outlined dense  placeholder="Search" >
            <template v-slot:append>
              <q-icon name="mdi-magnify" />
            </template>
          </q-input>
          <q-btn style="font-size: 14px;" rounded flat class="q-mr-lg" label="Login" to="/" />
          <q-btn style="letter-spacing: .4px; border-radius: 12px; padding: 11px 24px; font-size: 14px; font-weight: 500" class="bg-green-8 text-white text-weight-regular" push label="Sign Up" to="/about"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
      selectedCategory: "marketplace",
    };
  }
};
</script>

<style>
/* Full-width dropdown */
.full-width-menu {
  width: 100vw !important;
  max-width: 100vw;
  left: 0 !important;
  right: 0 !important;
  position: fixed !important;
}

/* Center content inside the dropdown */
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}
</style>
