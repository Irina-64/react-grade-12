const KeksTypeList = [
  `chocolate`,
  `vanilla`,
  `vegetarian`,
  `honey-cake`,
  `lemon`,
  `new-york`,
  `tart`,
  `funnel-cake`,
  `basket-cake`,
  `choc`
] as const;

const Catygory = [`bisque`, `cheesecake`, `shortbread`, `dessert`] as const;

const KEKS_CARD_COUNT = 15;
const KEKS_CARD_MAIN_COUNT = 8;
const KEKS_CARD_SIMILAR_COUNT = 4;

const RATING_ID_PREFIX = 'star-'
};

export {
  RATING_ID_PREFIX,
  KEKS_CARD_COUNT,
  KEKS_CARD_MAIN_COUNT,
  KEKS_CARD_SIMILAR_COUNT,
  KeksTypeList,
  Rating
};
