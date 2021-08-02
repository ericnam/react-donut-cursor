const defaultBase = {
  center: {
    width: 10,
    transition: 0,
    color: "black",
    img: null,
  },
  ring: {
    width: 30,
    transition: 100,
    border: "black 1px solid",
    img: null,
  },
  click: {
    center: {
      width: 8,
      transition: 10,
      color: "black",
      img: null,
    },
    ring: {
      width: 25,
      transition: 10,
      border: "black 1px solid",
      img: null,
    },
  },
};
const defaultHover = {
  center: {
    width: 15,
    transition: 0,
    color: "black",
    img: null,
  },
  ring: {
    width: 50,
    transition: 80,
    border: "black",
    img: null,
  },
  click: {
    center: {
      width: 10,
      transition: 10,
      color: "black",
      img: null,
    },
    ring: {
      width: 40,
      transition: 10,
      border: "black 1px solid",
      img: null,
    },
  },
};
export const defaultConfig = {
  base: defaultBase,
  hover: defaultHover,
};
