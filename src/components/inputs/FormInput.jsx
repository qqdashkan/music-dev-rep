function FormInput({ field, children, placeholder, errors, ...rest }) {
  return (
    <div>
      <label
        htmlFor={field}
        className="text-md mt-7 inline-block font-medium text-gray-900 focus:border-b-2 active:border-b-2 dark:text-white"
      >
        {children}
      </label>
      <input
        id={field}
        {...rest}
        name={field}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-2 border-gray-100 p-1.5 text-sm font-normal text-gray-900 focus:border-b-2 active:border-b-2"
        aria-invalid={errors ? true : false}
      />
      {errors?.[field] && (
        <p
          data-testid={`error-${field}`}
          className="mt-1 text-xs font-normal text-red-500"
        >
          This field is required
        </p>
      )}
    </div>
  );
}

export default FormInput;
