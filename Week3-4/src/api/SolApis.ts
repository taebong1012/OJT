const baseUrl = "https://sol-api.esls.io";
const token: string = import.meta.env.VITE_TOKEN;
// const imageBaseUrl = 'https://sol-api.esls.io/images/[과목]/[id]';

const wait = (dealy = 1000) =>
  new Promise((resolve) => setTimeout(resolve, dealy));

export const getImages = () =>
  fetch(`${baseUrl}/editor/image/A1`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((r) => r.json());

export const getSound = () =>
  fetch(`${baseUrl}/editor/sound/A1`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((r) => r.json());

export const getData = async () => {
  await wait(1000);
  return JSON.parse(window.localStorage.getItem("ojt-data") ?? "{}");
};

export const postData = async (data: unknown) => {
  window.localStorage.setItem("ojt-data", JSON.stringify(data));
  await wait();
};
