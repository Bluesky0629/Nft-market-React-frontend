import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { connectors } from './connector';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { HashbitchainId } from 'getWalletInfo/getInfo';
export const MetaMaskContext = React.createContext(null)
export const MetaMaskProvider = ({ children }) => {

    const { activate, account, library, connector, active, deactivate, chainId} = useWeb3React()
    const [error, setError] = useState("");
    const [isActive, setIsActive] = useState(false)
    const [shouldDisable, setShouldDisable] = useState(false) // Should disable connect button while connecting to MetaMask
    const [isLoading, setIsLoading] = useState(true)

    // Init Loading
    useEffect(() => {
     
        changeNetwork();
    }, [])

    // Check when App is Connected or Disconnected to MetaMask
    const handleIsActive = useCallback(() => {
        console.log('App is connected with MetaMask ', active)
        setIsActive(active)
    }, [active])

    useEffect(() => {
        handleIsActive()
    }, [handleIsActive])

    // Connect to MetaMask wallet
    const connect = async () => {
        console.log('Connecting to MetaMask...')
        setShouldDisable(true)
        try {
            await activate(connectors.injected).then(() => {
                setShouldDisable(false)
            })
        } catch (error) {
            console.log('Error on connecting: ', error)
        }
    }

    const coinBaseConnect = async () => {
        console.log('Connecting to MetaMask...')
        setShouldDisable(true)
        try {
            await activate(connectors.coinbaseWallet).then(() => {
                setShouldDisable(false)
            })
        } catch (error) {
            console.log('Error on connecting: ', error)
        }
    }

    console.log("ddddd", chainId);
    const walletConnect = async () => {
        console.log('Connecting to MetaMask...')
        setShouldDisable(true)
        try {
            await activate(connectors.walletConnect).then(() => {
                setShouldDisable(false)
            })
        } catch (error) {
            console.log('Error on connecting: ', error)
        }
    }

    // Disconnect from Metamask wallet
    const disconnect = async () => {
        console.log('Disconnecting wallet from App...')
        try {
            await deactivate()
        } catch (error) {
            console.log('Error on disconnnect: ', error)
        }
    }


    const changeNetwork = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(HashbitchainId) }],
                });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    try {
                        await library.provider.request({
                            method: "wallet_addEthereumChain",
                            params: [{ chainId: Web3.utils.toHex(HashbitchainId) }],
                        });
                    } catch (error) {
                        setError(error);
                    }
                }
            }
        }
    }

    const values = useMemo(
        () => ({
            isActive,
            account,
            isLoading,
            connect,
            disconnect,
            shouldDisable,
            changeNetwork,
            chainId,
            coinBaseConnect,
            walletConnect
        }),
        [isActive, isLoading, shouldDisable, account]
    )

    return <MetaMaskContext.Provider value={values}>{children}</MetaMaskContext.Provider>
}

export default function useMetaMask() {
    const context = React.useContext(MetaMaskContext)

    if (context === undefined) {
        throw new Error('useMetaMask hook must be used with a MetaMaskProvider component')
    }

    return context
}