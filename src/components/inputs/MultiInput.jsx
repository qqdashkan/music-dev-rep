import SelectComponent from "../forms/Select";
import { Controller } from "react-hook-form";

function MultiInput({ field, children, control, errors }) {
  return (
    <div>
      <label
        htmlFor={field}
        className="text-md mt-7 block font-medium text-gray-900 dark:text-white"
      >
        {children}
      </label>
      <Controller
        name={field}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <SelectComponent {...field} isMulti placeholder="Select genres" />
        )}
      />
      {errors?.[field] && (
        <p className="mt-1 text-xs font-normal text-red-500">
          This field is required
        </p>
      )}
    </div>
  );
}

export default MultiInput;
