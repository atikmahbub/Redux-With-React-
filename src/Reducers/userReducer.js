const user = (state = { 
   name: "Max",
   age: 30 },action) => {
    switch (action.type) {
      case "SET_NAME":
        state = {
          ...state,
          name: action.payload
         
        }
        break;
      case "SET_AGE":
         state = {
          ...state,
          age:action.payload
        }
        break;
      default:
    }
    return state;
  }; 

export default user;