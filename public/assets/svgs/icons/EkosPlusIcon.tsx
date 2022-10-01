import { createSvgIcon, SvgIcon } from '@mui/material';

export const EkosPlusIcon = ({ isLightMode = false, ...props }) => {
  const svg = createSvgIcon(
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 9H16.5"
        stroke={isLightMode ? '#ffffff' : '#363A53'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 1.5V16.5"
        stroke={isLightMode ? '#ffffff' : '#363A53'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...props} viewBox="0 0 18 18" component={svg} />;
};
