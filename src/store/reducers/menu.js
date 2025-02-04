export default (state, action) => {
  switch (action.type) {
    case 'kingItems':
      return {
        ...state,
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
        scepterSpriteName: action.newScepter.spriteName,
      };

    case 'ready':
      return {
        ...state,
        ready: action.value,
      };
    case 'playerColor':
      return {
        ...state,
        playerColor: action.value,
      };
    case 'playerName':
      return {
        ...state,
        playerName: action.value,
      };
    case 'tutorialIndex':
      return {
        ...state,
        tutorialIndex: action.value,
      };
    case 'firstOwner':
      return {
        ...state,
        firstOwner: action.value,
      };
    case 'audio':
      return {
        ...state,
        audioState: action.value,
      };
    case 'tutorialSeen':
      return {
        ...state,
        tutorialSeen: action.value,
      };
    default:
      return state;
  }
};
