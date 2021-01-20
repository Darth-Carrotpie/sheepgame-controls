const views = {
  current: 'menu', //default=loading
};
const menu = {
  ready: 0,
  playerColor: '#0ff',

  hatID: 1,
  hatName: 'Princess Sweety Pop',
  hatUnlocked: false,
  hatCrownsReq: 555,
  hatCrownsReqMet: false,
  hatPremiumReq: true,
  hatPremiumReqMet: false,
  hatSpriteName: 'CROWNS_45',

  scepterID: 1,
  scepterName: 'Shimmers of Darkness',
  scepterUnlocked: false,
  scepterCrownsReq: 111,
  scepterCrownsReqMet: false,
  scepterPremiumReq: true,
  scepterPremiumReqMet: false,
  scepterSpriteName: 'STAFFS_07',

  firstOwner: false,
  audioState: 0,
  permanentCrownCount: 44,
  tutorialIndex: 1,
};
const match = {
  health: 100,
  money: 5,
  grass: 50,
  crowns: 77,
  priceGrass: 5,
  priceSheep: 6,
  priceSmash: 7,

  upgradeDescription: 'this upgrade is the best!',
  upgradeDisplayName: 'op sheep',
  selectedUpgradeIcon: 'Armored',

  upgradeA_price: 0,
  upgradeB_price: 0,
  upgradeA_icon: '',
  upgradeB_icon: '',

  ballista_loaded: true,

  upgradeData: [],
  showUpgrade: '',
};
const post = {
  totalScore: 909,
  selectedScore: 0,
  scores: 0,
  win: 1,
  playAgain: 0,
};
export default {
  views,
  menu,
  match,
  post,
};
