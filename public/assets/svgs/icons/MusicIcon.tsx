import { createSvgIcon, SvgIcon } from '@mui/material';

export const MusicIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill="none"
      viewBox="0 0 20 18"
    >
      <g
        stroke="#D4145A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_22033_3365)"
      >
        <path d="M1.77 7.323V10.8M5.677 3.977v10.044M17.393 7.323V10.8M13.49 3.977v10.044M9.583.628v16.74"></path>
      </g>
      <defs>
        <clipPath id="clip0_22033_3365">
          <path
            fill="#fff"
            d="M0 0H20.832V17.856H0z"
            transform="translate(-.833 .07)"
          ></path>
        </clipPath>
      </defs>
    </svg>,

    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 20 18" component={svg} />;
};
