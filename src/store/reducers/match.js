export default (state, action) => {
  switch (action.type) {
    case "playerProfile":
      return {
        ...state,
        health: action.health,
        money: action.money,
        grass: action.grass,
        crowns: action.crowns,
        permanentCrownCount: action.permanentCrownCount,
        priceGrass: action.priceGrass,
        priceSheep: action.priceSheep,
        priceSmash: action.priceSmash,
        priceUpgrade1: action.priceUpgrade1,
        priceUpgrade2: action.priceUpgrade2,
      };
    case "upgradeData":
      var upgrades = [];
      for (var i = 0; i < action.upgrade.length; i++) {
        upgrades[i] = {
          upgradeDisplayName: action.upgrade[i].upgradeDisplayName,
          upgradeDescription: action.upgrade[i].upgradeDescription,
          //priceUpgrade: action.upgrade[i].priceUpgrade,

          sheepTypeInput: action.upgrade[i].sheepTypeInput,
          sheepTypeOutput: action.upgrade[i].sheepTypeOutput,
        };
      }
      return {
        ...state,
        upgradeData: upgrades,
      };
    case "currentUpgradeIcon":
      return {
        ...state,
        currentUpgradeIcon: action.icon,
      };
    case "upgradeButtons":
      return {
        ...state,

        upgradeA_icon: action.upgradeA_icon,
        upgradeB_icon: action.upgradeB_icon,

        upgradeA_price: action.upgradeA_price,
        upgradeB_price: action.upgradeB_price,
      };
    case "ballista":
      return {
        ...state,
        ballista_loaded: action.ballista_loaded,
      };
    case "showUpgrade":
      //console.log("setting tutorial reducer:" + action.value);
      return {
        ...state,
        showUpgrade: action.value,
      };
    default:
      return state;
  }
};
