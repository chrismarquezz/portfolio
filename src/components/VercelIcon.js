import { VercelLogoLight, VercelLogoDark } from '../data/icons';

const VercelIcon = ({ darkMode }) => {
  return darkMode ? <VercelLogoDark className="w-8 h-8" /> : <VercelLogoLight className="w-8 h-8" />;
};

export default VercelIcon;
