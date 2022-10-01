import { createSvgIcon, SvgIcon } from '@mui/material';

export const RectangleIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      fill="none"
      viewBox="0 0 32 33"
    >
      <rect
        width="30"
        height="30"
        x="1"
        y="1.732"
        stroke="#9498A8"
        strokeWidth="2"
        rx="15"
      ></rect>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 32 33" component={svg} />;
};
