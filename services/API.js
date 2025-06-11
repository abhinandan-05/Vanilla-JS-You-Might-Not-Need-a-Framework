const API = {
  url: "/coffeemasters/data/menu.json",
  fetchMenu: async () => {
    const result = await fetch(API.url);
    return await result.json(); // json parsing
  },
};

export default API;
