import { createSvgIcon, SvgIcon } from '@mui/material';

export const LeaveIcon = ({ ...rest }) => {
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
        d="M.75 12.004H16.5M12.75 15.754l3.75-3.75-3.75-3.75M3.306 16.6a10.5 10.5 0 10.179-9.543"
      ></path>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 24 24" component={svg} />;
};
