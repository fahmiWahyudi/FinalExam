import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'

export default class ProdukFutsal extends Component{
    static navigationOptions = {
        title: 'Futsal',
    };
    render(){
        return(
            <ScrollView style={{ flex:1 }}>
                {/* PRODUK FAVORIT */}
                <View style={{ marginTop: 20, marginHorizontal:16 }}>
                    <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{ fontSize: 17, fontWeight:"bold"}}>Futsal</Text>
                    </View>

                    <View style={{ flexDirection:"row", flexWrap:"wrap", marginTop:10}}>
                        <View style={{ flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", width:"100%", marginBottom:20 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailProduk')}>
                                <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                    <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                        <Image source={require('../img/Produk/IMG_9631-300x300.jpg')} style={{ width:120, height:120}}/>
                                    </View>
                                    <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL NIKE VENOM CLUB IN – BLACK REVOLT</Text>
                                    <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 635.000</Text>
                                    
                                </View>
                            </TouchableOpacity>

                            <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/IMG_9488-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL ORTUSEIGHT HORIZON FLUO GREEN</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 228.000</Text>
                                
                            </View>
                        </View>

                        <View style={{ flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", width:"100%", marginBottom:20 }}>
                            <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/IMG_9047-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL SPECS BARRICADA GENOA 19 IN TULIP BLUE</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 315.000</Text>
                                
                            </View>

                            <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/IMG_8400-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL ORTUSEIGHT CATALYST MERCURY IN CAPPUCINO WHITE</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 509.000</Text>
                                
                            </View>
                        </View>

                        <View style={{ flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", width:"100%", marginBottom:20 }}>
                            <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/X-MUNICH-ROYAL-BLACK-2-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL X MUNICH ONE IND ROYAL BLACK</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 339.000</Text>
                                
                            </View>

                            <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/IMG_5618-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL ADIDAS NEMEZIZ 19.3 IN CORE BLACK</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 635.000</Text>
                                    
                            </View>
                        </View>

                        <View style={{ flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", width:"100%", marginBottom:20 }}>
                            <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/Pan-Vigor-7.1-LTD-Pink-Blue-1-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>PAN VIGOR 7.1 LTD PINK</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 770.000</Text>
                                
                            </View>

                            <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/Basara-103-IN-Peacoat-Silver-1-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>Mizuno Basara 103 IN Peacoat Silver</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 525.000</Text>
                                    
                            </View>
                        </View>

                        <View style={{ flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", width:"100%", marginBottom:20 }}>
                            <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/Umbro-STREET-V-BLACK-GREEN-Murah-2-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>Sepatu Futsal Umbro STREET V BLACK GREEN</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 463.000</Text>
                                
                            </View>

                            <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/Lotto-Veloce-FG-Bright-Peach-Murah-1-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>Lotto SPARK IN BEAT ORANGE BLACK</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 620.000</Text>
                                    
                            </View>
                        </View>

                    </View>
                </View>
                
            </ScrollView>
        )
    }
}