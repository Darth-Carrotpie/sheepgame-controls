export default (state, action) => {
  switch (action.type) {
    case 'playerProfile':
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
    case 'upgradeData':
      var upgrades = [];
      var upgArray = JSON.parse(action.upgrade);
      for (var i = 0; i < upgArray.length; i++) {
        console.log('upgArray[i]:', upgArray[i]);
        upgrades[upgArray[i].enumStringName] = {
          upgradeDisplayName: upgArray[i].upgradeDisplayName,
          upgradeDescription: upgArray[i].upgradeDescription,
          //priceUpgrade: upgArray[i].priceUpgrade,

          sheepTypeInput: upgArray[i].sheepTypeInput,
          sheepTypeOutput: upgArray[i].sheepTypeOutput,
          enumStringName: upgArray[i].enumStringName,
        };
        console.log(
          'upgrades[upgArray[i].enumStringName]:',
          upgrades[upgArray[i].enumStringName]
        );
      }
      for (var i = 0; i < upgrades.length; i++) {
        //console.log('upgrade:upgrades:', upgrades[upgArray[i].enumStringName]);
      }
      return {
        ...state,
        upgradeData: upgrades,
      };
    case 'currentUpgradeIcon':
      return {
        ...state,
        currentUpgradeIcon: action.icon,
      };
    case 'upgradeButtons':
      return {
        ...state,

        upgradeA_icon: action.upgradeA_icon,
        upgradeB_icon: action.upgradeB_icon,

        upgradeA_price: action.upgradeA_price,
        upgradeB_price: action.upgradeB_price,
      };
    case 'ballista':
      return {
        ...state,
        ballista_loaded: action.ballista_loaded,
      };
    case 'showUpgrade':
      return {
        ...state,
        showUpgrade: action.value,
      };
    case 'infoTooltipShown':
      return {
        ...state,
        infoTooltipShown: action.value,
      };
    default:
      return state;
  }
};
