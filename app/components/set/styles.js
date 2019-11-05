import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        borderBottomWidth: 1,
        borderColor: colors.baseBorderColor
    },
    column: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    sequence: {
        fontSize: 16,
        color: colors.grayTextColor
    },
    value: {
        color: colors.baseColor,
        fontSize: 24
    },
    inputValue: {
        fontSize: 24
    },
    description: {
        fontSize: 16,
        color: colors.grayTextColor
    }
});
