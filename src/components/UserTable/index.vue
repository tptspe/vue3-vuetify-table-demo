<template>
  <h1>Data Table with Axios</h1>
  <v-data-table-server :headers="headers" :items="users" :items-length="users.length" :items-per-page="5" item-value="id" :loading="loading"
    loading-text="Loading... Please wait">
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.raw.id }}</td>
        <td>{{ item.raw.first_name }} {{ item.raw.last_name }}</td>
        <td>{{ item.raw.email }}</td>
        <td>{{ item.raw.phone ? item.raw.phone : '+6122234567' }}</td>
      </tr>
    </template>
  </v-data-table-server>
</template>

<script>
import axios from "axios";

export default {
  name: "UserTable",
  data() {
    return {
      headers: [
        {
          title: "ID",
          sortable: true,
          key: "id"
        },
        { title: "Name", sortable: true, key: "fullName" },
        { title: "Email", key: "email" },
        { title: "Phone", key: "phone" },
      ],
      users: [],
      loading: true,
    };
  },
  methods: {
    getUsers() {
      this.loading = true;
      const url = "https://reqres.in/api/users?page=1";
      axios.get(url).then((res) => {
        this.users = res.data.data;
        this.loading = false;
      });
    },
  },
  mounted() {
    this.getUsers();
  },
};

</script>
<style>
@import "./userTable.scss";
</style>