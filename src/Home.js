import React, { Component } from 'react'
import { View, Text, Button, TextInput, Image, ScrollView, TouchableHighlight  } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Icon_search from 'react-native-vector-icons/Ionicons'

export default class Home extends Component{
    render(){
        return(
            <ScrollView>
                <View style={{ flex:1 }}>
                {/* PENCARIAN */}
                <View style={{ backgroundColor:"white", marginHorizontal:16, flexDirection:"row", marginTop:7}}>
                    <TextInput style={{ height:40, borderRadius:50, borderWidth:2, flex:1, paddingLeft:40, fontSize:18, paddingRight:15}}/>
                    <Icon name='ticket' size={35} style={{ marginLeft:10, marginTop:3 }}/>
                </View>
                <View style={{ position:"absolute", paddingTop:10, paddingLeft:25 }}>
                    <Icon_search name="md-search" size={35} />
                </View>

                {/* KATEGORI PRODUK */}
                <View style={{ marginTop:15, marginHorizontal:16}}>
                    <View>
                        <Text style={{ fontSize:17, fontWeight:"bold" }}>Kategori</Text>
                    </View>
                    <View style={{ flexDirection:"row", flexWrap:"wrap", marginTop:10}}>
                        <View style={{ flexDirection:"row", justifyContent:"space-between", width:"100%", marginBottom:18 }}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProdukFutsal')}>
                                <View>
                                    <View style={{ width:58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/ic-futsal.png')} style={{ width:58, height:58}}/>
                                    </View>
                                    <Text style={{ fontSize:11, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>FUTSAL</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProdukFutsal')}>
                                <View>
                                    <View style={{ width:58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/ic-football.png')} style={{ width:58, height:58}}/>
                                    </View>
                                    <Text style={{ fontSize:11, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>FOOTBALL</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProdukFutsal')}>
                                <View>
                                    <View style={{ width:58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/ic-sneakers.png')} style={{ width:58, height:58}}/>
                                    </View>
                                    <Text style={{ fontSize:11, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>SNEAKERS</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProdukFutsal')}>
                                <View>
                                    <View style={{ width:58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/ic-running.png')} style={{ width:58, height:58}}/>
                                    </View>
                                    <Text style={{ fontSize:11, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>RUNNING</Text>
                                </View>
                            </TouchableHighlight>                            
                        </View>
                        <View style={{ flexDirection:"row", justifyContent:"flex-start", width:"100%" }}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProdukFutsal')}>
                                <View>
                                    <View style={{ width:58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('../img/ic-accessories.png')} style={{ width:58, height:58}}/>
                                    </View>
                                    <Text style={{ fontSize:11, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>ACCESSORIES</Text>
                                </View>
                            </TouchableHighlight>                            
                        </View>

                    </View>
                </View>
                
                {/* PRODUK FAVORIT */}
                <View style={{ marginTop: 20, marginHorizontal:16 }}>
                    <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{ fontSize: 17, fontWeight:"bold"}}>Favorit</Text>
                    </View>

                    <View style={{ flexDirection:"row", flexWrap:"wrap", marginTop:10}}>
                        <View style={{ flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", width:"100%", marginBottom:20 }}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                                <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white"}}>
                                    <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                        <Image source={require('../img/Produk/IMG_9634-300x300.jpg')} style={{ width:120, height:120}}/>
                                    </View>
                                    <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL NIKE VENOM ACDMY IN – REVOLT</Text>
                                    <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 955.000</Text>
                                    
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                                <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white"}}>
                                    <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                        <Image source={require('../img/Produk/IMG_9047-300x300.jpg')} style={{ width:120, height:120}}/>
                                    </View>
                                    <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL SPECS BARRICADA GENOA 19 IN TULIP BLUE</Text>
                                    <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 315.000</Text>
                                    
                                </View>
                            </TouchableHighlight>
                            
                        </View>

                        <View style={{ flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", width:"100%", marginBottom:20 }}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                                <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white"}}>
                                    <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                        <Image source={require('../img/Produk/IMG_9475-300x300.jpg')} style={{ width:120, height:120}}/>
                                    </View>
                                    <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU CASUAL 910 RYUKI HITAM PUTIH</Text>
                                    <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 315.000</Text>
                                    
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                                <View style={{ width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white"}}>
                                    <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                        <Image source={require('../img/Produk/IMG_9626-300x300.jpg')} style={{ width:120, height:120}}/>
                                    </View>
                                    <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU BOLA NIKE VENOM CLUB FG – BLACK REVOLT</Text>
                                    <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 635.000</Text>
                                    
                                </View>
                            </TouchableHighlight>
                            
                        </View>
                    </View>
                </View>
                
                
                {/* PRODUK FUTSAL */}
                <View style={{ marginTop: 20, marginHorizontal:16 }}>
                    <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{ fontSize: 17, fontWeight:"bold"}}>Sepatu Futsal</Text>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProdukFutsal')}>
                            <Text style={{ fontSize: 17, color:"#6dab3c"}}>Semua >></Text>
                        </TouchableHighlight>
                    </View>

                    <ScrollView horizontal={true} style={{ flexDirection:"row", marginTop:10}}>
                        
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/IMG_9631-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL NIKE VENOM CLUB IN – BLACK REVOLT</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 635.000</Text>
                                
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>

                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/IMG_9488-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL ORTUSEIGHT HORIZON FLUO GREEN</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 228.000</Text>
                                
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/IMG_9047-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL SPECS BARRICADA GENOA 19 IN TULIP BLUE</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 315.000</Text>
                                
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/IMG_8400-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL ORTUSEIGHT CATALYST MERCURY IN CAPPUCINO WHITE</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 509.000</Text>
                                
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/X-MUNICH-ROYAL-BLACK-2-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL X MUNICH ONE IND ROYAL BLACK</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 339.000</Text>
                                
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/IMG_5618-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU FUTSAL ADIDAS NEMEZIZ 19.3 IN CORE BLACK</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 635.000</Text>
                                    
                            </View>
                        </TouchableHighlight>                        
                    </ScrollView>
                </View>
                
                {/* PRODUK FOOTBALL */}
                <View style={{ marginTop: 20, marginHorizontal:16 }}>
                    <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{ fontSize: 17, fontWeight:"bold"}}>Sepatu Sepak Bola</Text>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProdukFutsal')}>
                            <Text style={{ fontSize: 17, color:"#6dab3c"}}>Semua >></Text>
                        </TouchableHighlight>
                    </View>

                    <ScrollView horizontal={true} style={{ flexDirection:"row", marginTop:10}}>
                        
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/IMG_5474-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU BOLA SPECS ACC LIGHTSPEED REBORN FG ARTILERY GREEN</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 439.000</Text>
                                
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/Ortuseight-MIRAGE-FG-BLACK-WHITE-ORTRANGE-Murah-1-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU SEPAKBOLA ORTUSEIGHT MIRAGE FG BLACK WHITE ORTRANGE</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 210.000</Text>
                                
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/Lotto-Veloce-FG-Bright-Peach-Murah-1-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>Lotto Veloce FG Bright Peach</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 299.700</Text>
                                
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/Adidas-Predator-18.3-FG-Black-White-Murah-1-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>Adidas Predator 18.3 FG Black White</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 650.000</Text>
                                
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/IMG_4785-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>SEPATU BOLA MOJAVE 19 FG COOL GREEN</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 343.000</Text>
                                
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailProduk')}>
                            <View style={{ marginTop:10, width:170, height:200, borderWidth:1, borderColor:"#EFEFEF", borderRadius:10, backgroundColor:"white", marginRight:15}}>
                                <View style={{ justifyContent:"center", alignItems:"center", height:120, width:"100%" }}>
                                    <Image source={require('../img/Produk/Copa-18.3-FG-7-300x300.jpg')} style={{ width:120, height:120}}/>
                                </View>
                                <Text style={{paddingLeft:10, fontSize:10, marginTop:5, flex:1}}>Adidas Copa 18.3 FG Uniink Hirgr</Text>
                                <Text style={{paddingLeft:10, fontSize:14, marginTop:5, height:25, width:"100%", textAlign:"right", paddingRight:20, color:"#f4a51c"}}>Rp. 450.000</Text>
                                
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
                
                {/* <Text>Halaman Home</Text> */}
                {/* <Button 
                    title={"Detail"}
                    onPress={() => this.props.navigation.navigate('ProdukFutsal')}
                    /> */}
            </View>
            </ScrollView>
        )
    }
}