import { IGiftProps, IEventProps } from './commons';

export interface IProfileProps {
  events: Array<IEventProps>;
  gifts: Array<IGiftProps>;
  mode: string;
  addMode: string;
  dispatch: any;
  newGift: IGiftProps;
}

type DispatchWithOutParameters = () => any;

export interface ISwitcher {
  changeMode: DispatchWithOutParameters;
}
