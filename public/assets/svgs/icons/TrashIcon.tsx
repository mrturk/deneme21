import { createSvgIcon, SvgIcon } from '@mui/material';

export const TrashIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.25 21H6.75a1.5 1.5 0 01-1.5-1.5V6h13.5v13.5a1.5 1.5 0 01-1.5 1.5zM9.75 16.5v-6M14.25 16.5v-6M2.25 6h19.5M14.25 3h-4.5a1.5 1.5 0 00-1.5 1.5V6h7.5V4.5a1.5 1.5 0 00-1.5-1.5z"
      ></path>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 24 24" component={svg} />;
};
