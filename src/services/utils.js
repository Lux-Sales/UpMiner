import LanguageIcon from '@mui/icons-material/Language'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ParkIcon from '@mui/icons-material/Park';
import GavelIcon from '@mui/icons-material/Gavel';
import BlockIcon from '@mui/icons-material/Block';
import PublicIcon from '@mui/icons-material/Public';
import DiamondIcon from '@mui/icons-material/Diamond';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SavingsIcon from '@mui/icons-material/Savings';

export const orderProducts = (productCards, order) => {
    productCards.sort((a, b) => {
        if (order == 'value') {
            return b.value - a.value
        }
        else {
            return b.createdAt - a.createdAt
        }
    })
}

export const handleIcon = (title) => {
    switch (title) {
        case 'Profissional':
            return <BusinessCenterIcon />
        case 'Reguladores':
            return <AccountBalanceIcon />
        case 'Mídia / Internet':
            return <PublicIcon />
        case 'Bens e Imóveis':
            return <DiamondIcon />
        case 'Cadastro':
            return <EmojiPeopleIcon />
        case 'Financeiro':
            return <SavingsIcon />
        case 'Sócio Ambiental':
            return <ParkIcon />
        case 'Jurídico':
            return <GavelIcon />
        case 'Listas Restritivas':
            return <BlockIcon />
        default:
            return <LanguageIcon />
    }
}