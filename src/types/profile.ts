import { IGiftProps, IEventProps } from './commons';

export interface IProfileProps {
  mode: string;
  addMode: string;
}

type DispatchWithOutParameters = () => any;

export interface ISwitcher {
  changeMode: DispatchWithOutParameters;
}
