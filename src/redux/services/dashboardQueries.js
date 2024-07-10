import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_BASE_URL,
    prepareHeaders: (headers) => {
      let token = localStorage.getItem(utils?.tokenVar);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    // headers: {
    //   "Content-Type": "application/json",
    // },
  }),
  tagTypes: ['Metrics', 'Employees', 'Wallet', 'Employee', 'Without Lite', 'Without Sub'],
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: (client) => ({
        url: `/account/business/employees?${client.searchQuery}page=${client.page}`,
        method: "GET",
      }),
      providesTags: ["Employees"],
    }),
    getAllEmployeesByFilter: builder.query({
      query: (client) => ({
        url: `/account/business/employees?page=${client.page}`,
        method: "GET",
      }),
    }),
    getAllEmployeesWithoutLite: builder.query({
      query: () => ({
        url: `/account/business/employees?no_lite=1`,
        method: "GET",
      }),
      providesTags: ["Without Lite"],
    }),
    getSubscriptionPlans: builder.query({
      query: () => ({
        url: `/account/subscription-plans`,
        method: "GET",
      }),
    }),
    getWalletBalance: builder.query({
      query: () => ({
        url: `/account/wallet`,
        method: "GET",
      }),
      providesTags: ["Wallet"]
    }),
    getTransactionHistory: builder.query({
      query: (client) => ({
        url: `/account/transaction-history?${client.searchQuery}page=${client.page}`,
        method: "GET",
      }),
    }),
    getProfile: builder.query({
      query: () => ({
        url: `/account/profile`,
        method: "GET",
      }),
    }),
    getEmployeeDetails: builder.query({
      query: (client) => ({
        url: `/account/business/employees/single/${client.id}`,
        method: "GET",
      }),
      providesTags: ["Employee"]
    }),
    getDashboardMetrics: builder.query({
      query: () => ({
        url: '/account/business/dashboard-metrics',
        method: "GET",
      }),
      providesTags: ["Metrics"]
    }),
    getLiteEmployeeUsage: builder.query({
      query: (client) => ({
        url: `/account/business/lite/employees/usage?employee_id=${client.id}&${client.searchQuery}page=${client.page}`,
        method: "GET",
      }),
    }),
    getAllEmployeesWithoutSubscription: builder.query({
      query: () => ({
        url: '/account/business/employees/unsubscribed',
        method: "GET",
      }),
      providesTags: ["Without Sub"]
    }),
    createSubscription: builder.mutation({
      query: (data) => ({
        url: '/account/business/subscription/employees',
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Employees", "Wallet", "Metrics", 'Without Sub']
    }),
    createLitePlan: builder.mutation({
      query: (data) => ({
        url: 'account/business/lite/employees',
        method: "POST",
        body: data
      }),
      invalidatesTags: ['Employees', 'Metrics', 'Without Lite']
    }),
    editLitePlan: builder.mutation({
      query: (data) => ({
        url: `account/business/lite/employees/update/${data.planId}`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ['Employees', 'Metrics', 'Employee']
    }),
    getAllServicesUsage: builder.query({
      query: (client) => ({
        url: `account/business/lite/employees/usage/statistics?interval=${client.interval}`,
        method: "GET",
      }),
    }),
    getServiceUsage: builder.query({
      query: (client) => ({
        url: `account/business/lite/employees/usage/statistics?service=${client.service}&interval=${client.interval}`,
        method: "GET",
      }),
    }),
    addEmployee: builder.mutation({
      query: (data) => ({
        url: `/account/business/create-employee`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ['Employees', 'Metrics']
    }),
    deactivateUser: builder.mutation({
      query: (client) => ({
        url: `/account/business/deactivate/${client.id}`,
        method: "POST",
        body: client
      }),
      invalidatesTags: ['Employees', 'Employee', 'Metrics']
    }),
    reactivateUser: builder.mutation({
      query: (client) => ({
        url: `/account/business/reactivate/${client.id}`,
        method: "POST",
        body: client
      }),
      invalidatesTags: ['Employees', 'Employee', 'Metrics']
    }),
    reactivatePlan: builder.mutation({
      query: (client) => ({
        url: `account/business/lite/employees/update/${client.planId}`,
        method: "POST",
        body: client
      }),
      invalidatesTags: ['Employees', 'Employee', "Metrics"]
    }),
    fundWallet: builder.mutation({
      query: (client) => ({
        url: `/account/fund-wallet`,
        method: "POST",
        body: client
      }),
      invalidatesTags: ['Wallet']
    }),
    editEmployee: builder.mutation({
      query: (client) => ({
        url: `/account/business/update-employee`,
        method: "POST",
        body: client
      }),
      invalidatesTags: ['Employees', 'Employee']
    }),
    signup: builder.query({
      query: (client) => ({
        url: `account/business/lite/employees/usage/statistics?service=${client.service}&interval=${client.interval}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetLiteEmployeeUsageQuery,
  useGetSubscriptionPlansQuery,
  useFundWalletMutation,
  useGetAllEmployeesQuery,
  useGetEmployeeDetailsQuery,
  useGetAllEmployeesByFilterQuery,
  useGetWalletBalanceQuery,
  useCreateSubscriptionMutation,
  useGetDashboardMetricsQuery,
  useAddEmployeeMutation,
  useCreateLitePlanMutation,
  useEditEmployeeMutation,
  useDeactivateUserMutation,
  useReactivateUserMutation,
  useGetTransactionHistoryQuery,
  useGetProfileQuery,
  useReactivatePlanMutation,
  useGetAllEmployeesWithoutLiteQuery,
  useGetServiceUsageQuery,
  useGetAllServicesUsageQuery,
  useEditLitePlanMutation,
  useGetAllEmployeesWithoutSubscriptionQuery,
  useLazySignupQuery
} = userApi;
