import React, {useMemo, useRef} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Container from '../Container';
import {useTheme} from '../../Hooks';
import {Touchable} from '../Touchable';
import Image from '../Image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';

const BottomTab = ({navigation, state}: BottomTabBarProps) => {
  const {Colors, Images, MetricsSizes, Fonts} = useTheme();
  const inset = useSafeAreaInsets();
  //const { notificationPusherData } = useAppSelector(s => s.message)

  const icons = useMemo(() => {
    // eslint-disable-next-line no-sparse-arrays
    return [
      {
        name: 'Trang chủ',
        icon: Images.evn_home,
      },
      {
        name: 'Báo Cáo',
        icon: Images.icEmail,
      },

      {
        name: 'Thảo luận',
        icon: Images.icMessage,
      },
      {
        name: 'Tài khoản',
        icon: Images.evn_user,
      },
      ,
    ];
  }, [Images.home, Images.icEmail, Images.icMessage, Images.user_round]);

  const routes = useMemo(() => {
    return state.routes.map((value, index) => {
      const isFocused = state.index === index;
      const onPress = () => {
        //console.log('name valuie', value.name)
        navigation.navigate(value.name);
      };
      // if (index === 2) {
      //   return (
      //     <Tooltip
      //       ref={refToolTip as any}
      //       backgroundColor={Colors.green1}
      //       width={MetricsSizes.deviceWidth - scale(50)}
      //       height={MetricsSizes.regular * 3}
      //       overlayColor={'rgba(0,0,0,0.3)'}
      //       containerStyle={{ alignItems: 'flex-start' }}
      //       actionType="none"
      //       popover={<PopupMessage />}
      //     >
      //       <Touchable
      //         onPress={() => {
      //           onPress()
      //           refToolTip.current?.toggleTooltip()
      //         }}
      //       >
      //         <Image
      //           source={icons[index]?.icon}
      //           w={MetricsSizes.regular}
      //           h={MetricsSizes.regular}
      //           resizeMode="contain"
      //         />
      //       </Touchable>
      //     </Tooltip>
      //   )
      // }
      return (
        <Touchable
          key={index}
          ai="center"
          bg={isFocused ? Colors.grey4 : Colors.transparent}
          onPress={onPress}
          br={MetricsSizes.tiny / 2}
          ph={MetricsSizes.tiny / 2}
          pv={0}
          h={'100%'}>
          <Image
            w={MetricsSizes.large}
            h={MetricsSizes.large}
            source={icons[index]?.icon}
            resizeMode={'contain'}
          />
          <Text style={[{fontSize: 10}]}>{icons[index]?.name}</Text>
        </Touchable>
      );
    });
  }, [
    Colors.grey4,
    Colors.transparent,
    Fonts.textTiny,
    MetricsSizes.large,
    MetricsSizes.tiny,
    icons,
    navigation,
    state.index,
    state.routes,
  ]);

  // useEffect(() => {
  //   if (notificationPusherData) {
  //     refToolTip.current?.toggleTooltip()
  //   }
  // }, [notificationPusherData])

  return (
    <Container
      //pv={MetricsSizes.tiny}
      //pb={inset.bottom + MetricsSizes.tiny}
      bg={Colors.bottomTab}
      jc="space-around"
      flexDr="row"
      h={50}>
      {routes}
    </Container>
  );
};

export default BottomTab;
