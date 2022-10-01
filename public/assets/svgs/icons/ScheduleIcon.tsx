import { createSvgIcon, SvgIcon } from '@mui/material';

export const ScheduleIcon = ({ isLightMode = true, ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width="24"
      height="24"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#00020F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M26.8363 6.83203H5.1696C4.24912 6.83203 3.50293 7.57822 3.50293 8.4987V26.832C3.50293 27.7525 4.24912 28.4987 5.1696 28.4987H26.8363C27.7567 28.4987 28.5029 27.7525 28.5029 26.832V8.4987C28.5029 7.57822 27.7567 6.83203 26.8363 6.83203Z" />
      <path d="M3.50293 13.5H28.5029" />
      <path d="M10.1689 9.33333V3.5" />
      <path d="M21.8359 9.33333V3.5" />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 19 19" component={svg} />;
};
