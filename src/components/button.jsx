export function Button(props) {
  return (
    <button
      className={`border border-2 rounded-lg font-medium duration-300 ease-in-out bg-red-600 border-2 border-red-600 hover:bg-red-700 focus:border-red-300 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
export function OutlineButton(props) {
  return (
    <button
      className={`border border-2 rounded-lg font-medium duration-300 ease-in-out border-2 border-white hover:bg-white hover:text-red-600 focus:border-red-600 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
