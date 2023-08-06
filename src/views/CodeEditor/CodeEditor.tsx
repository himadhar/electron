import { useEffect, useState } from "react";
import { CodeEditorProps } from "./CodeEditor-interfaces";
import "./CodeEditor.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import TextField from "../../components/TextField/TextField";

const CodeEditor = (props: CodeEditorProps) => {
  const { code, description, title } = props;
  const [renderCode, setRenderCode] = useState(`// Add your code here`);
  const [grammar, setGrammar] = useState("ts"); // can be used to set the language grammar while highlighting
  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");

  useEffect(() => {
    setRenderCode(code ?? "");
    setGrammar("ts");
    setNameValue(title);
    setDescValue(description);
  }, []);

  return (
    <form className="code-editor-container">
      <TextField
        label="Name"
        value={nameValue}
        id="name"
        name="name"
        onChangeHandler={(newValue: string) => {
          setNameValue(newValue);
        }}
      />
      <TextField
        label="Description"
        value={descValue}
        id="description"
        name="description"
        onChangeHandler={(newValue: string) => {
          setDescValue(newValue);
        }}
      />
      <div className="code-editor">
        <Editor
          value={renderCode}
          onValueChange={(code) => setRenderCode(code)}
          highlight={(code) => highlight(code, languages.js, grammar)}
        />
      </div>
    </form>
  );
};

export default CodeEditor;
