import { extendObservable } from "mobx";

class UserStore {
  constructor() {
    extendObservable(this, {
      isLoggedIn: false,
      username: "",
      userID: "",
    });
  }
}

export default new UserStore();
