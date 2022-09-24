import React from "react";


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

export default Qualitie;
