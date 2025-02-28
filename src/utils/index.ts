import exampleObj from "./example.json";

const parseTxtToHTML = (txt: string) => {
  return txt.split("\n").filter((item: any) => item.trim().length > 0);
};

const isSameObject = (a: any, b: any) => {
  if (typeof a !== "object" || typeof b !== "object") return false;
  if (!a || !b) return false;
  let k;
  for (k in a) {
    if (Object.prototype.hasOwnProperty.call(a, k)) {
      if ((typeof a[k] === "function" && typeof b[k] === "function")) {
        continue;
      }
      if (!Object.prototype.hasOwnProperty.call(b, k) || a[k] !== b[k]) {
        return false;
      }
    }
  }
  for (k in b) {
    if (Object.prototype.hasOwnProperty.call(b, k) && !Object.prototype.hasOwnProperty.call(a, k)) {
      return false;
    }
  }
  return true;
};

const getLocalValue = (key: string) => {
  return window.localStorage.getItem(key);
};

const setLocalValue = (key: string, value: any) => {
  window.localStorage.setItem(key, value);
};

const MenuSelectStyle = {
  option: (provided: any, state: any) => {
    const { isDisabled } = state;
    return ({
      ...provided,
      cursor: isDisabled ? "default" : "pointer"
    });
  },
  control: (provided: any) => ({
    ...provided,
    fontSize: "14px",
    cursor: "pointer",
    lineHeight: "1.5"
  }),
  menuPortal: (base: any) => ({
    ...base,
    zIndex: 9999
  }),
  indicatorSeparator: () => {}
};

const loadExample = () => {
  const files = [];
  for (const item in exampleObj) {
    files.push({
      name: item,
      context: exampleObj[item]
    });
  }
  return files;
};

export {
  parseTxtToHTML,
  isSameObject,
  getLocalValue,
  setLocalValue,
  MenuSelectStyle,
  loadExample
};
