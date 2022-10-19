<template>
  <div>Hi! {{ loggedIn.account }}, you have logged in!</div>
</template>

<script setup>
import { useLoggedInStore } from "@/stores/loggedin";

const loggedIn = useLoggedInStore();
</script>
