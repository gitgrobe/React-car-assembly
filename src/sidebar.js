import PropTypes from 'prop-types'
import React from 'react';
import Skeleton from './skeleton'
import Wheel from './wheel'

const Sidebar = ({ id, skeletons, wheels, onChooseSkel=f=>f, onChoose=f=>f}) =>
    <section className="sidebar">
        <h1>Skeletons:</h1>
        { skeletons.map(id => 
            <Skeleton id={id} onChoose={onChooseSkel} />)
        } 
        <h1>Wheels:</h1>
        { wheels.map(id => 
            <Wheel id={id} onChoose={onChoose} />)
        }
    </section>

Sidebar.propTypes = {
    id: PropTypes.number,
    onChoose: PropTypes.func
}

export default Sidebar
