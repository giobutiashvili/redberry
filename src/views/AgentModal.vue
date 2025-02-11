<template>
  <div class="modal-overlay">
    <div class="modal-content col-md-6 text-left">
      <div class="modal-header justify-content-center">
        <h4 style="font-size: 32px; font-weight: 500; line-height: 38.4px">
          აგენტის დამატება
        </h4>
      </div>
      <div class="modal-body">
        <form>
          <div class="row g-3">
            <div class="form-group col-md-6">
              <label class="form-label input-option" for="name">სახელი*</label>
              <input class="form-control rounded p-2" type="text" />
              <p class="input-option">
                <font-awesome-icon :icon="['fas', 'check']" /> მინიმუმ ორი
                სიმბოლო
              </p>
            </div>
            <div class="form-group col-md-6">
              <label class="form-label input-option" for="surname">გვარი</label>
              <input class="form-control rounded p-2" type="text" />
              <p class="input-option">
                <font-awesome-icon :icon="['fas', 'check']" /> მინიმუმ ორი
                სიმბოლო
              </p>
            </div>
          </div>
          <div class="row g-3">
            <div class="form-group col-md-6">
              <label for="email">ელ. ფოსტა</label>
              <input class="form-control rounded p-2" type="text" />
              <p class="input-option">
                <font-awesome-icon :icon="['fas', 'check']" /> გამოიყენეთ
                @redberry.ge ფოსტა
              </p>
            </div>
            <div class="form-group col-md-6">
              <label for="phone">ტელეფონი</label>
              <input type="number" class="form-control" id="phone" />
              <p class="input-option">
                <font-awesome-icon :icon="['fas', 'check']" /> მხოლოდ რიცხვები
              </p>
            </div>
          </div>
        </form>

        <div class="row g-3 mt-5 justify-content-end">
          <button
            @click="goToAddListing, $emit('close')"
            class="btn mr-3 removelisting"
          >
            გაუქმება
          </button>
          <button @click="removeListing" class="btn addlisting">
            დაამატე ლისტინგი
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close"],
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
</style>
