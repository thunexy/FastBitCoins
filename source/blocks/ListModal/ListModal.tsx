import React from 'react';
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
  handleSelection: (value: string) => void;
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
  const [listData, setListData] = useImmer(data);
  const [searchText, setSearchText] = useImmer('');
  const handleSearch = text => {
    setSearchText(text);
    const filteredData = data.filter(item =>
      item[id.text].toLowerCase().includes(text.toLowerCase()),
    );
    setListData(filteredData);
  };
  return (
    <Modal {...(rest as Omit<ModalProps, 'children'>)}>
      <Text align="center" color="black" size="h3" style={header}>
        {headerText}
      </Text>
      <Input
        placeHolder="Search"
        value={searchText}
        onChangeText={handleSearch}
        leftIcon="Search"
      />
      <Box marginTop={10} flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View onStartShouldSetResponder={() => true}>
            <FlatList
              data={listData}
              scrollEnabled={false}
              keyExtractor={(_, index) => `${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable
                    onPress={() => {
                      setSearchText('');
                      setListData(data);
                      handleSelection(item[id.text]);
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
