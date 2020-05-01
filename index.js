module.exports = function () {
  return function ({ addVariant, theme, e }) {
    const isLtrSelector = theme("isLtrSelector", ".is-ltr");
    addVariant("isLtr", ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `${isLtrSelector} .${e(`isLtr${separator}${className}`)}`;
      });
    });
  };
};
