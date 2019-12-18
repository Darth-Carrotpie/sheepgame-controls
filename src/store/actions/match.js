export const setHealth = (value) => {
    return {
        type: 'setHealth',
        newHealth: value
    };
};
export const setMoney = (value) => {
    return {
        type: 'setMoney',
        newMoney: value
    };
};
export const setGrass = (value) => {
    return {
        type: 'setGrass',
        newGrass: value
    };
};
export const setCrowns = (value) => {
    return {
        type: 'setCrowns',
        newCrowns: value
    };
};
export const setPrice = (property, value) => {
    switch (property.type) {
        case 'grass':
            return {
                type: 'setPriceGrass',
                    newPriceGrass: value
            };
        case 'sheep':
            return {
                type: 'setPriceSheep',
                    newPriceSheep: value
            };
        case 'charge':
            return {
                type: 'setPriceSmash',
                    newPriceSmash: value
            };
        case 'upgrade1':
            return {
                type: 'setPriceUpgrade1',
                    newPriceUpgrade1: value
            };
        case 'upgrade2':
            return {
                type: 'setPriceUpgrade2',
                    newPriceUpgrade2: value
            };
        default:
            return property;
    }
};