<template>
  <div class="container mt-4">
    <div class="card p-4 shadow-sm col-md-12 mx-auto">
      <div class="">
        <h5 class="mb-3 types">გარიგების ტიპი</h5>
        <div class="d-flex gap-3">
          <div class="form-check mr-5">
            <input
              class="form-check-input"
              type="radio"
              id="sell"
              value="sell"
              v-model="selectedDeal"
              checked
            />
            <label class="form-check-label" for="sell">იყიდება</label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="rent"
              value="rent"
              v-model="selectedDeal"
            />
            <label class="form-check-label" for="rent">ქირავდება</label>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h5 class="mb-3 types">მდებარეობა</h5>
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label input-option" for="location"
              >მისამართი*</label
            >
            <input class="form-control rounded p-2" type="text" />
            <p class="input-option">
              <font-awesome-icon :icon="['fas', 'check']" /> მინიმუმ ორი სიმბოლო
            </p>
          </div>
          <div class="col-md-6">
            <label class="form-label input-option" for="postal-code"
              >საფოსტო ინდექსი*</label
            >
            <input class="form-control rounded p-2" type="text" />
            <p class="input-option">
              <font-awesome-icon :icon="['fas', 'check']" /> მხოლოდ რიცხვები
            </p>
          </div>
        </div>
      </div>
      <div class="mt-4 mb-4">
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label input-option" for="region">რეგიონი</label>
            <select
              class="form-control rounded p-2"
              id="region"
              v-model="selectedRegion"
            >
              <option v-for="reg in region" :key="reg.id" value="reg.id">
                {{ reg.name }}
              </option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label input-option" for="city">ქალაქი</label>
            <select
              class="form-control rounded p-2"
              id="city"
              v-model="selectedCity"
            >
              <option v-for="city in cities" :key="city.id" value="city.id">
                {{ city.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <h5 class="mb-3 types">ბინის დეტალები</h5>
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label input-option" for="location">ფასი</label>
            <input class="form-control rounded p-2" type="text" />
            <p class="input-option">
              <font-awesome-icon :icon="['fas', 'check']" /> მხოლოდ რიცხვები
            </p>
          </div>
          <div class="col-md-6">
            <label class="form-label input-option" for="postal-code"
              >ფართობი</label
            >
            <input class="form-control rounded p-2" type="text" />
            <p class="input-option">
              <font-awesome-icon :icon="['fas', 'check']" /> მხოლოდ რიცხვები
            </p>
          </div>
          <div class="col-md-6">
            <label class="form-label input-option" for="postal-code"
              >საძინებლების რაოდენობა*</label
            >
            <input class="form-control rounded p-2" type="text" />
            <p class="input-option">
              <font-awesome-icon :icon="['fas', 'check']" /> მხოლოდ რიცხვები
            </p>
          </div>
          <div class="col-md-12">
            <label class="form-label input-option" for="description"
              >აღწერა</label
            >
            <textarea
              class="form-control rounded p-2"
              style="resize: none"
              id="description"
              rows="4"
            ></textarea>
            <p class="input-option">
              <font-awesome-icon :icon="['fas', 'check']" /> მინიმუმ ხუთი სიტყვა
            </p>
          </div>
          <div class="col-md-12 mt-4">
            <label class="form-label input-option" for="photo"
              >ფოტოს ატვირთვა</label
            >
            <div class="input-group">
              <font-awesome-icon
                type="file"
                id="photo"
                :icon="['fas', 'circle-plus']"
                class="input-group-text"
              />
              <input class="form-control rounded p-2" type="file" id="photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import httprequests from "@/httprequest/HttpRequest";
export default {
  data() {
    return {
      selectedRegion: "",
      selectedCity: "",
      region: [],
      cities: [],
    };
  },

  mounted() {
    this.getRegionlist();
    this.getCitylist();
  },

  methods: {
    async getRegionlist() {
      try {
        const response = await httprequests.getRegionlist();
        this.region = response.data;
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    },
    async getCitylist() {
      try {
        const response = await httprequests.getCitylist();
        this.cities = response.data;
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    },
  },
};
</script>
<style scoped>
.input-group-text {
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
}
.types {
  font-family: Helvetica Neue;
  margin-right: 5px;
  font-size: 16px;
  line-height: 19.54px;
  font-weight: 500;
  color: #1a1a1f;
}
.input-option {
  font-family: Helvetica Neue;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 400;
  color: #021526;
}
</style>
