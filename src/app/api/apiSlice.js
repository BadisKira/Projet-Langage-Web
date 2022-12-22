import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';




const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
    credentials: "include", // send back  http only secure cookie in every query
    prepareHeaders: (headers, { getState }) => {
        const token = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).authToken : getState().auth.authToken
        if (token) {
            console.log("je ssuis juste avanr de mettre le header");
            headers.set('Authorization', `Bearer ${token}`);

            console.log(headers);
        }
        return headers;
    }
})


const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result);
    if (result?.error?.originalStatus === 403) {
        // ici le test n'est pas universel  , faut voir ton back
        console.log('sending refresh token');
        // send refresh token to get ne access token

        const refreshResult = await baseQuery('refreshendpoint', api, extraOptions);
        console.log(refreshResult);

        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            // store the new token

            api.dispatch(setCredentials({ ...refreshResult.data, user }));
            // retry the original query with the new access token
            result = await baseQuery(args, api, extraOptions);
        } else {

            api.dispatch(logOut());
        }
    }

    return result;

}

export const ApiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReauth,
    tagTypes: ['cols', 'tasks', 'kanbans', "profile"],
    endpoints: builder => ({})
}); 
