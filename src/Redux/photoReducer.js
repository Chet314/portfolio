const GET_PHOTO_ARRAY = 'photoReducer/GET-PHOTO-ARRAY';
const GET_MAIN_ARRAY = 'photoReducer/GET-MAIN-ARRAY';
const IS_READY = 'photoReducer/IS-READY';


const InitialState = {
    PhotoContainer: [
    {id:1, folder: "foods", photos: [{alt:"1", photo: "/photos/1.jpg"}, {alt:"2", photo: "/photos/2.webp"}, {alt:"3", photo: "/photos/3.jpg"},{alt:"4", photo: "/photos/4.webp"}]},
    {id:2, folder: "beauty", photos: [{alt:"5", photo: "/photos/5.jpg"}, {alt:"6", photo: "/photos/6.jpg"}, {alt:"7",  photo: "/photos/7.jpg"}, {alt:"8", photo: "/photos/8.webp"}]},
    {id:3, folder: "portrait", photos: [{alt:"9", photo: "/photos/9.jpg"}, {alt:"10", photo: "/photos/2.webp"}, {alt:"11", photo: "/photos/3.jpg"},{ alt:"12", photo: "/photos/4.webp"}]},
    {id:5, folder: "foods", photos: [{alt:"13", photo: "/photos/1.jpg"}, {alt:"14", photo: "/photos/2.webp"}, {alt:"15", photo: "/photos/3.jpg"},{alt:"16", photo: "/photos/4.webp"}]},
    {id:6, folder: "beauty", photos: [{alt:"17", photo: "/photos/5.jpg"}, {alt:"18", photo: "/photos/6.jpg"}, {alt:"19",  photo: "/photos/7.jpg"}, {alt:"20", photo: "/photos/8.webp"}]},
    {id:7, folder: "portrait", photos: [{alt:"21", photo: "/photos/9.jpg"}, {alt:"22", photo: "/photos/2.webp"}, {alt:"23", photo: "/photos/3.jpg"},{ alt:"24", photo: "/photos/4.webp"}]}
],
 photoArray: [],
 mainPhotoArray: [],
 isReady: false
};

export const photoReducer = (state = InitialState, action) => {
    switch(action.type){
        case GET_PHOTO_ARRAY:
            return {
            ...state,
            photoArray: state.PhotoContainer.filter(element => element.id === action.id).map(element => element.photos), 
            isReady:true
    };
        case GET_MAIN_ARRAY:
            return {
                ...state,
                mainPhotoArray:  state.PhotoContainer.map(element => {
                        return {
                           ...element,
                            photos: element.photos[0]}
         }),
         isReady: true
    };
    case IS_READY:
        return {
            ...state,
            isReady: action.isReady
        }
    default:
            return state;
};
}

export const getPhotoArray = (id) => {return {type: GET_PHOTO_ARRAY, id}};
export const getMainPhotoArray = () => {return {type:GET_MAIN_ARRAY}};
export const setIsReady = (isReady) => {return{type: IS_READY, isReady}};