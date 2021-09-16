import { AppStore } from 'store';

declare module 'react-redux' {
  function useDispatch(): AppStore['dispatch']

  interface DefaultRootState extends ReturnType<AppStore['getState']> {}
}
