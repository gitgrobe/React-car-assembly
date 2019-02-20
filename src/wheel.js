import PropTypes from 'prop-types'
import React from 'react';

const Wheel = ({ id, onChoose=f=>f}) =>
    <section className="wheel">
        <div onClick={() => onChoose(id)}>
            <img alt={"wheel number:" + id} src={require("./img/wheels/" + id + ".jpg")} />
        </div>
    </section>

Wheel.propTypes = {
    id: PropTypes.number,
    onChoose: PropTypes.func
}

export default Wheel
