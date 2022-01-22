import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { DayModal } from "../components";
import { CalendarProvider, ModalProvider } from "../context";
import "../styles/globals.css";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CalendarProvider>
        <ModalProvider>
          <DayModal />
          <Component {...pageProps} />
        </ModalProvider>
      </CalendarProvider>
    </QueryClientProvider>
  );
}

export default App;
