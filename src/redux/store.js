import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
 import { userApi } from "./services/dashboardQueries";
import clientReducer from "./features/client";

const clientStore = configureStore({
  reducer: {
    client: clientReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(clientStore.dispatch);

export default clientStore;
