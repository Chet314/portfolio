const GET_LANGUAGE = 'languageReducer/GET-LANGUAGE';

const InitialState = {
    isLanguage: true,
    myName:"Женя Кузнецова",
    buttonNames: [["eng", "рус"],["Женя Кузнецова", "Zhenya Kuznetsova"],["работы","works"],["обо мне","about"],["контакты","contacts"],
    ["Евгения Кузнецова художник, фотограф и творческий кактусичек",
     "Zhenya Kuznetsova is an artist, photographer and creative interlocutor based in Moscow"], ["Фотограф, Ретушер", "Photografer, Retoucher"]],
    buttonName: "eng",
    works: "работы",
    about: "обо мне",
    contacts: "контакты",
    aboutMe: "Евгения Кузнецова художник, фотограф ...",
    profession: "Фотограф, Ретушер"
  
};

export const languageReducer = (state = InitialState, action) => {
    switch(action.type){
        case GET_LANGUAGE:
            return {
            ...state,
            buttonName: state.isLanguage ? state.buttonNames[0][0] : state.buttonNames[0][1],
            myName: state.isLanguage ? state.buttonNames[1][0] : state.buttonNames[1][1],
            works: state.isLanguage ? state.buttonNames[2][0] : state.buttonNames[2][1],
            about: state.isLanguage ? state.buttonNames[3][0] : state.buttonNames[3][1],
            contacts: state.isLanguage ? state.buttonNames[4][0] : state.buttonNames[4][1],
            aboutMe: state.isLanguage ? state.buttonNames[5][0] : state.buttonNames[5][1],
            profession: state.isLanguage ? state.buttonNames[6][0] : state.buttonNames[6][1],
            isLanguage: state.isLanguage ? false : true 
    };
       
    default:
            return state;
};
}

export const getLanguage = () => {return {type: GET_LANGUAGE}};
