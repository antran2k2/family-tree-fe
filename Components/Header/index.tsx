import {Text, TouchableOpacity, StatusBar, View} from 'react-native';
import React from 'react';
import Container from '../Container';
import {useTheme} from '../../Hooks';
import Image from '../Image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
type Props = {
  title: string;
  noBack?: boolean;
  rightButton?: object;
  displayRightButton?: boolean;
};
const Header = ({
  title,
  noBack = false,
  displayRightButton = false,
  rightButton,
}: Props) => {
  const {Layout, Gutters, Fonts, Images, MetricsSizes, FontFamily, Colors} =
    useTheme();

  const navigation = useNavigation();

  return (
    <Container bg={'#3E4095'} h={50} jc={'center'} ai={'center'}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.primary} />
      <SafeAreaView
        edges={['right', 'top', 'left']}
        style={[Layout.rowHCenter]}>
        <View style={[{flex: 1, paddingLeft: 10, marginLeft: 10}]}>
          {!noBack && (
            <TouchableOpacity
              style={
                [
                  ,// Gutters.tinyHPadding,
                  // Gutters.tinyVPadding,
                ]
              }
              onPress={navigation.goBack}>
              <Image
                source={Images.back}
                w={MetricsSizes.regular}
                h={MetricsSizes.regular}
                tintColor={Colors.white}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={[
            {
              flex: 10,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text
            style={[
              Fonts.textRegular,
              {color: 'white'},
              Gutters.tinyVPadding,
              Gutters.tinyLPadding,
              {fontFamily: FontFamily.NunitoBold},
            ]}>
            {title}
          </Text>
        </View>
        {rightButton ? (
          <View style={[{flex: 1}]}>
            <TouchableOpacity
              style={[Gutters.tinyHPadding, Gutters.tinyVPadding]}
              onPress={rightButton.function}>
              <Image
                source={rightButton.icon}
                w={MetricsSizes.regular}
                h={MetricsSizes.regular}
                tintColor={Colors.white}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={[{flex: 1}]}>
            <TouchableOpacity
              style={[Gutters.tinyHPadding, Gutters.tinyVPadding]}
              // onPress={drawerMenu.show}
            >
              <Image
                source={Images.menu}
                w={MetricsSizes.regular}
                h={MetricsSizes.regular}
                tintColor={Colors.white}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </Container>
  );
};

export default Header;
