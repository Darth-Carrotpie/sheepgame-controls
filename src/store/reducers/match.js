export default (state, action) => {
    switch (action.type) {
        case 'setHealth':
        return {
            ...state,
            currentHealth: action.newHealth
        };
        case 'setMoney':
            return {
                ...state,
                currentMoney: action.newMoney
            };
        case 'setGrass':
            return {
                ...state,
                currentGrass: action.newGrass
            };
        case 'setCrowns':
            return {
                ...state,
                currentCrowns: action.currentCrowns
            };
            //////////////////prices:
        case 'setPriceGrass':
            return {
                ...state,
                currentPriceGrass: action.newPriceGrass
            };
        case 'setPriceSheep':
            return {
                ...state,
                currentPriceSheep: action.newPriceSheep
            };
        case 'setPriceCharge':
            return {
                ...state,
                currentPriceCharge: action.newPriceCharge
            };
        case 'setPriceUpgrade1':
            return {
                ...state,
                currentPriceUpgrade1: action.newPriceUpgrade1
            };
        case 'setPriceUpgrade2':
            return {
                ...state,
                currentPriceUpgrade2: action.newPriceUpgrade2
            };
        default:
            return state;
    }
};