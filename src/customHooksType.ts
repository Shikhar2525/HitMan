export type CustomApiArgs = {
  baseUrl: string;
  path: string;
  params?: { [key: string]: string | number };
  initialData?: any;
};

export type CustomApiUtil = {
  skip: boolean;
};

export const createUrl = (
  baseUrl: string,
  path: string,
  params?: { [key: string]: string | number }
) => {
  let url = baseUrl + path;
  if (params && Object.keys(params).length > 0) {
    url += "?";
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        url += `${key}=${params[key]}&`;
      }
    }
    url = url.slice(0, -1);
  }
  return url;
};
