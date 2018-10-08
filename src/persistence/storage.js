export function put(key, value) {
    window.localStorage.setItem(key, value);
}
export function get(key) {
    window.localStorage.getItem(key);
}
export function remove(key) {
    window.localStorage.removeItem(key);
}
export function clear() {
    window.localStorage.clear();
}