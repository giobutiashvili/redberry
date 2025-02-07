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
          src="../assets/image/listing1.png"
          alt="Product Image"
          class="img-fluid"
        />
      </div>

      <!-- Content on the right -->
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">80 000 ₾</h5>
          <p class="card-text">
            <font-awesome-icon :icon="['fas', 'location-dot']" /> თბილისი, ი.
            ჭავჭავაძის 53
          </p>
          <div class="justify-content-between mt-3">
            <p class="card-text">
              <font-awesome-icon :icon="['fas', 'vector-square']" /> ფართი 100
              m²
            </p>
            <p class="card-text">
              <font-awesome-icon :icon="['fas', 'bed']" /> საძინებლი 2
            </p>
            <p class="card-text">
              <font-awesome-icon :icon="['fas', 'signs-post']" /> საფოსტო
              ინდექსი 3700
            </p>
            <p
              class="card-text description"
              style="color: #808a93; font-size: 16px"
            >
              იყიდება ბინა ჭავჭავაძის ქუჩაზე, ვაკეში. ბინა არის ახალი რემონტით,
              ორი საძინებლითა და დიდი აივნებით. მოწყობილია ავეჯითა და ტექნიკით.
            </p>
            <div>
              <div class="card">
                <div class="d-flex align-items-center p-3">
                  <div>
                    <img
                      src="../assets/image/girl.png"
                      alt="Avatar"
                      class="rounded-circle"
                      style="width: 50px; height: 50px; margin-right: 15px"
                    />
                  </div>
                  <div>
                    <h6 class="mb-0">John Doe</h6>
                    <h6 class="mb-0 text-muted">აგენტი</h6>
                  </div>
                </div>
                <div class="card-body">
                  <small class="text-muted"
                    ><font-awesome-icon :icon="['fas', 'envelope']" />
                    sophio.gelovani@redberry.ge</small
                  >
                  <br />
                  <small class="text-muted"
                    ><font-awesome-icon :icon="['fas', 'phone-volume']" /> +123
                    456 7890</small
                  >
                </div>
              </div>
              <div class="mt-3">
                <button class="btn align-items-center text-muted listingbtn">
                  ლისტინგის წაშლა
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListingPage",
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
