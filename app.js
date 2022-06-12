// Responsive navigation bar functionality
let isDisplaying = false;
const displayMenu = () => {
  isDisplaying = !isDisplaying;
  if (isDisplaying) {
    document.getElementById("navLink").style.display = "none";
  } else {
    document.getElementById("navLink").style.display = "flex";
  }
};
