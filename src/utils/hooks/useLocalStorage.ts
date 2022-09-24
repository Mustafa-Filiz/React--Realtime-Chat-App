export const useLocalStorage = () => {
    const setValue = (key: string, value: any): void => {
        if (!value) return

        localStorage.setItem(key, JSON.stringify(value));
    }

    const getValue = (key: string): void => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    return { setValue, getValue }
}