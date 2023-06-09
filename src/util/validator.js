export const isValid = (str) => {
    if (typeof str === 'undefined' || typeof str !== 'string') {
        return false
    }
    else {
        str = str.trim()
        if(str) {
            return str
        } 
        else {
            return false
        }
    }
}
