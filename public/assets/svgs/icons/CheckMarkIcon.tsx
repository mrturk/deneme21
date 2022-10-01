import { createSvgIcon, SvgIcon } from '@mui/material';

export const CheckMarkIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={15}
      height={12}
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7.0519L4.61905 10.7852L13.6667 1.4519"
        stroke="#171B31"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 15 12" component={svg} />;
};
