<template>
  <TheNavBar></TheNavBar>
  <div class="container with-nav">
    <AppMessage></AppMessage>
    <router-view />
  </div>
</template>

<script>
  import AppMessage from "@/components/ui/AppMessage.vue";
  import TheNavBar from "../components/TheNavBar.vue";

  export default {
    components: { TheNavBar, AppMessage },
  };
</script>
