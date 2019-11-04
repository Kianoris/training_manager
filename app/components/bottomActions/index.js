import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles';

const BottomActions = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={props.addItem}>
                {/*<Ionicons name="md-add" color={colors.baseTextColor} size={24}/>*/}
                <Text style={styles.text}>Add</Text>
            </TouchableOpacity>
            {
                props.isEdit
                    ? (
                        <TouchableOpacity style={styles.button} onPress={() => props.editItems(false)}>
                            {/*<MaterialIcons name="cancel" color={colors.baseTextColor} size={24}/>*/}
                            <Text style={styles.text}>Cancel</Text>
                        </TouchableOpacity>
                    )
                    : (
                        <TouchableOpacity style={styles.button} onPress={() => props.editItems(true)}>
                            {/*<MaterialIcons name="edit" color={colors.baseTextColor} size={24}/>*/}
                            <Text style={styles.text}>Edit</Text>
                        </TouchableOpacity>
                    )
            }
        </View>
    );
};

export default BottomActions;
