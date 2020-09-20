module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: ["stylelint-use-nesting", "stylelint-order"],
  rules: {
    "csstools/use-nesting": "always",
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "rules",
      "at-rules",
    ],
    "order/properties-order": ["width", "height"],
    "order/properties-alphabetical-order": true,
  },
};
