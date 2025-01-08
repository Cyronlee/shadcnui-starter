import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@/components/provider/theme-provider"
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
      <ProgressBar
        height="2px"
        color="#0ea5e9"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </ThemeProvider>
  )
}
