import { profileAPI_REQ, authAPI_REQ } from '../Components/API/API_REQ';
const SET_USER_DATA = "SET_USER_DATA";
const SET_RES_CODE = "SET_RES_CODE";
const SET_IMG = "SET_IMG";


let iniState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    img:"",
    resultCode: 0,
    isFetching: false
}


let iniAction = {

}

const users_redusor = (state = iniState, action = iniAction) => {


    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, data: action.data}
        }
        case SET_RES_CODE: {
            return { ...state, resultCode: action.resultCode }
        }
        case SET_IMG: {
            return { ...state, img: action.img }
        }


        default: return state;

    }
}
    export default users_redusor;

export const getUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } }); 
export const getresultCode = (resultCode) => ({ type: SET_RES_CODE, resultCode });
export const getImg = (img) => ({ type: SET_IMG, img });
export const getAuthThunk = () => (dispatch) => {
    authAPI_REQ.getAuth()
    .then(response => {

        let { id, email, login } = response.data.data;
        dispatch(getUserData(id, email, login))

        dispatch(getresultCode(response.data.resultCode))

        profileAPI_REQ.getProfile(response.data.data.id).then(res => {
            dispatch(getImg(res.data.photos.small))
        });

    });
}

export const logInThunk = (email, password, rememberMe) => (dispatch) => {
    authAPI_REQ.logIn(email, password, rememberMe)
    .then(response => {

        if (response.data.resultCode === 0) {
        authAPI_REQ.getAuth()
        .then(response => {
    
            let { id, email, login } = response.data.data;
            dispatch(getUserData(id, email, login))
    
            dispatch(getresultCode(response.data.resultCode))
    
            profileAPI_REQ.getProfile(response.data.data.id).then(res => {
                dispatch(getImg(res.data.photos.small))
            });
            alert('Вход выполнен')
        });
    }
    })
}
export const logOutThunk = (email, password, rememberMe) => (dispatch) => {
    authAPI_REQ.logOut()
    .then(response => {

        if (response.data.resultCode === 0) {
        authAPI_REQ.getAuth()
        .then(response => {
    
            let { id, email, login } = response.data.data;
            dispatch(getUserData(id, email, login))
    
            dispatch(getresultCode(response.data.resultCode))
    
            profileAPI_REQ.getProfile(response.data.data.id).then(res => {
                dispatch(getImg(res.data.photos.small))
            });
            alert('Выход выполнен')
        });
    }
    })
}