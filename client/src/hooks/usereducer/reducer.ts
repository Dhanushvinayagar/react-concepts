export const reducer = (state: any, action: any) => {

    const rate = action?.by || 1

    if (action.type === "increment") {
        return { ...state, count: state.count + 1 }
    }

    if (action.type === "decrement") {
        return { ...state, count: state.count - rate }
    }

    return state
}