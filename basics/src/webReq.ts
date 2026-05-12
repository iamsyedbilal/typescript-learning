import axios from "axios";
import type { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetch = async () => {
  try {
    const response: AxiosResponse<Todo[]> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    }
  }
};

axios.get("https://example.com/data").then((response) => {
  console.log(response);
});
