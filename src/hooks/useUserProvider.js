import { useState } from 'react';

function useUserProvider() {

    const [endereco, setEndereco] = useState([]);
    const [cep, setCep] = useState('');
    const [error, setError] = useState('');

    return {
        cep, setCep,
        endereco, setEndereco,
        error, setError
    };
}

export default useUserProvider;