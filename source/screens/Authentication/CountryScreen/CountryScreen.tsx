import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useImmer} from 'use-immer';
import {LabelledInput, ListModal} from '../../../blocks';
import {countries} from '../../../lib/contants/countries';
import {states} from '../../../lib/contants/states';
import {Box, Button, Flex, ScreenWrapper, Text} from '../../../units';
import {style} from '../CountryScreen/style';
interface Prop {
  navigation: StackNavigationProp<{VerificationScreen: undefined}>;
}
export default function CountryScreen({navigation}: Prop) {
  const [country, setCountry] = useImmer('');
  const [state, setState] = useImmer('');
  const [displayCountryModal, setDisplayCountryModal] = useImmer(false);
  const [displayStateModal, setDisplayStateModal] = useImmer(false);
  const {instruction} = style;
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
            <LabelledInput
              placeHolder="Select country"
              label="What country do you live in?"
              editable={false}
              trackLength={!!country}
              value={country}
              rightIcon={!country ? 'CaretRight' : undefined}
              onPressIn={() => setDisplayCountryModal(true)}
            />
            {country === 'United States' && (
              <LabelledInput
                placeHolder="Select state"
                label="Which state do you live in?"
                trackLength={!!state}
                editable={false}
                value={state}
                rightIcon={!state ? 'CaretRight' : undefined}
                onPressIn={() => setDisplayStateModal(true)}
              />
            )}
          </Box>
          <Button
            text="Continue"
            disabled={!country || (country === 'United States' && !state)}
            marginBottom={35}
            onPress={() => navigation.navigate('VerificationScreen')}
          />
        </Flex>
      </ScreenWrapper>
      <ListModal
        data={countries}
        id={{imageUrl: 'imageUrl', text: 'country'}}
        hasImage={true}
        onSwipeComplete={() => setDisplayCountryModal(false)}
        handleSelection={selection => {
          setDisplayCountryModal(false);
          setCountry(selection);
          setState('');
        }}
        isVisible={displayCountryModal}
        headerText={'Country'}
      />
      <ListModal
        data={states}
        id={{text: 'name'}}
        onSwipeComplete={() => setDisplayStateModal(false)}
        isVisible={displayStateModal}
        handleSelection={selection => {
          setDisplayStateModal(false);
          setState(selection);
        }}
        headerText={'State'}
      />
    </>
  );
}
