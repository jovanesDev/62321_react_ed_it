// export const isItemExist = (id,arr) => {
//     console.log({id,arr})
//     return arr.some((item) => item.id === id)
// }

export const defineInputType = (string) => {
  switch (string) {
    case "precio":
      return "number";
    case "password":
        return "password"
    case "email":
        return "email"

    default:
      return "text";
  }
};

export const defineIfIsRequired = (string) => {
    switch (string) {
      case "email":
        return true;
      case "password":
          return true
  
      default:
        return false;
    }
  };
