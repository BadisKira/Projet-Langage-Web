import { ApiSlice } from "../../app/api/apiSlice";

export const RegisterApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => {
        signup: builder.mutation({
            query: credentials => ({
                url: '/signup',
                method: "POST",
                body: { ...credentials }
            })
        })
    }
});

export const { useSignUpMutation } = RegisterApiSlice; 