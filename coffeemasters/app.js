import Store from ".";
import API from "../services/API.js";
import { loadData } from "../services/Menu.js";

// making Store modue accessible to globle
window.app = {};
app.store = Store;

// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
});
