import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (users) => {
    setUsers(users.filter((user) => user._id !== user._id));
  };
  const handleToggleBookMark = (id) => {};

  return (
    <>
      <SearchStatus />

      <Users users={users} handleToggleBookMark={handleToggleBookMark} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
