import Store from "../coffeemasters/services/Store.js";
import API from "../coffeemasters/services/API.js";
import { loadData } from "../coffeemasters/services/Menu.js";
import Router from "../coffeemasters/services/Router.js";

// making Store modue accessible to globle
window.app = {};
app.store = Store;
app.router = Router;

// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});
