
export const set_User="set_User";
export const set_Auth="set_Auth"

export const setAuth=(payload)=>({
    type:set_Auth,
    payload
})
export const setUser=(payload)=>({
  type:set_User,
  payload
})


  
  