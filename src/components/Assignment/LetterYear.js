import React from 'react';
// import Modalshow from './Modalshow';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import Simplenav from './layout/Simplenav'
// import { Table, Row, Rows } from 'react-native-table-component';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Linking,
} from 'react-native';

export class LetterYear extends React.Component {
    constructor() {
        super();
        this.state = {
            tableHead: ['Em aberto'],
            tableData: [
                ['Desricao', 'Competencia', 'N Doc', 'Vencimento'],

            ],
            tablehead1: ['Liquidado'],
            tabledata1: [['Descricao', 'Competencia']],
            tabledata2: [['percila de Anua dade 07/2020 -202000006-Ensino fundmental', '2020/07']],

        }
    }

    render() {
        return (
            <View>
                <ScrollView >
                    <View>
                        {/* <Simplenav /> */}

                        <View style={styles.main}>
                            <Text style={styles.maintext}>ANO LETIEVI 2020</Text>
                            <View style={styles.div}>
                                <View style={{ flexDirection: "row" }}>

                                    <Image style={styles.imagsetboy} source={require('../../../assets/images/boy.png')} />
                                    <View>

                                        <Text style={styles.textsboydiv}>ISSAC DA ROCHA</Text>
                                        <Text style={styles.textsmallboy}>Codigo:2020000006</Text>
                                        <Text style={styles.textsmallboyB}>Ensino Fundamental 1 Ano</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={styles.div1}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View>
                                            <Text style={styles.textinner}>BoleTime</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.div2}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View>
                                            <Text style={styles.textinner}>Sala de aula virtual </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.div3}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View>
                                            <Text style={styles.textinner}>Performance</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.div4}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View>
                                            <Text style={styles.textinner}>Mensalidades</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.div5}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={ {margin:10}}>
                                            {/* <Image style={{width:40, height:40}} source={require('../../../assets/images/goal.png')} /> */}
                                        </View>
                                        <View>

                                            <Text style={styles.icontext}> 1a Etapa {">"} </Text>

                                        </View>
                                    </View>
                                </View>
                                <View style={styles.div6}>
                                    <View style={{ flexDirection: "row" }}>
                                        {/* <Image style={styles.imagseticon1} source={require('../../../assets/images/goal.png')} /> */}
                                        <View>

                                            <Text style={styles.icontext}> 2a Etapa {">"} </Text>

                                        </View>
                                    </View>
                                </View>
                                <View style={styles.div7}>
                                    <View style={{ flexDirection: "row" }}>
                                        {/* <Image style={styles.imagseticon1} source={require('../../../assets/images/light.png')} /> */}
                                        <View>

                                            <Text style={styles.icontext}> 3a Etapa {">"} </Text>

                                        </View>
                                    </View>
                                </View>


                                <Text onPress={() => Linking.openURL('http://google.com')} style={{ marginTop: 10, textDecorationLine: 'underline' }}>Regulamento da bibliotica</Text>
                                <Text onPress={() => Linking.openURL('http://google.com')} style={{ marginTop: 5, textDecorationLine: 'underline' }}>Cardacio Almoco</Text>
                                <Text onPress={() => Linking.openURL('http://google.com')} style={{ marginTop: 5, textDecorationLine: 'underline' }}>Cardapia Lunche</Text>
                                <Text onPress={() => Linking.openURL('http://google.com')} style={{ marginTop: 5, textDecorationLine: 'underline' }}>Gabarito simulate</Text>


                            </View>


                        </View>


                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: 1,
        paddingTop: 10,
        padding: 25,
        color: "black",
    },
    maintext: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,

    },
    div: {
        flex: 1,
        marginTop: 20,
        fontSize: 10,
        color: "black",
        backgroundColor: '#EFEFEF',
        textAlign: 'center',
        padding: 10,

        borderRadius: 5,

        borderColor: 'white',

    },
    div1: {
        flex: 1,
        marginTop: 20,
        fontSize: 10,
        color: "black",
        backgroundColor: '#F79859',
        textAlign: 'center',
        padding: 10,

        borderRadius: 5,

        borderColor: 'white',

    },
    textinner: {
        color: "white",
        fontSize: 11,
    },
    div2: {
        flex: 1,
        marginTop: 10,
        fontSize: 10,
        color: "black",
        backgroundColor: '#F4907E',
        textAlign: 'center',
        padding: 10,

        borderRadius: 5,

        borderColor: 'white',

    },
    div3: {
        flex: 1,
        marginTop: 10,
        fontSize: 10,
        color: "black",
        backgroundColor: '#8CE78C',
        textAlign: 'center',
        padding: 10,

        borderRadius: 5,

        borderColor: 'white',

    },
    div4: {
        flex: 1,
        marginTop: 10,
        fontSize: 10,
        color: "black",
        backgroundColor: '#6699FF',
        textAlign: 'center',
        padding: 10,

        borderRadius: 5,

        borderColor: 'white',

    },
    div5: {
        flex: 1,
        marginTop: 20,
        fontSize: 10,
        color: "white",
        backgroundColor: '#4452DF',
        textAlign: 'center',
        padding: 5,
        paddingBottom: 0,
        borderRadius: 5,
        borderColor: 'white',

    },
    imagseticon1: {
        backgroundColor: '#4452DF',
        top: -22,
        left: 10,
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    icontext: {
        color: "white",
        marginLeft: 13,
        fontSize: 12,
        fontWeight: "bold",
    },
    div6: {
        flex: 1,
        marginTop: -2,
        fontSize: 10,
        color: "white",
        backgroundColor: '#F4907E',

        textAlign: 'center',
        padding: 5,
        paddingBottom: 0,
        borderRadius: 5,
        borderColor: 'white',

    },
    div7: {
        flex: 1,
        marginTop: -2,
        fontSize: 10,
        color: "white",
        backgroundColor: '#F7804A',
        textAlign: 'center',
        padding: 5,
        paddingBottom: 0,
        borderRadius: 5,
        borderColor: 'white',

    },

    texthead: {
        color: "white",
        fontSize: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 6,
    },
    container: { flex: 1, marginTop: 20, backgroundColor: '#fff', borderColor: '#C0C0C0', borderStyle: 'dotted', borderWidth: 1, },
    head: { paddingLeft: 5, height: 40, backgroundColor: "#C0C0C0", fontWeight: "bold", textAlign: "center" },
    texttable: { flex: 1, margin: 6, color: "black", fontSize: 12, fontWeight: "bold", borderColor: '#C0C0C0', borderWidth: 1, },
    textS: { margin: 6, color: "black", fontSize: 12, fontWeight: "bold", borderColor: '#C0C0C0', borderWidth: 1, textAlign: "center" },
    texttabledata: { padding: 10, color: "black", fontSize: 10, fontWeight: "bold", textAlign: "left", borderBottomColor: '#C0C0C0', borderBottomWidth: 1, },
    textdataS: { paddingLeft: 10, color: "black", fontSize: 10, fontWeight: "bold", borderBottomColor: '#C0C0C0', borderBottomWidth: 1, },
    textdataSMALL: { flex: 1, paddingLeft: 10, color: "black", fontSize: 7.5, width: 160, borderBottomColor: '#C0C0C0', borderBottomWidth: 1, },
    imagsetboy: {
        borderRadius: 10,
        width: 70,
        height: 80,
    },
    textsboydiv: {
        paddingLeft: 5,
        paddingTop: 6,
        fontSize: 12,

        // textAlign: "right",
        marginLeft: 10,
    },
    textsmallboy: {
        paddingLeft: 5,
        padding: 0,
        marginTop: 3,
        fontSize: 8,

        marginLeft: 10,
    },
    textsmallboyB: {

        color: "white",
        backgroundColor: 'black',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 15,
        borderRadius: 50,
        fontSize: 8,
        marginTop: 5,
        fontWeight: "bold",
    },
});
export default LetterYear
