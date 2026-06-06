import { StyleSheet } from 'react-native';

import { colors }
from '../constants/colors';

export const globalStyles =
  StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:
        colors.background,
    },

    contentContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 20,
    },

    titleText: {
      fontSize: 36,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 40,
      color: colors.textDark,
    },

    headerContainer: {
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems: 'center',
      paddingTop: 10,
      paddingHorizontal: 0,
    },

    headerTitle: {
      fontSize: 30,
      fontWeight: '700',
      color: colors.primary,
    },

    input: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor:
        colors.muted,
      borderRadius: 20,
      padding: 16,
      marginBottom: 12,
      color: colors.textDark,
    },

    button: {
      backgroundColor:
        colors.primary,
      borderRadius: 20,
      paddingVertical: 18,
      alignItems: 'center',
      marginTop: 10,
    },

    secondaryButton: {
      backgroundColor:
        colors.secondary,
      borderRadius: 20,
      paddingVertical: 18,
      alignItems: 'center',
      marginTop: 15,
    },

    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '700',
    },

    errorText: {
      color: '#d32f2f',
      marginBottom: 10,
      marginLeft: 5,
      fontSize: 14,
    },
    wrapper: {
  marginBottom: 25,
},

    linkText: {
      color: colors.primary,
      textAlign: 'center',
      marginTop: 15,
      fontWeight: '600',
    },

    formContainer: {
      justifyContent: 'center',
    },
    leftSection: {
  flexDirection: 'row',
  alignItems: 'center',
  flex:1,
},

rightSection: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 16,
},

logo: {
  width: 42,
  height: 42,
  resizeMode: 'contain',
  marginRight: 6,
},

avatar: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor:
    colors.primary,
  justifyContent: 'center',
  alignItems: 'center',
},

avatarText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: '700',
},

line: {
  marginTop: 10,
  height: 4,
  width: '100%',
  backgroundColor:
    colors.primaryLight,
  borderRadius: 20,
  opacity: 0.4,
},modalOverlay: {
  flex: 1,
  backgroundColor:
    'rgba(0,0,0,0.4)',
  justifyContent: 'center',
  padding: 20,
},

modalContainer: {
  backgroundColor:
    colors.card,
  borderRadius: 25,
  padding: 25,
},

modalTitle: {
  fontSize: 24,
  fontWeight: '700',
  color: colors.textDark,
  marginBottom: 20,
  textAlign: 'center',
},

modalButtons: {
  flexDirection: 'row',
  justifyContent:
    'space-between',
  marginTop: 20,
},

modalButton: {
  flex: 1,
  backgroundColor:
    colors.primary,
  paddingVertical: 15,
  borderRadius: 15,
  alignItems: 'center',
},

modalCancelButton: {
  flex: 1,
  backgroundColor:
    colors.muted,
  paddingVertical: 15,
  borderRadius: 15,
  alignItems: 'center',
  marginLeft: 10,
},
label: {
  fontSize: 16,
  color: colors.textDark,
  fontWeight: '600',
  marginBottom: 10,
},

frequencyRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},

frequencyButton: {
  flex: 1,
  paddingVertical: 12,
  borderWidth: 1,
  borderColor: colors.muted,
  borderRadius: 15,
  alignItems: 'center',
  backgroundColor: '#fff',
  marginHorizontal: 4,
},

selectedFrequency: {
  backgroundColor:
    colors.primaryLight,
  borderColor:
    colors.primary,
},

frequencyText: {
  color: colors.textDark,
  fontWeight: '600',
},
  });