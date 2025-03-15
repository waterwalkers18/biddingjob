<template>
  <q-page padding>
      <!-- Content Overlay -->
    <div class="hero-content container">
      <q-card class="my-card" bordered style="background-color:#fbfbfb;border-radius:20px;height:650px">
        <q-item>
          <q-item-section>
            <q-item-label class="text-center" style="font-size:60px">We Connect Ideas and Opportunities</q-item-label>
          </q-item-section>
        </q-item>

        <q-card-section horizontal style="margin-top:50px">
          <q-card-section :style="'background-image: url(/images/firs_hero1.jpg); background-size: cover; background-position: center;min-width:650px;height:510px; border-bottom-left-radius: 20px;border-top-left-radius: 20px;'"></q-card-section>

          <q-separator vertical />

          <q-card-section style="border-bottom-right-radius:: 20px;">
            <h4 style="color:#13544e;font-weight:300">This is how good companies find good company.</h4><br>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
.hero-content {
  width: 100%;
  height: 1200px;
  overflow: hidden;
}

</style>
