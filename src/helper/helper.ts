import {} from "./helper";

export const AJAX = async (
  name: string | string[] | undefined = undefined,
  region: string | undefined = undefined
) => {
  let url = name
    ? `https://restcountries.com/v3.1/alpha/${name}`
    : "https://restcountries.com/v3.1/all";
  url = region ? `https://restcountries.com/v3.1/region/${region}` : url;
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) throw new Error(`${data.message} ${res.status}`);

  return name ? data[0] : data;
};

export const wait = (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};
