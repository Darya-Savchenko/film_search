import {MovieCard} from "../components";
import {data} from "./stub";

export default {
  title: 'Card/Movie card',
  component: MovieCard,
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
