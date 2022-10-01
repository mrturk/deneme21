import { createSvgIcon, SvgIcon } from '@mui/material';

export const RectangleCheckedIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      fill="none"
      viewBox="0 0 32 33"
    >
      <rect width="32" height="32" y="0.732" fill="#00020F" rx="16"></rect>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.667"
        d="M12 16.782l2.7 2.7 6.75-6.75"
      ></path>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 32 33" component={svg} />;
};
