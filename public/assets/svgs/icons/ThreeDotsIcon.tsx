import { createSvgIcon, SvgIcon } from '@mui/material';

export const ThreeDotsIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#60647E"
        stroke="#60647E"
        strokeWidth="1.5"
        d="M4.667 10a.5.5 0 11-1 0 .5.5 0 011 0z"
      ></path>
      <path
        fill="#60647E"
        d="M10 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM15.833 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
      ></path>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 19 20" component={svg} />;
};
