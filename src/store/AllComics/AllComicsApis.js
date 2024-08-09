import { axiosInstance } from "../../network/apis";
const handlerEnabled = false;

// Replace endpoint and change api name
const apiExampleRequest = async () => {
  let url = "/getAllComics";
  // const token =
  //   "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYmUwNmI1ZDdjMmE3YzA0NDU2MzA2MWZmMGZlYTM3NzQwYjg2YmMiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90aW55dmlldy1kZXYiLCJhdWQiOiJ0aW55dmlldy1kZXYiLCJhdXRoX3RpbWUiOjE3MjEyMTY3ODUsInVzZXJfaWQiOiJWaHM5UjlZY0FEVndtUGhjQmRPOTJDUHJ5QVMyIiwic3ViIjoiVmhzOVI5WWNBRFZ3bVBoY0JkTzkyQ1ByeUFTMiIsImlhdCI6MTcyMzEwNzg2OSwiZXhwIjoxNzIzMTExNDY5LCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7fSwic2lnbl9pbl9wcm92aWRlciI6ImFub255bW91cyJ9fQ.lWAWNXXYLA-AwkcOczIRYxJGdlJiBpAPJJwcz02U9s8OZ3Sj1kBjpb-rWZOH4gTAdzyfpGfax75kgHOBuopLPgdt9RtznfHKYZk4tD-ps6sLLPscZJdPJPTj2nTCm1ZvbWfuhy1wsZc9vadQIMgJgQWbTMZVNnwvI-TTPVnCYCIZZ2ozSXazInaqGVVYd4MEXj-gvKhOatUZWAGW5yFCxzUPUdBJ48qe6Ecn97pSz2BXu36x5onUVzT8-JxfkOa6d5R9xQh6vzRQXx3F7UdeGaPQQ0WmHn7_oRUBsN9y75Af_9HiZVsYTEcdySnAygQnzrKOPQRr4NlVSRnbBZnZjA";

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
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

apiExampleRequest()

export default {
  apiExampleRequest,
};
