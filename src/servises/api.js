import axios from "axios";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "vLWOEmheEfdCUEdkj4DSCGhIfWiNSzXrlElpOoJ4OCk",
      query: query,
      page: page,
      per_page: 12,
    },
  });
  return response.data;
};