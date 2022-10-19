<script setup>
import { useLoggedInStore } from "@/stores/loggedin";
import LoginForm from "@/components/LoginForm.vue";
import IndexComponent from "@/components/IndexComponent.vue";

const loggedIn = useLoggedInStore();
</script>

<template>
  <LoginForm v-if="!loggedIn.loggedIn" />
  <IndexComponent v-else-if="loggedIn.loggedIn" />
</template>
