export const buildHeader = () => {
  return {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
}
