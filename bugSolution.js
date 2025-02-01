//Improved error handling for Expo ImagePicker
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      // Handle the image result
      console.log('Image selected:', result);
    } else {
      console.log('Image selection cancelled');
    }
  } catch (error) {
    console.error('Error picking image:', error);
    // Implement a user-friendly error message or fallback mechanism
    alert('Image selection failed. Please try again.');
  }
}

// Example usage:
pickImage();