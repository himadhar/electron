import './TextField.css';

export interface TextFieldProps {
  label: string;
  value: string;
  id: string;
  name: string;
  dataTestid?: string;
  onChangeHandler: null | ((newValue: string) => void);
}

export const TextFieldDataTestId = 'text-field-data-test-id';

const TextField = (props: TextFieldProps) => {
  const { label, value, id, name, onChangeHandler, dataTestid } = props;
  return (
    <div
      className="textfield-container"
      data-testid={`${TextFieldDataTestId}_${id}`}
    >
      <label className="textfield-label">{label}</label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        className="textfield-field"
        data-testid={dataTestid}
        onChange={(e) => {
          onChangeHandler && onChangeHandler(e.target.value ?? '');
        }}
      />
    </div>
  );
};

export default TextField;
