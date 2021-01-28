const views = {
  current: 'match', //default=loading
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

  firstOwner: true,
  audioState: 0,
  permanentCrownCount: 44,
  tutorialIndex: 0,
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
  upgradeA_icon: 'Bouncy',
  upgradeB_icon: 'Bouncy',

  ballista_loaded: true,

  upgradeData: {
    Bouncy: {
      upgradeDisplayName: 'Bouncy',
      upgradeDescription: 'description description description',
    },
  },
  showUpgrade: '',
  infoTooltipShown: 0,
  currentUpgradeIcon: 'Bouncy',
};
const post = {
  totalScore: 909,
  selectedScore: 0,
  scores: 0,
  win: 0,
  playAgain: 0,
};
const global = {
  backgroundColor: '#404040', //'#505050',
};
export default {
  views,
  menu,
  match,
  post,
  global,
};
