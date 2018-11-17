export interface User {
  id: number;
  name: string;
  email: string;
  loggedIn: boolean;
}

export interface State {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  user: User | string;
}
const INITIAL_STATE = {
  loading: false,
  loaded: false,
  failed: false,
  user: {name: '', email: '', id: 0}
};

export function reducer(state, action) {
  switch (action.type) {

    default:
      return state;
  }
}
export const getUser = (state: State) => state.user;
