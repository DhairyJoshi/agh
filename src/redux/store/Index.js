import { combineReducers } from 'redux';
import ProductReducer from './ProductStore';
import HomeReducer from './HomeStore';
import AuthReducer from './AuthStore';
import CheckoutReducer from './CheckoutStore';

const rootReducer = combineReducers({
    products: ProductReducer,
    home: HomeReducer,
    auth: AuthReducer,
    checkout: CheckoutReducer
});

export default rootReducer;
