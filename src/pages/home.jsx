import Navbar from '../components/navbar/Navbar.jsx';
import './styles.css'

import image1 from '../assets/header_img_left.svg'
import image2 from '../assets/header_img_right.svg';
import check from '../assets/icon-check.svg'

function home() {
  return (
    <>
      <Navbar />
      <div className='header'>
      <div className="columns">
        <div className="column">
            <img className='image' src={image1} alt="imageLeft" />
        </div>

        <div className="column">
          <div className='text'>
          <h3>Hospedagem de Sites</h3>
          <h2>Tenha uma hospedagem de sites estável e</h2>
          <h2>evite perder visitantes diariamente</h2>
          </div>
          <div className='textSmall'>
          <h3><img src={check} alt="" /> 99.9% de disponbilidade: seu site sempre no ar</h3>
          <h3><img src={check} alt="" />Suporte 24h, todos os dias &nbsp;&nbsp;<img src={check} alt="" /> Painel de Controle cPanel</h3>

          </div>
        </div>

        <div className="column">
          <img className='image' src={image2} alt="imageRigth" />
        </div>
    </div>
    </div>
    </>
  )
}

export default home