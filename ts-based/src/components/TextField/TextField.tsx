import "./TextField.css";

export interface TextFieldProps {
  label: string;
  value: string;
  id: string;
  name: string;
  onChangeHandler: (newValue: string) => void;
}

const TextField = (props: TextFieldProps) => {
  const { label, value, id, name, onChangeHandler } = props;
  return (
    <div className="textfield-container">
      <label className="textfield-label">{label}</label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        className="textfield-field"
        onChange={(e) => {
          onChangeHandler(e.target.value ?? "");
        }}
      />
    </div>
  );
};

export default TextField;
