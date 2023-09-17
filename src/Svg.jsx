export const Logo = ({ width, height, bigCircle }) => {
  return (
    <svg
      width={width ? width : "48"}
      height={height ? height : "48"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="big" transform="matrix(1.2091,0,0,1.2091,-82.0371,-51.6205)">
        <path
          fill={bigCircle}
          d="M90.008,45.001C99.689,45.001 107.549,52.861 107.549,62.543C107.549,72.224 99.689,80.085 90.008,80.085C80.326,80.085 72.466,72.224 72.466,62.543C72.466,52.861 80.326,45.001 90.008,45.001ZM90.008,51.853C84.108,51.853 79.318,56.643 79.318,62.543C79.318,68.443 84.108,73.233 90.008,73.233C95.908,73.233 100.698,68.443 100.698,62.543C100.698,56.643 95.908,51.853 90.008,51.853Z"
        />
      </g>
      <g
        id="circle"
        transform="matrix(0.920487,0,0,0.920487,-109.295,-51.2127)"
      >
        <circle cx="124.799" cy="81.71" r="6.063" fill="#DA00DE" />
      </g>
      <g id="line" transform="matrix(0.920487,0,0,0.920487,-108.374,-51.2127)">
        <path
          fill="#DA00DE"
          d="M125.133,83.71C124.029,83.71 123.133,82.813 123.133,81.71C123.133,80.606 124.029,79.71 125.133,79.71L138.347,79.71L142.595,72.788C143.023,72.091 143.834,71.724 144.641,71.864C145.447,72.004 146.088,72.621 146.256,73.423L148.684,84.952L152.036,80.506C152.414,80.004 153.005,79.71 153.633,79.71L165.299,79.71C166.403,79.71 167.299,80.606 167.299,81.71C167.299,82.813 166.403,83.71 165.299,83.71L154.629,83.71L149.23,90.872C148.758,91.498 147.963,91.791 147.198,91.62C146.432,91.45 145.837,90.847 145.676,90.08L143.377,79.161L141.17,82.756C140.807,83.348 140.161,83.71 139.466,83.71L125.133,83.71Z"
        />
      </g>
    </svg>
  );
};