import { Button } from ".";

export function Modal(props) {
  return (
    <>
      <div
        className={`modal z-50 ${props.show ? "modal-active" : ""}`}
        onClick={props.onClose}
      >
        <div className="flex justify-center items-center h-full w-full relative">
          <div className="flex flex-col gap-2 rounded-lg bg-black p-4 md:w-3/4 md:h-3/4 w-3/4 h-3/5">
            <Button
              onClick={props.onClose}
              children="close"
              className="w-fit self-end font-bold md:px-8 md:py-1 tracking-wider"
            />
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
