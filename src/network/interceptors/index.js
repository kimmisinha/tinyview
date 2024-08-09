import store from "../../store";
// import { loader } from "../../store/Loader/LoaderAction";
// import Auth from "../../utils/Auth";

const token =
  "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYmUwNmI1ZDdjMmE3YzA0NDU2MzA2MWZmMGZlYTM3NzQwYjg2YmMiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90aW55dmlldy1kZXYiLCJhdWQiOiJ0aW55dmlldy1kZXYiLCJhdXRoX3RpbWUiOjE3MjEyMTY3ODUsInVzZXJfaWQiOiJWaHM5UjlZY0FEVndtUGhjQmRPOTJDUHJ5QVMyIiwic3ViIjoiVmhzOVI5WWNBRFZ3bVBoY0JkTzkyQ1ByeUFTMiIsImlhdCI6MTcyMzEwNzg2OSwiZXhwIjoxNzIzMTExNDY5LCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7fSwic2lnbl9pbl9wcm92aWRlciI6ImFub255bW91cyJ9fQ.lWAWNXXYLA-AwkcOczIRYxJGdlJiBpAPJJwcz02U9s8OZ3Sj1kBjpb-rWZOH4gTAdzyfpGfax75kgHOBuopLPgdt9RtznfHKYZk4tD-ps6sLLPscZJdPJPTj2nTCm1ZvbWfuhy1wsZc9vadQIMgJgQWbTMZVNnwvI-TTPVnCYCIZZ2ozSXazInaqGVVYd4MEXj-gvKhOatUZWAGW5yFCxzUPUdBJ48qe6Ecn97pSz2BXu36x5onUVzT8-JxfkOa6d5R9xQh6vzRQXx3F7UdeGaPQQ0WmHn7_oRUBsN9y75Af_9HiZVsYTEcdySnAygQnzrKOPQRr4NlVSRnbBZnZjA";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    // Modify request here
    // store.dispatch(loader(true));
    request.header.Authorization = token;
  }
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    // Hanlde Response
    // store.dispatch(loader(false));
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    // store.dispatch(loader(false));
    // You can decide what you need to do to handle errors.
    // here's example for unautherized user to log them out .
    // error.response.status === 401 && Auth.signOut();
  }
  return Promise.reject({ ...error });
};
