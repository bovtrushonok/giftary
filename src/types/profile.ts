import { IGiftProps, IEventProps } from './commons';

export interface IProfileProps {
  events: Array<IEventProps>;
  gifts: Array<IGiftProps>;
  mode: string;
  addMode: string;
  dispatch: any;
  newEvent: IEventProps;
  newGift: IGiftProps;
}

export interface ISwitcher {
  dispatch: any;
}
