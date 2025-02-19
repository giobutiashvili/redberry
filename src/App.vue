<script>
import { RouterLink, RouterView } from "vue-router";
import apiClient from "./views/apiClient";

export default {
  data() {
    return {
      logUrl:
        "https://s3-alpha-sig.figma.com/img/f69b/80be/31a111bebc15f4f9df757da172ce198d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ove5DjPy4cUqybV2AaiJkNDFeZDlGWI6cTf9ipBf4dCyEtGVjZfAykqIQzhPw6wiEVjVcFGL1-zET1JrzuvkgKS8s9HMEq7P4GNELprswEpE0CCo-uSyDmPNHbEwAwO8cpfUEmQ3xG3dnNfk8PJ3a9HjEvFfiRXqXj7GZ~CVnaVJfbdajKkydO4SzPw8padsDxXWcoQm8bsNJ2kYTwBnhxHqLyvkCsM7Ve0PVyVXNGn-RMKNTjjcPJKF3ETsuGMgooeTZJT5lgtxXCkfO5cOZJ-AHlXGFU6-YHf2BdqNurmSYYxXaG3xlolQdD0W4tmVVe~GpbB8diS4uFtFKYzI-A__",
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
        <RouterLink to="/">
          <img
            class="m-4"
            style="width: 150px; height: 25px"
            :src="logUrl"
            alt=""
          />
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
body {
  overflow-x: hidden;
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
