<script>
import { RouterLink, RouterView } from "vue-router";
import apiClient from "./views/apiClient";

export default {
  data() {
    return {
      logUrl:
        "https://s3-alpha-sig.figma.com/img/f69b/80be/31a111bebc15f4f9df757da172ce198d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cuy8paUx7gDcbN1z4-JebI83dhzQmLF-yQXpOIMfZpmbm~03NmDolPxIxrOhjCFi3laYCtTCTDXOgYPCZCoPKRJ72VagfwQZIwFLhW6JpLgyCFwauX6qtgOlw-wN2pnCs0rjjIl0uBhgo7GkQ0X1FX6ixlOw9QoGPuLsMiTS9L9JQaA42xYnFfKnu6nAJMO0Sy7TXLWtfnTgbijohVW5sZEuqhti7J7qbwnHLyq9Hivbbd74x14Ayb85CyQlB2iWcxmpW267Q3VY-d6fwDuOmihS4aBi6iUgk35eL9SjFTa2Ay4nwDcKO-y5IMWsEa87Ss1qKUupd-sdUCa2S8jmLA__",
      agents: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await apiClient.get("/agents");
        this.agents = response.data;
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<template>
  <header
    class=""
    style="border-bottom: 1px solid #dbdbdb; margin-bottom: 2.5rem"
  >
    <div class="wrapper">
      <nav class="container d-flex justify-content-between align-items-center">
        <router-link to="/">
          <img
            class="m-4"
            style="width: 150px; height: 25px"
            :src="logUrl"
            alt=""
          />
        </router-link>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
body {
  overflow-x: hidden;
  text-decoration: none;
}

.container {
  width: 100%;
}

.card {
  max-width: 100%;
}

.row {
  flex-wrap: wrap;
}

.col-12 {
  flex: 1 1 100%;
}
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
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
