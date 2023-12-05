const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-28 left-0 right-0 flex justify-center items-center">
      <div
        className={`p-2 neo-brutalism-blue items-center text-white leading-none lg:rounded-full flex lg:inline-flex`}
        role="alert"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-400" : "bg-blue-400 "
          } uppercase px-4 py-2 text-xs font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
