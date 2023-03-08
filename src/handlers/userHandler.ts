import axios from "axios";
import { 
    URL_MAIN,
    URL_AUTH_TOKENS,
    URL_AUTH_TOKENS_REFRESH,
    URL_DASHBOARD_TEACHERS_BASE
} from 'constant/url';
import { Routes } from "routes/Routes";

// Actions to login for user and admin
export const loginHandler = (data: object) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `${URL_MAIN}${URL_AUTH_TOKENS}`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },  
            data: data
        })
        .then(
            (res) => {
                resolved(res.data);
            },
            (rej) => {
                rejected(rej);
            }
        )
    });
}; 

// Actions to get user base
export const userObjectHandler = (Authorization:any) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `${URL_MAIN}${URL_DASHBOARD_TEACHERS_BASE}`,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization' : `Bearer ${Authorization}`
            },  
        })
        .then(
            (res) => {
                resolved(res.data);
            },
            (rej) => {
                rejected(rej);
            }
        )
    });
}; 

// Actions to refresh the user token
export const refreshTokenHandler = () => {
    // function variables
    let error = true;

    // function logic
    axios({
        url: `${URL_MAIN}${URL_AUTH_TOKENS_REFRESH}`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
            "refreshToken": localStorage.getItem('refreshToken')
        }
    })
    .then((res) => {
        localStorage.setItem('refreshToken', res.data.refreshToken);

        res.data.roles == 'Admin'? 
            localStorage.setItem('admin-token', res.data.accessToken): 
            localStorage.setItem('user-token', res.data.accessToken);

        error = false;
    })
    .catch((err) => {
        console.log(err);
    })

    return error
};

// Actions to regester for user
export const signUpHandler = (data: any, supUrl: string) => {
    return new Promise ((resolved, rejected) => {
        axios({
            url: `${URL_MAIN}${supUrl}`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data
        })
        .then(
            (res) => {
                resolved(res);
            },
            (rej) => {
                rejected(rej.response.data);
            }
        );
    });
};

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.replace(Routes.homeLink)
}