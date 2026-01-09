import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        placeholder="Digite o titulo da tarefa"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />
      <Input
        placeholder="Digite o titulo da tarefa"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
      />
      

      <button
        onClick={() => {
          if (!titulo.trim() || !descricao.trim()) {
            return alert("Preencha o título e a descrição da tarefa");
          }
          onAddTaskSubmit(titulo, descricao);
          setTitulo("");
          setDescricao("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
