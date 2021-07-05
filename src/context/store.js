import {useReducer, useEffect } from 'react';
import {LOAD_DATA_FROM_API, HANDLE_REMOVE_TITLE_E} from './actions'
import reducers from './reducers';
import axios from 'axios';

const store = () => {
    const api = "https://jsonplaceholder.typicode.com/photos"
    const INITIAL_STATE = {
      albumData:[],
      titleWithOut_E:[],
      flag:false
    }

    const [state, dispatch] = useReducer(reducers, INITIAL_STATE)

    //load data from api call
    useEffect(() => {
        axios.get(api).then((response) => {
            dispatch({ type: LOAD_DATA_FROM_API, context: { data:response.data } })
        })
    }, [])
    
    const handleRemoveTitle_E = () => {
        dispatch({ type: HANDLE_REMOVE_TITLE_E })
    }

    return {
        state,
        handleRemoveTitle_E
    }
}

export default store
