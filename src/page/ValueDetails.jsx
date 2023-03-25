import { Avatar } from "antd";
import Logo from "../assets/icons/icon.png";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

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

import { AreaChart } from "react-chartkick";
import "chartkick/chart.js";

import Twitter from "../assets/icons/twitter.png";
import Discord from "../assets/icons/discord.png";
import Github from "../assets/icons/github.png";

import LaunchIcon from "@mui/icons-material/Launch";

import { useNavigate } from "react-router-dom";
import React from "react";
import { deposit } from "getWalletInfo/getInfo";

export default function ValueDetailsPage(params) {
  const [section, setSection] = React.useState(0);
  const [chart, setChart] = React.useState(0);
  const [day, setDay] = React.useState(0);
  const navigate = useNavigate();
  const [value, setValue] = React.useState([0, 25]);

  function depositUSDT(){
    deposit();
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <button className="px-10 py-2 rounded-full bg-cu-green text-white font-semibold text-lg">
            Connect wallet
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10 max-w-6xl w-full mx-auto px-2">
        <span className="w-full text-left text-white font-medium text-lg cursor-pointer mb-6" onClick={()=>navigate('/value')}>
          {"< Back to all vaults"}
        </span>
        <div className="flex flex-row items-center justify-between bg-cu-gray rounded py-2 w-full my-3">
          <div className="flex-[4] flex flex-row space-x-4 items-center">
            <div className="flex flex-row space-x-4 px-4 py-2 items-start">
              <Avatar.Group>
                <Avatar src={USDC} size="large" />
                <Avatar src={USCT} size="large" />
              </Avatar.Group>
              <div className="flex flex-col justify-between">
                <span className="text-white text-lg">USDT - USDC LP</span>
                <div className="flex flex-row space-x-4">
                  <span className="text-base text-white font-semibold">
                    <span className="text-white text-opacity-60">Chain: </span>
                    KCC Chain
                  </span>
                  <span className="text-base text-white font-semibold">
                    <span className="text-white text-opacity-60">
                      Platform:
                    </span>
                    MojitoSwap
                  </span>
                </div>
                <div className="flex flex-row space-x-4 mt-3">
                  <span className="text-base text-white font-semibold">
                    <LaunchIcon className="text-white" /> Buy Token
                  </span>
                  <span className="text-base text-white font-semibold">
                    <LaunchIcon className="text-white" /> Add Liquidity
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end flex-1 px-6">
              <div className="flex flex-row items-center justify-between space-x-8">
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">
                    DEPOSITED
                  </span>
                  <span className="text-white font-semibold text-2xl">
                    $0.00
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">
                    DAILY YIELD
                  </span>
                  <span className="text-white font-semibold text-2xl">
                    $0.00
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">
                    AVG APY
                  </span>
                  <span className="text-white font-semibold text-2xl">
                    $0.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between space-x-4 w-full">
          <div className="flex bg-cu-gray rounded p-4 flex-1 flex-col items-center">
            <div className="w-full rounded-full bg-background p-1 flex flex-row">
              <span
                className={`${
                  section === 0
                    ? "bg-cu-green text-opacity-100"
                    : "text-opacity-60"
                } flex-1 text-center py-2 rounded-full text-white cursor-pointer`}
                onClick={() => {setSection(0); depositUSDT()}}
              >
                Deposit
              </span>
              <span
                className={`${
                  section === 1
                    ? "bg-cu-green text-opacity-100"
                    : "text-opacity-60"
                } flex-1 text-center py-2 rounded-full text-white cursor-pointer`}
                onClick={() => setSection(1)}
              >
                Withdraw
              </span>
            </div>
            <span className={`${section===1?'text-opacity-0':''} mt-4 mb-10 text-white font-semibold text-base w-full text-left`}>
              Deposit your LP
            </span>
            <div className="flex flex-row items-center justify-between w-full my-1">
              <span className="text-white font-semibold text-xs">
                Balance: 50 USDT-USDC LP
              </span>
              <span className="text-cu-green font-semibold text-xs cursor-pointer">
                MAX
              </span>
            </div>
            <div className="bg-background py-2 flex flex-row space-x-2 items-center justify-between px-2 rounded w-full">
              <select
                name="cars"
                id="cars"
                className="bg-transparent border-none outline-none text-white text-base"
                style={{backgroundColor:"transparent"}}
              >
                <option value="All" className="bg-black text-white" style={{backgroundColor:"transparent"}}>
                  USDT-USDC LP
                </option>
                <option value="S1" className="bg-black text-white" style={{backgroundColor:"transparent"}}>
                  USDT-USDC LP
                </option>
              </select>
              <input
                placeholder={0}
                type="number"
                className="text-white text-opacity-60 text-base outline-none border-none bg-transparent w-20"
                style={{backgroundColor:"transparent"}}
              />
            </div>
            <div className="w-full">
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                step={25}
                color="success"
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </div>
            <button className="w-full text-center mt-10 mb-4 py-2 rounded-full bg-cu-green text-white font-semibold text-base">
              Approve
            </button>
            <div className="flex flex-col w-full rounded bg-background p-4">
              <span className="text-white font-semibold text-base">
                Oak Fees
              </span>
              <div className="my-4 w-full flex flex-row items-center space-x-24">
                <div className="flex flex-col">
                  <span className="text-white font-normal text-base">
                    Deposit fee
                  </span>
                  <span className="text-white font-semibold text-3xl">0%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-normal text-base">
                    Withdrawal fee
                  </span>
                  <span className="text-white font-semibold text-3xl">0%</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-normal text-base">
                  Performance fee
                </span>
                <span className="text-white font-semibold text-3xl">5.3%</span>
              </div>
              <span className="mt-6 max-w-md w-full text-white font-medium text-sm">
                Performance fees are already subtracted from the displayed APY.
              </span>
            </div>
          </div>
          <div className="flex w-full bg-cu-gray rounded p-4 flex-[2] flex-col">
            <div className="flex flex-row items-center justify-between mb-6 w-full">
              <span className="text-white text-2xl font-semibold">History</span>
              <div className="flex flex-row items-center justify-center bg-background rounded p-1">
                <span
                  className={`w-16 text-center py-1 rounded ${
                    chart === 0
                      ? "bg-cu-green text-opacity-100"
                      : "text-opacity-60"
                  } text-white font-semibold text-base cursor-pointer`}
                  onClick={() => setChart(0)}
                >
                  TVL
                </span>
                <span
                  className={`w-16 text-center py-1 rounded ${
                    chart === 1
                      ? "bg-cu-green text-opacity-100"
                      : "text-opacity-60"
                  } text-white font-semibold text-base cursor-pointer`}
                  onClick={() => setChart(1)}
                >
                  PRICE
                </span>
                <span
                  className={`w-16 text-center py-1 rounded ${
                    chart === 2
                      ? "bg-cu-green text-opacity-100"
                      : "text-opacity-60"
                  } text-white font-semibold text-base cursor-pointer`}
                  onClick={() => setChart(2)}
                >
                  APY
                </span>
              </div>
            </div>
            <AreaChart
              colors={["#28CE8A"]}
              label="Value"
              prefix="$"
              data={{
                "2021-01-01 00:00:00 -0800": 2000,
                "2021-01-01 00:01:00 -0800": 5000,
                "2021-01-01 00:03:00 -0800": 2000,
                "2021-01-01 00:04:00 -0800": 5000,
              }}
            />
            <div className="flex flex-row items-center justify-end space-x-2 mt-4">
              <span
                className={`text-white ${
                  day === 0 ? "text-cu-green" : "text-opacity-60"
                } font-medium cursor-pointer`}
                onClick={() => setDay(0)}
              >
                1D
              </span>
              <span
                className={`text-white ${
                  day === 1 ? "text-cu-green" : "text-opacity-60"
                } font-medium cursor-pointer`}
                onClick={() => setDay(1)}
              >
                1W
              </span>
              <span
                className={`text-white ${
                  day === 2 ? "text-cu-green" : "text-opacity-60"
                } font-medium cursor-pointer`}
                onClick={() => setDay(2)}
              >
                1M
              </span>
              <span
                className={`text-white ${
                  day === 3 ? "text-cu-green" : "text-opacity-60"
                } font-medium cursor-pointer`}
                onClick={() => setDay(3)}
              >
                1Y
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center pt-20 space-x-4">
        <span className="text-white text-lg font-semibold">Docs</span>
        <span className="text-white text-lg font-semibold">Blog</span>
        <span className="text-white text-lg font-semibold">MediaKit</span>
      </div>
      <div className="flex flex-row items-center justify-center pb-8 pt-2 space-x-1">
        <img alt="" src={Twitter} className="w-16 h-16 object-scale-down cursor-pointer" />
        <img alt="" src={Discord} className="w-16 h-16 object-scale-down cursor-pointer" />
        <img alt="" src={Github} className="w-16 h-16 object-scale-down cursor-pointer" />
      </div>
    </div>
  );
}
