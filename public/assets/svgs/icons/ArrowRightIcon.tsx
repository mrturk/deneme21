import { createSvgIcon, SvgIcon } from '@mui/material';

export const ArrowRightIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.999919 12.3337L6.33325 7.00033L0.999919 1.66699"
        stroke="#00020F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 8 14" component={svg} />;
};
