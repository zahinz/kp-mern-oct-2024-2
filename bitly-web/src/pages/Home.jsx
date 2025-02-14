import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHealthData } from "../utils/api";

function Home() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleNavigateRegister = () => {
    navigate("/register");
  };
  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const fetchData = async () => {
    const data = await getHealthData();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-xl text-center">Home</h1>
        <div className="space-x-2 mx-auto">
          <button onClick={handleNavigateLogin}>Login</button>
          <button onClick={handleNavigateRegister} className="outline">
            Register
          </button>
        </div>
        {data && (
          <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <h2>{data?.name}</h2>
            <h2>{data?.description}</h2>
            <h2>{data?.version}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
