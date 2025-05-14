import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';

type SecretModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: () => void;
  name: string;
  secret: string;
  onChangeName: (text: string) => void;
  onChangeSecret: (text: string) => void;
};

const SecretModal: React.FC<SecretModalProps> = ({
  visible,
  onClose,
  onSave,
  name,
  secret,
  onChangeName,
  onChangeSecret,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackdrop}>
        <TouchableOpacity 
          style={styles.touchableBackdrop}
          activeOpacity={1}
          onPress={onClose}
        />
        
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Name Secret"
              value={name}
              onChangeText={onChangeName}
            />
            <TextInput
              placeholder="The Secret"
              style={styles.textArea}
              multiline
              numberOfLines={10}
              value={secret}
              onChangeText={onChangeSecret}
            />

            <View style={styles.boxtAnt}>
              <View style={styles.boxTitleAnt}>
                <Text style={{ color: 'red', textAlign: 'center' }}>Attention!!</Text>
              </View>
              <Text style={{ fontSize: 12, margin: 2, color: '#3F7A8D' }}>
                To unlock your secret, we will send an OTP code to your registered Gmail account.
              </Text>
            </View>

            <Button title="Save Secret"  />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'relative',
  },
  touchableBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 350,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3F7A8D',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  textArea: {
    height: 100,           
    textAlignVertical: 'top',  
    borderColor: '#3F7A8D',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  boxtAnt: {
    borderColor: '#FFBFAB',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
  },
  boxTitleAnt: {
    backgroundColor: '#FFBFAB',
    padding: 5,
  }
});

export default SecretModal;