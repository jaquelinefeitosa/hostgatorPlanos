import React, { useEffect, useState } from 'react';
import './home.css'
import axios from 'axios'

import Navbar from '../components/navbar/Navbar.jsx';
import Card from '../components/card/Card.jsx'
import ButtonGroup from '../components/buttonGroup/ButtonGroup.jsx';

import image1 from '../assets/header_img_left.svg'
import image2 from '../assets/header_img_right.svg';
import check from '../assets/icon-check.svg'

//planos imagem
import largePlan from '../assets/large_plan.svg';
import mediumPlan from '../assets/medium_plan.svg';
import smallPlan from '../assets/small_plan.svg';

import arrow from '../assets/icon_arrow_down.svg'

const baseURL = "https://2891637c-8ab7-4a84-906b-a98465726f85.mock.pstmn.io/prices";

function home() {

  const [post, setPost] = useState('');
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.shared.products.product_5);
    });
  }, []);
  
  console.log(post)
  return (
    <>
      <div className='container'>


        <Navbar />
        {/* header */}
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
          <img className='arrow' src={arrow} alt="arrow" />
        {/* end header */}

        {/* group button */}
        <ButtonGroup />
        {/* end group button */}

        {/* cards */}
        <div className='cards'>
          {Object.key(post).map((item, index) => (
            <h1 key={index}>{post.item.name}</h1>
          ))}
          <Card textHeader={"Plano P"} image={smallPlan}

            price={'50,00'} textBody0={50} textBody1={"R$500"} textBody2={"equivalente a"}
            textBody3={'1 ano de Domínio Grátis .'} textBody4={'economize R$ 174,48'} textBody5={'40% off'}
            gb={'100 GB'} site={'Para 1 site'}
          />
          <Card textHeader={"Plano M"} image={mediumPlan}
            price={'50,00'} textBody0={'R$430'} textBody1={"R$500"} textBody2={"equivalente a"}
            textBody3={'1 ano de Domínio Grátis .'} textBody4={'economize R$ 174,48'} textBody5={'40% off'}
            gb={'100 GB'} site={'Sites Ilimitados'}
          />
          <Card textHeader={"Plano Turbo"} image={largePlan}
            price={'50,00'} textBody0={'R$430'} textBody1={"R$500"} textBody2={"equivalente a"}
            textBody3={'1 ano de Domínio Grátis .'} textBody4={'economize R$ 174,48'} textBody5={'40% off'}
            gb={'150 GB'} site={'Sites Ilimitados'}
          />

        </div>
        {/* end cards */}
      </div>
    </>
  )
}

export default home