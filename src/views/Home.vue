<template>
  <AppPage title="Список заявок">
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
  </AppPage>
  <RequestTable :requests="[]"></RequestTable>

  <teleport to="body">
    <AppModal v-if="modal" title="Создать заявку" @close="modal = false">
      <RequestModal></RequestModal>
    </AppModal>
  </teleport>
</template>

<script>
  import { ref } from "vue";
  import AppPage from "../components/ui/AppPage.vue";
  import RequestTable from "../request/RequestTable.vue";
  import AppModal from "@/components/ui/AppModal.vue";
  import RequestModal from "@/request/RequestModal.vue";

  export default {
    name: "HomeView",
    setup() {
      const modal = ref(false);

      return {
        modal,
      };
    },
    components: { AppPage, RequestTable, AppModal, RequestModal },
  };
</script>

