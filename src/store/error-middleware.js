import { Alert } from "react-native";

const errorHandlerMiddleware = () => next => async action => {
    try {
        await next(action)
    } catch (err) {
        console.error('unhandled error', err)
        Alert.alert('Error', err.message);
    }
}

export default errorHandlerMiddleware
