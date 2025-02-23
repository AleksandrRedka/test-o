import React, { ReactNode } from "react";
import { IOption, ISelectData } from "@/types/configTypes";

const styles = {
  option: {
    default:
      "flex flex-grow items-center text-optionColor justify-center min-h-16 text-center shadow-option rounded-2xl bg-optionBg cursor-pointer transition duration-500 ease-out px-4 py-3 ",
    active: "bg-primaryGradient text-optionSelected",
  },
};

interface Props extends ISelectData {
  name: string;
  currentValue: IOption | null;
  onChange: (option: IOption) => void;
}

export default function Select({
  options = [],
  name,
  currentValue,
  onChange,
}: Props): React.ReactNode {
  if (!options.length) return null;

  const renderOption = (option: IOption) => {
    const { id, label } = option;
    const isSelectedBg = id === currentValue?.id ? styles.option.active : "";

    return (
      <label key={id} htmlFor={id} className={`${styles.option.default} ${isSelectedBg}`}>
        <span>{label}</span>
        <input
          id={id}
          name={name}
          type="radio"
          className="hidden"
          onChange={() => onChange(option)}
        />
      </label>
    );
  };

  const renderList = (options: IOption[], callback: (option: IOption) => ReactNode) =>
    options.map(callback);

  return <div className="grid grid-cols-1 gap-5 w-full">{renderList(options, renderOption)}</div>;
}
