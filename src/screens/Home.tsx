import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import colors from '../config/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Font from 'expo-font';

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                await Font.loadAsync({
                    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
                    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
                    'Poppins-Semibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
                    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
                });
            } catch (error) {
                console.error('Error loading fonts:', error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    if (isLoading) {
        return null;
      }

    return (
        <SafeAreaView style={{ backgroundColor: colors.blue_primary}}>
            <View style={styles.header}>
                <View style={styles.profile}>
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center",  }}>
                            <Image source={require('../../assets/images/icons8-person-94.png')} style={{ width: 34, height: 34, backgroundColor: colors.white, borderRadius: 120 }} />
                        </View>
                        <View style={{ paddingLeft: 12 }}>
                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: "Poppins-Semibold" }}>Arthur Edward</Text>
                            <Text style={{ color: colors.white, fontSize: 14 }}>Let's save your money today</Text>
                        </View>
                    </View>
                    <View>
                        <MaterialIcons name="notifications" size={25} color="white" />
                    </View>
                </View>
            </View>
            <View style={{ height: "100%", backgroundColor: colors.white, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                {renderUserBalance()}
                <View>
                    {renderService()}
                </View>
                <View>
                    {recipient()}
                </View>
                <View>{rewardService()}</View>
            </View>
        </SafeAreaView>
    )
}

const renderUserBalance = () => {
    return (
        <View style={styles.actions}>
            <View style={{ backgroundColor: colors.white, width: 380, height: 170, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.3, shadowRadius: 7, padding: 15 }}>
                <View style={{ height: "40%", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  borderBottomWidth: 0.6, borderColor: "#6e6e82", paddingBottom: 12 }}>
                    <View>
                        <Text style={{ color: "#787878", fontSize: 14, fontFamily: "Poppins-Medium" }}>Your Balance:</Text>
                        <Text>GHS 3,466.9</Text>
                    </View>
                    <View style={{ borderWidth: 0.6, borderColor: "#6e6e82", height: 45 }}></View>
                    <View style={{ height: 45 }}>
                        <Text style={{ flexDirection: "row", justifyContent: "flex-end", color: "#787878", fontSize: 14, fontFamily: "Poppins-Medium" }}>Reward</Text>
                        <Text>307 Points</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 18, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <View style={styles.action}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", borderColor: "#6e6e82", borderRadius: 150, borderWidth: 2, width: 25, height: 25 }}>
                            <MaterialIcons name="attach-money" size={22} color="#6e6e82" style={{ alignSelf: "center"}}  />
                        </View>
                        <Text style={{ textAlign: "center", alignItems: "center", justifyContent: "center", paddingTop: 10, color: "#232440" }}>Transfer</Text>
                    </View>
                    <View style={styles.action}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: 30, height: 30 }}>
                            <Image source={require("../../assets/images/icons8-wallet-24.png")} style={{ width: 30, height: 30 }} />
                        </View>
                        <Text style={{ textAlign: "center", alignItems: "center", justifyContent: "center", paddingTop: 10, color: "#232440" }}>Top up</Text>
                    </View>
                    <View style={styles.action}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: 30, height: 30 }}>
                            <Image source={require("../../assets/images/icons8-bank-cards-50.png")} style={{ width: 30, height: 30 }} />
                        </View>
                        <Text style={{ textAlign: "center", alignItems: "center", justifyContent: "center", paddingTop: 10, color: "#232440" }}>Card</Text>
                    </View>
                    <View style={styles.action}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: 30, height: 30 }}>
                            <Image source={require("../../assets/images/icons8-qr-code-48.png")} style={{ width: 30, height: 30 }} />
                        </View>
                        <Text style={{ textAlign: "center", alignItems: "center", justifyContent: "center", paddingTop: 10, color: "#232440" }}>Scan QR</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const renderService = () => {
    return (
        <View style={{ paddingHorizontal: 19, position: "relative", bottom: 34 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 10 }}>
                <Text style={{ fontSize: 23, fontWeight: "bold", color: "#232440" }}>Services</Text>
                <Text style={{ fontSize: 14, color: colors.primary }}>View All</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 13, paddingTop: 10 }}>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: colors.phone_color, width: 40, height: 40, borderRadius: 12, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../assets/images/icons8-phone-48.png")} style={{ width: 27, height: 27 }} />
                    </View>
                    <Text style={{ textAlign: "center", paddingTop: 8 }}>Mobile</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: colors.wifi_blue, width: 40, height: 40, borderRadius: 12, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../assets/images/icons8-wifi-16.png")} style={{ width: 27, height: 27 }} />
                    </View>
                    <Text style={{ textAlign: "center", paddingTop: 8 }}>Internet</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: colors.wifi_blue, width: 40, height: 40, borderRadius: 12, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../assets/images/icons8-purchase-order-48.png")} style={{ width: 32, height: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", paddingTop: 8 }}>Bill</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: colors.electricity_color, width: 40, height: 40, borderRadius: 12, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../assets/images/icons8-electricity-24.png")} style={{ width: 27, height: 27 }} />
                    </View>
                    <Text style={{ textAlign: "center", paddingTop: 8 }}>Electricity</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 14, paddingTop: 15 }}>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: colors.electricity_color, width: 40, height: 40, borderRadius: 12, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../assets/images/icons8-film-48.png")} style={{ width: 27, height: 27 }} />
                    </View>
                    <Text style={{ textAlign: "center", paddingTop: 8 }}>Movie</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: colors.wifi_blue, width: 40, height: 40, borderRadius: 12, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../assets/images/icons8-water-48.png")} style={{ width: 29, height: 29 }} />
                    </View>
                    <Text style={{ textAlign: "center", paddingTop: 8 }}>Water Bill</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: colors.voucher_color, width: 40, height: 40, borderRadius: 12, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../assets/images/icons8-ticket-94.png")} style={{ width: 32, height: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", paddingTop: 8 }}>Voucher</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: colors.electricity_color, width: 40, height: 40, borderRadius: 12, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../assets/images/icons8-market-48.png")} style={{ width: 27, height: 27 }} />
                    </View>
                    <Text style={{ textAlign: "center", paddingTop: 8 }}>Market</Text>
                </View>
            </View>
        </View>
    )
}

const recipient = () => {
    return (
        <View style={{ paddingHorizontal: 18, }}>
            <View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 10 }}>
                    <Text style={{ fontSize: 23, fontWeight: "bold", color: "#232440" }}>Latest Recipient</Text>
                    <Text style={{ fontSize: 14, color: colors.primary }}>View All</Text>
                </View>
            </View>
            <View>
                <Text>You have no recipient, send money to anyone now.</Text>
            </View>
        </View>
    )
}

const rewardService = () => {
    return (
        <View style={{ paddingHorizontal: 18, paddingTop: 24 }}>
            <View style={{ width: "100%", height: 180, backgroundColor: "yellow", borderRadius: 8 }}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.blue_primary,
        height: 160,
        paddingHorizontal: 18,
        paddingTop: 14
    },
    profile: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    actions: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        position: "relative",
        top: -60
    },
    action: {
        alignItems: "center",
        justifyContent: "center"
    },
    service: {
        paddingHorizontal: 20
    }
})