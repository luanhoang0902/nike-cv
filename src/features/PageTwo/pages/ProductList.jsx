import React from 'react';
import PropTypes from 'prop-types';
import ControlPage from '../componunt/ControlPage';
import ListNike from '../componunt/ListNike';

ProductList.propTypes = {
    
};

function ProductList(props) {
    return (
        <div style = {{display: 'flex'}}>
            <ControlPage/>
            <ListNike/>
        </div>
    );
}

export default ProductList;