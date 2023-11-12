import { ChangeEvent, ChangeEventHandler, FC } from "react";

type SelectProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  disabled: boolean;
};
const Select: FC<SelectProps> = ({ onChange, disabled }) => {
  return (
    <select
      onChange={(e) => onChange(e)}
      className="select select-bordered w-full mr-4"
      defaultValue="カテゴリ"
      disabled={disabled}
    >
      <option disabled>カテゴリ</option>
      <option value="日本">日本</option>
      <option value="アジア">アジア</option>
      <option value="ヨーロッパ">ヨーロッパ</option>
      <option value="北アメリカ">北アメリカ</option>
      <option value="南アメリカ">南アメリカ</option>
      <option value="アフリカ">アフリカ</option>
    </select>
  );
};
export default Select;
