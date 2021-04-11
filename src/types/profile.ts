import { IGiftProps, IEventProps } from './commons';

export interface IProfileProps {
  events: Array<IEventProps>;
  gifts: Array<IGiftProps>;
  mode: string;
  addMode: string;
  dispatch: any;
  newGift: IGiftProps;
}

export interface ISwitcher {
  dispatch: any;
}
