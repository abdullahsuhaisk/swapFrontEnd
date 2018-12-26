const initCategory = {
    category : [
        {
            abc:1
        },
        {
            abc:"abc"
        }
    ]
}

const categoryReducer = (state= initCategory) => {
        return {
            ...state,
        }
}

export default categoryReducer;