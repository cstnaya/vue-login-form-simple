<template>
  <form @submit.prevent="login">
    <ul>
      <li>
        <label>Account: </label>
        <input required v-model="account" />
      </li>
      <li>
        <label>Password: </label>
        <input type="password" required />
      </li>
      <li>
        <button type="submit">log in!</button>
      </li>
    </ul>
  </form>
</template>

<script setup>
import { useLoggedInStore } from "@/stores/loggedin";
import { ref } from "vue";

const loggedIn = useLoggedInStore();
const account = ref("");

const login = () => {
  loggedIn.setAccount(account.value);
  loggedIn.login();
};
</script>
