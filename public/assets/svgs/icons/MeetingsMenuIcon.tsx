import { createSvgIcon, SvgIcon } from '@mui/material';

export const MeetingsMenuIcon = ({
  isLightMode = true,
  color = '#363A53',
  ...rest
}) => {
  const svg = createSvgIcon(
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5217 4H1.47826C1.21412 4 1 4.24873 1 4.55556V18.4444C1 18.7513 1.21412 19 1.47826 19H22.5217C22.7859 19 23 18.7513 23 18.4444V4.55556C23 4.24873 22.7859 4 22.5217 4Z"
        stroke={isLightMode ? '#fff' : color ? color : '#363A53'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
        stroke={isLightMode ? '#fff' : color ? color : '#363A53'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17C16.5202 16.0947 15.8009 15.3368 14.9198 14.8081C14.0387 14.2794 13.0291 14 12 14C10.9709 14 9.96133 14.2794 9.08019 14.8081C8.19905 15.3368 7.47979 16.0947 7 17"
        stroke={isLightMode ? '#fff' : color ? color : '#363A53'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19.25V22.25"
        stroke={isLightMode ? '#fff' : color ? color : '#363A53'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 22.25H17"
        stroke={isLightMode ? '#fff' : color ? color : '#363A53'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 24 24" component={svg} />;
};
