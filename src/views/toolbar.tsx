import {h, JSX, Fragment} from 'preact'
import {StyleSheet, css} from 'aphrodite'
import {Sizes, FontFamily, FontSize} from './style'
import {useTheme, withTheme} from './themes/theme'
import {useActiveProfileState} from '../store'

function ToolbarCenterContent(): JSX.Element {
  const activeProfileState = useActiveProfileState()
  if (activeProfileState) {
    return <Fragment>{activeProfileState.title}</Fragment>
  } else {
    return <Fragment>Time Line</Fragment>
  }
}

function ToolbarRightContent() {
  const style = getStyle(useTheme())
  return (
    <div className={css(style.toolbarRight)}>
      <span className={css(style.inlineStrong)}>+</span>:zoom in{' '}
      <span className={css(style.separator)}>|</span>
      <span className={css(style.inlineStrong)}>-</span>:zoom out{' '}
      <span className={css(style.separator)}>|</span>
      <span className={css(style.inlineStrong)}>0</span>:reset
    </div>
  )
}

export function Toolbar() {
  const style = getStyle(useTheme())
  return (
    <div className={css(style.toolbar)}>
      <ToolbarCenterContent />
      <ToolbarRightContent />
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
    toolbarRight: {
      height: Sizes.TOOLBAR_HEIGHT,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      right: 0,
      marginRight: 8,
      textAlign: 'right',
    },
    inlineStrong: {
      background: '#3c3c3c',
      borderRadius: '3px',
      padding: '0px 4px',
      marginLeft: '4px',
    },
    separator: {
      opacity: 0.5,
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
