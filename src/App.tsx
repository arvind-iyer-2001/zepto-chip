import ChipListInput from "./components/ChipListInput";
import { useFetchUsers } from "./hooks/useFetchProfileData";

export default function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetchUsers(apiUrl);
  if(!apiUrl){
    return <div>
      Not possible
    </div>
  }
  return (
    <div className="bg-primary h-screen w-screen p-1 flex gap-2 overflow-hidden">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {!loading && !error && <ChipListInput data={data} />}
    </div>
  );
}
