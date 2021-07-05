import { LOAD_DATA_FROM_API, HANDLE_REMOVE_TITLE_E } from './actions'
const reducer = (state, action) => {
    const { albumData } = state;
    const { type, context } = action
    switch (type) {

        case LOAD_DATA_FROM_API: {

            return {
                ...state,
                albumData:context.data
            }
        }

        case HANDLE_REMOVE_TITLE_E: {
        let duplicate = albumData
        duplicate.map((iterator,i)=>(iterator.title = albumData[i].title.replaceAll("e", "")))
            return {
                ...state,
                titleWithOut_E:duplicate,
                flag:true
            }
        }

        default: {
            return state
        }
    }

}
export default reducer