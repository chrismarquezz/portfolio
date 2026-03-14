import { GitHubLogoLight, GitHubLogoDark } from '../data/icons';

const GitHubIcon = ({ darkMode }) => {
  return darkMode ? <GitHubLogoDark className="w-8 h-8" /> : <GitHubLogoLight className="w-8 h-8" />;
};

export default GitHubIcon;
