import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
    card: {
        width: 160,
        height: 160,
        marginBottom: 8,
        backgroundColor: colors.lightGrayBgColor,
        borderRadius: 2,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.22,
        elevation: 3
    },
    imageBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 160,
        padding: 16
    },
    imageStyle: {
        borderRadius: 2,
        resizeMode: 'cover'
    },
    deleteButton: {
        position: 'absolute',
        top: -12,
        left: -12,
        zIndex: 1,
        width: 24,
        height: 24,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.dangerColor,
        borderRadius: 100
    },
    name: {
        color: colors.secondaryColor,
        fontSize: 24,
        textAlign: 'center'
    },
    nameInput: {
        color: colors.secondaryColor,
        fontSize: 24
    }
});
