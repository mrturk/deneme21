import { createSvgIcon, SvgIcon } from '@mui/material';

export const ScheduleIconTransparent = ({
  isSelected = false,
  isLightMode = true,
  ...rest
}) => {
  const svg = createSvgIcon(
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={
        isLightMode
          ? isSelected
            ? '#D4145A'
            : '#FFFFFF'
          : isSelected
          ? '#D4145A'
          : '#60647E'
      }
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.3242 5.125H4.07422C3.38386 5.125 2.82422 5.68464 2.82422 6.375V20.125C2.82422 20.8154 3.38386 21.375 4.07422 21.375H20.3242C21.0146 21.375 21.5742 20.8154 21.5742 20.125V6.375C21.5742 5.68464 21.0146 5.125 20.3242 5.125Z" />
      <path d="M2.82422 10.125H21.5742" />
      <path d="M7.82422 7V2.625" />
      <path d="M16.5742 7V2.625" />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 24 25" component={svg} />;
};
