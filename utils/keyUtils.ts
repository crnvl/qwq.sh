export const generateZeroWidth = (length: number) => {
    let zeroWidth = '';
    for (let i = 0; i < length; i++) {
        zeroWidth += String.fromCharCode(Math.floor(Math.random() * (8203 - 8200 + 1) + 8200));
    }
    return zeroWidth;
}

export const generateKey = (length: number) => {
    return Math.random().toString(36).substring(2, length) + Math.random().toString(36).substring(2, length);
}