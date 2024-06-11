// import logo from '@/assets/images/flowise_logo.png'
// import logoDark from '@/assets/images/flowise_logo_dark.png'


// import { useSelector } from 'react-redux'

// // ==============================|| LOGO ||============================== //

// const Logo = () => {
//     const customization = useSelector((state) => state.customization)

//     return (
//         <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
//             <img
//                 style={{ objectFit: 'contain', height: 'auto', width: 150 }}
//                 src={customization.isDarkMode ? logoDark : logo}
//                 alt='Flowise'
//             />
//         </div>
//     )
// }

// export default Logo
import shuxiLogo from '@/assets/images/shuxi_dark.png'
import shuxiLogoDark from '@/assets/images/shuxi_logo_black.svg'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <img
                style={{
                    objectFit: 'contain',
                    height: 'auto',
                    width: 100,
                    filter: customization.isDarkMode ? 'invert(100%)' : 'none',
                    color: 'transparent'
                }}
                src={customization.isDarkMode ? shuxiLogoDark : shuxiLogo}
                alt='Shuxi'
            />
            {/* <img
                style={{ objectFit: 'contain', height: 'auto', marginLeft: 10, width: 70 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Flowise'
            /> */}
        </div>
    )
}

export default Logo

