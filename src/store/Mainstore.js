import { createStore } from 'redux';
import rootReducer from '../reducers/Rootreducer';

//create a mainstore
const mainStore = createStore(rootReducer);
export default mainStore;