
import { useState, useEffect } from "react";

type validationType = {
    result: boolean,
    message: string,
    isValid : boolean
}

export const usePasswordValidation = (password: string) => {

    const requiredLength = 7;
    const [validLength, setValidLength] = useState<validationType>({ result: true, message: `Atleast ${requiredLength} characters`,isValid : false });
    const [hasNumber, setHasNumber] = useState<validationType>({ result: true, message: "Numbers(0-9)",isValid : false});
    const [upperCase, setUpperCase] = useState<validationType>({ result: true, message: "Upper case letters (A-Z)",isValid : false });
    const [lowerCase, setLowerCase] = useState<validationType>({ result: true, message: "Lower case letters (a-z)",isValid : false });
    // const [specialChar, setSpecialChar] = useState(null);
    const [match, setMatch] = useState(null);
    
    useEffect(() => {
        if (password == undefined) {
        }
        else {
            setValidLength(password?.length >= requiredLength ? { result: true, message: `Atleast 8 characters`, isValid : true } : { result: false, message: `Atleast 8 characters`,isValid : false });
            setUpperCase(password?.toLowerCase() === password ? { result: false, message: "Upper case letters (A-Z)",isValid : false } : { result: true, message: "Upper case letters (A-Z)",isValid : true });
            setLowerCase(password?.toUpperCase() === password ? { result: false, message: "Lower case letters (a-z)" ,isValid : false} : { result: true, message: "Lower case letters (a-z)" , isValid : true });
            setHasNumber(/\d/.test(password) ? { result: true, message: "Numbers(0-9)",isValid : true } : { result: false, message: "Numbers(0-9)",isValid : false });
        }

    }, [password?.length]);

    return [validLength, hasNumber, upperCase, lowerCase]

}

