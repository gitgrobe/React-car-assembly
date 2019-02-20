import PropTypes from 'prop-types'
import React from 'react';

const Skeleton = ({ id , onChoose=f=>f}) =>
    <section className="skeleton">
        <img alt={"skeleton number:" + id} onClick={() => onChoose(id)} src={require("./img/skeletons/" + id + ".jpg")} />
    </section>

Skeleton.propTypes = {
    id: PropTypes.number,
    onChoose: PropTypes.func
}

export default Skeleton
