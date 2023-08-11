/* eslint-disable import/order */
import { useEffect, useState } from 'react';
import { CodeEditorProps } from './CodeEditor-interfaces';
import './CodeEditor.css';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import TextField from '../../components/TextField/TextField';

export const CodeEditorDataTestId = 'code-editor-data-test-id';
export const CodeEditorDataTitleFieldTestId = 'code-editor-data-title-test-id';
export const CodeEditorDataCodeFieldTestId = 'code-editor-data-code-test-id';
export const CodeEditorDataDescFieldTestId =
  'code-editor-data-description-test-id';

function CodeEditor(props: CodeEditorProps) {
  const { code, description, title, onClickHandler, onCancelHandler } = props;
  const [renderCode, setRenderCode] = useState(``);
  const [grammar, setGrammar] = useState('ts'); // can be used to set the language grammar while highlighting
  const [nameValue, setNameValue] = useState('');
  const [descValue, setDescValue] = useState('');

  useEffect(() => {
    setRenderCode(!!code ? code : '');
    setGrammar('ts');
    setNameValue(title);
    setDescValue(description);
  }, []);

  return (
    <form className="code-editor-container" data-testid={CodeEditorDataTestId}>
      <TextField
        label="Name"
        value={nameValue}
        id="name"
        name="name"
        dataTestid={CodeEditorDataTitleFieldTestId}
        onChangeHandler={(newValue: string) => {
          setNameValue(newValue);
        }}
      />
      <TextField
        label="Description"
        value={descValue}
        id="description"
        name="description"
        dataTestid={CodeEditorDataDescFieldTestId}
        onChangeHandler={(newValue: string) => {
          setDescValue(newValue);
        }}
      />
      <div className="code-editor">
        <Editor
          value={renderCode}
          placeholder="// Add your code here"
          data-testid={CodeEditorDataCodeFieldTestId}
          onValueChange={(codeVal: string) => setRenderCode(codeVal)}
          highlight={(codeVal: string) =>
            highlight(codeVal, languages.js, grammar)
          }
        />
      </div>
      <div className="buttons-container">
        <button
          type="button"
          className="button"
          onClick={() => {
            onClickHandler(renderCode, descValue, nameValue);
          }}
        >
          Save
        </button>
        <button type="button" className="button" onClick={onCancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CodeEditor;
