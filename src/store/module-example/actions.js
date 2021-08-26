export function someAction (/* context */) {
}
import { api } from "boot/axios";

export function gettoken(context) {
    console.log("actions", context);
  
    api
      .post("/auth/token")
      .then((response) => {
        console.log("response", response);
        // alert(JSON.stringify(response.data));
        context.commit("TOKEN", response.data);
      })
      .catch((err) => {});
  }