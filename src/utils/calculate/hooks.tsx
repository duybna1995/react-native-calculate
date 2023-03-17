import React, { useReducer } from 'react'

interface actionReducerProps {
    type: string,
    value: string|number
}

interface stateReducerProps {
    result: string|number,
    operation: string,
    secondNumber: string|number
}

const CalculateOperation = (numberBefore: number, numberAfter: number, operation: string) => {
    switch (operation) {
        case "+":
            return numberBefore + numberAfter
        case "-":
            return numberBefore - numberAfter
        case "*":
            return numberBefore * numberAfter
        case "/":
            return numberBefore / numberAfter
        default:
            return numberBefore
    }
}

const CalculateHooks = () => {
    const initState = { 
        result: 0,
        operation: '',
        secondNumber: 0 
    }

    function reducerCalculate(currentState: stateReducerProps, action: actionReducerProps) {
        console.log(currentState, action)
        switch (action.type) {
            case "reset": 
                return {
                    ...currentState, result: 0, operation: '', secondNumber: ''
                }
            case "number":
            case "decimal":
                if (currentState.result.toString().length < 13) {
                    if (currentState.operation !== '') {
                        let concatResult = currentState.secondNumber
                        if ((action.type === "number" && currentState.secondNumber !== 0) || (action.type === "decimal" && currentState.result.toString().indexOf('.') === -1)) {
                            concatResult = currentState.secondNumber.toString() + action.value.toString()
                        } else if(action.type !== "decimal") {
                            concatResult = action.value
                        }
                        return {
                            ...currentState, secondNumber: concatResult
                        }
                    }
                    let concatResult = currentState.result
                    if ((action.type === "number" && currentState.result !== 0) || (action.type === "decimal" && currentState.result.toString().indexOf('.') === -1)) {
                        concatResult = currentState.result.toString() + action.value.toString()
                    } else if(action.type !== "decimal") {
                        concatResult = action.value
                    }
                    return {
                        ...currentState, result: concatResult
                    }
                }
            case "calculate":
                let calculateResult = { ...currentState }

                if (action.value === '+') {
                    if (calculateResult.operation !== '') {
                        calculateResult.result = CalculateOperation(Number(calculateResult.result), Number(calculateResult.secondNumber), calculateResult.operation)
                        calculateResult.secondNumber = 0
                    }
                    calculateResult.operation = '+'
                } else if (action.value === '-') {
                    if (calculateResult.operation !== '') {
                        calculateResult.result = CalculateOperation(Number(calculateResult.result), Number(calculateResult.secondNumber), calculateResult.operation)
                        calculateResult.secondNumber = 0
                    }
                    calculateResult.operation = '-'
                } else if (action.value === '*') {
                    if (calculateResult.operation !== '') {
                        calculateResult.result = CalculateOperation(Number(calculateResult.result), Number(calculateResult.secondNumber), calculateResult.operation)
                        calculateResult.secondNumber = 0
                    }
                    calculateResult.operation = '*'
                } else if (action.value === '/') {
                    if (calculateResult.operation !== '') {
                        calculateResult.result = CalculateOperation(Number(calculateResult.result), Number(calculateResult.secondNumber), calculateResult.operation)
                        calculateResult.secondNumber = 0
                    }
                    calculateResult.operation = '/'
                } else if (action.value === '%') {
                    calculateResult.result = Number(calculateResult.result) / 100
                } else if (action.value === '* -1') {
                    calculateResult.result = Number(calculateResult.result) * -1
                } else if (action.value === '=') {
                    calculateResult.result = CalculateOperation(Number(calculateResult.result), Number(calculateResult.secondNumber), calculateResult.operation)
                    calculateResult.operation = ''
                    calculateResult.secondNumber = 0
                }

                if (calculateResult.result.toString().indexOf('.') !== -1 ) {
                    calculateResult.result = Number(calculateResult.result).toFixed(1);
                }
                return calculateResult;
        }
        return currentState
    }

    const [state, dispatch] = useReducer(reducerCalculate, initState);

    const handlePress = (type: string, value: string | number): void => {
        dispatch({ 'type': type, 'value': value });
    }

    return {
        state,
        handlePress
    }
}

export default CalculateHooks