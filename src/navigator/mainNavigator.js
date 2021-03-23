import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile217517Navigator from '../features/UserProfile217517/navigator';
import Tutorial217516Navigator from '../features/Tutorial217516/navigator';
import NotificationList217488Navigator from '../features/NotificationList217488/navigator';
import Settings217487Navigator from '../features/Settings217487/navigator';
import Settings217479Navigator from '../features/Settings217479/navigator';
import UserProfile217477Navigator from '../features/UserProfile217477/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile217517: { screen: UserProfile217517Navigator },
Tutorial217516: { screen: Tutorial217516Navigator },
NotificationList217488: { screen: NotificationList217488Navigator },
Settings217487: { screen: Settings217487Navigator },
Settings217479: { screen: Settings217479Navigator },
UserProfile217477: { screen: UserProfile217477Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
