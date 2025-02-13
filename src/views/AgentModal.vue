<template>
  <div class="modal-overlay">
    <div class="modal-content col-md-6 text-left">
      <div class="modal-header justify-content-center">
        <h4 style="font-size: 32px; font-weight: 500; line-height: 38.4px">
          აგენტის დამატება
        </h4>
      </div>
      <div class="modal-body">
        <form @submit.prevent="submitForm">
          <div class="row g-3">
            <div class="form-group col-md-6">
              <label class="form-label input-option" for="name">სახელი*</label>
              <input
                class="form-control rounded p-2"
                type="text"
                v-model="formData.name"
                required
              />
              <p class="input-option">
                <font-awesome-icon :icon="['fas', 'check']" /> მინიმუმ ორი
                სიმბოლო
              </p>
            </div>
            <div class="form-group col-md-6">
              <label class="form-label input-option" for="surname">გვარი</label>
              <input
                class="form-control rounded p-2"
                type="text"
                v-model="formData.surname"
                required
              />
              <p class="input-option">
                <font-awesome-icon :icon="['fas', 'check']" /> მინიმუმ ორი
                სიმბოლო
              </p>
            </div>
          </div>
          <div class="row g-3">
            <div class="form-group col-md-6">
              <label for="email">ელ. ფოსტა</label>
              <input
                class="form-control rounded p-2"
                type="email"
                v-model="formData.email"
                required
              />
              <p class="input-option">
                <font-awesome-icon :icon="['fas', 'check']" /> გამოიყენეთ
                @redberry.ge ფოსტა
              </p>
            </div>
            <div class="form-group col-md-6">
              <label for="phone">ტელეფონი</label>
              <input
                type="number"
                class="form-control"
                id="phone"
                v-model="formData.phone"
                required
              />
              <p class="input-option">
                <font-awesome-icon :icon="['fas', 'check']" /> მხოლოდ რიცხვები
              </p>
            </div>
          </div>
          <div class="col-md-12 mt-4">
            <div class="form-label input-option">
              <h5 class="mb-3 types">ატვირთე ფოტო</h5>
            </div>
            <label class="form-label upload-label col-md-12" for="fileInput">
              <div
                class="upload-container rounded p-4"
                style="border: 1px dashed #2d3648"
              >
                <font-awesome-icon
                  :icon="['fas', 'circle-plus']"
                  style="height: 30px"
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
        </form>

        <div class="row g-3 mt-5 justify-content-end">
          <button
            type="button"
            @click="clearForm"
            class="btn mr-3 removelisting"
          >
            გაუქმება
          </button>
          <button @click="submitForm" class="btn addlisting">
            დაამატე აგენტი
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "./apiClient";

export default {
  data() {
    return {
      formData: {
        name: "",
        surname: "",
        email: "",
        phone: "",
        avatar: null,
      },
      previewImage: null,
    };
  },
  methods: {
    handleFileUpload(e) {
      const file = e.target.files[0];
      if (file) {
        this.formData.avatar = file;
        this.previewImage = URL.createObjectURL(file);
      }
    },
    async submitForm() {
      try {
        const formData = new FormData();
        formData.append("name", this.formData.name);
        formData.append("surname", this.formData.surname);
        formData.append("email", this.formData.email);
        formData.append("phone", this.formData.phone);
        if (this.formData.avatar) {
          formData.append("avatar", this.formData.avatar);
        }
        console.log("📤 Sending Form Data:", [...formData.entries()]);
        const response = await apiClient.post("/agents", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);
        this.clearForm();
      } catch (error) {
        if (error.response) {
          console.error("Validation Error:", error.response.data);
        } else {
          console.error("Unexpected Error:", error);
        }
      }

      this.clearForm();
    },
    clearForm() {
      this.formData = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        avatar: null,
      };
      this.previewImage = null;
      this.$emit("close");
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
.preview-img {
  max-width: 150px;
  max-height: 150px;
  object-fit: cover;
  display: block;
  margin: 10px auto;
}
</style>
