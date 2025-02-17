"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  const address = "0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC";

  function copyAddress() {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen pt-40 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-antonio font-bold mb-8">Donate</h1>
          
          <div className="space-y-6">
            <p className="text-lg">
              Thank you for your support in helping Ethereum Cat Herders achieve our mission in education, community building and homesteading the Ethereum ecosystem.
            </p>
            
            <p className="text-lg">
              We are committed to ensuring that the ecosystem remains decentralized and accessible for all participants.
            </p>
            
            <p className="text-lg">
              Your contribution fuels our efforts to create accessible resources, coordinate critical meetings and promote inclusivity in the ecosystem.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-antonio mb-4">Donate through</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <Link 
                href="https://etherscan.io/address/0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC" 
                target="_blank"
                className="w-full"
                passHref
              >
                <Button
                  className="flex items-center gap-2 bg-darkGray text-white px-5 py-3 rounded-lg w-full"
                >
                  Ethereum
                  <ExternalLinkIcon className="w-4 h-4" />
                </Button>
              </Link>
              <Link
                href="https://optimistic.etherscan.io/address/0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC"
                target="_blank"
                className="w-full"
                passHref
              >
                <Button
                  className="flex items-center gap-2 bg-darkGray text-white px-5 py-3 rounded-lg w-full"
                >
                  Optimism
                  <ExternalLinkIcon className="w-4 h-4" />
                </Button>
              </Link>
              <Link
                href="https://polygonscan.com/address/0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC"
                target="_blank"
                className="w-full"
                passHref
              >
                <Button
                  className="flex items-center gap-2 bg-darkGray text-white px-5 py-3 rounded-lg w-full"
                >
                  Polygon
                  <ExternalLinkIcon className="w-4 h-4" />
                </Button>
              </Link>
              <Link
                href="https://basescan.org/address/0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC"
                target="_blank"
                className="w-full"
                passHref
              >
                <Button
                  className="flex items-center gap-2 bg-darkGray text-white px-5 py-3 rounded-lg w-full"
                >
                  Base
                  <ExternalLinkIcon className="w-4 h-4" />
                </Button>
              </Link>
              <Link
                href="https://arbiscan.io/address/0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC"
                target="_blank"
                className="w-full"
                passHref
              >
                <Button
                  className="flex items-center gap-2 bg-darkGray text-white px-5 py-3 rounded-lg w-full"
                >
                  Arbitrum
                  <ExternalLinkIcon className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Content - QR Code */}
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <Image
            src="/assets/ech_donate_addr_qrcode.png"
            alt="Donation QR Code"
            width={400}
            height={400}
            className="w-full max-w-sm"
          />
          <div className="mt-4 flex flex-col items-center">
            <p className="text-center font-mono text-sm break-all cursor-pointer" onClick={copyAddress}>
              {address}
            </p>
            {copied && <p className="text-center text-xs text-green-400 mt-6 absolute">Copied address</p>}
          </div>
        </div>
      </div>

      <div className="my-16 flex flex-col lg:flex-row justify-between items-start gap-16">
        <div>
          <h2 className="text-2xl font-antonio mb-6">Funding sources</h2>
          <p className="text-lg mb-4">
            As a registered non-profit organization, we are funded by public goods funding which the community can participate in. We also receive one-off grants from Layer 2s. For transparency, we are providing our funding sources below.
          </p>
          <p className="text-lg mb-6">
            These funding sources have been categorized based on the contribution amount.
          </p>
          
          <div className="space-y-2">
            <p className="text-lg"><span className="font-semibold">Significant:</span> Above 200,000 USD</p>
            <p className="text-lg"><span className="font-semibold">Medium:</span> Between 50,000 USD to 200,000 USD</p>
            <p className="text-lg"><span className="font-semibold">Small:</span> Below 50,000 USD</p>
          </div>
        </div>

        <Image
          src="/assets/cat_peek.png"
          alt="Cat Peek"
          width={300}
          height={300}
          className="hidden lg:block"
        />
      </div>

      <div className="my-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 box-black-bg rounded-xl border-2 border-black flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-antonio mb-4">Octant Epoch 6</h3>
            <p className="text-gray-600 mb-4">
              Our latest Octant Epoch public goods funding round ended on 25 Jan 2025. We received Medium funding of 19.225 ETH. 
            </p>
          </div>
          <Link 
            href="#"
            className="inline-flex items-center text-darkGray hover:underline"
            passHref
          >
            <Button className="bg-darkGray text-white px-6 py-3 rounded-lg">
              View our Octant updates
            </Button>
          </Link>
        </div>
        
        <div className="bg-white p-8 box-black-bg rounded-xl border-2 border-black flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-antonio mb-4">Octant Epoch 1 - 5</h3>
            <p className="text-gray-600 mb-4">
              Ethereum Cat Herders participate in Octant Epoch rounds that occur every 90 days. We received significant funding over the last 5 rounds.
            </p>
          </div>
          <Link 
            href="#"
            className="inline-flex items-center text-darkGray hover:underline"
          >
            <Button className="bg-darkGray text-white px-6 py-3 rounded-lg">
              View our Octant updates
            </Button>
          </Link>
        </div>

        <div className="bg-white p-8 box-black-bg rounded-xl border-2 border-black flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-antonio mb-4">Optimism grant</h3>
            <p className="text-gray-600">We received Medium funding from Optimism in 2024. </p>
          </div>
        </div>
      </div>
    </main>
  );
} 