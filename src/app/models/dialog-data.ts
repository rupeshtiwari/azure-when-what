// tslint:disable-next-line: no-empty-interface
export interface DialogData extends AzureService {}

export interface AzureService {
  title: string;
  image: string;
  description: string;
  tags: string[];
  content: string;
}
