let initialState = [{ Name: "Aishu", Designation: "Jr Associates" }];
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      console.log("Reducer Add Post");
      console.log(state);
      console.log("Action.data Add POst=" + action.data);
      return state.concat([action.data]);
    case "DELETE_POST":
      return state.filter(post => post.id !== action.id);
    case "EDIT_POST":
      return state.map(post =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE":
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            Name: action.data.newName,
            Designation: action.data.newDesignation,
            editing: !post.editing
          };
        } else return post;
      });
    default:
      return state;
  }
};
export default postReducer;
