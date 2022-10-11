import * as H from './styles';
import useUser from '../../hooks/useUser';
import useRequest from '../../hooks/useRequest';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  const { setCep, error, setError } = useUser();
  const { getCep } = useRequest();

  setTimeout(() => {
    setError('');
  }, 5000)

  return (
    <H.Container>
      <Header />
      <section>
        <h2>Bem Vindo ao SeuCep!</h2>
        <form onSubmit={getCep}>
          <input type='number' placeholder='Informe o CEP' onChange={(e) => setCep(e.target.value)} required />
          <button>Avançar</button>
        </form>
        {error &&
          <div className='error'>
            <span>{error}</span>
          </div>
        }
      </section>
      <Footer />
    </H.Container>
  );
}

export default Home;
