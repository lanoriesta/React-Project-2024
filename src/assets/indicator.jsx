export function IndicatorImage(props) {
  return (
    <svg
      className=" cursor-pointer mx-1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="50"
      viewBox="0 0 16 16"
      fill={props.fillColor ? "#fff" : "#707B7C"}
      {...props}
    >
      <path d="M3.5 3A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h9a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 3z"></path>
    </svg>
  );
}
