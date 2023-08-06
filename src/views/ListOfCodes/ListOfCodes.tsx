import { useEffect, useState } from "react";
import { ListOfCodesProps } from "./ListOfCodes-interfaces";
import { CodeStructure } from "../../store/store-interfaces";
// import { getFromStore } from "../../store/store";
import CodeEditor from "../CodeEditor/CodeEditor";

const ListOfCodes = (props: ListOfCodesProps) => {
  const [codeSnippets, setCodeSnippets] = useState<CodeStructure[]>([]);
  const [selectedCodeSnippetIndex, setSelectedCodeSnippetIndex] = useState(-1);

  useEffect(() => {
    // setCodeSnippets(getFromStore("listOfCodeSnippets", []));
  }, []);

  return (
    <div className="container">
      {selectedCodeSnippetIndex < 0 ? (
        <div className="code-snippets-container">
          {codeSnippets.map((snippet: CodeStructure, index: number) => (
            <div className="code-snippet" key={index}>
              <div className="code-snippet-texts">
                <span className="code-snippet-title">{snippet.title}</span>
                <span className="code-snippet-description">
                  {snippet.description}
                </span>
              </div>
              <div className="code-snippet-actions">
                <button>View</button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {(selectedCodeSnippetIndex > -1 || codeSnippets.length === 0) ? (
        <CodeEditor
          code={codeSnippets?.[selectedCodeSnippetIndex]?.code ?? ''}
          description={codeSnippets?.[selectedCodeSnippetIndex]?.description ?? ""}
          title={codeSnippets?.[selectedCodeSnippetIndex]?.title ?? ""}
        />
      ) : null}
    </div>
  );
};

export default ListOfCodes;
