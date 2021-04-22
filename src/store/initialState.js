const views = {
  current: 'loading', //default=loading
};
const menu = {
  ready: 0,
  playerColor: '#d64c66',

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
  tutorialIndex: 0,
  tutorialSeen: 0,
};
const match = {
  health: 100,
  money: 5,
  grass: 100,
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
const translations = {
  ///other elements translations
  ready: '_ready',
  play_again: 'play again',
  waiting: 'waiting',
  victory: 'victory',
  defeat: 'defeat',
  back: 'back',
  upgrade: 'upgrade',
  achievements_info: 'Tap an icon to view details...',

  //info view messages
  max_players: 'no thrones available',
  in_game: 'game already in progress',
  disconnected: 'disconnected',
  loading: 'loading',

  ///button tooltip translation default values
  tooltip_default: '_tap-hold to show an info tooltip about a button!',
  tooltip_upg: 'upgrade to',
  tooltip_upg_alt: 'upgrade not available',
  tooltip_grass: 'fill up missing grass',
  tooltip_king: "upgrade king's move and attack speed",
  tooltip_smash: 'smash the ground to knock all sheep',

  ///tutorial slide translation default values
  slide1_title: '_GOAL',
  slide1_row1: "tap the circle to aim and shoot at an opponent's king",
  slide1_row2: 'your sheep will hit the king and eat their grass',
  slide1_row3: 'a king without grass can be aliminated when hit',
  slide1_row4: 'last king standing wins',

  slide2_title: 'EARN GOLD',
  slide2_row1: "for each opponent's sheep elimination",
  slide2_row2: "by hitting opponent's king. consecutive hits build multiplier",
  slide2_row3: 'greedy sheep periodically steals gold for you',
  slide2_row4: 'spend gold on abilities and upgrades',

  slide3_title: 'ABILITIES',
  slide3_row1: 'grass protects your king. buy more when in need',
  slide3_row2: "upgrade king's speed for better defence",
  slide3_row3: "are you overrun by opponent's sheep? smash 'em away!",
  slide3_row4: "each ability use increases it's price",

  slide4_title: 'AIM & LAUNCH',
  slide4_row1:
    'the further away from the ballista you tap, the greater the fly distance will be',
  slide4_row2: 'a sheep spawns every few seconds',
  slide4_row3: 'spawn cap increases with every player elimination',

  slide5_title: 'UPGRADE',
  slide5_row1: 'you can upgrade a sheep when it is loaded into the ballista',
  slide5_row2: 'after upgraded sheep is eliminated it will respawn again',
};
export default {
  views,
  menu,
  match,
  post,
  translations,
  global,
};
