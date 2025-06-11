import Store from "../coffeemasters/services/Store.js";
import API from "../coffeemasters/services/API.js";
import { loadData } from "../coffeemasters/services/Menu.js";

// making Store modue accessible to globle
window.app = {};
app.store = Store;

// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
});
