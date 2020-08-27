import React, { useEffect } from 'react';
import {
  StyleSheet, TouchableOpacity, Text, Platform
} from 'react-native';
import color from 'constants/color';
import { useLayout, useBool } from 'hooks';

function Button({
  title, onPress, isLoading, disabled, type, layout, hasConfirm, confirmTitle = 'Are you sure?'
}) {
  const [confirming, toConfirm, notConfirm] = useBool(false);

  useEffect(() => {
    if (confirming) {
      const timer = setTimeout(notConfirm, 3000);
      return () => clearTimeout(timer);
    }
  }, [confirming]);

  const { isDesktop } = useLayout();
  const isDisabled = isLoading || disabled;

  const onPressWithConfirm = confirming ? (e) => { onPress(e); notConfirm(); } : toConfirm;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[layout],
        isDesktop && styles[`${layout}_desktop`],
        typeStyles[type],
        isDisabled && styles.disabled
      ]}
      onPress={hasConfirm ? onPressWithConfirm : onPress}
      disabled={isDisabled}
    >
      <Text style={[textStyles.default, textStyles[type]]}>
        {confirming ? confirmTitle : title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.light.primary,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
    // maxWidth: layout.isDesktop ? 200 : 'none'
    // minWidth: 300
  },
  disabled: {
    backgroundColor: color.light.disabled,
    ...Platform.OS === 'web' && {
      cursor: 'NOT-ALLOWED'
    }
  },
  page: {
    margin: 16,
  },
  page_desktop: {
    width: 300
  }
});

const typeStyles = StyleSheet.create({
  secondary: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.light.primary
  }
});

const textStyles = StyleSheet.create({
  default: {
    color: color.light.primaryReverse,
    textAlign: 'center'
  },
  secondary: {
    color: color.light.primary,
  }
});

export default Button;
