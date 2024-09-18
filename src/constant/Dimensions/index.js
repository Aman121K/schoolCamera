


import { Dimensions, PixelRatio, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Reference dimensions for scaling (based on iPhone 12/13/14/15)
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

// Determine the scale based on the reference dimensions
const ScaleWidth = SCREEN_WIDTH / BASE_WIDTH;
const ScaleHeight = SCREEN_HEIGHT / BASE_HEIGHT;
const Scale = Math.min(ScaleWidth, ScaleHeight);

export const windowHeight = SCREEN_HEIGHT;
export const windowWidth = SCREEN_WIDTH;

// Use react-native-responsive-screen for width and height scaling
export const scaleHeight = (height) => hp((height / BASE_HEIGHT) * 100);
export const scaleWidth = (width) => wp((width / BASE_WIDTH) * 100);

// Improved font scaling
export function normalizeFont(size) {
    const newSize = size * Scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)+1); // Adjusting for Android's density variations
    }
}
