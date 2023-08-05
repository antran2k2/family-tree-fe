import React, {useCallback, useMemo} from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from './utils';
import UserProfileContainer from '../Containers/UserProfileContainer';
import HomeContainer from '../Containers/HomeContainer';
import CalendarContainer from '../Containers/CalendarContainer';

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  const headerOption = useMemo(() => {
    return {
      header: undefined,
      headerShown: false,
    };
  }, []);

  const {params} = useRoute<RouteProp<RootStackParamList, 'Main'>>();

  // const renderTabbar = useCallback((props: BottomTabBarProps) => {
  //   return <BottomTab {...props} />;
  // }, []);
  return (
    <Tab.Navigator
      // tabBar={renderTabbar}
      initialRouteName={params?.tab ?? 'Main'}>
      <Tab.Screen
        options={headerOption}
        name="Gia phả"
        component={HomeContainer}
      />
      <Tab.Screen
        options={headerOption}
        name="Lịch"
        component={CalendarContainer}
      />
      {/* <Tab.Screen options={headerOption} name="Order" component={MyOrder} /> */}
      {/* <Tab.Screen
        options={headerOption}
        name="Báo cáo"
        component={BaoCaoTuanContainer}
      />
      <Tab.Screen
        options={headerOption}
        name="Thảo luận"
        component={DieuhanhVaThaoluanContainer}
      /> */}
      <Tab.Screen
        options={headerOption}
        name="Tài khoản"
        component={UserProfileContainer}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
