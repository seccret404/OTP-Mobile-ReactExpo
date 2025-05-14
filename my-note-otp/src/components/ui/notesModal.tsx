import React, { useState } from 'react';
import {
     Modal,
     View,
     Text,
     TextInput,
     TouchableOpacity,
     Button,
     StyleSheet,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type NotesProps = {
     visible: boolean;
     onClose: () => void;
     onSave: () => void;
     name: string;
     notes: string;
     onChangeName: (text: string) => void;
     onChangeNotes: (text: string) => void;
};

const NotesModal: React.FC<NotesProps> = ({
     visible,
     onClose,
     onSave,
     name,
     notes,
     onChangeName,
     onChangeNotes,
}) => {

     const [date, setDate] = useState<Date | null>(null);
     const [isPickerVisible, setPickerVisible] = useState(false);

     const showPicker = () => setPickerVisible(true);
     const hidePicker = () => setPickerVisible(false);

     const handleConfirm = (selectedDate: Date) => {
          setDate(selectedDate);
          hidePicker();
     };

     const formattedDate = date
          ? date.toLocaleDateString('en-GB') // Format dd/mm/yyyy
          : '';
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
                                   placeholder="Name Notes"
                                   value={name}
                                   onChangeText={onChangeName}
                              />
                              <TextInput
                                   placeholder="The Notes"
                                   style={styles.textArea}
                                   multiline
                                   numberOfLines={10}
                                   value={notes}
                                   onChangeText={onChangeNotes}
                              />
                              <TouchableOpacity onPress={showPicker}>
                                   <TextInput
                                        style={styles.input}
                                        placeholder="Ser Due Date"
                                        value={formattedDate}
                                        editable={false}
                                        pointerEvents="none"
                                   />
                              </TouchableOpacity>

                              <DateTimePickerModal
                                   isVisible={isPickerVisible}
                                   mode="date"
                                   onConfirm={handleConfirm}
                                   onCancel={hidePicker}
                              />

                              <Button title="Save Notes" />
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

});

export default NotesModal;