
const GET_PHOTO_ARRAY = 'photoReducer/GET-PHOTO-ARRAY';
const GET_MAIN_ARRAY = 'photoReducer/GET-MAIN-ARRAY';
const IS_READY = 'photoReducer/IS-READY';
const GET_ELEMENT = 'photReducer/GET-ELEMENT';


const InitialState = {
    PhotoContainer: [{
            id: 1,
            folder: "projects",
            photos: [{
                id: 1,
                alt: "1",
                photo: process.env.PUBLIC_URL + "/images/photo1.jpg"
            }, {
                id: 2,
                alt: "2",
                photo: process.env.PUBLIC_URL + "/images/projects/01.jpg"
            }, {
                id: 3,
                alt: "3",
                photo: process.env.PUBLIC_URL + "/images/projects/02.jpg"
            }, {
                id: 4,
                alt: "4",
                photo: process.env.PUBLIC_URL + "/images/projects/03.jpg"
            }, {
                id: 5,
                alt: "5",
                photo: process.env.PUBLIC_URL + "/images/projects/03_2.jpg"
            }, {
                id: 6,
                alt: "6",
                photo: process.env.PUBLIC_URL + "/images/projects/06.jpg"
            }, {
                id: 7,
                alt: "7",
                photo: process.env.PUBLIC_URL + "/images/projects/07.jpg"
            }, {
                id: 8,
                alt: "8",
                photo: process.env.PUBLIC_URL + "/images/projects/05.jpg"
            }, {
                id: 9,
                alt: "9",
                photo: process.env.PUBLIC_URL + "/images/projects/08.jpg"
            }, {
                id: 10,
                alt: "10",
                photo: process.env.PUBLIC_URL + "/images/projects/10.jpg"
            }, {
                id: 11,
                alt: "11",
                photo: process.env.PUBLIC_URL + "/images/projects/12.jpg"
            }, {
                id: 12,
                alt: "12",
                photo: process.env.PUBLIC_URL + "/images/projects/13_2.jpg"
            }, {
                id: 13,
                alt: "13",
                photo: process.env.PUBLIC_URL + "/images/projects/13.jpg"
            }, {
                id: 14,
                alt: "14",
                photo: process.env.PUBLIC_URL + "/images/projects/14.jpg"
            }, {
                id: 15,
                alt: "15",
                photo: process.env.PUBLIC_URL + "/images/projects/15.jpg"
            }, {
                id: 16,
                alt: "16",
                photo: process.env.PUBLIC_URL + "/images/projects/16.jpg"
            }, {
                id: 17,
                alt: "17",
                photo: process.env.PUBLIC_URL + "/images/projects/17.jpg"
            }, {
                id: 18,
                alt: "18",
                photo: process.env.PUBLIC_URL + "/images/projects/18.jpg"
            }, {
                id: 19,
                alt: "19",
                photo: process.env.PUBLIC_URL + "/images/projects/19.jpg"
            }]
        },
        {
            id: 2,
            folder: "still life",
            photos: [{
                id: 20,
                alt: "20",
                photo: process.env.PUBLIC_URL + "/images/photo2.jpg"
            }]
        },
        {
            id: 3,
            folder: "food",
            photos: [{
                id: 21,
                alt: "21",
                photo: process.env.PUBLIC_URL + "/images/photo4.jpg"
            }]
        },
        {
            id: 4,
            folder: "beauty",
            photos: [{
                id: 22,
                alt: "22",
                photo: process.env.PUBLIC_URL + "/images/photo3.jpg"
            }, {
                id: 23,
                alt: "23",
                photo: process.env.PUBLIC_URL + "/images/beauty/01.jpg"
            }, {
                id: 24,
                alt: "24",
                photo: process.env.PUBLIC_URL + "/images/beauty/02.jpg"
            }, { 
                id: 25,
                alt: "25",
                photo: process.env.PUBLIC_URL + "/images/beauty/03.jpg"
            }, {
                id: 26,
                alt: "26",
                photo: process.env.PUBLIC_URL + "/images/beauty/04.jpg"
            }, {
                id: 27,
                alt: "27",
                photo: process.env.PUBLIC_URL + "/images/beauty/05.jpg"
            }, {
                id: 28,
                alt: "28",
                photo: process.env.PUBLIC_URL + "/images/beauty/06.jpg"
            }, {
                id: 29,
                alt: "29",
                photo: process.env.PUBLIC_URL + "/images/beauty/09.jpg"
            }, {
                id: 30,
                alt: "30",
                photo: process.env.PUBLIC_URL + "/images/beauty/09_2.jpg"
            }, {
                id: 31,
                alt: "31",
                photo: process.env.PUBLIC_URL + "/images/beauty/08.jpg"
            }, {
                id: 32,
                alt: "32",
                photo: process.env.PUBLIC_URL + "/images/beauty/10.jpg"
            }, {
                id: 33,
                alt: "33",
                photo: process.env.PUBLIC_URL + "/images/beauty/11.jpg"
            }]
        },
        {
            id: 5,
            folder: "portrait",
            photos: [{
                id: 34,
                alt: "34",
                photo: process.env.PUBLIC_URL + "/images/photo5.jpg"
            }, {
                id: 35,
                alt: "35",
                photo: process.env.PUBLIC_URL + "/images/portrait/01.jpg"
            }, {
                id: 36,
                alt: "36",
                photo: process.env.PUBLIC_URL + "/images/portrait/02.jpg"
            }, {
                id: 37,
                alt: "37",
                photo: process.env.PUBLIC_URL + "/images/portrait/03.jpg"
            }, {
                id: 38,
                alt: "38",
                photo: process.env.PUBLIC_URL + "/images/portrait/04.jpg"
            }]
        },
        {
            id: 6,
            folder: "personal",
            photos: [{
                id: 39,
                alt: "39",
                photo: process.env.PUBLIC_URL + "/images/photo4.jpg"
            }, {
                id: 40,
                alt: "40",
                photo: process.env.PUBLIC_URL + "/images/personal/01.jpg"
            }, {
                id: 41,
                alt: "41",
                photo: process.env.PUBLIC_URL + "/images/personal/02.jpg"
            }, {
                id: 42,
                alt: "42",
                photo: process.env.PUBLIC_URL + "/images/personal/03.jpg"
            }]
        }
    ],
 photoArray: [],
 mainPhotoArray: [],
 isReady: false,
 element: {},
 id: null
};

export const photoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case GET_PHOTO_ARRAY:
            return {
                ...state,
                id: action.id,
                photoArray: state.PhotoContainer.find(element => element.id === action.id).photos.map(element => element),
                isReady: true
            };

        case GET_MAIN_ARRAY:
            return {
                ...state,
                mainPhotoArray: state.PhotoContainer.map(element => {
                        return {
                            ...element,
                            photos: element.photos[0]
                        }
                    }),
                    isReady: true,
            };

        case IS_READY:
            return {
                ...state,
                isReady: action.isReady
            }
            case GET_ELEMENT:
                return {
                    ...state,
                    element: state.photoArray.find(element => element.id === action.id)
                }
                default:
                    return state;
    };
}

export const getPhotoArray = (id) => {return {type: GET_PHOTO_ARRAY, id}};
export const getMainPhotoArray = () => {return {type:GET_MAIN_ARRAY}};
export const setIsReady = (isReady) => {return{type: IS_READY, isReady}};
export const getElement = (id) => {return{type: GET_ELEMENT, id}}