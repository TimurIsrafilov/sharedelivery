const ArrowThinIcon = ({ currentColor }) => {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2475 10.2475C11.3842 10.1108 11.3842 9.8892 11.2475 9.75251L9.0201 7.52513C8.88342 7.38844 8.66181 7.38844 8.52513 7.52513C8.38844 7.66181 8.38844 7.88342 8.52513 8.0201L10.505 10L8.52513 11.9799C8.38844 12.1166 8.38844 12.3382 8.52513 12.4749C8.66181 12.6116 8.88342 12.6116 9.0201 12.4749L11.2475 10.2475ZM1 9.65C0.8067 9.65 0.65 9.8067 0.65 10C0.65 10.1933 0.8067 10.35 1 10.35V9.65ZM11 9.65L1 9.65V10.35L11 10.35V9.65Z"
        fill={currentColor}
      />
    </svg>
  );
};

export default ArrowThinIcon;
