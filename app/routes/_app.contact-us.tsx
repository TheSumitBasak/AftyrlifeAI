import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNotifications } from "reapop";
import { postRequest } from "~/utility/api";

export default function UseCase() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const { notify } = useNotifications();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    company?: string;
    role?: string;
    note?: string;
  }) => {
    setIsLoading(true);
    await postRequest("/lead", data);
    setIsLoading(false);
    notify("Your message has been sent successfully!", "success");
    reset();
  };
  return (
    <main className="pt-30 px-5">
      <div className="max-w-xl mx-auto text-center items-strech flex flex-col justify-start">
        <div className="flex-grow-1">
          <div className="badge badge-primary badge-lg text-base-100 mb-2">
            Contact
          </div>
          <h1 className="text-4xl font-semibold mb-1">Get in touch</h1>
          <p className="text-xl font-extralight">
            For any inquiries or to explore your vision further, we invite you
            to contact our professional team using the details provided below.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto p-[1px] bg-gradient-to-tl from-primary via-info to-accent rounded-xl mt-10">
        <div className="rounded-xl p-5 bg-base-200">
          <div className="col-span-5 bg-base-300 rounded">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow-1">
                  <label className="block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered w-full !outline-none"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {String(errors.firstName.message)}
                    </p>
                  )}
                </div>

                <div className="flex-grow-1">
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered w-full !outline-none"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {String(errors.lastName.message)}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow-1">
                  <label className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Invalid phone number",
                      },
                    })}
                    type="tel"
                    placeholder="Phone Number"
                    className="input input-bordered w-full !outline-none"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">
                      {String(errors.phoneNumber.message)}
                    </p>
                  )}
                </div>

                <div className="flex-grow-1">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full !outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {String(errors.email.message)}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow-1">
                  <label className="block text-sm font-medium">Company</label>
                  <input
                    {...register("company", {
                      required: "Company is required",
                    })}
                    type="text"
                    placeholder="Company"
                    className="input input-bordered w-full !outline-none"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm">
                      {String(errors.company.message)}
                    </p>
                  )}
                </div>

                <div className="flex-grow-1">
                  <label className="block text-sm font-medium">Role</label>
                  <input
                    {...register("role", { required: "Role is required" })}
                    type="text"
                    placeholder="Role"
                    className="input input-bordered w-full !outline-none"
                  />
                  {errors.role && (
                    <p className="text-red-500 text-sm">
                      {String(errors.role.message)}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Note</label>
                <textarea
                  {...register("note")}
                  placeholder="Note"
                  className="textarea textarea-bordered w-full !outline-none"
                />
                {errors.note && (
                  <p className="text-red-500 text-sm">
                    {String(errors.note.message)}
                  </p>
                )}
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="btn btn-primary w-full"
              >
                {isLoading ? (
                  <Loader className="size-5 stroke-base-200 spin" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
