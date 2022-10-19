import { defineStore } from "pinia";

export const useLoggedInStore = defineStore("loggedIn", {
  state: () => {
    return {
      loggedIn: false,
      account: "",
    };
  },
  actions: {
    login() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
    },
    setAccount(newAccount) {
      this.account = newAccount;
    },
  },
});
