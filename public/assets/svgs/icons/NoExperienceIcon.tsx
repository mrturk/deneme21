import { createSvgIcon, SvgIcon } from '@mui/material';

export const NoExperienceIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={65}
      height={64}
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.6716 37.8284C30.4217 38.5786 31.4391 39 32.5 39C33.5609 39 34.5783 38.5786 35.3284 37.8284C36.0786 37.0783 36.5 36.0609 36.5 35V34.2539H59.8056C60.496 34.2539 61.0556 33.6943 61.0556 33.0039C61.0556 32.3136 60.496 31.7539 59.8056 31.7539H36.5V31C36.5 29.9391 36.0786 28.9217 35.3284 28.1716C34.5783 27.4214 33.5609 27 32.5 27C31.4391 27 30.4217 27.4214 29.6716 28.1716C28.9214 28.9217 28.5 29.9391 28.5 31V31.7539H5.19531C4.50496 31.7539 3.94531 32.3136 3.94531 33.0039C3.94531 33.6943 4.50496 34.2539 5.19531 34.2539H28.5V35C28.5 36.0609 28.9214 37.0783 29.6716 37.8284Z"
        fill="url(#paint0_linear_14477_4121)"
      />
      <path
        d="M56.1661 17.0039H8.83608C6.82534 17.0039 5.19531 18.7948 5.19531 21.0039V53.0039C5.19531 55.213 6.82534 57.0039 8.83608 57.0039H56.1661C58.1768 57.0039 59.8069 55.213 59.8069 53.0039V21.0039C59.8069 18.7948 58.1768 17.0039 56.1661 17.0039Z"
        stroke="#00020F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.5 17.0039C44.5 13.8213 43.2357 10.7691 40.9853 8.51863C38.7348 6.26819 35.6826 5.00391 32.5 5.00391C29.3174 5.00391 26.2652 6.26819 24.0147 8.51863C21.7643 10.7691 20.5 13.8213 20.5 17.0039"
        stroke="#00020F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_14477_4121"
          x1="34.5365"
          y1="28.9703"
          x2="11.2249"
          y2={39}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E41B64" />
          <stop offset={1} stopColor="#4791FF" />
        </linearGradient>
      </defs>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 65 64" component={svg} />;
};
