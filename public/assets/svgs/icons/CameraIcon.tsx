import { createSvgIcon, SvgIcon } from '@mui/material';

export const CameraIcon = ({ isLightMode = true, ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width="38"
      height="32"
      viewBox="0 0 52 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#60647E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 7.01562H5C2.79086 7.01562 1 8.80649 1 11.0156V21.0156C1 23.2248 2.79086 25.0156 5 25.0156H17C19.2091 25.0156 21 23.2248 21 21.0156V11.0156C21 8.80649 19.2091 7.01562 17 7.01562Z" />
      <path d="M25 20.011L29.5533 22.287C29.7058 22.3631 29.8752 22.399 30.0454 22.3913C30.2156 22.3836 30.381 22.3325 30.526 22.2428C30.6709 22.1532 30.7905 22.028 30.8735 21.8792C30.9564 21.7303 31 21.5628 31 21.3924V10.6284C31.0001 10.4579 30.9567 10.2903 30.8737 10.1414C30.7907 9.99257 30.671 9.8674 30.526 9.77786C30.381 9.68831 30.2155 9.63737 30.0453 9.62987C29.875 9.62238 29.7057 9.65858 29.5533 9.73503L25 12.011" />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 23 23" component={svg} />;
};
