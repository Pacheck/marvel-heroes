import React from 'react';
import { useHistory } from 'react-router';

import { BackToHome, Navigation } from './styles';
import ArrowBack from '../../assets/voltar.png';

type props = {
  path: string;
};
const Arrow = ({ path }: props) => {
  const history = useHistory();
  const handleNavigateHome = () => history.push(path);
  return (
    <Navigation>
      <BackToHome src={ArrowBack} alt="voltar" onClick={handleNavigateHome} />
    </Navigation>
  );
};

export default Arrow;
