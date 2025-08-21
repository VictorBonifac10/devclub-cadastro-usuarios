import api from "../../services/api"
import { useEffect, useState } from "react"

import Button from "../../components/Button"
import Background from '../../components/TopBackground'
import { useNavigate } from 'react-router-dom'
import { AvatarUser, CardUsers, Container, ContainerUsers, Title, TrashIcon } from "./styles"
import Trash from '../../assets/trash.svg'


function ListUsers() {

    //UseState

    const [users, setUsers] = useState([]) // 1-- começa como um arra vazio

    //UseEffect

    useEffect(() => { // 2-- buscamos os dados com o useEffect
        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data); //atribuimos estes dados ao setUsers(users)
        }
        getUsers();

    }, []) // --> dependencias

    //Toda vez que a tela carrega o useEffect é chamdado.
    //Toda vez que um determinada variavel mude de valor, ele é chamado

    //Delete

    async function deleteUsers(id) {
       await api.delete(`/usuarios/${id}`)

       const updatedUsers = users.filter( user => user.id !== id)

       setUsers(updatedUsers)
    }

    const navigate = useNavigate()

    return (
        <Container>
            <Background></Background>
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>Idade: {user.age}</p>
                            <p>Contato: {user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt="icone-lixo" onClick={() => deleteUsers(user.id)} />
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button theme="primary" onClick={() => navigate('/')} >Voltar</Button>
        </Container>
    )
}

export default ListUsers