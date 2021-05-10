export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const POST_LIST_REQUEST = "POST_LIST_REQUEST";
export const POST_LIST_SUCCESS = "POST_LIST_SUCCESS";
export const POST_LIST_FAILURE = "POST_LIST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

const inititalState = {
  //   posts: [
  //     {
  //       id: 1,
  //       content: "test",
  //       createAt: "2021-05-08",
  //       User: {
  //         id: 1,
  //         name: "test",
  //         email: "test",
  //       },
  //       Comment: [
  //         {
  //           id: 1,
  //           content: "댓글댓글",
  //           createAt: "2021-05-08",
  //           User: {
  //             id: 1,
  //             name: "test",
  //             email: "test",
  //           },
  //         },
  //         {
  //           id: 2,
  //           content: "댓글댓글",
  //           createAt: "2021-05-08",
  //           User: {
  //             id: 1,
  //             name: "test",
  //             email: "test",
  //           },
  //         },
  //         {
  //           id: 3,
  //           content: "댓글댓글",
  //           createAt: "2021-05-08",
  //           User: {
  //             id: 1,
  //             name: "test",
  //             email: "test",
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       content: "test",
  //       createAt: "2021-05-08",
  //       User: {
  //         id: 1,
  //         name: "test",
  //         email: "test",
  //       },
  //       Comment: [
  //         {
  //           id: 1,
  //           content: "댓글댓글",
  //           createAt: "2021-05-08",
  //           User: {
  //             id: 1,
  //             name: "test",
  //             email: "test",
  //           },
  //         },
  //         {
  //           id: 2,
  //           content: "댓글댓글",
  //           createAt: "2021-05-08",
  //           User: {
  //             id: 1,
  //             name: "test",
  //             email: "test",
  //           },
  //         },
  //         {
  //           id: 3,
  //           content: "댓글댓글",
  //           createAt: "2021-05-08",
  //           User: {
  //             id: 1,
  //             name: "test",
  //             email: "test",
  //           },
  //         },
  //       ],
  //     },
  // ],
  posts: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  postListLoading: false,
  postListDone: false,
  postListError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

const post = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: true,
        posts: [action.data, ...state.posts],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case POST_LIST_REQUEST:
      return {
        ...state,
        postListLoading: true,
        postListDone: false,
        postListError: null,
      };
    case POST_LIST_SUCCESS:
      return {
        ...state,
        postListLoading: false,
        postListDone: true,
        posts: action.data,
      };
    case POST_LIST_FAILURE:
      return {
        ...state,
        postListLoading: false,
        postListError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      const idx = state.posts.findIndex((v) => v.id === action.data.postId);
      state.posts[idx].commnets = [action.data, ...state.posts[idx].commnets];
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        removePostLoading: false,
        removePostDone: true,
        posts: [...state.posts.filter((v) => v.id !== action.data)],
      };
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        removePostLoading: false,
        removePostError: action.error,
      };

    default:
      return state;
  }
};

export default post;
