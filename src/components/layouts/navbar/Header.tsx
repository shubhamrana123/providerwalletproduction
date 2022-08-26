
import {useState,Fragment} from 'react';
import Images from '../../../constant/images';
import AvatarIcon from '../avatar/AvatarIcon';
import DrawerLayout from '../../DrawerLayout';
import UserProfile from '../../UserProfile';

const Header = ()=>
{
    const [showUserProfile, setShowUserProfile] = useState<boolean>(false);


    return (
        <Fragment>
            <div className="nav-wrapper">
                <div className="nav">
                    <div className='nav-logo'>
                        <img src={Images.logoIcon} />
                    </div>
                    <div className='nav-profile'>
                        <div className='nav-account-name'>Provider Wallet</div>
                        <div className='nav-profile-pic' onClick={()=>setShowUserProfile(!showUserProfile)}>
                            <AvatarIcon
                                alt="profile"
                                height={35}
                                width={35}
                                src="home"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <DrawerLayout
                anchor="right"
                width={400}
                open={showUserProfile}
                onClose={()=>setShowUserProfile(!showUserProfile)}
                component={<UserProfile/>}
            />
        </Fragment>
    )
}
export default Header;