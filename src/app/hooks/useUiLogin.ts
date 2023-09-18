'use client';

import { useReducer } from 'react';

interface UILoginState {
  isVisible: boolean;
  isVisibleConfirm: boolean;
  selected: 'login' | 'signup';
  validateConfirmPassword: boolean;
}

// Định nghĩa kiểu dữ liệu cho action
type UILoginAction =
  | { type: 'TOGGLE_VISIBILITY' }
  | { type: 'TOGGLE_VISIBILITY_CONFIRM' }
  | { type: 'HANDLE_SELECTED' };

const initialState: UILoginState = {
  isVisible: false,
  isVisibleConfirm: false,
  selected: 'login',
  validateConfirmPassword: false,
};

const reducer = (state: UILoginState, action: UILoginAction): UILoginState => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return { ...state, isVisible: !state.isVisible };
    case 'TOGGLE_VISIBILITY_CONFIRM':
      return { ...state, isVisibleConfirm: !state.isVisibleConfirm };
    case 'HANDLE_SELECTED':
      return {
        ...state,
        selected: state.selected === 'signup' ? 'login' : 'signup',
        validateConfirmPassword: state.selected === 'signup' ? false : true,
      };
    default:
      return state;
  }
};
const useUILoginState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleVisibility = () => dispatch({ type: 'TOGGLE_VISIBILITY' });

  const toggleVisibilityConfirm = () => dispatch({ type: 'TOGGLE_VISIBILITY_CONFIRM' });

  const handleSelected = () => dispatch({ type: 'HANDLE_SELECTED' });

  return { state, toggleVisibility, toggleVisibilityConfirm, handleSelected };
};

export default useUILoginState;
