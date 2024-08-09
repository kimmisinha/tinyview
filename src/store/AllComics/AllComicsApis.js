import { axiosInstance } from "../../network/apis";
const handlerEnabled = false;

// Replace endpoint and change api name
const apiExampleRequest = async () => {
  let url = "/getAllComics";
  const body = JSON.stringify({
    data: {
      startAfter: "",
      records: "20",
      likeInfo: 1,
    },
  });
  try {
    const response = await axiosInstance.post(url, body, {
      handlerEnabled,
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default {
  apiExampleRequest,
};
