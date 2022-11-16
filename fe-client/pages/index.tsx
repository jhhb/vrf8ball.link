import * as React from "react";
import { COLORS, SUPPORTED_CHAINS } from "../utils";
import { AuthenticatedActionsProvider } from "../components/AuthenticatedActionsProvider";
import { Footer } from "../components/Footer";
import Head from "next/head";
import { Hero } from "@web3uikit/core";
import { UnauthenticatedActions } from "../components/UnauthenticatedActions";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";
import { SupportedChain, findSupportedChain } from "../utils/config";

export default function Home() {
  const { isWeb3Enabled, account, web3 } = useMoralis();
  const chainId: number | undefined = web3?.network?.chainId;
  const resolvedChain = findSupportedChain(chainId);

  const mainContent =
    isWeb3Enabled && account ? (
      resolvedChain ? (
        <main className={styles.main}>
          <AuthenticatedActionsProvider
            account={account}
            currentChain={resolvedChain}
          />
        </main>
      ) : (
        <main className={styles.main}>
          <UnsupportedChainMessage />
        </main>
      )
    ) : (
      <main className={styles.connect}>
        <UnauthenticatedActions />
      </main>
    );

  return (
    <div className={styles.container}>
      <Head>
        <title>VRF Magic 8 Ball</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Hero
          align="right"
          rounded="0px"
          textColor={COLORS.white}
          title="vrf8ball.link"
          subTitle="The World's First Verifiably Random Magic 8 Ball"
          backgroundColor={COLORS.biscay}
        />
      </header>
      {mainContent}
      <Footer />
    </div>
  );
}

function UnsupportedChainMessage() {
  const names = SUPPORTED_CHAINS.map((c) => c.name);
  return (
    <div className={styles["unsupported-chain"]}>
      <h2>Chain is not supported</h2>
      <p>Supported chains include: {names.join(", ")}</p>
    </div>
  );
}
