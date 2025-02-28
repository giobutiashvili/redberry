<template>
  <main class="container my-4">
    <div class="d-flex justify-content-between mb-3">
      <ul class="d-flex me-auto mb-2 mb-lg-0">
        <li class="mx-2" @click="getFilter('region')">
          რეგიონი <font-awesome-icon :icon="['fas', 'angle-down']" />
        </li>
        <li class="mx-2" @click="getFilter('price')">
          საფასო კატეგორია <font-awesome-icon :icon="['fas', 'angle-down']" />
        </li>
        <li class="mx-2" @click="getFilter('area')">
          ფართობი <font-awesome-icon :icon="['fas', 'angle-down']" />
        </li>
        <li class="mx-2" @click="getFilter('bedrooms')">
          საძინებლის რაოდენობა
          <font-awesome-icon :icon="['fas', 'angle-down']" />
        </li>
      </ul>
      <div class="d-flex">
        <button @click="goToAddListing" class="mr-3 addlisting">
          + ლისტინგის დამატება
        </button>
        <button class="addagents" @click="isModalVisible = true">
          + აგენტის დამატება
        </button>
        <AgentModal v-if="isModalVisible" @close="isModalVisible = false" />
      </div>
    </div>
    <div v-if="filterVizual === 'region'">
      <div class="row">
        <div
          class="col-md-7 padding-0"
          style="border: 1px solid #dbdbdb; border-radius: 10px"
        >
          <div>
            <p
              class="m-3"
              style="font-weight: 500; font-size: 16px; line-height: 19.2px"
            >
              რეგიონების მიხედვით
            </p>
          </div>
          <div class="d-flex flex-wrap m-3 justify-content-start">
            <div
              v-for="region in regions"
              :key="region.id"
              class="d-flex align-items-center"
            >
              <input
                class="p-2 mr-1"
                type="checkbox"
                :id="'region-' + region.id"
                :value="region.id"
                v-model="selectedRegions"
              />
              <label :for="'region-' + region.id" class="mr-4">{{
                region.name
              }}</label>
            </div>
          </div>
          <div class="mr-3 d-flex justify-content-end">
            <button
              type="submit"
              @click="changeRegions"
              class="addlisting mb-3"
              style="width: 77px; height: 33px; padding: 8px, 14px"
            >
              არჩევა
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="filterVizual === 'area'">
      <div class="row">
        <div
          class="col-md-7 padding-0"
          style="border: 1px solid #dbdbdb; border-radius: 10px"
        >
          <div>
            <p
              class="m-3"
              style="font-weight: 500; font-size: 16px; line-height: 19.2px"
            >
              ფართობის მიხედვით
            </p>
          </div>
          <div class="d-flex flex-wrap m-3 justify-content-start">
            <div
              v-for="region in regions"
              :key="region.id"
              class="d-flex align-items-center"
            >
              <input
                class="p-2 mr-1"
                type="checkbox"
                :id="'region-' + region.id"
                :value="region.id"
                v-model="selectedRegions"
              />
              <label :for="'region-' + region.id" class="mr-4">{{
                region.name
              }}</label>
            </div>
          </div>
          <div class="mr-3 d-flex justify-content-end">
            <button
              type="submit"
              @click="changeRegions"
              class="addlisting mb-3"
              style="width: 77px; height: 33px; padding: 8px, 14px"
            >
              არჩევა
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <section class="row mt-3">
    <div class="container d-flex flex-wrap justify-content-start">
      <!-- Card  -->

      <div
        v-if="realestates.length > 0"
        class="col-12 col-md-4 d-flex justify-content-center mb-3"
        v-for="(realestate, index) in realestates"
        :key="index"
      >
        <router-link :to="{ name: 'listing', params: { id: realestate.id } }">
          <div class="card mx-auto card-info" style="width: 18rem">
            <img
              class="card-img-top"
              :src="realestate.image"
              style="width: 286px; height: 230px"
            />
            <div class="card-body">
              <h5 class="card-title">{{ realestate.price }}</h5>
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
                  {{ realestate.area }}
                </p>
                <p class="card-text">
                  <font-awesome-icon :icon="['fas', 'signs-post']" />
                  {{ realestate.zip_code }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div v-else>
        <div class="d-flex justify-content-center">
          <h1>განცხადებები არ მოიძებნა</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AgentModal from "./AgentModal.vue";
import httprequests from "@/httprequest/HttpRequest";

export default {
  components: {
    AgentModal,
  },
  data() {
    return {
      realestates: [],
      regions: [],
      isModalVisible: false,
      filterVizual: false,
      selectedRegions: [],
    };
  },

  mounted() {
    this.getRealEstates();
    this.getRegions();
  },
  methods: {
    async getRegions() {
      try {
        const response = await httprequests.getRegionlist();
        this.regions = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getRealEstates() {
      try {
        const response = await httprequests.getRealEstates();
        this.realestates = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    getFilter(filter) {
      this.filterVizual = this.filterVizual === filter ? false : filter;
    },
    goToAddListing() {
      this.$router.push("/addlisting");
    },
    changeRegions() {
      console.log(this.selectedRegions);
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
