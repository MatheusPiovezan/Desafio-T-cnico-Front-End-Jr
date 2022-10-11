import styled from "styled-components";

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
        .planos {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;

            width: 90vw;
            height: 80vh;

            gap: 20px;
            .endereco {
                display: flex;
                flex-direction: column;

                strong {
                    font-size: 1.1rem;
                    line-height: 2rem;
                }

                span {
                    margin: 0 0 1rem 0;

                    font-size: 1rem;
                }
            }
            
            .internet, .endereco {
                width: 15rem;
                height: 22rem;

                padding: 1rem;

                border: 1px solid #afadad;
                background-color: var(--cor-principal);
                color: var(--cinza-escuro);

                div:nth-child(1) {
                    margin: 0 0 1rem 0;
                    padding: 0 0 1rem 0;
                    border-bottom: 1px solid var(--cinza-escuro); 
                }

                div:nth-child(2) {
                    display: flex;
                    flex-direction: column;

                    strong {
                        font-size: 1.2rem;
                    }
                }

                div:nth-child(3) {
                    margin: 3rem 0 0 0;
                
                    button {
                        all: unset;

                        width: 98%;
                        height: 2rem;

                        font-size: 0.8rem;
                        
                        text-align: center;
                        border-radius: 3px;
                        cursor: pointer;
                    }

                    button:first-child {
                        margin: 0 0 0.3rem 0;

                        background-color: var(--cinza-escuro);
                        color: #afadad;
                        border: 1px solid var(--cinza-escuro);
                    }

                    button:last-child {
                        background-color: #ffffff;
                        color: var(--cinza-escuro);
                        border: 1px solid var(--cinza-escuro);
                    }

                    button:active {
                        filter: invert(.9);
                    }
                    button:hover {
                        transition: 0.5s;
                        filter: invert(.9);
                    }
                }
            }
        }

        .div-link {
            display: flex;
            justify-content: right;

            .link {

                font-size: 1.1rem;

                color: #ffffff;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        section {
            .planos {
                .endereco {
                    display: flex;
                    flex-direction: column;

                    strong {
                        font-size: 2rem;
                        line-height: 3.5rem;
                    }

                    span {
                        font-size: 1.6rem;
                    }
                }

                .internet, .endereco {
                    width: 25rem;
                    height: 30rem;

                    div:nth-child(1) {
                        h1 {
                            font-size: 3rem;
                        }

                        span {
                            font-size: 1.2rem;
                        }
                    }

                    div:nth-child(2) {
                        strong {
                            font-size: 2rem;
                        }

                        span {
                            font-size: 1.2rem;
                        }
                    }
                    div:nth-child(3) {
                        margin: 5rem 0 0 0;

                        button {
                            height: 2.8rem;

                            font-size: 1.1rem;
                        }
                    }
                }  
            }
            .div-link {
                display: flex;
                justify-content: right;

                .link {
                    font-size: 1.8rem;

                    color: #ffffff;
                }
            }
        }
    } 
`