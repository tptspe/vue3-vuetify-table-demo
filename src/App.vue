<template>
  <UserTable></UserTable>
</template>

<script>
import UserTable from "./components/UserTable/index.vue";

export default {
  name: 'App',
  components: {
    UserTable: UserTable,
  }
}

</script>

<style>
@import "./index.css";
</style>
