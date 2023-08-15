// import { useFetch } from "./hooks/useFetch"
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

export type Repository = {
  name: string;
  full_name: string;
  description: string;
};

export function Repos() {
  const { data, isFetching } = useQuery<Repository[]>(
    "repos",
    async () => {
      const response = await axios.get(
        "https://api.github.com/users/Bumboobee/repos"
      );

      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60, // 1 minuto

      //stay-while-revalidate
    }
  );
  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <h2>{repo.name.toUpperCase()}</h2>
            <p>
              <Link to={`repos/${repo.full_name}`}>{repo.full_name}</Link>
            </p>
            <p
              style={{
                border: "1px solid grey",
                padding: "20px",
                borderRadius: "4px",
              }}
            >
              {repo.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
