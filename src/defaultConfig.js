const defaultCenterCursor = {
  color: "black",
  size: 10,
  img: null,
  transition: 0,
};
const defaultRing = {
  color: "black",
  size: 10,
  img: null,
  transition: 0,
};

export const defaultConfig = {
  center: {
    default: defaultCenterCursor,
    hover: { ...defaultCenterCursor, size: 15, transition: 50 },
  },
  ring: {
    default: { ...defaultRing }
  }
};
