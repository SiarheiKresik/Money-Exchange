const COINS = {
  H: 50,
  Q: 25,
  D: 10,
  N: 5,
  P: 1
};

const MIN_AMOUNT = 0;
const MAX_AMOUNT = 10000;
const MAX_AMOUNT_ERROR = {
  error: "You are rich, my friend! We don't have so much coins for exchange"
};

module.exports = function makeExchange(amount) {
  if (amount <= MIN_AMOUNT) {
    return {};
  } else if (amount > MAX_AMOUNT) {
    return MAX_AMOUNT_ERROR;
  }

  const result = {};

  while (amount != 0) {
    for (let [coin, value] of Object.entries(COINS)) {
      if (amount < value) {
        continue;
      }
      let coin_number = Math.trunc(amount / value);
      amount = amount % value;
      result[coin] = coin_number;
    }
  }

  return result;
};
