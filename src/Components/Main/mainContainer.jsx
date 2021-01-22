import React, {useEffect} from 'react';
import Main from './main';
import {connect} from 'react-redux';
import {getMainPhotoArray, setIsReady} from '../../Redux/photoReducer';


const MainConteiner = React.memo((props) => {

  useEffect(() => {
    props.setIsReady(false);
    props.getMainPhotoArray();
     // eslint-disable-next-line
  },[]);


return(
    <div>
     {  props.isReady && <Main photo = {props.photo} />}
    </div>
  );
});

const mapStateToProps =(state) =>{
  return {
    photo: state.photo.mainPhotoArray,
    isReady: state.photo.isReady
  }
  }


export default connect(mapStateToProps, {getMainPhotoArray, setIsReady})(MainConteiner);

