export const createUrlParamFromObj = (params = null) => {
  if (!params) return "";
  const result = [];
  Object.keys(params).map(key => result.push(`${key}=${params[key]}`));
  return `?${result.join("&")}`;
};

export const getResultResponse = (res) => {
  return res.data.data.result;
}

export const splitString = string => {
  const arrays = string.split('|');
  const result = [];
  arrays.map(data => {
    const datas = data.split('-');
    result.push(datas);
  })
  return result;
}