import Button from "../../components/Button"
import Background from '../../components/TopBackground'
import { useNavigate } from 'react-router-dom'

function ListUsers() {

    const navigate = useNavigate()

    return (
        <div>
            <Background></Background>
            <h1>Listagem de Usuários</h1>
            <Button theme="primary" onClick={() => navigate('/')} >Voltar</Button>
        </div>
    )
}

export default ListUsersS