import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    height: 100vh;

    font-family: 'Silkscreen', cursive;

    --cor-principal: rgba(255,238,170,255);
    --cinza-escuro: rgba(51,51,51,255);
    background-color: var(--cinza-escuro);
    color: var(--cinza-escuro);

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        width: 90%;
        height: 60%; 
        
        background-color: var(--cor-principal);
        border-radius: 15px;
        border: 1px solid rgba(153,142,102,255);

        h2 {
            font-size: 2.5rem;
            text-align: center;
        }

        form {
            display: flex;
            flex-direction: column;

           input {
            all: unset;

            width: 50vw;

            padding: 1.0rem;            

            font-size: 1.5rem;

            border-bottom: 1px solid black;
            background-color: rgba(240,224,160,255);
           }

           button {
            all: unset;

            margin: 1rem 0 0 0;
            padding: 1rem;

            font-size: 1.3rem;
            text-align: center;

            background-color: var(--cinza-escuro);
            color: #afadad;
            border: 1px solid black;
            cursor: pointer;
           }

           button:active {
                filter: invert(.9);
            }
           button:hover {
                transition: 0.5s;
                filter: invert(.9);
            }
        }

        .error {
            margin: -6.2rem;
            span {
                color: #8a0000;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        section {
            width: 70rem;

            h2 {
                font-size: 3.5rem;
            }
            
            form {

                input {
                    width: 38.4rem;
                }
            }

            .error {
            margin: -7.1rem;
            span {
                font-size: 1.5rem;
            }
        }
        }
    } 
`
