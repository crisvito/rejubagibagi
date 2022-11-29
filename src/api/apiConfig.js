export const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "199c5a0074c5fc134a3d5703d068d11e",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};
