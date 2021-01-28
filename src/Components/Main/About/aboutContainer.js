import React from 'react';
import About from './about';
import {connect} from 'react-redux';

const AboutContainer = React.memo((props)=>{

    return(
        <div>
            <About {...props} />
        </div>
    );
});

let mapStateToProps = (state)=>{
    return{
        aboutMe: state.language.aboutMe,
        
    }
}

export default connect(mapStateToProps, null)(AboutContainer);

