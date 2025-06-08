import { PageRouteProps } from "@/interface";

const Home = ({ pageRoute }: PageRouteProps) => {
  return (
    <div>
      <h1>Welcome to {pageRoute}</h1>
    </div>
  );
};

export default Home;
