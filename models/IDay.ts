import { IEvent } from "./IEvent";

export interface IDay {
  date: Date;
  events: Array<IEvent>;
  display: string;
  isOutOfRange: boolean;
  isToday: boolean;
  isSelected: boolean;
}
