import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useState } from 'react';
import Board01 from '../../components/boarding/board1';
import Board02 from '../../components/boarding/board2';
import Board03 from '../../components/boarding/board3';
import { useNavigation } from '@react-navigation/native';
export default function BoardingPage() {
     const [activePage, setActive] = useState(0);
     const navigation = useNavigation();
     return (
          <View style={styles.container}>
               <PagerView style={styles.container} initialPage={0} onPageSelected={(e) => setActive(e.nativeEvent.position)}>
                    <View style={styles.page} key="1">
                         <View style={styles.boxTitle}>
                              <Text style={styles.title}>
                                   Catat dengan Mudah!
                              </Text>
                              <Text style={styles.desc}>
                                   Simpan ide dan inspirasimu kapan saja.
                              </Text>
                         </View>
                         <Board01 />
                    </View>
                    <View style={styles.page} key="2">
                         <View style={styles.boxTitle}>
                              <Text style={styles.title}>
                                   Produktivitas Maksimal!
                              </Text>
                              <Text style={styles.desc}>
                                   Kelola dan akses catatan dengan cepat dan efisien.
                              </Text>
                         </View>
                         <Board02 />
                    </View>
                    <View style={styles.page} key="3">
                         <View style={styles.boxTitle}>
                              <Text style={styles.title}>
                                   Rahasia Terjaga!
                              </Text>
                              <Text style={styles.desc}>
                                   Amankan catatan penting dengan perlindungan ekstra.
                              </Text>
                         </View>
                         <Board03 />
                    </View>
               </PagerView>
               <View style={styles.dotsContainer}>
                    {[0, 1, 2].map((i) => (
                         <View
                              key={i}
                              style={[styles.dot,
                              activePage === i ? styles.activeDot : styles.inactiveDot
                              ]}
                         />
                    ))}
               </View>
               <View>
                    <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Home')} >
                         <Text style={styles.txtLogin}>
                              Masuk dengan Google
                         </Text>
                    </TouchableOpacity>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     page: {
          alignItems: 'center',
     },
     dot: {
          width: 19,
          height: 19,
          borderRadius: 25,
          marginHorizontal: 4
     },
     activeDot: {
          backgroundColor: '#014E60',
          width: 19,
     },
     inactiveDot: {
          backgroundColor: '#ccc',
     },
     dotsContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 230,
          left: 0,
          right: 0,
     },

     btnLogin: {
          backgroundColor: '#019B98',
          marginRight: 35,
          marginLeft: 35,
          height: 57,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 35,
          bottom: 100
     },
     txtLogin: {
          fontSize: 16,
          color: '#ffffff',
          fontWeight: '500'
     },
     boxTitle: {
          top: 80
     },
     title: {
          color: '#014E60',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center'
     },
     desc: {
          color: '#014E60',
          fontSize: 13,
          textAlign: 'center'
     }

});
