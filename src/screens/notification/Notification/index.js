// import React from "react";
// import { SafeAreaView } from 'react-native';
// const Notification=()=>{
//     return(
//         <SafeAreaView>
            
//         </SafeAreaView>
//     )
// }
// export default Notification
import React from "react";
import { SafeAreaView ,StyleSheet,Text} from 'react-native';
const Notification=()=>{
    return(
        <SafeAreaView style={styles.mainSection}>
            <Text>Coming Soon</Text>
        </SafeAreaView>
    )
}
export default Notification
const styles=StyleSheet.create({
    mainSection:{
        flex:1
    }
})