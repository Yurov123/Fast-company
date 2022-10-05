import React from "react";
import PropTypes from 'prop-types';

const Qualitie = ({ qualities }) => {

    return (
        <td>
            {qualities.map((el) => {
                return (
                    <span className={"badge m-1 bg-" + el.color} key={el._id}>
                        {el.name}
                    </span>)
            })}

        </td>
    );
};
Qualitie.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default Qualitie;
