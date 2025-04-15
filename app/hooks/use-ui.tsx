import * as React from 'react';

import {createContext} from './utils/create-context';

export interface Toast {
  icon?: React.ReactNode;
  message: string;
  status: 'ERROR' | 'INFO' | 'WARNING';
  title?: string;
}

export interface UIState {
  cart: boolean;
  filter: boolean;
  modal: boolean;
  navbar: boolean;
  toasts: Toast[];
}

export type UIElement = 'cart' | 'filter' | 'modal' | 'navbar';

export type UIAction =
  | {
      payload: Toast;
      type: 'pushToast';
    }
  | {
      payload: UIElement;
      type: 'close';
    }
  | {
      payload: UIElement;
      type: 'open';
    }
  | {
      payload: UIElement;
      type: 'toggle';
    }
  | {
      type: 'popToast';
    };

const reducer = (state: UIState, action: UIAction): UIState => {
  const {type} = action;

  switch (type) {
    case 'close': {
      const {payload} = action;

      return {
        ...state,
        [payload]: false,
      };
    }

    case 'open': {
      const {payload} = action;

      return {
        ...state,
        [payload]: true,
      };
    }

    case 'popToast': {
      return {
        ...state,
        toasts: state.toasts.slice(1),
      };
    }

    case 'pushToast': {
      const isDuplicate = state.toasts.some(
        (existingToast) =>
          existingToast.message === action.payload.message &&
          existingToast.status === action.payload.status,
      );

      if (isDuplicate) {
        return state;
      }

      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    }

    case 'toggle': {
      const {payload} = action;

      return {
        ...state,
        [payload]: !state[payload],
      };
    }

    default:
      throw new Error(`Action ${type} not implemented`);
  }
};

const initializer = (): UIState => ({
  cart: false,
  filter: false,
  modal: false,
  navbar: false,
  toasts: [],
});

export interface UIContextValue extends UIState {
  closeCart: () => void;
  closeFilter: () => void;
  closeModal: () => void;

  closeNavbar: () => void;
  openCart: () => void;
  openFilter: () => void;

  openModal: () => void;
  openNavbar: () => void;
  popToast: () => void;

  pushToast: (data: Toast) => void;
  toggleCart: () => void;
  toggleFilter: () => void;

  toggleModal: () => void;
  toggleNavbar: () => void;
}

export type UIProviderProps = {children: React.ReactNode};

const uiDef = {hookName: 'useUI()', name: 'UIProvider'};
const [UIContextProvider, useUIContext] = createContext<UIContextValue>(uiDef);

export const useUI = useUIContext;

export const UIProvider = ({children}: UIProviderProps) => {
  const [ui, dispatch] = React.useReducer(reducer, undefined, initializer);

  const callbacks = React.useMemo(
    () => ({
      closeCart: () => dispatch({payload: 'cart', type: 'close'}),
      closeFilter: () => dispatch({payload: 'filter', type: 'close'}),
      closeModal: () => dispatch({payload: 'modal', type: 'close'}),

      closeNavbar: () => dispatch({payload: 'navbar', type: 'close'}),
      openCart: () => dispatch({payload: 'cart', type: 'open'}),
      openFilter: () => dispatch({payload: 'filter', type: 'open'}),

      openModal: () => dispatch({payload: 'modal', type: 'open'}),
      openNavbar: () => dispatch({payload: 'navbar', type: 'open'}),
      popToast: () => dispatch({type: 'popToast'}),

      pushToast: (toast: Toast) =>
        dispatch({payload: toast, type: 'pushToast'}),
      toggleCart: () => dispatch({payload: 'cart', type: 'toggle'}),
      toggleFilter: () => dispatch({payload: 'filter', type: 'toggle'}),

      toggleModal: () => dispatch({payload: 'modal', type: 'toggle'}),
      toggleNavbar: () => dispatch({payload: 'navbar', type: 'toggle'}),
    }),
    [],
  );

  const value = React.useMemo(
    () => ({
      ...ui,
      ...callbacks,
    }),
    [callbacks, ui],
  );

  return <UIContextProvider value={value}>{children}</UIContextProvider>;
};
