import {} from "./helper";

export const AJAX = async (name: string | string[] | undefined = undefined) => {
  const url = name
    ? `https://restcountries.com/v3.1/alpha/${name}`
    : "https://restcountries.com/v3.1/all";
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) throw new Error(`${data.message} ${res.status}`);

  return name ? data[0] : data;
};
