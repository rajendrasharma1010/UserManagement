package com.email.message.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
 

public class MessageDigestUtil {
 
    /**
     * @param args
     */
    
    public String getdigestedMeessage(String message) {
        MessageDigest messageDigest;
        StringBuffer data = new StringBuffer();
        try {
            messageDigest = MessageDigest.getInstance("MD5");
            messageDigest.update(message.getBytes());
            byte[] messageDigestMD5 = messageDigest.digest();
            for (byte bytes : messageDigestMD5) {
            	data.append(String.format("%02x", bytes & 0xff));
            }
            System.out.println("data:" + data);
            System.out.println("digestedMD5(hex):" + data.toString());
        } catch (NoSuchAlgorithmException exception) {
            // TODO Auto-generated catch block
            exception.printStackTrace();
        }
        return data.toString();
    }
 
}
