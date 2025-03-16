<template>
  <q-page padding>
    <div class="hero-content container">
      <q-card class="my-card" bordered>
        <q-item>
          <q-item-section>
            <q-item-label class="text-center title-text header_text">
              We Connect Ideas and Opportunities
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-card-section horizontal class="responsive-section">
          <q-card-section class="image-section"></q-card-section>
          <q-card-section class="text-section">
            <h5 class="text-center">Join Our Community Now!</h5><br>

            <div class="hero_bullet">
              <q-list>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="mdi-pencil" style="color: #3a4047;" size="24px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-bold text-h6 header_text">Get started—no cost, no hassle!</q-item-label>
                    <q-item-label class="text-subtitle2 ">
                      Join for free, explore top talent, and kickstart your projects in minutes.
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-icon name="mdi-briefcase-outline" style="color: #3a4047;" size="24px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-bold text-h6 header_text">Post jobs. Find experts. Get things done.</q-item-label>
                    <q-item-label class="text-subtitle2">
                      Simplify hiring—post a job and connect with top professionals instantly.
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-icon name="mdi-star-outline" style="color: #3a4047;" size="24px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-bold text-h6 header_text">Hire top talent without breaking the bank</q-item-label>
                    <q-item-label class="text-subtitle2">
                      Get high-quality work at competitive rates with secure payments and low fees.
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
.hero-content {
  width: 100%;
  max-width: 1200px;
  margin: 35px auto;
}
.header_text{
  color: #00A896;
}
.my-card {
  background-color: #fbfbfb;
  border-radius: 20px;
}

.title-text {
  font-size: 3vw;
  margin-bottom: 50px;
}

.responsive-section {
  display: flex;
  flex-direction: column;
}

.image-section {
  background-image: url("/images/first_hero2.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 250px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.text-section {
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

@media (min-width: 868px) {
  .responsive-section {
    flex-direction: row;
  }

  .image-section {
    width: 80%;
    height: 510px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 20px;
  }

  .text-section {
    width: 40%;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
  }

  .title-text {
    font-size: 60px;
  }
}
</style>
