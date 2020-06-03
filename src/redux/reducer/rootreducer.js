import {combineReducers} from 'redux';
import imagesList from './image-reducer';
export default combineReducers({
    images:imagesList
});