import React from 'react';
import PropTypes from 'prop-types';
import ImageText from '../components/ImageText';
import ListImage from '../components/ListImage';
import TextBot from '../components/TextBot';

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div>
            <ImageText/>
            <ListImage/>
            <div style ={{fontSize:'28px',padding:'10px 50px'}}>Featured</div>
            <ImageText/>
            <ListImage/>
            <TextBot/>    
        </div>
    );
}

export default Home;