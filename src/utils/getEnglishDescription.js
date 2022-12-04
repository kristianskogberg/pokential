export const getEnglishDescription = (descriptionArray) => {
  let description = "-";

  for (let i = descriptionArray.length - 1; i > 0; i--) {
    if (descriptionArray[i].language.name == "en") {
      description = descriptionArray[i].flavor_text;
      break;
    }
  }
  return description;
};
