import { useEffect, useContext, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

const tweets = [
    {
        displayName: 'markglenn',
        userName: '0xa339F5B7E246F9D8b010EBa6D24bCBD19fFF3745',
        avatar: 'https://scontent.fcrk3-2.fna.fbcdn.net/v/t1.6435-9/173889755_1813067632185856_8627025453384492458_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeHCyJ1i5zO79POrPS0jSkPzhYR_i_C0bgqFhH-L8LRuCsddMkzr8t2klE43HX1lTkx6EATC3P1-urRber3o0VVj&_nc_ohc=91IonhwZAt8AX9SjaQO&tn=57W5Yet4SBfHeVjV&_nc_ht=scontent.fcrk3-2.fna&oh=00_AT_PMg2yBitltUWouJAWUgwclcPvNQ0k1QNXREiJpn2dRg&oe=62AA3DBC',
        text: 'gm',
        isProfileImageNft: true,
        timestamp: '2022-05-23T12:00:00.000Z'
    },
    {
        displayName: 'markglenn',
        userName: '0xa339F5B7E246F9D8b010EBa6D24bCBD19fFF3745',
        avatar: 'https://scontent.fcrk3-2.fna.fbcdn.net/v/t1.6435-9/173889755_1813067632185856_8627025453384492458_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeHCyJ1i5zO79POrPS0jSkPzhYR_i_C0bgqFhH-L8LRuCsddMkzr8t2klE43HX1lTkx6EATC3P1-urRber3o0VVj&_nc_ohc=91IonhwZAt8AX9SjaQO&tn=57W5Yet4SBfHeVjV&_nc_ht=scontent.fcrk3-2.fna&oh=00_AT_PMg2yBitltUWouJAWUgwclcPvNQ0k1QNXREiJpn2dRg&oe=62AA3DBC',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z'
    },
    {
        displayName: 'markglenn',
        userName: '0xa339F5B7E246F9D8b010EBa6D24bCBD19fFF3745',
        avatar: 'https://scontent.fcrk3-2.fna.fbcdn.net/v/t1.6435-9/173889755_1813067632185856_8627025453384492458_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeHCyJ1i5zO79POrPS0jSkPzhYR_i_C0bgqFhH-L8LRuCsddMkzr8t2klE43HX1lTkx6EATC3P1-urRber3o0VVj&_nc_ohc=91IonhwZAt8AX9SjaQO&tn=57W5Yet4SBfHeVjV&_nc_ht=scontent.fcrk3-2.fna&oh=00_AT_PMg2yBitltUWouJAWUgwclcPvNQ0k1QNXREiJpn2dRg&oe=62AA3DBC',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z'
    },
    {
        displayName: 'markglenn',
        userName: '0xa339F5B7E246F9D8b010EBa6D24bCBD19fFF3745',
        avatar: 'https://scontent.fcrk3-2.fna.fbcdn.net/v/t1.6435-9/173889755_1813067632185856_8627025453384492458_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeHCyJ1i5zO79POrPS0jSkPzhYR_i_C0bgqFhH-L8LRuCsddMkzr8t2klE43HX1lTkx6EATC3P1-urRber3o0VVj&_nc_ohc=91IonhwZAt8AX9SjaQO&tn=57W5Yet4SBfHeVjV&_nc_ht=scontent.fcrk3-2.fna&oh=00_AT_PMg2yBitltUWouJAWUgwclcPvNQ0k1QNXREiJpn2dRg&oe=62AA3DBC',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00.000Z'
    },
]

const ProfileTweets = () => {
    const { currentAccount, currentUser } = useContext(TwitterContext)
  return (
    <div className={style.wrapper}>
        {currentUser.tweets?.map((tweet, index) => (
             <Post
             key={index}
             displayName={
                currentUser.name === 'Unnamed'
                 ? `${currentAccount.slice(
                     0,
                     4,
                   )}...${currentAccount.slice(41)}`
                 : currentUser.name
             }
             userName={`${currentAccount.slice(
               0,
               4,
             )}...${currentAccount.slice(41)}`}
             text={tweet.tweet}
             avatar={currentUser.profileImage}
             timestamp={tweet.timestamp}
           />
         ))}
       </div>
     )
   }
   
   export default ProfileTweets
   