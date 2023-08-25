import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://ceoworld.biz/wp-content/uploads/2022/05/4-Places-In-The-World-You-Must-See.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
