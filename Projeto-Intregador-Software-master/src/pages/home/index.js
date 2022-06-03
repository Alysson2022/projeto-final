import './index.scss';
import Logo from '../../assets/images/logoartmaac.png'
import Login from '../../assets/images/login-removebg-preview.png'
import Cera from '../../assets/images/cera.jpg'
import Fig1 from '../../assets/images/fig1.jpg'
import Fig2 from '../../assets/images/fig2.jpg'
import Fig3 from '../../assets/images/fig3.jpg'
import Insta from '../../assets/images/insta-removebg-preview.png'
import Face from '../../assets/images/face-removebg-preview.png'
import Contato from '../../assets/images/contato1-removebg-preview.png'

export default function Index () {
    return (
<main className = 'pagina-inicial'>
        <main>
            <header className = 'container-header'>

                <div>
                    <img className='img1' src={Logo} alt='logo' />
                </div>

                <div class="d1">

                    <a className = 'texto-areaadm' href="../login/login.html"><h3>Área Administrativa</h3> </a>
                    <a href="../login"><img className = 'adm' src={Login} alt='img login' /> </a>

                </div>

            </header>


            <div>

                <img className = 'cera' src={Cera} alt="Img inicial" />

            </div>

            <section className = 'info'>
                <div className = 'container'>

                    <h1 className = 't1'>Quem Somos?</h1>
                    <div className = 'container-texto'>
                        <img className = 'fig1' src={Fig1} alt='Figura 1' />

                        <p>A Maac é uma empresa de artesãos que faz artesanato desde 1999, produzindo também momentos de família mais divertidos, especiais e únicos. O que se iniciou sendo um sonho se tornou um grande negócio empreendedor. O nosso desejo era com que os nossos traços únicos, pudéssemos deixar nossos clientes mais contentes . Muito mais que impressionar com mil palavras é surpreender com um Maac.</p>
                    </div>
                    <hr className = 'linha-horizontal' />

                </div>

                <div className = 'container'>

                    <h1 className = 'titulo-fazemos'> O Que Fazemos?</h1>

                    <div className = 'container-texto2'>
                        <img className = 'fig2' src={Fig2} alt='Figura 2' />

                        <p className = 'texto-fazemos'>Fazemos objetos de artesanato para todos os gostos, eles são uma ótima opção para você presentear alguém que gosta de coisas feitas a mão de um jeito carinhoso e delicado. Além de também, oferecermos formatos de cerâmica diferentes que são de surpreender qualquer um.</p>
                    </div>
                    <hr className = 'linha-horizontal' />

                </div>

                <div className = 'container'>

                    <h1 className = 't1'>Qualidade Dos Nossos Produtos!</h1>

                    <div className = 'container-texto'>
                        <img className = 'fig3' src={Fig3} alt='Figura 3' />

                        <p>Além de alta resistência, nossos produtos tem alta ecologia sustentável, o que nos permite fabricar nossos objetos sem agredir o meio ambiente e sem perder a qualidade do produto.</p>
                    </div>
                
                </div>

            </section>



            <section className='container-principal-footer'>
                    <div className = 'cont'>
                        <img className ='img2' src={Logo} alt='logo' />

                        <h2 className ='art'>ArtMaac's Artesanato</h2>
                    </div>
                        
                    <div className = 'container2'>

                            <div className = 'inicio'>
                                <p className = 'pp'>Início</p>
                                <p className = 'pp'>Home</p>
                                <p>Produtos</p>
                            </div>

                            <div className = 'sobre-nos'>
                                <p className = 'pp'>Sobre-Nós</p>
                                <p>Contato</p>
                            </div>

                            <div className = 'politica'>
                                <p className = 'pp'>Política</p>
                                <p className = 'pp'>Termos</p>
                                <p>Privacidade</p>
                            </div>

                    </div>

                    <div className = 'container3'>

                        <img className = 'insta' src={Insta} alt='Imagem instagram' />
                        <h4 className = 'hh'>@art_maac's</h4>

                        <img className = 'face' src={Face} alt='Imagem facebook' />
                        <h4 className = 'hh2'>@artmaac's</h4>

                        <img className = 'contato' src={Contato} alt='Imagem contato' />
                        <h4 className = 'hh3'>(11)5624-3981</h4>

                    </div>

            </section>
        </main>
</main>
    );
}