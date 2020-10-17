import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoCleanImg from '../../assets/images/logo-clean.svg';;

function Sidebar() {
  const { goBack } = useHistory();

  return (
    <aside>
			<img src={logoCleanImg} alt="Happy" />

			<footer>
				<button type="button" onClick={goBack}>
					<FiArrowLeft size={24} color="#FFF" />
				</button>
			</footer>
		</aside>
  );
}

export default Sidebar;
