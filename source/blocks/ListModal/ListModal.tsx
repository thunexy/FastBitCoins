import React from 'react';
import {FlatList, Image, ScrollView, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Box, Input, Modal, Text} from '../../units';
import {style} from './style';

type Input = Record<string, string>;
interface ModalProps {
  data: Input[];
  id: Input;
  headerText: string;
  hasImage?: boolean;
  isVisible: boolean;
  hideModal: () => void;
}
export const ListModal: React.FC<ModalProps> = ({
  data,
  hasImage = false,
  id,
  isVisible,
  headerText,
}) => {
  const {wrapper, image, header} = style;
  return (
    <Modal isVisible={isVisible} hideModal={() => {}}>
      <Text {...header} size="h3" color="black" align="center">
        {headerText}
      </Text>
      <Input placeHolder="Search" />
      <Box marginTop={8} flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View onStartShouldSetResponder={() => true}>
            <FlatList
              data={data}
              scrollEnabled={false}
              keyExtractor={(_, index) => `${index}`}
              renderItem={({item}) => {
                return (
                  <Box {...wrapper}>
                    {hasImage ? (
                      <Image style={image} source={{uri: item[id.imageUrl]}} />
                    ) : null}
                    <Text
                      size="h3"
                      lineHeight={30}
                      marginLeft={hasImage ? 12 : 0}
                      color="primaryBlack">
                      {item[id.text]}
                    </Text>
                  </Box>
                );
              }}
            />
          </View>
        </ScrollView>
      </Box>
    </Modal>
  );
};
