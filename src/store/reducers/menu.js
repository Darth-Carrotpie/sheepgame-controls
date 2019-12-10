export default (state, action) => {
    switch (action.type) {
        case 'setHat':
        return {
            ...state,
            hat: action.value
        };
        case 'changeHat':
            return {
                ...state,
                hat: state.hat + action.value
            };
        case 'setScepter':
            return {
                ...state,
                scepter: action.value
            };
        case 'changeScepter':
            return {
                ...state,
                scepter: state.scepter + action.value
            };
        case 'ready':
            return {
                ...state,
                ready: action.value
            };
        case 'playerColor':
            return {
                ...state,
                playerColor: action.value
            };
        case 'playerName':
            console.log("setting name:"+action.value);
            return {
                ...state,
                playerName: action.value
            };
        default:
            return state;
    }
};