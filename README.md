# \_holidays

A React Typescript holiday calendar built using [NextJS](https://nextjs.org/) & [Tailwind](https://tailwindcss.com/).

The calendar supports selecting a country and type of holiday, which will fetch real-time data from [calendarific](https://calendarific.com) to display.

##### Sample Screenshots:

![Sample app screenshot](./github/screen_app.png?raw=true "Sample app screenshot")
![Sample modal screenshot](./github/screen_modal.png?raw=true "Sample modal screenshot")

## Run locally

- Run `yarn` to install dependencies.
- Create a free account with [calendarific](https://calendarific.com) and generate an API key.
- Make a copy of `.env.sample` and rename it to `.env.local`.
- Add the calendarific API key to `.env.local`.
- Run `yarn dev` and open `localhost:3000`
