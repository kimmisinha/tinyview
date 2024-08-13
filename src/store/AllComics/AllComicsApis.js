import { axiosInstance } from "../../network/apis";
const handlerEnabled = false;

const apiExampleRequest = async (startAfter) => {
  let url = "/getAllComics";
  const body = JSON.stringify({
    data: {
      startAfter: startAfter,
      records: "20",
      likeInfo: 1,
    },
  });
  try {
    const response = await axiosInstance.post(url, body, {
      handlerEnabled,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default {
  apiExampleRequest,
};
