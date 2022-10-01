import { createSvgIcon, SvgIcon } from '@mui/material';

export const CrossIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2813 4.46484L4.28125 12.4648"
        stroke="#9498A8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.28125 4.46484L12.2813 12.4648"
        stroke="#9498A8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 17 17" component={svg} />;
};
