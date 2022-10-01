import { createSvgIcon, SvgIcon } from '@mui/material';

export const NoEducationIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={49}
      height={51}
      viewBox="0 0 49 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.8339 15.2891C34.8339 18.03 33.745 20.6588 31.8068 22.5969C29.8687 24.5351 27.24 25.624 24.499 25.624C21.758 25.624 19.1293 24.5351 17.1911 22.5969C15.2529 20.6588 14.1641 18.03 14.1641 15.2891"
        stroke="#00020F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.30469 49.2481C5.30469 44.1577 7.32684 39.2758 10.9263 35.6763C14.5258 32.0768 19.4077 30.0547 24.4981 30.0547C29.5885 30.0547 34.4704 32.0768 38.0699 35.6763C41.6693 39.2758 43.6915 44.1577 43.6915 49.2481"
        stroke="#00020F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.35141 0.257812C1.53601 0.257812 0.875 0.918826 0.875 1.73423C0.875 2.54963 1.53601 3.21064 2.35141 3.21064H3.82783V16.4984C3.82783 17.3138 4.48884 17.9748 5.30424 17.9748C6.11965 17.9748 6.78066 17.3138 6.78066 16.4984V3.21064H12.6863V10.1006C12.6863 10.1844 12.6933 10.2666 12.7067 10.3466C12.6933 10.4267 12.6863 10.5089 12.6863 10.5927C12.6863 11.4081 13.3473 12.0691 14.1627 12.0691H34.8325C35.6479 12.0691 36.3089 11.4081 36.3089 10.5927C36.3089 10.5089 36.302 10.4267 36.2885 10.3466C36.302 10.2666 36.3089 10.1844 36.3089 10.1006V3.21064H46.6439C47.4593 3.21064 48.1203 2.54963 48.1203 1.73423C48.1203 0.918826 47.4593 0.257812 46.6439 0.257812H34.8325H14.1627H5.30424H2.35141Z"
        fill="url(#paint0_linear_14473_6784)"
      />
      <path
        d="M14.6836 32.7539L24.5008 40.3899L34.3179 32.7539"
        stroke="#00020F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_14473_6784"
          x1="31.3876"
          y1="0.25781"
          x2="0.584505"
          y2="17.8905"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E41B64" />
          <stop offset={1} stopColor="#4791FF" />
        </linearGradient>
      </defs>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 49 51" component={svg} />;
};
