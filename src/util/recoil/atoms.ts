import { atom, selectorFamily } from "recoil";
import { Error } from "..";

export const serverUrlState = atom({
    key: 'serverUrlState',
    default: '',
});
    
export const errorState = atom({
    key: 'errorState',
    default: [],
})

export const dataState = atom({
    key: 'dataState',
    default: [],
})

export const desiredError = selectorFamily({
    key: 'desiredError',
    get: (errorField: string) => ({get}) => {
        const errors: Error[] = get(errorState);
        if(errors.length > 0) {
            for(let error of errors) {
                if(error.field === errorField) {
                    if(error.errorMessage) {
                        return error.errorMessage;
                    }
                }
            }
        }
        return '';
    }
})