import axios from "axios";
import useUser from './useUser';
import { useNavigate } from 'react-router-dom';

function useRequest() {
    const { cep, setEndereco, setError } = useUser();
    const navigate = useNavigate();

    async function getCep(e) {
        e.preventDefault();

        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

            if (response.data.erro) {
                setError('CEP INVÁLIDO');
                return;
            }

            setEndereco(response.data);
            navigate('/ofertas');
        } catch (error) {
            if (error.message) {
                setError('CEP INVÁLIDO');
                return;
            }
        }
    }
    return {
        getCep
    };
}

export default useRequest;