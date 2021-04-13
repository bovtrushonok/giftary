import { IGiftProps, IEventProps } from './commons';

export interface IGiftModal {
  dispatch: any;
  newGift: IGiftProps;
}

export interface IEventModal {
  dispatch: any;
  newEvent: IEventProps;
}

export interface IOpenModal {
  dispatch: any;
}
