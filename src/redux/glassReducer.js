const stateDefault =
{
    "id": 1,
    "price": 30,
    "name": "GUCCI G8850U",
    "url": "./glassesImage/v1.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
}
export const glassReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SHOW_GLASS': {
            state = action.glass
            return { ...state }
        }
        default: return state;
    }
}