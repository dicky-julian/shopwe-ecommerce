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

export const createImageFormData = (body, image, field) => {
  const data = new FormData();

  (image !== undefined && image !== null) && data.append(field, {
    uri: Platform.OS === "android" ? image.uri : image.uri.replace("file://", ""),
    type: image.type,
    name: image.fileName,
  });

  (body !== undefined && body !== null) && Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};