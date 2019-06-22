import Api from "./api";

export const uploadImage = async({uri}: {uri: string}) => {
  try {
    const res = await Api.post('api/v1/uploadImage',  { file: uri } );
    if(res.error) {
      return {
        error: res.error
      }
    }
    return {
      data: res.data,
    }
  } catch (error) {
    console.log(error)
    return { error }
  }
}