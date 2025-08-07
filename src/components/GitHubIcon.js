import { GitHubLogoLight, GitHubLogoDark } from '../data/icons';

const GitHubIcon = ({ darkMode }) => {
  // If darkMode is true, show the dark version (white icon).
  // Otherwise, show the light version (black icon).
  return darkMode ? <GitHubLogoDark className="w-8 h-8" /> : <GitHubLogoLight className="w-8 h-8" />;
};

export default GitHubIcon;
