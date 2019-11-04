import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    input: {
        width: '80%',
        height: 48,
        marginBottom: 8,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: colors.baseBorderColor
    },
    signInButton: {
        paddingVertical: 10,
        paddingHorizontal: 36,
        backgroundColor: colors.baseColor,
        borderRadius: 2
    },
    signInButtonText: {
        color: colors.secondaryColor,
        fontSize: 24
    }
});
