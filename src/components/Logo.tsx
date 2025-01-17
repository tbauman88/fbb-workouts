export const Logo = ({ onClick }: { onClick: () => void }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 34"
    className="h-10 w-auto"
    onClick={onClick}
    cursor={onClick ? 'pointer' : 'default'}
  >
    <g transform="translate(10, 0)">
      <rect x="0" y="0" width="25" height="10" fill="white" />
      <rect x="0" y="12" width="18.75" height="10" fill="white" />
      <rect x="0" y="24" width="6.25" height="10" fill="white" />
      <rect x="28" y="0" width="18.75" height="10" fill="white" />
      <rect x="28" y="12" width="25" height="22" fill="white" />
      <rect x="56" y="0" width="18.75" height="10" fill="white" />
      <rect x="56" y="12" width="25" height="22" fill="white" />
    </g>
  </svg>
)
