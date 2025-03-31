import { ThemeProvider } from "./ThemeContext";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  //Add all the API Providers, these will be shared with the App Component.
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProviders;
