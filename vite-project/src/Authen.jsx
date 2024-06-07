export const Authen = () => {
  const token = "dhaya";
  // const token = localStorage.getItem("token");
  return !!token; //return true if token exists, else return false
};
