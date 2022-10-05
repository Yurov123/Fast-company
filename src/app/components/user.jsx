import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from 'prop-types';


const User = ({
    name,
    _id,
    bookmark,
    qualities,
    profession,
    handleToggleBookMark,
    completedMeetings,
    handleDelete,
    rate,
}) => {
    return (
        <tr key={_id}>
            <td>{name}</td>
                    <Qualitie qualities={qualities} />
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} /5</td>
            <td>
                <BookMark status={bookmark} onClick={() => handleToggleBookMark(_id)} />
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-danger">
                    delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes ={
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    bookmark: PropTypes.func.isRequired,
    profession: PropTypes.string.isRequired,
    handleToggleBookMark: PropTypes.func.isRequired,
    completedMeetings: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    rate: PropTypes.number.isRequired
};

export default User;
