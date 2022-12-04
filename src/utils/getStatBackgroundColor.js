export const getStatBackgroundColor = (value) => {
  let color;
  if (value === 0) {
    color = "";
  } else if (value >= 1 && value < 20) {
    color = "#FF2B00";
  } else if (value >= 20 && value < 50) {
    color = "#ff7f0f";
  } else if (value >= 50 && value < 90) {
    color = "#ffdd57";
  } else if (value >= 90 && value < 120) {
    color = "#a0e515";
  } else if (value >= 120 && value < 140) {
    color = "#23cd5e";
  } else if (value >= 140) {
    color = "#00c2b8";
  }
  return color;
};
