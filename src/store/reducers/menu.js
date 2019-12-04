export default (state, action) => {
    switch (action.type) {
        case 'setHat':
        return {
            ...state,
            currentHat: action.newHat
        };
        case 'changeHat':
            return {
                ...state,
                currentHat: state.currentHat + action.newHat
            };
        case 'setScepter':
            return {
                ...state,
                currentScepter: action.newScepter
            };
        case 'changeScepter':
            return {
                ...state,
                currentScepter: state.currentScepter + action.newScepter
            };
        case 'ready':
            return {
                ...state,
                ready: action.ready
            };
        default:
            return state;
    }
};