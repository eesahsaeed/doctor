
import { useQuery } from "@apollo/client";
import { GET_ME } from '../gql/query';

const getMe = () => {
  const { data } = useQuery(GET_ME);
}

export default data;
