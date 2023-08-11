import { CodeStructure } from '../../store/store-interfaces';

export interface CodeEditorProps extends CodeStructure {
  onClickHandler: (code: string, description: string, title: string) => void;
  onCancelHandler: null | (() => void);
}
