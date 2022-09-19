import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import api from "../api";

const User = ({
  name,
  _id,
  bookmark,
  onDelete,
  onToggleBookMark,
  completedMeetings,
  rate,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Qualitie {...qual} key={qual.id} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <BookMark status={bookmark} onClick={() => onToggleBookMark(_id)} />
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
