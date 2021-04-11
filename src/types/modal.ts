import { IGiftProps, IEventProps } from './commons';

type DispatchWithParameters = (p: string) => any;
type DispatchWithOutParameters = () => any;

export interface IGiftModal {
  addGift: DispatchWithOutParameters,
  changeGiftName: DispatchWithParameters,
  changeGiftLink: DispatchWithParameters,
  changeGiftDescription: DispatchWithParameters,
  closeModalWindow: DispatchWithOutParameters,
  newGift: IGiftProps;
}

export interface IEventModal {
  changeEventName: DispatchWithParameters,
  changeEventDay: DispatchWithParameters,
  changeEventMonth: DispatchWithParameters,
  addEvent: DispatchWithOutParameters,
  closeModalWindow: DispatchWithOutParameters,
  newEvent: IEventProps;
}

export interface IOpenModal {
  dispatch: any;
}
