import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {LabelledInput, ListModal} from '../blocks';
import {countries} from '../lib/contants/countries';
import {states} from '../lib/contants/states';
import {Box, Button, Flex, ScreenWrapper, Text} from '../units';
interface Prop {
  navigation: StackNavigationProp<{VerificationScreen: undefined}>;
}
export default function CountryScreen({navigation}: Prop) {
  return (
    <>
      <ScreenWrapper bg="primaryWhite">
        <Flex justifyContent="space-between" marginTop={10}>
          <Box>
            <Text
              align="center"
              color="grey400"
              size="mini"
              marginHorizontal={24}
              marginBottom={29}>
              Bacon ipsum dolor amet kielbasa filet mignon biltong hamburger
              tri-tip sirloin.
            </Text>
            <LabelledInput
              placeHolder="Select country"
              label="What country do you live in?"
              trackLength={true}
            />
            <LabelledInput
              placeHolder="Select state"
              label="Which state do you live in?"
            />
          </Box>
          <Button
            text="Continue"
            // disabled={true}
            marginTop={35}
            onPress={() => navigation.navigate('VerificationScreen')}
          />
        </Flex>
      </ScreenWrapper>
      <ListModal
        data={countries}
        id={{imageUrl: 'imageUrl', text: 'country'}}
        hasImage={true}
        hideModal={() => {}}
        isVisible={false}
        headerText={'Country'}
      />
      <ListModal
        data={states}
        id={{text: 'name'}}
        hideModal={() => {}}
        isVisible={false}
        headerText={'State'}
      />
    </>
  );
}
