export default (state, action) => {
    switch (action.type) {
        case 'playerProfile':
        return {
            ...state,
            health: action.health,
            money: action.money,
            grass: action.grass,
            crowns: action.crowns,
            priceGrass: action.priceGrass,
            priceSheep: action.priceSheep,
            priceSmash: action.priceSmash,
            priceUpgrade1: action.priceUpgrade1,
            priceUpgrade2: action.priceUpgrade2
        };
        default:
            return state;
    }
};