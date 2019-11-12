export const getStudentsById = ({ data }) =>
  Object.keys(data).map(key => data[key]);
