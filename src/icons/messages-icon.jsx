const MessagesIcon = ({ currentColor }) => {
  return (
    <>
      <svg
        width="27"
        height="24"
        viewBox="0 0 27 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="7.75"
          cy="11.5"
          r="0.375"
          fill={currentColor}
          stroke={currentColor}
          stroke-width="0.7"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          cx="10.75"
          cy="11.5"
          r="0.375"
          fill={currentColor}
          stroke={currentColor}
          stroke-width="0.7"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          cx="13.75"
          cy="11.5"
          r="0.375"
          fill={currentColor}
          stroke={currentColor}
          stroke-width="0.7"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.697 5.48276C12.7739 5.48276 14.4545 5.48276 14.4545 5.48276C17.2545 5.48276 19.5455 7.71724 19.5455 10.4483C19.5455 10.4483 19.5455 11.7093 19.5455 12.5172M11.697 5.48276C10.2887 5.48276 8.09091 5.48276 8.09091 5.48276C5.29091 5.48276 3 7.71724 3 10.4483V17.8966V21C5.35455 19.0138 8.34545 17.8966 11.4636 17.8966H14.4545C17.2545 17.8966 19.5455 15.6621 19.5455 12.931C19.5455 12.931 19.5455 12.6788 19.5455 12.5172M11.697 5.48276C11.697 3.82759 13.8182 3 14.6667 3C15.5152 3 15.9394 3 19.7576 3C23.5758 3 24 5.36599 24 6.31035C24 7.2547 24 7.13793 24 7.13793V14.5862C24 14.5862 22.7273 13.3448 19.5455 12.5172"
          stroke={currentColor}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default MessagesIcon;
