export function someMutation (/* state */) {
}

export const updateDrawerState = (state, opened) => {
    state.drawerState = opened
}
  
// token
export function TOKEN(state, res) {
    console.log("mutation", res);
    state.tokenState.token_type = res["token-type"];
    state.tokenState.access_token = res["access-token"];
  }