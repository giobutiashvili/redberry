<template>
  <div class="container">
    <div class="mt-4">
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </router-link>
    </div>
    <div class="row d-flex align-items-center">
      <div class="col-md-6">
        <img
          :src="realestate.image"
          alt="Product Image"
          class="img-fluid"
          style="width: 100%"
        />
      </div>

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
                  @click="showModal"
                >
                  ლისტინგის წაშლა
                </button>

                <div
                  v-if="isVisible"
                  class="modal-overlay"
                  @click.self="cancelDelete"
                >
                  <div class="modal-content col-md-6 text-left">
                    <div>
                      <div class="modal-header">
                        <h2>გსურთ წაშალოთ ლისტინგი?</h2>
                      </div>

                      <div
                        class="modal-body d-flex justify-content-center gap-3"
                      >
                        <div class="row g-3 mt-5 justify-content-end">
                          <button
                            @click="confirmDelete"
                            class="btn mr-3 removelisting"
                          >
                            დადასტურება
                          </button>
                          <button @click="cancelDelete" class="btn addlisting">
                            გაუქმება
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h2>ბინები მსგავს ლოკაციაზე</h2>

      <div v-if="filterLocation.length > 0" class="row mt-4">
        <Swiper
          :slides-per-view="3"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          :navigation="true"
          :pagination="{ clickable: true }"
          class="swiper-container"
        >
          <SwiperSlide
            class="col-md-4 d-flex mb-3"
            v-for="realestate in filterLocation"
            :key="realestate.id"
          >
            <router-link
              :to="{ name: 'listing', params: { id: realestate.id } }"
            >
              <div
                class="card mx-auto card-info"
                style="
                  width: 18rem;
                  border-top-right-radius: 14px;
                  border-top-left-radius: 14px;
                "
              >
                <img class="card-img-top" :src="realestate.image" />
                <div class="card-body">
                  <h5 class="card-title" style="font-size: 24px">
                    {{ realestate.price }} ₾
                  </h5>
                  <p class="card-text">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                    {{ realestate.address }}
                  </p>
                  <div class="d-flex justify-content-between mt-3">
                    <p class="card-text">
                      <font-awesome-icon :icon="['fas', 'bed']" />
                      {{ realestate.bedrooms }}
                    </p>
                    <p class="card-text">
                      <font-awesome-icon :icon="['fas', 'vector-square']" />
                      {{ realestate.area }} m²
                    </p>
                    <p class="card-text">
                      <font-awesome-icon :icon="['fas', 'signs-post']" />
                      {{ realestate.zip_code }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div v-else class="d-flex justify-content-center mt-5">
        <h4>ბინები ამ ლოკაციაზე არ მოიძებნა</h4>
      </div>
    </div>
  </div>
</template>

<script>
import httprequest from "@/httprequest/HttpRequest";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default {
  name: "ListingPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, Pagination],
    };
  },

  data() {
    return {
      realestate: { agent: {} },
      isVisible: false,
      realestates: [],
    };
  },
  mounted() {
    this.getRealEstate();
    this.getRealEstates();
  },
  computed: {
    filterLocation() {
      return this.realestates.filter(
        (realestate) =>
          realestate.address === this.realestate.address &&
          realestate.id !== this.realestate.id
      );
    },
  },
  watch: {
    "$route.params.id": "getRealEstate",
  },
  methods: {
    async getRealEstate() {
      try {
        const response = await httprequest.getRealEstate(this.$route.params.id);
        this.realestate = response.data;
      } catch (error) {
        console.error("Error fetching real estate data:", error);
      }
    },
    async getRealEstates() {
      try {
        const response = await httprequest.getRealEstates();
        this.realestates = response.data;
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
    showModal() {
      this.isVisible = true;
    },
    cancelDelete() {
      this.isVisible = false;
    },
    confirmDelete() {
      this.isVisible = false;
      this.deletListing(this.realestate.id);
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
.addlisting,
.removelisting {
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.2px;
}

.addlisting {
  background-color: rgba(249, 59, 29, 1);
  color: rgba(255, 255, 255, 1);
}

.removelisting {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(249, 59, 29, 1);
  color: rgba(249, 59, 29, 1);
}
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
  line-height: 57.6px;
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
