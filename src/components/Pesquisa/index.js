import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
     width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Pesquisa = () => {

    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    console.log(livrosPesquisados.map(livro => livro.nome))

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livor na nossa estante.</SubTitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={(evento) => {
                    const textoPesquisado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoPesquisado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}

            />
        </PesquisaContainer>
    )
}

export default Pesquisa