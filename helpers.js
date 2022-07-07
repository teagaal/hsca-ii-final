export const getLink = (index) => {
  if (index !== 8) {
    let newIndex = index + 1;
    return `/circulo/${newIndex}`;
  } else {
    return "/circulo/0";
  }
};
