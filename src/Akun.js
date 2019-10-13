import React, { Component } from 'react'
import { View, Text , StyleSheet, Image, ScrollView } from 'react-native'

export default class NestedAkun extends Component{
    static navigationOptions = {
        title: 'Data Diri',
      };
    render(){
        return(
            <ScrollView style={{flex:1}}>
                <Image source={require('../img/skysports-cristiano-ronaldo_4510781.jpg')} style={{width: 200, height: 200, alignSelf:"center", marginTop:10, borderRadius:60, marginBottom:10}} />
                
                <View style={{ marginHorizontal : 20, marginTop:10}}>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Nama</Text>
                        <Text style={styles.isiText}>Fawhmi WAH</Text>
                    </View>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Jenis Kelamin</Text>
                        <Text style={styles.isiText}>Pria</Text>
                    </View>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Tanggal Lahir</Text>
                        <Text style={styles.isiText}>13 Oktober 1985</Text>
                    </View>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Email</Text>
                        <Text style={styles.isiText}>mail.google@gmail.com</Text>
                    </View>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Nomor Ponsel</Text>
                        <Text style={styles.isiText}>0812 1234 1231</Text>
                    </View>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Alamat</Text>
                        <Text style={styles.isiText}>JL. Gang Kecil no.1</Text>
                        <Text style={styles.isiText}>Kel. Rawa Kalong</Text>
                        <Text style={styles.isiText}>Kec. Hutan Bambu</Text>
                        <Text style={styles.isiText}>Prov. Hayalan</Text>
                        <Text style={styles.isiText}>Kode Pos. 12123</Text>
                    </View>
                </View>
                {/* <Text>Halaman Akun</Text>
                <Button 
                    title={"Ke Child Page"}
                    onPress={() => this.props.navigation.navigate('Akun1')}
                    /> */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    marginContent:{
        marginTop:5, 
        marginBottom:5, 
        borderBottomWidth:1
    },
    judulText:{
        fontSize:18, 
        marginBottom:5
    },
    isiText:{fontSize:22, marginBottom:5, paddingLeft:20}
  })