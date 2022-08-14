import { AxiosError } from "axios";

export default (error) => {
  if (error instanceof AxiosError) {
    console.log(`AxiosError: ${error.message} -> ${error.config.url}`);
    return error.response.statusText;
  } else if (error instanceof Error) {
    console.log(`Error: ${error.message} -> ${error.name}`);
    return JSON.parse(error.message) || error.message;
  } else {
    return 'Error';
  }
};