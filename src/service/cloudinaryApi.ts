import Api from "./api";

export const uploadImage = async({uri}: {uri: string}) => {
  try {
    const data = await Api.post('api/v1/uploadImage',  { file: uri } );
    if(data.error) {
      return {
        error: data.error
      }
    }
    return {
      data
    }
  } catch (error) {
    console.log(error)
    return { error }
  }
}