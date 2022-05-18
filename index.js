const COLORS = [`#b3d5fc`, `#98d9d9`, `#ede493`];

const inputElements = document.querySelectorAll(`.chart__input`);

const getData = (inputElements) => {
  return Array.from(inputElements).map((input, index) => ({
    name: input.name,
    value: input.value,
    color: COLORS[index],
  }));
};

const items = getData(inputElements);
