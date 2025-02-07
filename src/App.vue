<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {
      logUrl:
        "https://s3-alpha-sig.figma.com/img/f69b/80be/31a111bebc15f4f9df757da172ce198d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ove5DjPy4cUqybV2AaiJkNDFeZDlGWI6cTf9ipBf4dCyEtGVjZfAykqIQzhPw6wiEVjVcFGL1-zET1JrzuvkgKS8s9HMEq7P4GNELprswEpE0CCo-uSyDmPNHbEwAwO8cpfUEmQ3xG3dnNfk8PJ3a9HjEvFfiRXqXj7GZ~CVnaVJfbdajKkydO4SzPw8padsDxXWcoQm8bsNJ2kYTwBnhxHqLyvkCsM7Ve0PVyVXNGn-RMKNTjjcPJKF3ETsuGMgooeTZJT5lgtxXCkfO5cOZJ-AHlXGFU6-YHf2BdqNurmSYYxXaG3xlolQdD0W4tmVVe~GpbB8diS4uFtFKYzI-A__",
    };
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="container d-flex justify-content-between align-items-center">
        <RouterLink to="/">
          <img style="width: 150px; height: 25px" :src="logUrl" alt="" />
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
</style>
