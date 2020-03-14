const views = {
  current: "post"
};
const menu = {
  ready: 0,
  playerColor: "#0f0",

  hatID: 1,
  hatName: "Princess Sweety Pop",
  hatUnlocked: false,
  hatCrownsReq: 555,
  hatCrownsReqMet: false,
  hatPremiumReq: true,
  hatPremiumReqMet: true,
  hatSpriteName: "CROWNS_45",

  scepterID: 1,
  scepterName: "Shimmers of Darkness",
  scepterUnlocked: true,
  scepterCrownsReq: 111,
  scepterCrownsReqMet: true,
  scepterPremiumReq: true,
  scepterPremiumReqMet: true,
  scepterSpriteName: "STAFFS_07"
};
const match = {
  health: 100,
  money: 20,
  grass: 120,
  crowns: 0,
  priceGrass: 5,
  priceSheep: 6,
  priceCharge: 7,
  priceUpgrade1: 8,
  priceUpgrade2: 9
};
const post = {
  totalScore: 909,
  selectedScore: 0,
  scores: 0,
  win: 1,
  playAgain: 0
};
export default {
  views,
  menu,
  match,
  post
};
