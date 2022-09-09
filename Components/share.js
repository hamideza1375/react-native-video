import { Share } from "react-native"


export const share = async (url, message) => {
    await Share.share({ url, message })
}

// await Share.share({url:'http://192.168.42.34/upload/_dv2jBs-b_847B5F59-1878-42ED-ADC0-0858D4361B15.jpg', message: 'http://192.168.42.34/upload/_dv2jBs-b_847B5F59-1878-42ED-ADC0-0858D4361B15.jpg'})
