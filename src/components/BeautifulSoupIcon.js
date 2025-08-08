import { BeautifulSoupLogoLight, BeautifulSoupLogoDark } from '../data/icons';

const BeautifulSoupIcon = ({ darkMode }) => {
  return darkMode ? <BeautifulSoupLogoDark className="w-8 h-8" /> : <BeautifulSoupLogoLight className="w-8 h-8" />;
};

export default BeautifulSoupIcon;
