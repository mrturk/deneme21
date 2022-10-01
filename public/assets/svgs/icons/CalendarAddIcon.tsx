import { createSvgIcon, SvgIcon } from '@mui/material';

export const CalendarAddIcon = ({ isLightMode = true, ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width="18"
      height="16"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6667 4.23828H3.33333C2.59695 4.23828 2 4.83523 2 5.57161V20.2383C2 20.9747 2.59695 21.5716 3.33333 21.5716H20.6667C21.403 21.5716 22 20.9747 22 20.2383V5.57161C22 4.83523 21.403 4.23828 20.6667 4.23828Z"
        stroke="#00020F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 9.57031H22"
        stroke="#00020F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33203 6.23698V1.57031"
        stroke="#00020F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.668 6.23698V1.57031"
        stroke="#00020F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9961 12.9023V17.3468"
        stroke="#00020F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.77344 15.125H14.2179"
        stroke="#00020F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 19 19" component={svg} />;
};
