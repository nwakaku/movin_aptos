import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { HeroSection } from "./components/home/hero-section";
import { Features } from "./components/home/features";

function App() {
  const { connected } = useWallet();

  return (
    <>
      <HeroSection />
      <Features />
    </>
  );
}

export default App;

{
  /* <CardContent className="flex flex-col gap-10 pt-6">
              <WalletDetails />
              <NetworkInfo />
              <AccountInfo />
              <TransferAPT />
              <MessageBoard />
            </CardContent> */
}
