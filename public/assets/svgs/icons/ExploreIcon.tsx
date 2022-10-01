import { createSvgIcon, SvgIcon } from '@mui/material';

export const ExploreIcon = ({ isLightMode = false, ...props }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_20260_2376)">
        <path
          stroke="#D4145A"
          strokeWidth="1.5"
          d="M10.539 7.375L12 1.238l1.461 6.137a4.269 4.269 0 003.164 3.164L22.762 12l-6.137 1.461a4.269 4.269 0 00-3.164 3.164L12 22.762l-1.461-6.137a4.269 4.269 0 00-3.164-3.164L1.238 12l6.137-1.461a4.269 4.269 0 003.164-3.164z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_20260_2376">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...props} viewBox="0 0 24 24" component={svg} />;
};
