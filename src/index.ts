import { createContext, useContext } from 'react';

export default <A>() => {
  const context = createContext<A | undefined>(undefined);
  const useSafeContext = () => {
    const value = useContext(context);
    if (!value) {
      throw new Error('useContext must be inside a Provider with a value');
    }

    return value;
  };

  return {
    hook: useSafeContext,
    Provider: context.Provider,
  };
};
