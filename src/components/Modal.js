import { useWeb3React } from "@web3-react/core";
import { connectors } from "./wallet/connector";
import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { CloseOutlined } from "@mui/icons-material";
import Web3 from "web3";
import * as CONTRACTS from '../getWalletInfo/getInfo';
import vaultsABI from "../features/configure/vaultsABI.json";
import { HashbitchainId } from "../getWalletInfo/getInfo";
import useMetaMask from "./wallet/useMetaMask";

const SelectWalletModal = ({ modalOpen, handlCloseModal }) => {
    const {connect, isActive, account, chainId, walletConnect, coinBaseConnect} = useMetaMask();
    const {library} = useWeb3React();
    const [error, setError] = useState("");
    const [balance, setBalance] = useState(1);
    return (
        <>
            <div id="wallet-modal">
                <Modal
                    centered
                    closable={false}
                    open={modalOpen}
                    width={300}
                    bodyStyle={{ backgroundColor: "#202247", borderStyle: "outset", paddingTop: "2px" }}
                >
                    <div className="d-flex">
                        <div>
                            <button className="close-btn"
                                onClick={() => { handlCloseModal();}}
                            >
                                <CloseOutlined />
                            </button>
                        </div>
                        <div>
                            <button className="wallet-btn"
                                onClick={() => {
                                    coinBaseConnect();
                                }}>
                                Coinbase
                            </button>
                        </div>
                        <div>
                            <button className="wallet-btn"
                                onClick={() => {
                                    walletConnect();
                                }}>
                                wallect Connect
                            </button>
                        </div>
                        <div>
                            <button className="wallet-btn"
                                onClick={() => {
                                    connect()
                                    handlCloseModal();
                                }}
                            >
                                Metamask
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default SelectWalletModal;
