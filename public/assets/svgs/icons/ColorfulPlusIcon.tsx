import { createSvgIcon, SvgIcon } from '@mui/material';

export const ColorfulPlusIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={12}
        cy={12}
        r={11}
        stroke="url(#paint0_angular_16446_25578)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.99947 12.0005L17.0005 12.0005"
        stroke="#00020F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.0011L12 7"
        stroke="#00020F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <radialGradient
          id="paint0_angular_16446_25578"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 12) rotate(103.422) scale(16.5863 15.2178)"
        >
          <stop offset="0.244792" stopColor="#F91C6C" />
          <stop offset={1} stopColor="#57AEFF" />
        </radialGradient>
      </defs>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 24 24" component={svg} />;
};
