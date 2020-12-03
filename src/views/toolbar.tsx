import {h, JSX, Fragment} from 'preact'
import {StyleSheet, css} from 'aphrodite'
import {Sizes, FontFamily, FontSize} from './style'
import { useTheme, withTheme} from './themes/theme'
import {useActiveProfileState} from "../store";

function ToolbarCenterContent(): JSX.Element {
    const activeProfileState = useActiveProfileState()
    if (activeProfileState) {
        return <Fragment>{activeProfileState.title}</Fragment>
    } else {
        return <Fragment>Time Line</Fragment>
    }
}

export function Toolbar() {

    const style = getStyle(useTheme())
    return (
        <div className={css(style.toolbar)}>
            <ToolbarCenterContent/>
        </div>
    )
}

const getStyle = withTheme(theme =>
    StyleSheet.create({
        toolbar: {
            height: Sizes.TOOLBAR_HEIGHT,
            flexShrink: 0,
            background: theme.altBgPrimaryColor,
            color: theme.altFgPrimaryColor,
            textAlign: 'center',
            fontFamily: FontFamily.MONOSPACE,
            fontSize: FontSize.TITLE,
            lineHeight: `${Sizes.TOOLBAR_TAB_HEIGHT}px`,
            userSelect: 'none',
        },
        toolbarCenter: {
            paddingTop: 1,
            height: Sizes.TOOLBAR_HEIGHT,
        },
        toolbarProfileIndex: {
            color: theme.altFgSecondaryColor,
        },
        toolbarTabColorSchemeToggle: {
            display: 'inline-block',
            textAlign: 'center',
            minWidth: '50px',
        },
        noLinkStyle: {
            textDecoration: 'none',
            color: 'inherit',
        },
    }),
)
