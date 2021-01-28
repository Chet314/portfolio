import React, {useEffect} from 'react';
import Element from './element';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getElement} from '../../../Redux/photoReducer';



const ElementContainer = React.memo((props) => {
    
useEffect(() => {
 let id = Number(props.match.params.id);
 if(!id){ id = 1}
 props.getElement(id);
 // eslint-disable-next-line
},[]);

    return(
        <div>
          <Element {...props} />
        </div>
    );
});

const mapStateToProps =(state) =>{
return {
   element: state.photo.element,
   id: state.photo.id
}
}

export default compose(
    connect(mapStateToProps,{getElement}),
    withRouter
)(ElementContainer);