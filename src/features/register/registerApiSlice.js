import { ApiSlice } from "../../app/api/apiSlice";


export const RegisterApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        signup: builder.mutation({
            query: credentials => ({
                url: '/auth/signup',
                method: "POST",
                body: { ...credentials }
            })
        })
    })
});

export const { useSignupMutation } = RegisterApiSlice; 