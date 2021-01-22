import React, {useEffect} from 'react';
import Photo from './photo';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getPhotoArray, setIsReady} from '../../../Redux/photoReducer';
import {photoSelector} from '../../../Redux/Selectors/photoSelector';


const PhotoContainer = React.memo((props)=>{
    
useEffect(() => {
 let id = Number(props.match.params.id);
 if(!id){ id = 1}
 props.getPhotoArray(id);
 props.setIsReady(false);
 // eslint-disable-next-line
},[]);

    return(
        <div>
          {!props.isReady && <Photo photos = {props.photos} />}
        </div>
    );
});

const mapStateToProps =(state) =>{
return {
    photos: photoSelector(state),
    isReady: state.photo.isReady
}
}

export default compose(
    connect(mapStateToProps,{getPhotoArray, setIsReady}),
    withRouter
)(PhotoContainer);