import { Link } from "@remix-run/react";
import { Loader, MessageCirclePlusIcon } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDashboardContext } from "~/context/Dashboard";

export default function CreatePromptModal() {
  const { createPrompt } = useDashboardContext();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const dt = await createPrompt(data);
    if (dt) {
      setError("description", { type: "custom", message: dt });
      setError("name", { type: "custom", message: "" });
    }
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => {
          reset();
          dialogRef?.current?.showModal();
        }}
        className="btn btn-primary text-base-100"
      >
        <MessageCirclePlusIcon /> Create Prompt
      </button>
      <dialog ref={dialogRef} className="modal modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-bold mb-3">Create Prompt</h1>
            <div className="space-y-3">
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Prompt name"
                  {...register("name", { required: "Name is required" })}
                  className={`input block w-full mt-1 !outline-none ${
                    errors.name ? "border-error" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-error mt-0.5">
                    {String(errors?.name?.message)}
                  </p>
                )}
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  placeholder="Description..."
                  className={`textarea block w-full mt-1 !outline-none ${
                    errors.description ? "border-error" : ""
                  }`}
                  {...register("description", {
                    required: "Description is required",
                    maxLength: {
                      value: 300,
                      message: "Description must be 300 characters or less",
                    },
                  })}
                  maxLength={300}
                ></textarea>
                {errors.description && (
                  <p className="text-sm text-error mt-0.5">
                    {String(errors?.description?.message)}
                  </p>
                )}
              </div>
            </div>
            <p className="opacity-80 mt-2 text-center text-sm">
              <b>Note:</b> This data will be used to train the prompt.
            </p>
            <div className="modal-action">
              <button className="btn btn-primary">
                {isLoading ? (
                  <Loader className="size-5 stroke-base-200 spin" />
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
