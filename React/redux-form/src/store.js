import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer, // Asegúrate de usar el reducer de Redux Form
});

const store = createStore(rootReducer);

export default store;
