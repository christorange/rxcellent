export const getValue = <T>(obj: any, path: string, defaultValue: any): T => {
    if (obj === null || typeof obj !== 'object') {
        return defaultValue;
    }
    const travel = (regexp: RegExp) =>
        String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === null || result === obj ? defaultValue : result;
};
