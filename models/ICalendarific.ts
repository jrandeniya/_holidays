export interface ICalendarific {
  meta: Meta;
  response: Response;
}

interface Response {
  holidays: Array<Holiday>;
}

interface Holiday {
  name: string;
  description: string;
  country: Country;
  date: Date;
  type: string[];
  locations: string;
}

interface Date {
  iso: string;
  datetime: Datetime;
  timezone?: Timezone;
}

interface Timezone {
  offset: string;
  zoneabb: string;
  zoneoffset: number;
  zonedst: number;
  zonetotaloffset: number;
}

interface Datetime {
  year: number;
  month: number;
  day: number;
  hour?: number;
  minute?: number;
  second?: number;
}

interface Country {
  id: string;
  name: string;
}

interface Meta {
  code: number;
  error_type?: string;
  error_detail?: string;
}

interface RootObject {
  meta: Meta;
  response: any[];
}
