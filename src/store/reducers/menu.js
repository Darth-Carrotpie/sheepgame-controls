export default (state, action) => {
  switch (action.type) {
    case "kingItems":
      return {
        ...state,
        crowns: action.crowns,
        permanentCrownCount: action.permanentCrownCount,

        hatID: action.newHat.ID,
        hatName: action.newHat.itemName,
        hatUnlocked: action.newHat.unlocked,
        hatCrownsReq: action.newHat.crowns.required,
        hatCrownsReqMet: action.newHat.crowns.requirementMet,
        hatPremiumReq: action.newHat.premium.required,
        hatPremiumReqMet: action.newHat.premium.requirementMet,
        hatSpriteName: action.newHat.spriteName,

        scepterID: action.newScepter.ID,
        scepterName: action.newScepter.itemName,
        scepterUnlocked: action.newScepter.unlocked,
        scepterCrownsReq: action.newScepter.crowns.required,
        scepterCrownsReqMet: action.newScepter.crowns.requirementMet,
        scepterPremiumReq: action.newScepter.premium.required,
        scepterPremiumReqMet: action.newScepter.premium.requirementMet,
        scepterSpriteName: action.newScepter.spriteName
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
    case "firstOwner":
      console.log("setting name:" + action.value);
      return {
        ...state,
        firstOwner: action.value
      };
    case "audio":
      console.log("setting name:" + action.value);
      return {
        ...state,
        audioState: action.value
      };

    default:
      return state;
  }
};
