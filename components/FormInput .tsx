import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label?: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
}

const FormInput = ({
  label,
  placeholder,
  register,
  error,
  type = "text",
}: FormInputProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default FormInput;
