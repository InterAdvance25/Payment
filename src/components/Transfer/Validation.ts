import { ChangeEvent } from 'react';
export default function Validate(callBack:(value:any,name:string) => void,event:ChangeEvent<HTMLInputElement>) {

    if(+event.target.value || event.target.value === "") {       
        callBack(event.target.value,event.target.name);
    }
}

