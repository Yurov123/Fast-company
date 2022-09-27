import React, { useState } from "react";
import Users from "./components/users";

import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (_id) => {
    
    setUsers(users.filter((user) => user._id !== _id));
  };

  const handleToggleBookMark = (id) => {
    setUsers(users.map((user) => {
      if (user._id === id) {
        return {
         ...user,
          bookmark:!user.bookmark
        };
      }
      return user;
    }));
  };

  return (
    <>
      

      <Users users={users} handleToggleBookMark={handleToggleBookMark} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
