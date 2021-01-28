import React from 'react';
import Nav from './nav';
import {connect} from 'react-redux';
import {getLanguage} from '../../Redux/languageReducer';


const NavContainer =React.memo((props)=>{

    const onSubmit = () => props.getLanguage();


    return(
        <div>
            <Nav {...props} onSubmit = {onSubmit} />
        </div>
    );
});

let mapStateToProps = (state)=>{
    return{
        buttonName: state.language.buttonName,
        myName: state.language.myName,
        works: state.language.works,
        about: state.language.about,
        contacts: state.language.contacts,
        profession: state.language.profession
    }
}

export default connect(mapStateToProps, {getLanguage})(NavContainer);

