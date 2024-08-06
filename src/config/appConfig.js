import All_series from "../../src/assets/Images/UserDetails/All_series.png";
import Back from "../../src/assets/Images/UserDetails/Back.png";
import Following from "../../src/assets/Images/UserDetails/Following.png";
import Home from "../../src/assets/Images/UserDetails/Home.png";
import Account from "../../src/assets/Images/UserAccount/Account.png";
import Contact from "../../src/assets/Images/UserAccount/ContactUs.png";
import Friends from "../../src/assets/Images/UserAccount/Freinds.png";
import FriendsRequest from "../../src/assets/Images/UserAccount/FreindsRequest.png";
import Influence from "../../src/assets/Images/UserAccount/Influence.png";
import inviteFriends from "../../src/assets/Images/UserAccount/inviteFriends.png";
import Legal from "../../src/assets/Images/UserAccount/Legal.png";
import MangaeAlert from "../../src/assets/Images/UserAccount/Mangae_Alerts.png";
import PrivacyDetails from "../../src/assets/Images/UserAccount/PrivacyDetails.png";
import seeFreinds from "../../src/assets/Images/UserAccount/See_freiends.png";
import Settings from "../../src/assets/Images/UserAccount/Settings.png";
import subscribe from "../../src/assets/Images/UserAccount/Subscriber.png";
import termsofUse from "../../src/assets/Images/UserAccount/termsofUse.png";

const appConfig = {
  UsersDetails: {
    back: {
      icon: Back,
      label: 'Back'
    },
    home: {
      icon: Home,
      label: 'Home'
    },
    following: {
      icon: Following,
      label: 'Following'
    },
    allSeries: {
      icon: All_series,
      label: 'All Series'
    }
  },
  UsersAccount: {
    account: {
      icon: Account,
      label: 'Account',
      actions: {
        subscribe: {
          icon: subscribe,
          label: 'Subscribe'
        }
      }
    },
    influencePoints: {
      icon: Influence,
      label: 'Influence Points'
    },
    friends: {
      icon: Friends,
      label: 'Friends',
      actions: {
        inviteFriends: {
          icon: inviteFriends,
          label: 'Invite Friends'
        },
        seeFriends: {
          icon: seeFreinds,
          label: 'See Friends'
        },
        friendRequests: {
          icon: FriendsRequest,
          label: 'Friend Requests'
        }
      }
    },
    settings: {
      icon: Settings,
      label: 'Settings',
      actions: {
        manageAlerts: {
          icon: MangaeAlert,
          label: 'Manage Alerts'
        }
      }
    },
    legal: {
      icon: Legal,
      label: 'Legal',
      actions: {
        termsAndConditions: {
          icon: termsofUse,
          label: 'Terms and Conditions'
        },
        privacyPolicy: {
          icon: PrivacyDetails,
          label: 'Privacy Policy'
        }
      }
    },
    contact: {
      icon: Contact,
      label: 'Contact Us'
    }
  }
};

export default appConfig;