import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../constants/colors';

type Props = {
  title: string;
};

export default function Header({
  title,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/icon1.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>
          {title}
        </Text>
      </View>

      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 25,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },

  logo: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
    marginRight: 10,
  },

  title: {
    fontSize: 42,
    fontWeight: '700',
    color: colors.primary,
  },

  line: {
    marginTop: 10,
    height: 4,
    width: '100%',
    backgroundColor: colors.primaryLight,
    borderRadius: 20,
    opacity: 0.4,
  },
});