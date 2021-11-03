import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
const fileUri = FileSystem.documentDirectory + "text.txt";


const writehello = async ({content}) => {
//const {status} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  //  if (status === "granted") {
        //let fileUri = FileSystem.documentDirectory + "text.txt";
        await FileSystem.writeAsStringAsync(fileUri,content, { encoding: FileSystem.EncodingType.UTF8 });
    //    console.log("heres",status)

      //  const asset = await MediaLibrary.createAssetAsync(fileUri)

 //       await MediaLibrary.createAlbumAsync("Download", asset, false)
        console.log("saved")
    //}
}

const readhello = async () => {
    
}

const fileService = {writehello}

export default fileService