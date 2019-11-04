import { NavigationActions, SwitchActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function switchTo(routeName) {
    _navigator.dispatch(
        SwitchActions.jumpTo({
            routeName
        })
    );
}

export default {
    navigate,
    switchTo,
    setTopLevelNavigator,
};
