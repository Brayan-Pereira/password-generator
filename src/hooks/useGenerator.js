import { useState } from "react";

export default function Generator() {
    const [senha, setSenha] = useState("")
    const caracters = "1234567890qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM"
    let copiar = ""
    const gerar = () => {
        let valorAleatorio = ""
        for (let i = 0; i < 8; i++) {
            valorAleatorio += caracters[(Math.floor(Math.random() * caracters.length))]
        }
        setSenha(valorAleatorio)
        setStatusbtn("Copiar")
    }

    const [statusbtn, setStatusbtn] = useState("Copiar")
    const btnCop = () => { 
        if (statusbtn === "Copiar" && senha !== "") {
            copiar = "Copiado!"
            navigator.clipboard.writeText(senha)
                .then(() => {
                   alert(`senha: ${senha} copiado para a area de transferencia`)
                })
                .catch(err => {
                    console.error('Erro ao copiar valor para a área de transferência: ', err)
                });
        } else {
            copiar = "Copiar"
        }
        setStatusbtn(copiar)
    }

    return { senha, gerar, statusbtn, btnCop }
}
