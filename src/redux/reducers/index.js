import books from './books';
import cart from './cart';
import filter from './filter';
import { combineReducers } from 'redux';

export default combineReducers({
    books,
    cart,
    filter
})
