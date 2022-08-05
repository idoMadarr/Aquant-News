import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// Style
import CloseTabIcon from '../../assets/icons/closeTabIcon.svg';

const messageWidth = Dimensions.get('window').width * 0.85;

const Modal = ({message, closeModal}) => {
  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={closeModal} style={styles.closeContainer}>
        <CloseTabIcon />
      </TouchableOpacity>
      <Text style={styles.title}>{message.status}</Text>
      <Text>{message.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: messageWidth,
    alignSelf: 'center',
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'capitalize',
    paddingTop: 16,
  },
  closeContainer: {
    alignItems: 'center',
  },
});

export default Modal;
