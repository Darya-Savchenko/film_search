import { MovieCardSelected } from "../components";
import {data} from "./stub";

export default {
  title: 'Card/Movie card selected',
  component: MovieCardSelected,
  tags: ['autodocs'],
  argTypes: {
    test: 'test'
  },
};

export const Primary = {
  args: {
    movie: data[0]
  },
};
