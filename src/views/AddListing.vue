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
            <input class="form-control rounded p-2" type="number" />
            <p class="input-option">
              <font-awesome-icon :icon="['fas', 'check']" /> მხოლოდ რიცხვები
            </p>
          </div>
          <div class="col-md-6">
            <label class="form-label input-option" for="postal-code"
              >ფართობი</label
            >
            <input class="form-control rounded p-2" type="number" />
            <p class="input-option">
              <font-awesome-icon :icon="['fas', 'check']" /> მხოლოდ რიცხვები
            </p>
          </div>
          <div class="col-md-6">
            <label class="form-label input-option" for="postal-code"
              >საძინებლების რაოდენობა*</label
            >
            <input class="form-control rounded p-2" type="number" />
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
            <div class="form-label input-option">
              <h5 class="mb-3 types">ატვირთე ფოტო</h5>
            </div>
            <label class="form-label upload-label col-md-12" for="fileInput">
              <div
                class="upload-container rounded p-5"
                style="border: 1px dashed #2d3648"
              >
                <font-awesome-icon
                  :icon="['fas', 'circle-plus']"
                  style="height: 40px"
                  v-if="!previewImage"
                />
                <img
                  v-if="previewImage"
                  :src="previewImage"
                  alt="Preview"
                  class="preview-img"
                />
              </div>
            </label>
            <div class="input-group">
              <input
                type="file"
                id="fileInput"
                class="hidden-input"
                @change="handleFileUpload"
              />
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <label class="form-label input-option" for="photo">
              <h5 class="mb-3 types">აგენტი</h5>
            </label>
            <p class="input_option" style="margin-bottom: 0">აირჩიე</p>
            <select
              class="form-control rounded p-2"
              id="region"
              @change="handleChange"
            >
              <option value="" disabled selected>აირჩიე</option>
              <option value="add_agent">დაამატე აგენტი</option>
              <option v-for="reg in region" :key="reg.id" value="reg.id">
                {{ reg.name }}
              </option>
            </select>
            <div v-if="isModalVisible" class="modal">
              <div class="modal-content">
                <h4>დაამატე აგენტი</h4>
                <button @click="closeModal">დახურვა</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-3 mt-5 justify-content-end">
        <button @click="goToAddListing" class="btn mr-3 removelisting">
          გაუქმება
        </button>
        <button @click="removeListing" class="btn addlisting">
          დაამატე ლისტინგი
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import httprequests from "@/httprequest/HttpRequest";
export default {
  data() {
    return {
      isModalVisible: false,
      selectedDeal: "sell",
      selectedRegion: "",
      selectedCity: "",
      region: [],
      cities: [],
      previewImage: null,
    };
  },

  mounted() {
    this.getRegionlist();
    this.getCitylist();
  },

  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.previewImage = URL.createObjectURL(file);
      }
    },
    handleChange(event) {
      if (event.target.value === "add_agent") {
        this.addagent();
      }
    },
    addagent() {
      this.isModalVisible = true;
      console.log("add agent");
    },
    closeModal() {
      this.isModalVisible = false;
    },

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
.upload-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hidden-input {
  display: none;
}

.upload-label {
  cursor: pointer;
}
</style>
