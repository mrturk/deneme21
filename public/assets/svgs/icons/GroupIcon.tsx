import { createSvgIcon, SvgIcon } from '@mui/material';

export const GroupIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#171B31"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.5 12a4.125 4.125 0 100-8.25 4.125 4.125 0 000 8.25zM.75 20.25a6.75 6.75 0 0113.5 0M17.727 13.5a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM15.813 15.068a5.525 5.525 0 017.437 5.182"
      ></path>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 24 24" component={svg} />;
};
