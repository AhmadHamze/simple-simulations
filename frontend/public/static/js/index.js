import Home from "./views/Home.js";

// This function is called when the user clicks on a link
// It prevents the page from reloading and instead changes the URL
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    // { path: "/ca", view: () => console.log("Viewing Cellular Automata") },
  ];
  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      // location is a global variable, pathname is the path of the current URL
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

// Wait for DOM to load before running router
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      // Prevent the page from reloading
      e.preventDefault();
      // navigate to the URL
      navigateTo(e.target.href);
    }
  });
  router();
});
