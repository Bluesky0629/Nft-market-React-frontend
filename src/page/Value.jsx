import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { Avatar } from "antd";
import Logo from "../assets/icons/icon.png";
import Atom from "../assets/icons/Atom.png";
import Bitcoin from "../assets/icons/Bitcoin.png";
import BNB from "../assets/icons/BNB.png";
import Doge from "../assets/icons/Doge.png";
import Ether from "../assets/icons/Ether.png";
import Kucoin from "../assets/icons/Kucoin.png";
import Litecoin from "../assets/icons/Litecoin.png";
import USDC from "../assets/icons/USDC.png";
import USCT from "../assets/icons/USDT.png";
import Wave from "../assets/icons/Wave.png";
import XRP from "../assets/icons/XRP.png";
import POLY from "../assets/icons/POLY.png";
import APEX from "../assets/icons/APEX.png";

import Twitter from "../assets/icons/twitter.png";
import Discord from "../assets/icons/discord.png";
import Github from "../assets/icons/github.png";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import SelectWalletModal from "../components/Modal";
import * as CONTRACTS from '../getWalletInfo/getInfo';
import useMetaMask from "components/wallet/useMetaMask";


//////////////////////////////////////////////////////

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    color: "#3E2701",
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#3E2701",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function ValuePage(params) {
  const { account, disconnect, chainId, isActive } = useMetaMask()

  console.log(isActive);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [network, setNetwork] = useState(undefined);
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();
  const [balance, setBalance] = useState(0);

  let accoutLength = String(account).length;
  let visibleaccount = String(account).substring(0, 5) + "..." + String(account).substring(accoutLength - 3, accoutLength);

  // console.log("chainId",chainId,"account", account,"active", active);
  CONTRACTS.getInfo().then(
    info => setBalance(info.balance));

  // const refreshState = () => {
  //   window.localStorage.setItem("provider", undefined);
  //   setNetwork("");
  //   setMessage("");
  //   setSignature("");
  //   setVerified(undefined);
  // };

  // const disconnect = () => {
  //   refreshState();
  //   deactivate();
  // };


  useEffect(() => {
    // const provider = window.localStorage.getItem("provider");
    // if (provider) activate(connectors[provider]);
  }, []);
  return (
    <div className="w-full min-h-screen bg-background relative">
      <div className="flex flex-col items-center justify-center px-20 py-4 Navbar-BG">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center justify-center space-x-3">
            <img alt="" src={Logo} />
            <span className="text-2xl font-bold text-white">OakFi</span>
          </div>
          <div className="flex flex-row items-center justify-center space-x-3">
            <span
              className="text-lg text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span
              className="text-lg text-white cursor-pointer"
              onClick={() => navigate("/value")}
            >
              Vaults
            </span>
          </div>
          {!isActive ? (
            <button className="px-10 py-2 rounded-full bg-cu-green text-white font-semibold text-lg" onClick={() => setIsOpen(!isOpen)}>Connect Wallet</button>
          ) : (
            <button className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800" onClick={() => disconnect()}>
              <div >
                <div className="mb-0 pb-0">
                  Disconnect
                </div>
                <div className="mt-0 pt-0">
                  <span>Connected with<span>&nbsp;&nbsp;</span>{visibleaccount}</span>
                </div>
              </div>
            </button>

          )}
          {/* <button className="px-10 py-2 rounded-full bg-cu-green text-white font-semibold text-lg"
                onClick={() => setIsOpen(!isOpen)}
                >Connect wallet</button>
          {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
          <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button> */}
          <SelectWalletModal modalOpen={isOpen} handlCloseModal={() => setIsOpen(!isOpen)} />

        </div>
        <div className="flex flex-row items-center justify-between w-full mt-10">
          <div className="flex flex-col space-y-2">
            <span className="text-white font-normal text-2xl">Portfolio</span>
            <div className="flex flex-row items-center justify-between space-x-8">
              <div className="flex flex-col space-y-2">
                <span className="text-white font-normal text-sm">
                  DEPOSITED
                </span>
                <span className="text-white font-normal text-2xl">$0.00</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-white font-normal text-sm">
                  MONTHLY YIELD
                </span>
                <span className="text-white font-normal text-2xl">$0.00</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-white font-normal text-sm">
                  DAILY YIELD
                </span>
                <span className="text-white font-normal text-2xl">$0.00</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-white font-normal text-sm">AVG APY</span>
                <span className="text-white font-normal text-2xl">0 %</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between space-x-8">
            <div className="flex flex-col space-y-2 items-end">
              <span className="text-white font-normal text-sm">TVM</span>
              <span className="text-white font-normal text-xl">$0.00</span>
            </div>
            <div className="flex flex-col space-y-2 items-end">
              <span className="text-white font-normal text-sm">VAULTS</span>
              <span className="text-white font-normal text-xl">12</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10 max-w-6xl w-full mx-auto px-2">
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex flex-col space-y-4 items-stretch">
            <input
              className="bg-cu-gray p-4 text-xs rounded border-none outline-none text-white"
              placeholder="Search vaults"
            />
            <div className="flex flex-row items-center space-x-4">
              <div className="bg-radian-purple-200 rounded px-2 py-2 flex flex-row items-center justify-center">
                <span className="text-white text-lg font-normal w-full text-center">
                  Filters:
                </span>
              </div>
              <div className="bg-cu-gray py-2 flex flex-row space-x-2 items-center px-2 rounded">
                <span className="text-white opacity-40 text-lg font-normal w-full text-center">
                  Platform:
                </span>
                <select
                  name="cars"
                  id="cars"
                  className="border-none outline-none bg-transparent text-white text-lg"
                >
                  <option value={1} className="bg-cu-gray text-white">
                    All
                  </option>
                  <option value={2} className="bg-cu-gray text-white">
                    S1
                  </option>
                </select>
              </div>
              <div className="bg-cu-gray flex flex-row space-x-2 items-center px-2 rounded">
                <span className="text-white opacity-40 text-lg font-normal w-full text-center py-2">
                  Vault type:
                </span>
                <select
                  name="cars"
                  defaultValue={2}
                  id="cars"
                  className="border-none outline-none bg-transparent text-white text-lg py-2"
                >
                  <option value={1} className="bg-cu-gray text-white">
                    All
                  </option>
                  <option value={2} className="bg-cu-gray text-white">
                    Stable LPs
                  </option>
                </select>
              </div>
              <div className="bg-cu-gray py-2 flex flex-row space-x-2 items-center px-2 rounded">
                <span className="text-white opacity-40 text-lg font-normal w-full text-center">
                  Asset:
                </span>
                <select
                  name="cars"
                  id="cars"
                  className="border-none outline-none bg-transparent text-white text-lg"
                >
                  <option value={1} className="bg-cu-gray text-white">
                    All
                  </option>
                  <option value={2} className="bg-cu-gray text-white">
                    S1
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2">
            <span className="text-white font-semibold text-lg">
              Hide zero balances
            </span>
            <IOSSwitch />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between bg-radian-purple-200 rounded py-2 w-full mt-10">
          <span className="text-white text-center text-sm font-medium flex-[4]">
            VAULT
          </span>
          <span className="text-white text-center text-sm font-medium flex-[3]">
            WALLET
          </span>
          <span className="text-white text-center text-sm font-medium flex-[3]">
            Deposited
          </span>
          <span className="text-white text-center text-sm font-medium flex-[2]">
            APY
          </span>
          <span className="text-white text-center text-sm font-medium flex-[2]">
            DAILY
          </span>
          <span className="text-white text-center text-sm font-medium flex-[2]">
            TVL
          </span>
        </div>
        <div
          className="flex flex-row items-center justify-between bg-cu-gray rounded py-2 w-full my-3"
          onClick={() => navigate("/value/1")}
        >
          <div className="flex-[4] flex flex-row space-x-4">
            <div className="flex flex-row w-full space-x-4 px-4 py-2 items-center">
              <Avatar.Group>
                <Avatar src={USCT} size={32} />
                <Avatar src={USDC} size={32} />
              </Avatar.Group>
              <div className="flex flex-col justify-between">
                <span className="text-white text-opacity-40 text-lg">
                  Platform: MojitoSwap
                </span>
                <span className="text-white text-xl">USDT - USDC LP</span>
              </div>
            </div>
          </div>
          <span className="text-white text-center text-lg font-medium flex-[3]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[3]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            0
          </span>
        </div>
        <div
          className="flex flex-row items-center justify-between bg-cu-gray rounded py-2 w-full my-3"
          onClick={() => navigate("/value/3")}
        >
          <div className="flex-[4] flex flex-row space-x-4">
            <div className="flex flex-row w-full space-x-4 px-4 py-2 items-center">
              <Avatar.Group>
                <Avatar src={Atom} size={32} />
                <Avatar src={Wave} size={32} />
              </Avatar.Group>
              <div className="flex flex-col justify-between">
                <span className="text-white text-opacity-40 text-lg">
                  Platform: MojitoSwap
                </span>
                <span className="text-white text-xl">ATOM - WAVES LP</span>
              </div>
            </div>
          </div>
          <span className="text-white text-center text-lg font-medium flex-[3]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[3]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            0
          </span>
        </div>
        <div
          className="flex flex-row items-center justify-between bg-cu-gray rounded py-2 w-full my-3"
          onClick={() => navigate("/value/5")}
        >
          <div className="flex-[4] flex flex-row space-x-4">
            <div className="flex flex-row w-full space-x-4 px-4 py-2 items-center">
              <Avatar.Group>
                <Avatar src={USCT} size={32} />
                <Avatar src={Ether} size={32} />
              </Avatar.Group>
              <div className="flex flex-col justify-between">
                <span className="text-white text-opacity-40 text-lg">
                  Platform: MojitoSwap
                </span>
                <span className="text-white text-xl">USDT - ETH LP</span>
              </div>
            </div>
          </div>
          <span className="text-white text-center text-lg font-medium flex-[3]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[3]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            0
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            0
          </span>
        </div>
        <div
          className="flex flex-row items-center justify-between bg-cu-gray rounded py-2 w-full my-3"
          onClick={() => navigate("/value/7")}
        >
          <div className="flex-[4] flex flex-row space-x-4">
            <div className="flex flex-row w-full space-x-4 px-4 py-2 items-center">
              <Avatar.Group>
                <Avatar src={USCT} size={32} />
                <Avatar src={APEX} size={32} />
              </Avatar.Group>
              <div className="flex flex-col justify-between">
                <span className="text-white text-opacity-40 text-lg">
                  Platform: MojitoSwap
                </span>
                <span className="text-white text-xl">USDT - APEX LP</span>
              </div>
            </div>
          </div>
          <span className="text-white text-center text-lg font-medium flex-[3]">
            {balance}
          </span>
          <span className="text-white text-center text-lg font-medium flex-[3]">
            {balance}
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            {balance}
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            {balance}
          </span>
          <span className="text-white text-center text-lg font-medium flex-[2]">
            {balance}
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center pt-20 space-x-4">
        <span className="text-white text-lg font-semibold">Docs</span>
        <span className="text-white text-lg font-semibold">Blog</span>
        <span className="text-white text-lg font-semibold">MediaKit</span>
      </div>
      <div className="flex flex-row items-center justify-center pb-8 pt-2 space-x-1">
        <img
          alt=""
          src={Twitter}
          className="w-16 h-16 object-scale-down cursor-pointer"
        />
        <img
          alt=""
          src={Discord}
          className="w-16 h-16 object-scale-down cursor-pointer"
        />
        <img
          alt=""
          src={Github}
          className="w-16 h-16 object-scale-down cursor-pointer"
        />
      </div>
    </div>
  );
}
