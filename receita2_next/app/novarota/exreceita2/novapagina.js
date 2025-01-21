"use client";

import InfoCard from './infocard';
import CustomButton from './button';

export default function NovaPagina() {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div>
      <h1>Bem-vindo à Nova Página</h1>
      <CustomButton label="Clique Aqui" onClick={handleClick} />
      <CustomButton label="Outro Botão" onClick={() => alert('Outro botão clicado!')} />
      <InfoCard
        title="Virlania Canuto"
        description="Estudante de BSI, UFRN-CERES. 4° período."
      />
    </div>
  );
}


