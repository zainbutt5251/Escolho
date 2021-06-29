import * as React from 'react';

import {
    StyleSheet,
    ScrollView,
    Button,
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Round from '../report/RoundCheck'
const Form = () => {
    return (
        <ScrollView>
            <View style={styles.mtop} >
                <View style={styles.mfifty}>
                    <Text style={styles.texts}>Pessoac autorizadas a retirer o(a) estudente</Text>
                    <Text style={styles.text2}>Educação  infantil</Text>
                    <View style={{ marginTop: 25 }}>
                        <TextInput
                            placeholder="Nome"
                            style={styles.inputss}
                            multiline={true}></TextInput>
                        <TextInput
                            placeholder="RG"
                            style={styles.inputtexts} r
                            multiline={true}></TextInput>
                        <TextInput
                            placeholder="Grau de Parentesco"
                            style={styles.inputtexts}
                            multiline={true}></TextInput>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <TouchableOpacity>
                                <Text style={styles.pb}>
                                    +
                                 </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ textAlign: "center", fontSize: 17, color: "#060367", fontWeight: "bold" }}>Reaponaável pelo tranaporte eacolor (perua/Van)</Text>
                    <View style={{ marginTop: 25 }}>
                        <TextInput
                            placeholder="Nome"
                            style={styles.inputss}
                            multiline={true}></TextInput>
                        <TextInput
                            placeholder="RG"
                            style={styles.inputtexts}
                            multiline={true}></TextInput>
                        <TextInput
                            placeholder="Grau de Parentesco"
                            style={styles.inputtexts}
                            multiline={true}></TextInput>
                        <View style={styles.textdetail}>
                            <View>
                                <Text style={styles.detail}>
                                    Confirmaçāo dos pais ou responsávies</Text>

                                <Text style={styles.detail}>
                                    Solicitamos que quaisquer alterações e estes dadods sejam comuinacadas  ao Colégio</Text>

                            </View>
                            <TouchableOpacity style={{ marginTop: 10, }}>
                                <View style={styles.checkbtn}>
                                    <Text style={styles.conftext}> Confirmaçāo</Text>
                                    {/* <Text style={{ padding: 5, paddingTop: 0, paddingBottom: 0, borderRadius: 20, backgroundColor: "white", color: "black" }}>y</Text> */}
                                    <Round text={"Y"} innerSize={20} Outersize={20} checkedColor={'#FFFFFF'} textColor={"black"} />
                                </View>


                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 10, }}>
                                <View style={styles.bottombutton}>
                                    <Text style={styles.colorWhite}> Salvar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View >
        </ScrollView>
    );
};


export default Form;

const styles = StyleSheet.create({

    main: { padding: 10 },
    detail: { textAlign: "center", fontSize: 9, color: "#060367", fontWeight: "bold" },
    imagset: {
        borderRadius: 40,
        width: 60,
        height: 60,
        margin: 5,
    },
    pb: {
        borderWidth: 1,
        borderRadius: 5,

        paddingLeft: 50,
        paddingRight: 50,
        color: "white",
        borderColor: 'black',
        backgroundColor: '#060367',
        fontSize: 22,
    },
    inputss: { borderWidth: 1, borderBottomColor: "#707070", borderColor: "#707070", paddingLeft: 10, fontSize: 15 },
    textdetail: { alignItems: 'center', marginTop: 10 },
    text2: { textAlign: "center", fontSize: 17, color: "#C2974E", fontWeight: "bold" },
    mtop: { margin: 10 },
    mfifty: { marginTop: 50 },
    inputtexts: { borderWidth: 1, borderColor: "#707070", paddingLeft: 10, fontSize: 15, marginTop: 5 },
    checkbtn: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 7,
        paddingLeft: 12,
        paddingRight: 12,
        color: "white",
        borderColor: 'black',
        backgroundColor: '#060367',
        flexDirection: "row"
    },
    colorWhite: { color: "white" },
    bottombutton: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 7,
        paddingLeft: 12,
        paddingRight: 12,
        color: "white",
        borderColor: 'black',
        backgroundColor: '#060367',
        flexDirection: "row"
    },
    texts: { textAlign: "center", fontSize: 17, color: "#060367", fontWeight: "bold" },
    conftext: { color: "white", paddingRight: 5 },
});