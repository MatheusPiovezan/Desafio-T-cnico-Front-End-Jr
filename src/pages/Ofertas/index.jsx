import * as O from './styles';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Ofertas() {
    const { endereco } = useUser();

    return (
        <O.Container>
            <Header />
            <section>
                <div className='planos'>
                    <div className='endereco'>
                        <strong>Logradouro:</strong>
                        <span>{endereco.logradouro}</span>
                        <strong>Bairro:</strong>
                        <span>{endereco.bairro}</span>
                        <strong>Localidade/UF:</strong>
                        <span>{endereco.localidade}/{endereco.uf}</span>
                        <strong>CEP:</strong>
                        <span>{endereco.cep}</span>
                    </div>
                    <div className='internet'>
                        <div>
                            <h1>600Mega</h1>
                            <span>+Wi-fi e Modem grátis</span>
                        </div>
                        <div>
                            <span>Por apenas</span>
                            <strong>R$ 149,99/mês</strong>
                            <span>Instalação grátis</span>
                        </div>
                        <div className='internet-btn'>
                            <button>Assinar plano online</button>
                            <button>Falar com atendente</button>
                        </div>
                    </div>
                    <div className='internet'>
                        <div>
                            <h1>300Mega</h1>
                            <span>+Wi-fi e Modem grátis</span>
                        </div>
                        <div>
                            <span>Por apenas</span>
                            <strong>R$ 109,99/mês</strong>
                            <span>Instalação grátis</span>
                        </div>
                        <div className='internet-btn'>
                            <button>Assinar plano online</button>
                            <button>Falar com atendente</button>
                        </div>
                    </div>
                    <div className='internet'>
                        <div>
                            <h1>100Mega</h1>
                            <span>+Wi-fi e Modem grátis</span>
                        </div>
                        <div>
                            <span>Por apenas</span>
                            <strong>R$ 79,99/mês</strong>
                            <span>Instalação grátis</span>
                        </div>
                        <div className='internet-btn'>
                            <button>Assinar plano online</button>
                            <button>Falar com atendente</button>
                        </div>
                    </div>
                </div>
                <div className='div-link'>
                    <Link className='link' to={-1}>Ops, errei meu cep!</Link>
                </div>
            </section>
            <Footer />
        </O.Container >
    );
}

export default Ofertas;