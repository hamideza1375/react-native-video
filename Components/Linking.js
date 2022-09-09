
import { Linking as _linking } from 'react-native'

export const Linking = async(url) => {
    await _linking.openURL(url);
}

