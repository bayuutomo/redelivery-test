import React from 'react';
import imageLoader from '../assets/img/loader.gif';

const Loader = ({ ...props }) => (
    (props.value) ? <div className="overlay"><i><img alt="" src={imageLoader} style={{width:"auto"}} /></i></div> : ''
);

export default Loader;