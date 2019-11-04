import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';
import layout from '../../constants/layout';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: layout.statusBarHeight
    },
    trainingsButton: {
        justifyContent: 'center',
        height: 150,
        paddingLeft: 20,
        backgroundColor: colors.baseColor,
        fontSize: 20
    },
    trainingsButtonText: {
        color: colors.secondaryColor,
        fontSize: 20,
        textTransform: 'uppercase'
    }
});
