import PropTypes from 'prop-types'
import React from 'react';
import Wheel from './wheel'
import Skeleton from './skeleton'


const CarDisplay = ({ displayWheels, displaySkeleton }) =>
<section className="display">
    { displaySkeleton ? <Skeleton id={displaySkeleton} /> : <div></div>}
    { displayWheels ?
        <div className="displayWheels">
            <div className="leftWheel"><Wheel id={displayWheels} /></div>
            <div className="rightWheel"><Wheel id={displayWheels} /></div>
        </div> :
    <div></div>
    }

</section>

CarDisplay.propTypes = {
    displayWheels: PropTypes.number,
    displaySkeleton: PropTypes.number
}

export default CarDisplay
