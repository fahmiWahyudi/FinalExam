import{
  createSwitchNavigator    
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from "react"

import Introduction from '../Introduction'
import Home from '../Home'
import ProdukFutsal from '../ProdukFutsal'
import Produk from '../Produk'
import BrandProdukNineTen from '../BrandProdukNineTen'
import Akun from '../Akun'
import DetailProduk from '../DetailProduk'

const HomePage = createStackNavigator(
  {
    Home : Home,
    ProdukFutsal : ProdukFutsal,
    DetailProduk : DetailProduk
  },
  {
    headerMode:"none",
    initialRouteName:"Home"
  }
)

const ProdukPage = createStackNavigator({
  Produk : Produk,
  BrandProdukNineTen : BrandProdukNineTen,
  DetailProduk : DetailProduk
})

// const AkunPage = createStackNavigator({
//   Akun : Akun,
//   Akun1 : AkunChild
// })

const BottomNavigation = createBottomTabNavigator(
  {
      Home : { 
              screen: HomePage,
              navigationOptions: {
                  tabBarIcon: ({tintColor}) =>
                    <Icon name="home" size={20} color={tintColor} />
                }
          },
      Produk : { 
          screen: ProdukPage,
          navigationOptions: {
              tabBarIcon: ({tintColor}) =>
                <Icon name="tags" size={20} color={tintColor} />
            }
      },
      Akun : { 
          screen: Akun,
          navigationOptions: {
              tabBarIcon: ({tintColor}) =>
                <Icon name="user" size={20} color={tintColor} />
            }
      }
  },
  {
      initialRouteName: "Home",
      tabBarOptions: {
        activeTintColor: '#5bb7f5',
        labelStyle: {
          fontSize: 14
        },
        style: {
          backgroundColor: '#fff',
          // height: 0
        }
      },
  }
)

export const AppNavigation = createSwitchNavigator({
  Introduction : Introduction,
  Home : BottomNavigation
})

HomePage.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
      tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

ProdukPage.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
      tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

// AkunPage.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//       tabBarVisible = false;
//   }

//   return {
//     tabBarVisible
//   };
// };