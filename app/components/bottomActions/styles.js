import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        borderTopWidth: 1,
        borderColor: colors.baseBorderColor
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    text: {
        paddingLeft: 8,
        color: colors.baseColor,
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Arial'
    }
});
