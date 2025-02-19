<template>
  <div class="container">
    <div class="mt-4">
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </router-link>
    </div>
    <div class="row d-flex align-items-center">
      <!-- Image on the left -->
      <div class="col-md-6">
        <img
          :src="realestate.image"
          alt="Product Image"
          class="img-fluid"
          style="width: 100%"
        />
      </div>

      <!-- Content on the right -->
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">{{ realestate.price }} ₾</h5>
          <p class="card-text">
            <font-awesome-icon :icon="['fas', 'location-dot']" />
            {{ realestate.address }}
          </p>
          <div class="justify-content-between mt-3">
            <p class="card-text">
              <font-awesome-icon :icon="['fas', 'vector-square']" />
              {{ realestate.area }}
              m²
            </p>
            <p class="card-text">
              <font-awesome-icon :icon="['fas', 'bed']" />
              {{ realestate.bedrooms }}
            </p>
            <p class="card-text">
              <font-awesome-icon :icon="['fas', 'signs-post']" />
              {{ realestate.zip_code }}
            </p>
            <p
              class="card-text description"
              style="color: #808a93; font-size: 16px"
            >
              {{ realestate.description }}
            </p>
            <div>
              <div class="card">
                <div class="d-flex align-items-center p-3">
                  <div>
                    <img
                      :src="realestate.agent.avatar"
                      alt="Avatar"
                      class="rounded-circle"
                      style="width: 50px; height: 50px; margin-right: 15px"
                    />
                  </div>
                  <div>
                    <h6 class="mb-0">
                      {{ realestate.agent.name }}{{ realestate.agent.surname }}
                    </h6>
                    <h6
                      class="mb-0 text-muted"
                      style="
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 16, 8px;
                      "
                    >
                      აგენტი
                    </h6>
                  </div>
                </div>
                <div class="card-body">
                  <small class="text-muted"
                    ><font-awesome-icon :icon="['fas', 'envelope']" />
                    {{ realestate.agent.email }}</small
                  >
                  <br />
                  <small class="text-muted"
                    ><font-awesome-icon :icon="['fas', 'phone-volume']" />
                    {{ realestate.agent.phone }}</small
                  >
                </div>
              </div>
              <div class="mt-3">
                <button
                  class="btn align-items-center text-muted listingbtn"
                  @click="deletListing(realestate.id)"
                >
                  ლისტინგის წაშლა
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2>ბინები მსგავს ლოკაციაზე</h2>
    </div>
    <div class="fluid d-flex mt-4">
      <div class="col-12 col-md-4 d-flex justify-content-center mb-3">
        <div
          class="card mx-auto card-info"
          style="
            width: 18rem;
            border-top-right-radius: 14px;
            border-top-left-radius: 14px;
          "
        >
          <img class="card-img-top" src="../assets/image/image1.png" />
          <div class="card-body">
            <h5 class="card-title" style="font-size: 24px">80 000 ₾</h5>
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
        <div
          class="card mx-auto card-info"
          style="
            width: 18rem;
            border-top-right-radius: 14px;
            border-top-left-radius: 14px;
          "
        >
          <img class="card-img-top" src="../assets/image/image1.png" />
          <div class="card-body">
            <h5 class="card-title" style="font-size: 24px">80 000 ₾</h5>
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
        <div
          class="card mx-auto card-info"
          style="
            width: 18rem;
            border-top-right-radius: 14px;
            border-top-left-radius: 14px;
          "
        >
          <img class="card-img-top" src="../assets/image/image5.png" />
          <div class="card-body">
            <h5 class="card-title" style="font-size: 24px">80 000 ₾</h5>
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
  </div>
</template>

<script>
import httprequest from "@/httprequest/HttpRequest";

export default {
  name: "ListingPage",

  data() {
    return {
      realestate: { agent: {} },
    };
  },
  mounted() {
    this.getRealEstate();
  },
  methods: {
    async getRealEstate() {
      try {
        const response = await httprequest.getRealEstate(this.$route.params.id);
        this.realestate = response.data;
        console.log("Real Estate data:", this.realestate);
      } catch (error) {
        console.error("Error fetching real estate data:", error);
      }
    },
    async deletListing(id) {
      try {
        await httprequest.deleterealestate(id);
        this.$router.push({ name: "home" });
      } catch (error) {
        console.error("Error deleting real estate:", error);
      }
    },
  },
};
</script>

<style scoped>
.listingbtn {
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 10px;
  gap: 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.4px;
}
.card-title {
  font-weight: 700;
  font-size: 48px;
  line-height: 57, 6px;
}
.description {
  color: #808a93;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
}
.card-text {
  color: #808a93;
}

.price {
  font-size: 1.2em;
  color: #021526;
  font-weight: bold;
}
</style>
