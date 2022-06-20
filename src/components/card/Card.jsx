import './card.css'

function Card(
  {image, textHeader, textBody0 ,textBody1, textBody2, textBody3, textBody4,
  textBody5, price, gb, site
    }) {
  return (
    <div className="card">
      <div className='cardHeader'>
        <img src={image} alt="Avatar" />
        <h3>{textHeader}</h3>
      </div>

      <div className="cardBody">
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <p className='underline'>{textBody0}</p>
          <p>&nbsp;<b>{textBody1}</b></p>
        </div>
        
        <p>{textBody2}</p>
        <h3> <small>R$</small> {price} <small>/Mês*</small> </h3>
        <button className='btn'>Contrate Agora</button>
        <p><b>{textBody3}</b></p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <p style={{color: '#1D5297'}}>{textBody4}&nbsp;</p>
          <p className='textDiscount'>{textBody5}</p>
        </div>
      </div>

      <div className="cardFooter">
        <p style={{borderBottom: '2px dotted #b4c8e4', width: '110px' }}>{site}</p>
        <p> <b> {gb} </b> de Armazenamento</p>
        <p style={{borderBottom: '2px dotted #b4c8e4', width: '200px'}} >Contas de E-mail <b> Ilimitadas </b></p>
        <p>Criador de Sites <b>Grátis</b></p>
        <p>Certificado SSL <b>Grátis</b> (https)</p>
      </div>

    </div>
  )
}

export default Card