import { createSvgIcon, SvgIcon } from '@mui/material';

export const CheckBoxFilledIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 28.75C22.5939 28.75 28.75 22.5939 28.75 15C28.75 7.40608 22.5939 1.25 15 1.25C7.40608 1.25 1.25 7.40608 1.25 15C1.25 22.5939 7.40608 28.75 15 28.75Z"
        fill="#00020F"
        stroke="#00020F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4444 11.667L13.3333 17.7781L10.5555 15.0003"
        stroke="#FCFCFE"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 30 30" component={svg} />;
};
