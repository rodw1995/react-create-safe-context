# react-create-safe-context
Helper to create context in TypeScript with no defaultValue, yet no need to check for undefined.

https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#context

## Example
```js
import createSafeContext from '@rodw95/react-create-safe-context';

type AuthContextValue = {
  state: 'signedIn' | 'signedOut',
};

const AuthContext = createSafeContext<AuthContextValue>();  
export const useAuthContext = Context.hook;

export default ({ children }) => (
  <AuthContext.Provider value={{ state: 'signedIn' }}>
    {children}
  </AuthContext.Provider>
);
```
