import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Alert, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useImmer} from 'use-immer';
import {LabelledInput, ListModal} from '../../../blocks';
import {signUp} from '../../../lib/api/api';
import {countries} from '../../../lib/contants/countries';
import {states} from '../../../lib/contants/states';
import {createUser, saveLocation} from '../../../redux/actions/authActions';
import {Box, Button, Flex, ScreenWrapper, Text} from '../../../units';
import {style} from './style';
interface Prop {
  navigation: StackNavigationProp<{VerificationScreen: undefined}>;
}
export default function CountryScreen({navigation}: Prop) {
  const [data, updateData] = useImmer({
    countryIndex: null,
    country: '',
    state: '',
    stateIndex: null,
    displayCountryModal: false,
    displayStateModal: false,
  });
  const {instruction} = style;
  const dispatch = useDispatch();
  const {auth} = useSelector(state => state);
  const {
    state,
    country,
    countryIndex,
    stateIndex,
    displayCountryModal,
    displayStateModal,
  } = data;
  const handleButtonPress = async () => {
    dispatch(saveLocation({country: countries[countryIndex!].code, state}));
    signUp(
      {
        ...auth,
        state: states[stateIndex!].code,
        country: countries[countryIndex!].code,
      },
      result => {
        dispatch(createUser(result));
        navigation.navigate('VerificationScreen');
      },
      error => {
        Alert.alert('Error', error.message);
      },
    );
  };
  const handleCountrySelection = index => {
    updateData(draft => {
      draft.displayCountryModal = false;
      draft.country = countries[index].country;
      draft.countryIndex = index;
      draft.state = '';
    });
  };
  const handleStateSelection = index => {
    updateData(draft => {
      draft.displayStateModal = false;
      draft.state = states[index].name;
      draft.stateIndex = index;
    });
  };
  const toggleCountryModal = () => {
    updateData(draft => {
      draft.displayCountryModal = !draft.displayCountryModal;
    });
  };
  const toggleStateModal = () => {
    updateData(draft => {
      draft.displayStateModal = !draft.displayStateModal;
    });
  };
  return (
    <>
      <ScreenWrapper bg="primaryWhite">
        <Flex justifyContent="space-between" marginTop={10}>
          <Box>
            <Text
              align="center"
              color="grey400"
              size="mini"
              style={instruction}>
              Bacon ipsum dolor amet kielbasa filet mignon biltong hamburger
              tri-tip sirloin.
            </Text>
            <Pressable onPress={toggleCountryModal}>
              <LabelledInput
                placeHolder="Select country"
                label="What country do you live in?"
                trackLength={!!country}
                value={country}
                editable={false}
                rightIcon={!country ? 'CaretRight' : undefined}
                pointerEvents="none"
              />
            </Pressable>
            {country === 'United States' && (
              <Pressable onPress={toggleCountryModal}>
                <LabelledInput
                  placeHolder="Select state"
                  label="Which state do you live in?"
                  trackLength={!!state}
                  value={state}
                  rightIcon={!state ? 'CaretRight' : undefined}
                  onFocus={toggleStateModal}
                />
              </Pressable>
            )}
          </Box>
          <Button
            text="Continue"
            disabled={!country || (country === 'United States' && !state)}
            marginBottom={35}
            onPress={handleButtonPress}
          />
        </Flex>
      </ScreenWrapper>
      <ListModal
        data={countries}
        id={{imageUrl: 'imageUrl', text: 'country', value: 'code'}}
        hasImage={true}
        onSwipeComplete={toggleCountryModal}
        handleSelection={handleCountrySelection}
        isVisible={displayCountryModal}
        headerText={'Country'}
      />
      <ListModal
        data={states}
        id={{text: 'name', value: 'name'}}
        onSwipeComplete={toggleStateModal}
        isVisible={displayStateModal}
        handleSelection={handleStateSelection}
        headerText={'State'}
      />
    </>
  );
}
