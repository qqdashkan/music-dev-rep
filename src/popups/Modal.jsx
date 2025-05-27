import FormContent from "../components/forms/FormContent";
import Button from "../components/inputs/Button";

function Modal({ isModalOpen, onClick, dataForm, updateList, updatePlayer }) {
  if (isModalOpen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <h2 className="text-left font-semibold text-black">
            Add a New Track
          </h2>
          <Button
            onClick={onClick}
            className="relative bottom-8 left-96 flex cursor-pointer items-center justify-between text-center text-black"
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </Button>
          <FormContent
            trackData={dataForm}
            refreshList={updateList}
            refreshAudio={updatePlayer}
          />
        </div>
      </div>
    );
  }
}

export default Modal;
