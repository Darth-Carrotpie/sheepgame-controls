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
      return {
        ...state,
        upgradeDisplayName: action.upgrade.upgradeDisplayName,
        upgradeDescription: action.upgrade.upgradeDescription,
        priceUpgrade: action.upgrade.priceUpgrade,

        sheepTypeInput: action.upgrade.sheepTypeInput,
        sheepTypeOutput: action.upgrade.sheepTypeOutput,
        selectedUpgradeIcon: action.icon,
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
    default:
      return state;
  }
};
