import { ChevronLeftCircleIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const titulo = searchParams.get("titulo");
  const descricao = searchParams.get("descricao");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftCircleIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>

        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl text-slate-700 font-bold">{titulo}</h2>
          <p className="text-slate-700"> {descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
