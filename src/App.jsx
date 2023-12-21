import useGenerator from "./hooks/useGenerator.js"
import './App.css'

function App() {
  const gerador = useGenerator()
  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div className="card">
        <button onClick={gerador.gerar}>
          Gerar!
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
