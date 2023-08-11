import { useEffect, useState } from 'react';
import { CodeStructure } from '../../store/store-interfaces';
import CodeEditor from '../CodeEditor/CodeEditor';
import { getFromStore } from './../../store/store';
import './ListOfCodes.css';

export const ListOfCodesDataTestId = 'list-of-codes-container';

function ListOfCodes() {
  const [codeSnippets, setCodeSnippets] = useState<CodeStructure[]>([]);
  const [newSnippetRequested, setNewSnippetRequested] = useState(false);
  const [selectedCodeSnippetIndex, setSelectedCodeSnippetIndex] = useState(-1);

  useEffect(() => {
    setCodeSnippets(getFromStore('listOfCodeSnippets', []));
  }, []);

  const onCancelHandler = () => {
    setSelectedCodeSnippetIndex(-1);
    setNewSnippetRequested(false);
  };

  const onSaveSnippetHandler = (
    newCode: string,
    description: string,
    title: string
  ) => {
    const currentSnippets = [...codeSnippets];
    const snippet = {
      code: newCode,
      description,
      title,
    };
    if (selectedCodeSnippetIndex < 0) {
      currentSnippets.push(snippet);
    } else {
      currentSnippets[selectedCodeSnippetIndex] = snippet;
    }
    setCodeSnippets(currentSnippets);
    onCancelHandler();
  };

  return (
    <div className="container" data-testid={ListOfCodesDataTestId}>
      {selectedCodeSnippetIndex < 0 &&
      !newSnippetRequested &&
      codeSnippets.length > 0 ? (
        <div className="code-snippets-container">
          <div className="code-snippet header">
            <div className="code-snippet-texts">
              <span className="code-snippet-title">Name</span>
              <span className="code-snippet-description">Description</span>
            </div>
            <div className="code-snippet-actions">Actions</div>
          </div>
          {codeSnippets.map((snippet: CodeStructure, index: number) => (
            <div className="code-snippet" key={snippet.title}>
              <div className="code-snippet-texts">
                <span className="code-snippet-title">{snippet.title}</span>
                <span className="code-snippet-description">
                  {snippet.description}
                </span>
              </div>
              <div className="code-snippet-actions">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCodeSnippetIndex(index);
                  }}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {(selectedCodeSnippetIndex < -1 || codeSnippets.length === 0) &&
      !newSnippetRequested ? (
        <p>Please click on the "Add new snippet" to create one!</p>
      ) : null}
      {!newSnippetRequested && selectedCodeSnippetIndex === -1 ? (
        <button
          type="button"
          className="add-new-button"
          onClick={() => {
            setNewSnippetRequested(true);
          }}
        >
          Add new snippet
        </button>
      ) : null}
      {!!newSnippetRequested || selectedCodeSnippetIndex > -1 ? (
        <CodeEditor
          onClickHandler={onSaveSnippetHandler}
          onCancelHandler={onCancelHandler}
          code={codeSnippets?.[selectedCodeSnippetIndex]?.code ?? ''}
          description={
            codeSnippets?.[selectedCodeSnippetIndex]?.description ?? ''
          }
          title={codeSnippets?.[selectedCodeSnippetIndex]?.title ?? ''}
        />
      ) : null}
    </div>
  );
}

export default ListOfCodes;
