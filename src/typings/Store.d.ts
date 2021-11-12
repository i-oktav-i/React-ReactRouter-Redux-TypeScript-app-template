import {
  AsyncThunk,
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
} from '@reduxjs/toolkit';

import { AppStore } from 'store';

declare module 'react-redux' {
  function useDispatch(): AppStore['dispatch']

  interface DefaultRootState extends ReturnType<AppStore['getState']> {}
}

declare module '@reduxjs/toolkit' {
  export declare function createAsyncThunk<
    Returned,
    ThunkArg = void,
    ThunkApiConfig extends AsyncThunkConfig = { state: AppState }
  >(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>,
    options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>
  ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;
}
