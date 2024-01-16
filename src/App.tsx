import ChipListInput from "./components/ChipListInput";
import { useFetchUsers } from "./hooks/useFetchProfileData";

export default function App() {
  const { data, loading, error } = useFetchUsers("http://localhost:3000/users");
  return (
    <div className="bg-primary h-screen w-screen p-1 flex gap-2 overflow-hidden">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {!loading && !error && <ChipListInput data={data} />}
    </div>
  );
}
