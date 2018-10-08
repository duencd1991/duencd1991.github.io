export const alertActions = {
    success,
    error,
    clear
};

export function success(message) {
    return { type: "SUCCESS", message };
}

export function error(message) {
    return { type: "ERROR", message };
}

export function clear() {
    return { type: "CLEAR" };
}