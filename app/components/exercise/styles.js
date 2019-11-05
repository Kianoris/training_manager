import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
    exerciseContainer: {
        paddingBottom: 24
    },
    exerciseHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 48,
        padding: 8,
        backgroundColor: colors.secondaryColor,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.22,
        elevation: 3
    },
    exerciseBody: {
        marginTop: 4,
        backgroundColor: colors.secondaryColor,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.22,
        elevation: 3
    },
    name: {
        flexWrap: 'wrap',
        color: colors.baseColor
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
    addSetButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    addSetButtonText: {
        paddingLeft: 8,
        color: colors.baseColor,
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Arial'
    },
    deleteSetButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 8
    },
    deleteSetButtonText: {
        paddingLeft: 8,
        color: colors.dangerColor,
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Arial'
    }
});
