import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import clientReducer from "./features/client";
import { userApi } from "./services/dashboardQueries";

const clientStore = configureStore({
  reducer: {
    // client: clientReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(clientStore.dispatch);

export default clientStore;
