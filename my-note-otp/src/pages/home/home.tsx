import React, { useState } from 'react'
import { Button, Image, Modal, RefreshControl, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SearchIcon from '../../components/icon/searchIcon'
import LockIcon from '../../components/icon/lockIcon'
import { Ionicons } from '@expo/vector-icons';
import SecretModal from '../../components/ui/secretModal';
import NotesModal from '../../components/ui/notesModal';
import OtpModal from '../../components/ui/otpModal';

export default function HomePage() {
     const [showButtons, setShowButtons] = useState(false);
     const [isModalVisible, setIsModalVisible] = useState(false);
     const [isNotes, setNotesModal] = useState(false);
     const [isOtp, setOtpModal] = useState(false);
     const [name, setName] = useState('');
     const [secret, setSecret] = useState('');
     const [otp, setOtp] = useState('');
     const [isOtpVerified, setIsOtpVerified] = useState(false);
     const handelSecret = () => {
          setIsModalVisible(true)

     }
     const handleNotes = () => {
          setNotesModal(true)
     }
     const handleOtp = () => {
          setOtpModal(true)
     }
     return (
          <View style={styles.container}>
               <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}
                    refreshControl={
                         <RefreshControl
                              refreshing={false}
                              onRefresh={() => console.log('refreshing')}
                              tintColor="#019B98"
                         />
                    }
               >

                    {/* Content Header  */}
                    <View style={styles.boxHead}>
                         <View style={styles.boxLeft}>
                              <View>
                                   <Image source={require('../../../assets/icon.png')} style={styles.imgProfile} />
                              </View>
                              <View style={{ marginLeft: 10 }}>
                                   <Text style={styles.txtName}>Edward Tua Panjaitan</Text>
                                   <Text style={styles.txtInfo}>CEO TmC</Text>
                              </View>
                         </View>
                         <View>
                              <TouchableOpacity style={styles.btnSearch}>
                                   <SearchIcon />
                                   <Text>Search</Text>
                              </TouchableOpacity>
                         </View>
                    </View>

                    {/* Content Card Notes */}
                    <View style={styles.cardMy}>
                         <View style={styles.boxMy}>
                              <Text style={styles.txtMy}>My Secrect</Text>
                              <View style={styles.boxSct}>
                                   <Text style={styles.txtBox}>12 secret &nbsp;</Text>
                                   <LockIcon />
                              </View>
                         </View>
                         <View style={styles.boxMy}>
                              <Text style={styles.txtMy}>My Notes</Text>
                              <View style={styles.boxInfo}>
                                   <View>
                                        <Text style={styles.txtBox}>12 Taks</Text>
                                        {/* icon  */}
                                   </View>
                                   <View>
                                        <Text style={styles.txtBox}>23 Done</Text>
                                        {/* icon  */}
                                   </View>
                              </View>
                         </View>
                    </View>

                    {/* Content Secret  */}
                    <Text style={styles.titleSecret}>The Secret</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                         {Array.from({ length: 4 }).map((_, index) => (
                              <View style={styles.cardSct}>
                                   <Text style={styles.titleSct}>Bybit Account</Text>
                                   <Text style={styles.dateSct}>2025/05/14</Text>
                                   <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 50 }}>
                                        <TouchableOpacity style={styles.btnOpen} onPress={handleOtp}>
                                             <Text style={{ color: '#ffffff' }}>Open</Text>
                                             <LockIcon iconColor='#014E60' width={20} height={20} />
                                        </TouchableOpacity>
                                   </View>
                              </View>
                         ))}
                    </ScrollView>

                    {/* Content Notes  */}
                    <Text style={styles.titleSecret}>The Notes</Text>
                    {Array.from({ length: 4 }).map((_, index) => (
                         <View style={styles.cardNotes}>
                              <Text style={styles.titleNotes}>Entry Data Monthly</Text>
                              <Text style={styles.descNotes}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                   <Text style={styles.dateNotes}> Due date : 12/04/2025</Text>
                                   <TouchableOpacity>
                                        {/* icon  */}
                                   </TouchableOpacity>
                              </View>
                              <View style={styles.statusNotes}>
                                   <Text style={{ textAlign: 'center', color: '#ffffff' }}>Ongoing</Text>
                              </View>
                         </View>
                    ))}



               </ScrollView >
               {showButtons && (
                    <View style={styles.subButtons}>
                         <TouchableOpacity style={styles.smallButton} onPress={handleNotes}>
                              <Ionicons name="add" size={20} color="white" />
                              <Text style={styles.btnText}>Add Notes</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.smallButton} onPress={handelSecret}>
                              <Ionicons name="add" size={20} color="white" />
                              <Text style={styles.btnText}>Add Secret</Text>
                         </TouchableOpacity>
                    </View>
               )}

               <TouchableOpacity
                    style={styles.fab}
                    onPress={() => setShowButtons(!showButtons)}
               >
                    <Ionicons name={showButtons ? "close" : "menu"} size={24} color="white" />
               </TouchableOpacity>

               {/* modal  */}
               <SecretModal
                    visible={isModalVisible}
                    onClose={() => setIsModalVisible(false)}
                    name={name}
                    secret={secret}
                    onChangeName={setName}
                    onChangeSecret={setSecret} onSave={function (): void {
                         throw new Error('Function not implemented.');
                    }} />
               <NotesModal
                    visible={isNotes}
                    onClose={() => setNotesModal(false)}
                    name={name}
                    onChangeName={setName} onSave={function (): void {
                         throw new Error('Function not implemented.');
                    }} onChangeNotes={function (text: string): void {
                         throw new Error('Function not implemented.');
                    }} notes={''} />

               <OtpModal
                    visible={isOtp}
                    onClose={() => {
                         setOtpModal(false);
                         setIsOtpVerified(false);
                         setOtp('');
                    }}
                    onVerify={handleOtp}
                    otp={otp}
                    onChangeOtp={setOtp}
                    isSuccess={isOtpVerified}
               />

          </View >
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 20,
          backgroundColor: '#f5f5f5',
          marginTop: 15
     },
     boxHead: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
     },
     boxLeft: {
          flexDirection: 'row',
          alignItems: 'center',
     },
     txtName: {
          color: '#014E60',
          fontWeight: 'bold',
          fontSize: 16,
     },
     txtInfo: {
          color: '#014E60',
          fontWeight: '500',
          fontSize: 12,
          opacity: 0.8,
     },
     btnSearch: {
          backgroundColor: '#f0f0f0',
          paddingHorizontal: 15,
          paddingVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 25,
          elevation: 2,
     },
     imgProfile: {
          width: 50,
          height: 50,
          borderRadius: 25,
          borderWidth: 2,
          borderColor: '#019B98',
     },
     cardMy: {
          backgroundColor: '#019B98',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          borderRadius: 15,
          height: 120,
          marginTop: 30,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
     },
     boxMy: {
          borderColor: 'rgba(255, 255, 255, 0.3)',
          borderWidth: 1,
          width: '48%',
          borderRadius: 10,
          padding: 12,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
     },
     txtMy: {
          fontWeight: 'bold',
          fontSize: 16,
          color: '#ffffff',
          marginBottom: 8,
     },
     txtBox: {
          fontSize: 12,
          color: '#ffffff',
          opacity: 0.9,
     },
     boxInfo: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
     },
     boxSct: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center'
     },
     titleSecret: {
          color: '#014E60',
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 30,
          marginBottom: 15,
     },
     cardSct: {
          backgroundColor: '#014E60',
          width: 150,
          height: 180,
          borderRadius: 15,
          padding: 15,
          marginRight: 10,
          elevation: 3,
     },
     titleSct: {
          color: '#ffffff',
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 5,
     },
     dateSct: {
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: 12,
     },
     btnOpen: {
          borderColor: '#ffffff',
          borderWidth: 1,
          flexDirection: 'row',
          padding: 8,
          borderRadius: 20,
          width: 80,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
     },
     cardNotes: {
          backgroundColor: '#ffffff',
          borderRadius: 15,
          padding: 15,
          marginBottom: 15,
          elevation: 2,
     },
     titleNotes: {
          color: '#014E60',
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 5,
     },
     descNotes: {
          color: '#3F7A8D',
          fontSize: 14,
          lineHeight: 20,
          marginBottom: 10,
     },
     dateNotes: {
          color: '#3F7A8D',
          fontSize: 12,
     },
     statusNotes: {
          position: 'absolute',
          right: 0,
          top: 0,
          width: 100,
          backgroundColor: '#019B98',
          borderBottomLeftRadius: 15,
          borderTopRightRadius: 15,
          padding: 8,
          alignItems: 'center',
     },
     fab: {
          backgroundColor: '#019B98',
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 8,
          position: 'absolute',
          right: 20,
          bottom: 320,
     },
     subButtons: {
          position: 'absolute',
          bottom: 400,
          right: 20,
          zIndex: 999,
          alignItems: 'flex-end',
     },
     smallButton: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#019B98',
          paddingVertical: 12,
          paddingHorizontal: 15,
          borderRadius: 25,
          marginBottom: 10,
          elevation: 3,
     },
     btnText: {
          color: 'white',
          marginLeft: 8,
          fontSize: 14,
     },


});