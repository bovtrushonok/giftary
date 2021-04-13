import { IGiftProps, IEventProps } from './commons';

type DispatchWithParameters = (p1: string, p2: string, p3: string) => any;
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
