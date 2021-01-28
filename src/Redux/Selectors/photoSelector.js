import {createSelector} from 'reselect';

const getPhotoArray = (state) => {
    return state.photo.photoArray;
};

export const photoSelector = createSelector(getPhotoArray, (photos)=>{
  if(photos.length === 1){
    return photos;
  }else {
    photos.shift(); 
    return photos;}
});
