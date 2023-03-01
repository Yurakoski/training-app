import { View, Image, Text, Alert, Button } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';

const ImageSelector = ({ onImage }) => {
    const [pickedUrl, setPickedUrl] = useState(null);
  
    const verifyPermissions = async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
  
      if (status !== "granted") {
        Alert.alert("Permiso denegado", "Active permisos", [{ text: "Ok" }]);
        return false;
      }
      return true;
    };
  
    const onHandleTakeImage = async () => {
      const isCameraPermission = await verifyPermissions();
      if (!isCameraPermission) return;
  
      const image = await ImagePicker.launchCameraAsync({
        aspect: [16, 9],
        quality: 0.7,
      });
  
      setPickedUrl(image.assets[0].uri);
      onImage(image.assets[0].uri);
    };
    return (
      <View style={styles.container}>
        <View style={styles.preview}>
          {!pickedUrl ? (
            <Text style={styles.textPic}>No hay imagen seleccionada</Text>
          ) : (
            <Image style={styles.image} source={{ uri: pickedUrl }} />
          )}
        </View>
        <Button title="Cambiar foto" onPress={onHandleTakeImage} />
      </View>
    );
  };
  
  export default ImageSelector;