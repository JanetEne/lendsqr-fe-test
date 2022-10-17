export class SecureStorage {
  storeItem = (key: string, value: string) => localStorage.setItem(key, value);
  getItem = (key: string) =>
    typeof window !== "undefined" ? localStorage.getItem(key) : "";
  removeItem = (key: string) => localStorage.removeItem(key);
  clearAll = () => localStorage.clear();
}
