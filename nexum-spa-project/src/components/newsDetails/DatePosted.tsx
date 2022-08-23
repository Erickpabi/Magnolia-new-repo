import moment from "moment";
type Props = {
  readonly date: string;
};
export const DatePosted: React.FC<Props> = ({ date }) => {
  return (
    <div className="inline-flex text-xs mt-2 font-light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="ml-2">
        {" "}
        {moment(date).format("dddd, Do MMMM yyyy")}{" "}
      </span>
    </div>
  );
};
