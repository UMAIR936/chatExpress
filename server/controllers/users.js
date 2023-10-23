const users = [];

export const addUser = async ({ id, room, name }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUser) {
    return { error: "user is already taken" };
  }
  const user = { id, user, name };
  users.push(user);
  return { user };
};

export const getUser = (id) => {
  users.find((user) => user.id === id);
};

export const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

export const getUsersInRoom = (room) => {
  users.filter((user) => user.room === room);
};
