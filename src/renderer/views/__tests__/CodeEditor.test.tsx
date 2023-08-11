import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CodeEditor, {
  CodeEditorDataCodeFieldTestId,
  CodeEditorDataDescFieldTestId,
  CodeEditorDataTestId, CodeEditorDataTitleFieldTestId,
} from 'renderer/views/CodeEditor/CodeEditor';

describe('CodeEditor', () => {
  let title = '';
  let code = '';
  let description = '';

  const renderElement = (title, code, description) => {
    return render(
      <CodeEditor
        onClickHandler={(
          code: string,
          description: string,
          title: string
        ) => {}}
        code={code}
        description={description}
        title={title}
        onCancelHandler={() => {}}
      />
    );
  };

  it('should render the CodeEditor', () => {
    const element = renderElement(title, code, description);
    expect(element).toBeTruthy();
  });
  it('should consist the list of codes element', () => {
    renderElement(title, code, description);
    expect(screen.getByTestId(CodeEditorDataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(CodeEditorDataTitleFieldTestId)).toBeInTheDocument();
    expect(screen.getByTestId(CodeEditorDataCodeFieldTestId)).toBeInTheDocument();
    expect(screen.getByTestId(CodeEditorDataDescFieldTestId)).toBeInTheDocument();
  });
});
