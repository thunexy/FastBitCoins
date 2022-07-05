import React from 'react';
import {useEffect} from 'react';
import {FlatList, Image, Pressable, ScrollView, View} from 'react-native';
import {ModalProps} from 'react-native-modal';
import {useImmer} from 'use-immer';
import {Box, Input, Modal, Text} from '../../units';
import {style} from './style';

type Input = Record<string, string>;
interface Props {
  data: Input[];
  id: Input;
  headerText: string;
  hasImage?: boolean;
  isVisible: boolean;
  handleSelection: (value: number) => void;
}
export const ListModal: React.FC<Props & Partial<ModalProps>> = ({
  data,
  hasImage = false,
  id,
  headerText,
  handleSelection,
  ...rest
}) => {
  const {wrapper, image, header, textWithImage, text} = style;
  const [state, setState] = useImmer({
    listData: data,
    searchText: '',
  });
  const handleSearch = text => {
    const filteredData = data.filter(item =>
      item[id.text].toLowerCase().includes(text.toLowerCase()),
    );
    setState(draft => {
      draft.searchText = text;
      draft.listData = filteredData;
    });
  };
  useEffect(() => {
    if (rest.isVisible) {
      setState(draft => {
        draft.searchText = '';
        draft.listData = data;
      });
    }
  }, [rest.isVisible]);
  return (
    <Modal {...(rest as Omit<ModalProps, 'children'>)}>
      <Text align="center" color="black" size="h3" style={header}>
        {headerText}
      </Text>
      <Input
        placeHolder="Search"
        value={state.searchText}
        onChangeText={handleSearch}
        leftIcon="Search"
        trackLength
      />
      <Box marginTop={10} flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View onStartShouldSetResponder={() => true}>
            <FlatList
              data={state.listData}
              scrollEnabled={false}
              keyExtractor={(_, index) => `${index}`}
              renderItem={({item, index}) => {
                return (
                  <Pressable
                    onPress={() => {
                      const i = data.findIndex(
                        obj => obj[id.text] === item[id.text],
                      );
                      handleSelection(i);
                    }}>
                    <Box {...wrapper}>
                      {hasImage ? (
                        <Image
                          style={image}
                          source={{uri: item[id.imageUrl]}}
                        />
                      ) : null}
                      <Text
                        size="h4"
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={hasImage ? textWithImage : text}
                        color="primaryBlack">
                        {item[id.text]}
                      </Text>
                    </Box>
                  </Pressable>
                );
              }}
            />
          </View>
        </ScrollView>
      </Box>
    </Modal>
  );
};
