export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT ='REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN';

const addComment = (text) => {
  return {
    type: ADD_COMMENT,
    commentId: uui.v4(),
    text
  }
};

const editComment = (commentId, editedText) => {
  return {
    type: EDIT_COMMENT,
    commentId,
    text: editedText
  }
};

const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
};

const thumbUp = (commentId) => {
  return {
    type: THUMB_UP_COMMENT,
    commentId
  }
};

const thumbDown = (commentId) => {
  return {
    type: THUMB_DOWN_COMMENT,
    commentId
  }
};