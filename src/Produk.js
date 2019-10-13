import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

export default class Produk extends Component{
    static navigationOptions = {
        title: '',
      };
    render(){
        return(
            <ScrollView style={{ flex:1 }}>
                 {/* KATEGORI PRODUK */}
                <View style={{ marginTop:15, marginHorizontal:16}}>
                    <View>
                        <Text style={{ fontSize:17, fontWeight:"bold" }}>Brand</Text>
                    </View>
                    <View style={{ flexDirection:"row", flexWrap:"wrap", marginTop:10}}>
                        <View style={{ flexDirection:"row", justifyContent:"space-between", width:"100%", marginBottom:18 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/910.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>910</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/Adidas.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Adidas</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/Airwalk.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Airwalk</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/converse.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Converse</Text>
                                </View>
                            </TouchableOpacity> 
                        </View>
                        <View style={{ flexDirection:"row", justifyContent:"space-between", width:"100%", marginBottom:18 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/loto.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Loto</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/diadora.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Diadora</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/eagle.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Eagle</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/Mizuno.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Mizuno</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection:"row", justifyContent:"space-between", width:"100%", marginBottom:18 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/New-Balance.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>New-Balance</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/Nike.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Nike</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/ortus-eight.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Ortus Eight</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/PAN.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>PAN</Text>
                                </View>
                            </TouchableOpacity>                            
                        </View>
                        <View style={{ flexDirection:"row", justifyContent:"space-between", width:"100%", marginBottom:18 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/Piero.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Piero</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/reebok.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Reebok</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/skechers.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Skechers</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/Specs.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Specs</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection:"row", justifyContent:"flex-start", width:"100%" }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('BrandProdukNineTen')}>
                                <View>
                                    <View style={{ width:90, height:90, borderWidth:0, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/brand/wakai.png')} style={{ width:90, height:90}}/>
                                    </View>
                                    <Text style={{ fontSize:14, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Wakai</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                
                {/* <Text>Halaman Kategori</Text>
                <Button 
                    title={"Ke Child Page"}
                    onPress={() => this.props.navigation.navigate('Kategori1')}
                    /> */}
            </ScrollView>
        )
    }
}