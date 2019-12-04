export default (state, action) => {
    switch (action.type) {
        case 'changeHat':
            return {
                ...state,
                currentHat: state.currentHat + action.newHat
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