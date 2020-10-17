import Leaflet from 'leaflet';

import logoCleanImg from '../assets/images/logo-clean.svg';

const mapIcon = Leaflet.icon({
	iconUrl: logoCleanImg,
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2],
});

export default mapIcon;