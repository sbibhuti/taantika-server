const { customAlphabet } = require("nanoid");

const nanoid = customAlphabet("0123456789", 8);

const generateProductId = () => nanoid();

module.exports = generateProductId;
