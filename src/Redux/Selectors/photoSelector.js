import {createSelector} from 'reselect';

const getPhotoArray = (state) => {
    return state.photo.photoArray;
};

export const photoSelector = createSelector(getPhotoArray, (photos)=>{
    return  photos;
});

/* Тасование Фишера — Йетса
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }*/