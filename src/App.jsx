import useGenerator from "./hooks/useGenerator.js"
import './App.css'
import { useState } from "react"
function App() {
  const [passwordSize, setPasswordSize] = useState(8)
  const gerador = useGenerator(passwordSize)
  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div className="form">
        <label htmlFor="passwordSize">
          Informe o tamanho da senha:
        </label>
        <input
          type="number"
          id="passwordSize"
          value={passwordSize}
          min={1}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>
      <div className="card">
        <button onClick={gerador.gerar}>
          Gerar senha de {passwordSize} caracteres!
        </button>
        <button onClick={gerador.btnCop}>
          {gerador.statusbtn}
        </button>
      </div>
      <p className="read-the-docs">
        {gerador.senha}
      </p>
    </>
  )
}
export default App
