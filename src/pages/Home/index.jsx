import { useRef } from 'react'

import {
  Title,
  Container,
  ContainerInputs,
  Input,
  TopBackground,
  Form,
  InputLabel,
  Button
} from "./styles"

import UsersImg from '../../assets/users.png'

function Home() { //Criando função (sempre c/ letra maiúscula)
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  function registerNewUser() {
    console.log(inputName.current.value)
  }

  return ( //dentro de return não podemos ter mais de uma tag pai, caso não queira usar, podemos usar fragment <></>

    <Container>
      <TopBackground>
        <img src={UsersImg} alt="img-users" />
      </TopBackground>

      <Form>
        <Title>Cadastro de Usuários</Title>
        <ContainerInputs>
          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>
        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>Email<span> *</span></InputLabel>
          <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
        </div>
        <Button type='button' onClick={registerNewUser}>Cadastrar Usuários</Button>
      </Form>
    </Container>

  )
}

export default Home //Exportando função (para chamr ela dentro de main.jsx)

/*
Exportar

------------------------------------------------------//

Utilizamos o export default --> para apenas uma unica coisa;

+ Exemplo:

export default App

------------------------------------------------------//

Utilizamos o export --> para mais de uma coisa.

+ Exemplo:

export function App() {
  return (
    <div>
      <h1>Vite + React + Eu e você</h1>
    </div>
  )
}

export function App2() {
  return (
    <div>
      <h1>Vite + React + Eu e você</h1>
    </div>
  )
}

------------------------------------------------------//

*/

