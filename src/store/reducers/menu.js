export default (state, action) => {
  switch (action.type) {
    case "kingItems":
      return {
        ...state,
        crowns: action.crowns,

        hatID: action.newHat.ID,
        hatName: action.newHat.itemName,
        hatUnlocked: action.newHat.unlocked,
        hatCrownsReq: action.newHat.crowns.required,
        hatCrownsReqMet: action.newHat.crowns.requirementMet,
        hatPremiumReq: action.newHat.premium.required,
        hatPremiumReqMet: action.newHat.premium.requirementMet,

        scepterID: action.newScepter.ID,
        scepterName: action.newScepter.itemName,
        scepterUnlocked: action.newScepter.unlocked,
        scepterCrownsReq: action.newScepter.crowns.required,
        scepterCrownsReqMet: action.newScepter.crowns.requirementMet,
        scepterPremiumReq: action.newScepter.premium.required,
        scepterPremiumReqMet: action.newScepter.premium.requirementMet
      };

    case "ready":
      return {
        ...state,
        ready: action.value
      };
    case "playerColor":
      return {
        ...state,
        playerColor: action.value
      };
    case "playerName":
      console.log("setting name:" + action.value);
      return {
        ...state,
        playerName: action.value
      };
    default:
      return state;
  }
};