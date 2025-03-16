import { Link } from "@remix-run/react";
import { Loader, MessageCirclePlusIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDashboardContext } from "~/context/Dashboard";

export default function ConfirmationModal({
  isOpen,
  onOk,
  onClose,
  message,
  title,
}: {
  isOpen: boolean;
  onOk: () => Promise<void>;
  onClose: () => void;
  message: string;
  title: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    await onOk();
    setIsLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      dialogRef?.current?.showModal();
    }
  }, [isOpen]);

  return (
    <>
      <dialog ref={dialogRef} className="modal modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h1 className="text-xl font-bold mb-3">{title}</h1>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button onClick={onSubmit} className="btn btn-primary">
              {isLoading ? (
                <Loader className="size-5 stroke-base-200 spin" />
              ) : (
                "Confirm"
              )}
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={onClose}>close</button>
        </form>
      </dialog>
    </>
  );
}
