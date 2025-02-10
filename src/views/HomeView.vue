<template>
  <main class="container my-4">
    <div class="d-flex justify-content-between">
      <ul class="d-flex me-auto mb-2 mb-lg-0">
        <li class="mx-2">
          რეგიონი <font-awesome-icon :icon="['fas', 'angle-down']" />
        </li>
        <li class="mx-2">
          საფასო კატეგორია <font-awesome-icon :icon="['fas', 'angle-down']" />
        </li>
        <li class="mx-2">
          ფართობი <font-awesome-icon :icon="['fas', 'angle-down']" />
        </li>
        <li class="mx-2">
          საძინებლის რაოდენობა
          <font-awesome-icon :icon="['fas', 'angle-down']" />
        </li>
      </ul>
      <div class="d-flex">
        <button @click="goToAddListing" class="mr-3 addlisting">
          + ლისტინგის დამატება
        </button>
        <button class="addagents">+ აგენტის დამატება</button>
      </div>
    </div>
  </main>

  <section class="row mt-3">
    <div class="container d-flex flex-wrap justify-content-start">
      <!-- Card 1 -->
      <div class="col-12 col-md-4 d-flex justify-content-center mb-3">
        <router-link :to="{ name: 'listing', params: { id: 1 } }"
          ><!--productid -->
          <div class="card mx-auto card-info" style="width: 18rem">
            <img class="card-img-top" src="../assets/image/image.png" />
            <div class="card-body">
              <h5 class="card-title">80 000 ₾</h5>
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'location-dot']" /> თბილისი,
                ი. ჭავჭავაძის 53
              </p>
              <div class="d-flex justify-content-between mt-3">
                <p class="card-text">
                  <font-awesome-icon :icon="['fas', 'bed']" /> 2
                </p>
                <p class="card-text">
                  <font-awesome-icon :icon="['fas', 'vector-square']" /> 100 m²
                </p>
                <p class="card-text">
                  <font-awesome-icon :icon="['fas', 'signs-post']" /> 3700
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Card 2 -->
      <div class="col-12 col-md-4 d-flex justify-content-center mb-3">
        <div class="card mx-auto card-info" style="width: 18rem">
          <img class="card-img-top" src="../assets/image/image1.png" />
          <div class="card-body">
            <h5 class="card-title">80 000 ₾</h5>
            <p class="card-text">
              <font-awesome-icon :icon="['fas', 'location-dot']" /> თბილისი, ი.
              ჭავჭავაძის 53
            </p>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'bed']" /> 2
              </p>
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'vector-square']" /> 100 m²
              </p>
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'signs-post']" /> 3700
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-12 col-md-4 d-flex justify-content-center mb-3">
        <div class="card mx-auto card-info" style="width: 18rem">
          <img class="card-img-top" src="../assets/image/image2.png" />
          <div class="card-body">
            <h5 class="card-title">80 000 ₾</h5>
            <p class="card-text">
              <font-awesome-icon :icon="['fas', 'location-dot']" /> თბილისი, ი.
              ჭავჭავაძის 53
            </p>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'bed']" /> 2
              </p>
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'vector-square']" /> 100 m²
              </p>
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'signs-post']" /> 3700
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="col-12 col-md-4 d-flex justify-content-center mb-3">
        <div class="card mx-auto card-info" style="width: 18rem">
          <img class="card-img-top" src="../assets/image/image3.png" />
          <div class="card-body">
            <h5 class="card-title">80 000 ₾</h5>
            <p class="card-text">
              <font-awesome-icon :icon="['fas', 'location-dot']" /> თბილისი, ი.
              ჭავჭავაძის 53
            </p>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'bed']" /> 2
              </p>
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'vector-square']" /> 100 m²
              </p>
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'signs-post']" /> 3700
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 d-flex justify-content-center mb-3">
        <div class="card mx-auto card-info" style="width: 18rem">
          <img class="card-img-top" src="../assets/image/image4.png" />
          <div class="card-body">
            <h5 class="card-title">80 000 ₾</h5>
            <p class="card-text">
              <font-awesome-icon :icon="['fas', 'location-dot']" /> თბილისი, ი.
              ჭავჭავაძის 53
            </p>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'bed']" /> 2
              </p>
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'vector-square']" /> 100 m²
              </p>
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'signs-post']" /> 3700
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 d-flex justify-content-center mb-3">
        <div class="card mx-auto card-info" style="width: 18rem">
          <img class="card-img-top" src="../assets/image/image5.png" />
          <div class="card-body">
            <h5 class="card-title">80 000 ₾</h5>
            <p class="card-text">
              <font-awesome-icon :icon="['fas', 'location-dot']" /> თბილისი, ი.
              ჭავჭავაძის 53
            </p>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'bed']" /> 2
              </p>
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'vector-square']" /> 100 m²
              </p>
              <p class="card-text">
                <font-awesome-icon :icon="['fas', 'signs-post']" /> 3700
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goToAddListing() {
      this.$router.push("/addlisting");
    },
  },
};
</script>

<style scoped>
.addlisting,
.addagents {
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.2px;
}

.addlisting {
  background-color: rgba(249, 59, 29, 1);
  color: rgba(255, 255, 255, 1);
}

.addagents {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(249, 59, 29, 1);
  color: rgba(249, 59, 29, 1);
}

ul {
  list-style-type: none;
  padding: 6px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  gap: 24px;
  color: #021526;
  margin: 0;
}

li {
  white-space: normal;
  word-wrap: break-word;
  padding: 5px 0;
}
.card {
  border-top-left-radius: calc(0.25rem - 1px) !important;
  border-top-right-radius: calc(0.25rem - 1px) !important;
}
.card-text {
  font-size: 14px;
  font-weight: 500;
  line-height: 19.2px;
  color: #021526b2;
}
.card-title {
  font-size: 28px;
  font-weight: 700;
  line-height: 33.6px;
  color: #021526;
}
.card-info {
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
  border-top-right-radius: 14px !important;
  border-top-left-radius: 14px !important;
  gap: 20px;
}
</style>
