import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import api from "../api";

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

export default User;
