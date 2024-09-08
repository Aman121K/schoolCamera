import React from "react";
import { SafeAreaView ,StyleSheet,Text} from 'react-native';
const Catalog=()=>{
    return(
        <SafeAreaView style={styles.mainSection}>
            <Text>Coming Soon</Text>
        </SafeAreaView>
    )
}
export default Catalog
const styles=StyleSheet.create({
    mainSection:{
        flex:1
    }
})