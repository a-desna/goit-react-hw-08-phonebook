const isLogIn = state => state.auth.token;

const getUserName = state => state.auth.user.name;

export default { isLogIn, getUserName };
