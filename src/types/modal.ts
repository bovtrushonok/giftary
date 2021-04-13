import { IGiftProps, IEventProps } from './commons';

type DispatchWithParameters = (p: object) => any;
type DispatchWithOutParameters = () => any;

export interface IGiftModal {
  addGift: DispatchWithParameters,
  closeModalWindow: DispatchWithOutParameters,
}

export interface IEventModal {
  addEvent: DispatchWithParameters,
  closeModalWindow: DispatchWithOutParameters,
}

export interface IOpenModal {
  openModal: DispatchWithOutParameters;
}
