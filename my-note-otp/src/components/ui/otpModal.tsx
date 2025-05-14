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

type OtpProps = {
  visible: boolean;
  onClose: () => void;
  onVerify: () => void;
  otp: string;
  onChangeOtp: (text: string) => void;
  isSuccess?: boolean;
};

const OtpModal: React.FC<OtpProps> = ({
  visible,
  onClose,
  onVerify,
  otp,
  onChangeOtp,
  isSuccess = false,
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
            <Text style={styles.title}>OTP</Text>
            
            {!isSuccess ? (
              <>
                <TextInput
                  style={styles.otpInput}
                  placeholder="Enter OTP"
                  value={otp}
                  onChangeText={onChangeOtp}
                  keyboardType="numeric"
                  maxLength={6}
                />
                
                <View style={styles.buttonContainer}>
                  <Button 
                    title="Verify OTP" 
                    onPress={onVerify} 
                    color="#3F7A8D"
                  />
                </View>
              </>
            ) : (
              <View style={styles.successContainer}>
                <Text style={styles.successText}>Confirm Success Saved</Text>
                <View style={styles.buttonContainer}>
                  <Button 
                    title="Close" 
                    onPress={onClose} 
                    color="#3F7A8D"
                  />
                </View>
              </View>
            )}
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
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3F7A8D',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#3F7A8D',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    width: '100%',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  successContainer: {
    alignItems: 'center',
    width: '100%',
  },
  successText: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default OtpModal;