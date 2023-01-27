
import { applyMiddleware, createStore } from 'redux'
import reducer from './ReportReducer'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store