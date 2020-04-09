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
    resultCode: 1,
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