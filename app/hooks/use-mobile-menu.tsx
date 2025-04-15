import * as React from 'react';

import {createContext} from './utils/create-context';

export type MobileMenuState = {
  isOpen: boolean;
};

export type MobileMenuAction =
  | {type: 'close'}
  | {type: 'open'}
  | {type: 'toggle'};

export interface MobileMenuContextValue extends MobileMenuState {
  closeMobileMenu?: () => void;
  openMobileMenu?: () => void;
  toggleMobileMenu?: () => void;
}

const initialState = {
  isOpen: false,
};

const reducer = (state: MobileMenuState, action: MobileMenuAction) => {
  const {type} = action;

  switch (type) {
    case 'close': {
      return {
        ...state,
        isOpen: false,
      };
    }

    case 'open': {
      return {
        ...state,
        isOpen: true,
      };
    }

    case 'toggle': {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }

    default:
      throw new Error(`Action ${type} not implemented`);
  }
};

export type MobileProviderProps = {children: React.ReactNode};

const mobileMenuDef = {hookName: 'useMobileMenu', name: 'MobileMenuProvider'};
const [MobileMenuContextProvider, useMobileMenuContext] =
  createContext<MobileMenuContextValue>(mobileMenuDef);

export const useMobileMenu = useMobileMenuContext;

export const MobileMenuProvider = (props: MobileProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const callbacks = React.useMemo(
    () => ({
      closeMobileMenu: () => dispatch({type: 'close'}),
      openMobileMenu: () => dispatch({type: 'open'}),
      toggleMobileMenu: () => dispatch({type: 'toggle'}),
    }),
    [],
  );

  const value = React.useMemo(
    () => ({
      ...state,
      ...callbacks,
    }),
    [state, callbacks],
  );

  return <MobileMenuContextProvider value={value} {...props} />;
};

MobileMenuProvider.displayName = 'MobileMenuProvider';
