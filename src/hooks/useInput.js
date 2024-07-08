import { useState } from "react"

export function useInput(defaultValue, validationFn) {

    const [enteredValue, setEnteredValue] = useState(defaultValue)
    const [didEdit, setDidEdit] = useState(false)

    const valueIsValid = validationFn(enteredValue);

    function handleInputChange(event) {
        console.log("changing values");
        setEnteredValue(event.target.value)
        setDidEdit(false)
      }
    
      function handleLostFocus() {
        console.log("Lost focus");
        setDidEdit(true)
      }
    

    return {
        value: enteredValue,
        handleInputChange,
        handleLostFocus,
        hasError: didEdit && !valueIsValid
    }
}