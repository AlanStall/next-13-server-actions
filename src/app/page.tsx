"use client";

import { useState } from "react";
import { ChamadaApi } from "./serverSide/ChamadaApi";

export default function Home() {
  const [values, setValues] = useState({
    usuario: "",
    senha: "",
  });

  function handleChange(event: any) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  }
  function outraFuncao(event: any) {
    event.preventDefault();
    ChamadaApi(values.usuario, values.senha);

    // console.log(values.usuario, values.senha);
  }
  return (
    <main>
      <p>ola mundo</p>
      <form onSubmit={outraFuncao}>
        <input
          placeholder="Usuário"
          name="usuario"
          value={values.usuario}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="senha"
          type="password"
          value={values.senha}
          onChange={handleChange}
        />
        <button type="submit">chamar</button>
      </form>
    </main>
  );
}
