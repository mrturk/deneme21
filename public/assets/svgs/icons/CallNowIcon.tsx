import { createSvgIcon, SvgIcon } from '@mui/material';

export const CallNowIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#363A53"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.73 7.397l1.004 1.005a2.786 2.786 0 003.94 0l1.478-1.477a1.393 1.393 0 000-1.97L5.278 2.08a1.395 1.395 0 00-2.1.137C.167 6.306 1.99 10.613 5.69 14.312s8.005 5.52 12.093 2.512a1.396 1.396 0 00.137-2.101l-2.873-2.874a1.392 1.392 0 00-1.97 0L11.6 13.327a2.788 2.788 0 000 3.94l1.017 1.016"
      ></path>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 20 20" component={svg} />;
};
