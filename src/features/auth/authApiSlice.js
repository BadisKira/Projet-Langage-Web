import { ApiSlice } from "../../app/api/apiSlice";


export const AuthApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: "/auth/login",
                method: 'POST',
                body: { ...credentials }
            })
        })
    })

});


export const { useLoginMutation } = AuthApiSlice;